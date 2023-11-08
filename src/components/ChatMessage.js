import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex gap-2 items-center shadow-md">
      <img
        src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
        alt="user-icon"
        className="h-8 rounded-full border-black"
      />
      <span className="font-semibold p-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
