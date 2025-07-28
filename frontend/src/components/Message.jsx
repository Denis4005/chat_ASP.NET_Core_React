export const Message = ({ messageInfo, userName }) => {
  return (
    <div
      className={`flex flex-col ${
        messageInfo.userName === "Admin"
          ? "m-auto w-fit items-center"
          : "w-fit items-start" | (messageInfo.userName === userName)
          ? "ml-auto w-fit items-end"
          : "w-fit items-start"
      }`}
    >
      <span className="text-sm text-slate-600 mb-1.5">
        {messageInfo.userName}
      </span>
      <div
        className={`p-2  rounded-lg shadow-md ${
          messageInfo.userName === userName
            ? "bg-green-100"
            : "bg-blue-300" | (messageInfo.userName === "Admin")
            ? "bg-gray-100"
            : "bg-blue-300"
        }`}
      >
        {messageInfo.message}
      </div>
    </div>
  );
};
