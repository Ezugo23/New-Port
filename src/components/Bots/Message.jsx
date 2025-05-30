import React from 'react'
import "./bot.css"
import { ChatIcon } from './chatIcon'

export const ChatMessage = ({chat}) => {
  if (chat.role === "model") {
    return (
      <div className="message bot-message flex">
        <ChatIcon />
        <p className="message-text text-black">{chat.text}</p>
      </div>
    );
  } else if (chat.role === "user") {
    return (
      <div className="message user-message">
        <p className="message-text text-white">{chat.text}</p>
      </div>
    );
  }
  return null;
};