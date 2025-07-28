import { HubConnectionBuilder } from "@microsoft/signalr";
import { WaitingRoom } from "./components/WaitingRoom";
import { useState } from "react";
import { Chat } from "./components/Chat";

function App() {
  const [connection, setConnection] = useState(null);
  const [chatRoom, setChatRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState();

  const joinChat = async (userName, chatRoom) => {
    var connection = new HubConnectionBuilder()
      .withUrl("/api/chat", { withCredentials: true })
      .withAutomaticReconnect()
      .build();

    connection.on("ReceiveMessage", (userName, message) => {
      setMessages((messages) => [...messages, { userName, message }]);
    });
    try {
      await connection.start();
      await connection.invoke("JoinChat", {
        userName,
        chatRoom,
      });
      setConnection(connection);
      setChatRoom(chatRoom);
    } catch (err) {
      console.log(err);
    }
  };
  const sendMessage = (message) => {
    connection.invoke("SendMessage", message);
  };
  const closeChat = async () => {
    await connection.stop();
    setMessages([]);
    setConnection(null);
  };
  return (
    <div>
      {connection ? (
        <Chat
          messages={messages}
          chatRoom={chatRoom}
          sendMessage={sendMessage}
          closeChat={closeChat}
          userName={userName}
        />
      ) : (
        <WaitingRoom
          joinChat={joinChat}
          userName={userName}
          setUserName={setUserName}
        />
      )}
    </div>
  );
}

export default App;
