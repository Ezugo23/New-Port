import React, { useRef, useState } from 'react';
import { ChevronUp, Mic, MicOff } from "lucide-react";
import "./bot.css";

export const ChatForm = ({ chatHistory, setChatHistory, generateResponse, setIsVoiceInput }) => {
  const inputRef = useRef();
  const [isListening, setIsListening] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    inputRef.current.value = "";

    setChatHistory(prev => [...prev, { role: "user", text: userMessage }]);

    generateResponse(userMessage, isListening);

      setIsVoiceInput(false);
  };

  // Voice input logic
  const handleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      inputRef.current.value = transcript;

        setIsVoiceInput(true);

      // Optionally auto-submit
      inputRef.current.form.requestSubmit();
      inputRef.current.blur();
    };

    recognition.start();
  };

  return (
  <form
  className="chat-form flex items-center gap-2 p-2"
  onSubmit={handleFormSubmit}
  style={{ maxWidth: "100%", width: "100%" }}
>
  <button
    type="button"
    onClick={handleVoiceInput}
    aria-label="Speak"
    className="p-2 flex-shrink-0"
    style={{ minWidth: "40px", minHeight: "40px" }}
  >
    {isListening ? (
      <MicOff className="w-8 h-8 text-white bg-red-500 rounded-full animate-pulse" />
    ) : (
      <Mic className="w-8 h-8 text-white bg-card rounded-full" />
    )}
  </button>

  <input
    ref={inputRef}
    type="text"
    placeholder="Message..."
    className="flex-grow rounded-md text-black px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
    required
    style={{ minWidth: 0 }}
  />

  <button
    type="submit"
    className="p-2 flex-shrink-0"
    style={{ minWidth: "40px", minHeight: "40px" }}
  >
    <ChevronUp className="w-8 h-8 text-white bg-card rounded-full" />
  </button>
</form>
  );
};