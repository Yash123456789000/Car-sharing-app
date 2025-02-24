"use client";
import React, { useState } from "react";
import ChatForm from "../../components/ChatForm";
import ChatMessage from "../../components/ChatMessage";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "Adam", message: "Hi.. I've reached my spot!! where are you?" },
  ]);
  const [username, setUsername] = useState("You");

  const handleSendMessage = (message) => {
    setMessages([...messages, { sender: username, message }]);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-6 bg-white shadow-lg rounded-xl p-6">
        
        {/* Sidebar (Only visible on larger screens) */}
        <aside className="hidden lg:block w-1/4 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Active Users</h2>
          <div className="flex items-center gap-3 mb-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">Adam</span>
          </div>
          <div className="flex items-center gap-3">
            <Avatar>
            <AvatarImage src="/avatar.png" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            
            <span className="text-sm font-medium">You</span>
          </div>
        </aside>

        {/* Chat Section */}
        <div className="w-full lg:w-3/4">
          {/* Chat Header */}
          <div className="flex items-center gap-3 mb-4 text-xl font-bold">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>Adam</span>
          </div>

          {/* Chat Messages */}
          <div className="h-[500px] overflow-y-auto p-4 mb-4 bg-gray-200 border-2 rounded-lg">
            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                sender={msg.sender}
                message={msg.message}
                isOwnMessage={msg.sender === username}
              />
            ))}
          </div>

          {/* Chat Input Form */}
          <ChatForm onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
