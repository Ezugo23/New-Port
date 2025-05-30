import React, { useRef, useState } from 'react'
import {  ChevronUp } from "lucide-react"
import "./bot.css"

export const ChatForm = ({chatHistory, setChatHistory, generateResponse}) => {
  const inputRef = useRef()
const handleFormSubmit = (e) => {
  e.preventDefault();
  const userMessage = inputRef.current.value.trim();
  if (!userMessage) return;

  inputRef.current.value = "";

  setChatHistory(prev => [...prev, { role: "user", text: userMessage }]);

  generateResponse(userMessage); // pass only the user message
};
  
  
  return (
     <form action="" className="chat-form" onSubmit={handleFormSubmit}>
        <input ref={inputRef} type="text" placeholder="Message..." className="message-input" required/>
        <button>
    <ChevronUp className="bg-card text-white rounded-full p-1 w-8 h-8" />
    </button>
    </form>
  )
}