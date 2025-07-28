import { Heading, Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import chat from "../img/chat.png";

export const WaitingRoom = ({ joinChat, userName, setUserName }) => {
  const [chatRoom, setChatRoom] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    joinChat(userName, chatRoom);
  };
  return (
    <div className="my-10 mx-[33%] bg-white rounded-[30px] flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          src={chat}
          alt="Your Company"
          className="mx-auto w-[90px] h-[90px]"
        />
        <h2 className="mt-[0.5em] text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Войдите в чат
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label
              for="email"
              className="block text-x/6 font-medium text-gray-900"
            >
              Имя пользователя
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setUserName(e.target.value)}
                name="userName"
                id="email"
                placeholder="Введите ваше имя"
                required
                autocomplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 border-[2px] border-solid border-gray"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block text-x/6 font-medium text-gray-900"
              >
                Название чата
              </label>
              <div className="text-sm"></div>
            </div>
            <div className="mt-2">
              <input
                onChange={(e) => setChatRoom(e.target.value)}
                name="chatName"
                placeholder="Введите название чата"
                id="password"
                required
                autocomplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 border-[2px] border-solid border-gray"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
