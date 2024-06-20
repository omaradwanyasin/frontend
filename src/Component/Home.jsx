import React, { useState } from "react";
import Nav from "./Nav";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import "./Home.css";
import userimg from "../img/user.jpg";
import ai from "../img/ai.jpg";
function Home() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");

      // Simulating a bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "This is a bot response.", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleLike = (index) => {
    alert(`Liked message ${index + 1}`);
  };

  const handleDislike = (index) => {
    alert(`Disliked message ${index + 1}`);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Message copied to clipboard!");
  };

  const handleDelete = (index) => {
    setMessages(messages.filter((_, i) => i !== index));
  };

  return (
    <div className="home">
      <Nav />
      <div className="main-content">
        <div className="chatspace">
          {messages.map((message, index) => (
            <div key={index} className={`message-container ${message.sender}`}>
              {message.sender === "bot" && (
                <img
                  src={ai}
                  alt="Chatbot Avatar"
                  className="avatar chatbot-avatar"
                />
              )}
              <div className={`message ${message.sender}`}>
                <div className="message-text">{message.text}</div>
                {message.sender === "bot" && (
                  <div className="message-features">
                    <span
                      className="feature-icon"
                      onClick={() => handleLike(index)}
                    >
                      👍
                    </span>
                    <span
                      className="feature-icon"
                      onClick={() => handleDislike(index)}
                    >
                      👎
                    </span>
                    <span
                      className="feature-icon"
                      onClick={() => handleCopy(message.text)}
                    >
                      📋
                    </span>
                    <span
                      className="feature-icon"
                      onClick={() => handleDelete(index)}
                    >
                      🗑️
                    </span>
                  </div>
                )}
              </div>
              {message.sender === "user" && (
                <img
                  src={userimg}
                  alt="User Avatar"
                  className="avatar user-avatar"
                />
              )}
            </div>
          ))}
        </div>
        <div className="input-container">
          <Input
            className="input-field"
            placeholder="Type a message..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button className="send-button" onClick={handleSend}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
