import { Button, CloseButton, Heading, Input } from "@chakra-ui/react";
import { Message } from "./Message";
import { useEffect, useRef, useState } from "react";

export const Chat = ({
  messages,
  chatRoom,
  closeChat,
  sendMessage,
  userName,
}) => {
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef();

  useEffect(() => {
    messagesEndRef.current.scrollIntoView();
  }, [messages]);

  const onSendMessage = () => {
    if (message.length !== 0) {
      sendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (message.length !== 0) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage(message);
        setMessage("");
      }
    }
  };

  return (
    <div className="w-1/2 my-5 bg-white p-8 rounded shadow-lg mx-auto h-[90%]">
      <div className="relative flex items-center my-5">
        <Heading className="absolute left-1/2 transform -translate-x-1/2 text-2xl text-gray-700">
          {chatRoom}
        </Heading>
        <CloseButton className="ml-auto" onClick={closeChat} />
      </div>

      <div className="flex flex-col overflow-auto scroll-smooth h-[80%] gap-3 pb-3">
        {messages.map((messageInfo, index) => (
          <Message messageInfo={messageInfo} key={index} userName={userName} />
        ))}
        <span ref={messagesEndRef} />
      </div>
      <div className="flex gap-3">
        <input
          type="text"
          class="border-[2px] border-solid border-gray-300 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500 sm:text-sm/6"
          value={message}
          placeholder="Введите сообщение..."
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <Button
          className={`text-white px-3 py-3 ${
            message ? "bg-indigo-600" : "bg-gray-500"
          }`}
          onClick={onSendMessage}
        >
          Отправить
        </Button>
      </div>
    </div>
  );
};
