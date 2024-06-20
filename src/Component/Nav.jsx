import React from "react";
import "./Nav.css";
import img from "../img/ai.jpg";

const mockHistory = [
  { id: 1, title: "ask about hackathon", timestamp: "2024-06-19 14:30" },
  { id: 2, title: ".net API question", timestamp: "2024-06-18 09:15" },
  {
    id: 3,
    title: "Discussion about Project senior",
    timestamp: "2024-06-17 16:45",
  },
];

function Nav() {
  return (
    <div className="nav">
      <div className="nav-top">
        <span className="chatbot-name">WaspNest Bot</span>
      </div>
      <div className="nav-history">
        <h3>Chat History</h3>
        <ul>
          {mockHistory.map((chat) => (
            <li key={chat.id}>
              <div className="chat-info">
                <div className="chat-title">{chat.title}</div>
                <div className="chat-timestamp">{chat.timestamp}</div>
              </div>
              <div className="chat-options">
                <button className="view-button">View</button>
                <button className="delete-button">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-settings">
        <h3>Settings</h3>
        <ul>
          <li>Change Theme</li>
          <li>Notification Settings</li>
          <li>Privacy & Security</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
