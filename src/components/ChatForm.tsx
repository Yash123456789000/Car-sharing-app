"use client";
import React, { useState } from "react";

const ChatForm = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 px-4 py-2 border-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Type your message..."
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
      >
        Send
      </button>
    </form>
  );
};

export default ChatForm;
