import React from "react";
import { Link } from "react-router-dom";

const RoomChatHeader = () => {
  return (
    <>
      <header className="chat-header">
        <h1>
          <i className="fas fa-smile"></i> App Chat
        </h1>
        <Link to="/">
          <button id="leave-btn" className="btn">
            Leave Room
          </button>
        </Link>
      </header>
    </>
  );
};

export default RoomChatHeader;
