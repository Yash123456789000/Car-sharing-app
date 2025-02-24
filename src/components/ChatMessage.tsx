"use client";
import React from "react";

const ChatMessage = ({ sender, message, isOwnMessage }) => {
  const isSystemMessage = sender === "System";

  return (
    <div
      className={`flex ${
        isSystemMessage
          ? "justify-center"
          : isOwnMessage
          ? "justify-end"
          : "justify-start"
      } mb-3`}
    >
      <div
        className={`max-w-xs px-4 py-2 rounded-xl shadow-md ${
          isSystemMessage
            ? "bg-gray-800 text-white text-xs text-center"
            : isOwnMessage
            ? "bg-blue-500 text-white"
            : "bg-gray-100 text-black"
        }`}
      >
        {!isSystemMessage && <p className="text-sm font-bold">{sender}</p>}
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
