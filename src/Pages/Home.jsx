import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { NavBar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { About } from "../components/About"
import { Skills } from "../components/Skills"
import { ProjectPage } from "../components/ProjectPage"
import { ContactSec } from "../components/ContactSec"
import { ChatIcon } from "../components/Bots/chatIcon"
import { Footer } from "../components/Footer"
import { ChatForm } from "../components/Bots/ChatForm"
import {ChatMessage} from "../components/Bots/Message"
import { ChevronDown, MessageCircleIcon, X } from "lucide-react"
import "../components/Bots/bot.css"
import { useEffect, useRef, useState } from "react"

export const Home = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isVoiceInput, setIsVoiceInput] = useState(false);
  const chatBodyRef = useRef();

  const [userId, setUserId] = useState('');

useEffect(() => {
  const storedId = localStorage.getItem('chat_user_id');
  if (storedId) {
    setUserId(storedId);
  } else {
    const newId = crypto.randomUUID();
    localStorage.setItem('chat_user_id', newId);
    setUserId(newId);
  }
}, []);

const generateResponse = async (userMessage, voiceInput = false) => {
  setChatHistory(prev => [...prev, { role: "model", text: "...Thinking" }]);

  try {
    const response = await fetch(
      `https://ai-chatbot-10.onrender.com/Chatbot?message=${encodeURIComponent(userMessage)}&userId=${userId}`
    );
    const data = await response.json();

    const finalResponse = data.message || "No reply received.";

    setChatHistory(prev => [
      ...prev.slice(0, -1),
      { role: "model", text: finalResponse }
    ]);

    // 🔊 Use SpeechSynthesis to read the bot's response aloud
       if (voiceInput) {
      const utterance = new SpeechSynthesisUtterance(finalResponse);
      utterance.lang = "en-US";
      window.speechSynthesis.speak(utterance);
    }
  } catch (e) {
    console.error(e);
    setChatHistory(prev => [
      ...prev.slice(0, -1),
      { role: "model", text: "Sorry, there was an error." }
    ]);
  }
};
  useEffect(() => {
    chatBodyRef.current?.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);

  return (
    <>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle />
        <StarBackground />
        <NavBar />

        <main>
          <HeroSection />
          <About />
          <Skills />
          <ProjectPage />
          <ContactSec />
        </main>

        {/* Chatbot Toggle and Popup */}
        <div className="chatbot-wrapper">
          {/* Chatbot Toggle Button */}
          <button
            id="chatbot-toggle"
            className="bg-card"
            onClick={() => setIsChatOpen(!isChatOpen)}
            aria-label="Toggle chatbot"
          >
            {isChatOpen ? <X /> : <MessageCircleIcon />}
          </button>

          {/* Chatbot Popup */}
          {isChatOpen && (
            <div className="chatbot-popup">
              <div className="chat-header bg-card">
                <div className="header-info">
                  <ChatIcon />
                  <p className="logo-text">APPA</p>
                </div>
                <button onClick={() => setIsChatOpen(false)}>
                  <ChevronDown className="text-center" />
                </button>
              </div>

              <div ref={chatBodyRef} className="chat-body">
                <div className="message bot-message flex">
                  <ChatIcon />
                  <p className="message-text text-black">HI I'M APPA👋</p>
                </div>
                <div className="message bot-message flex">
                  <ChatIcon />
                  <p className="message-text text-black">
                    What would you like to know about Phantom?
                  </p>
                </div>

                {chatHistory.map((chat, index) => (
                  <ChatMessage
                    key={index}
                    chat={chat}
                    className="message-text text-black flex"
                  />
                ))}
              </div>

              <div className="chat-footer">
                <ChatForm
                  chatHistory={chatHistory}
                  setChatHistory={setChatHistory}
                  generateResponse={generateResponse}
                  setIsVoiceInput={setIsVoiceInput}
                />
              </div>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
};