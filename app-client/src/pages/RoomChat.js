import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import queryString from "query-string";

import RoomChatFooter from "../components/RoomChatFooter";
import RoomChatHeader from "../components/RoomChatHeader";
import Chat from "../components/Chat";

let END_POINT = "localhost:3005";

const RoomChat = ({ location }) => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [messageList, setMessageList] = useState([]);

  const socketIO = useRef();

  useEffect(() => {
    const { username, room } = queryString.parse(location.search);
    setRoom(room);
    setUsername(username);

    socketIO.current = io(END_POINT);

    socketIO.current.emit("initConnect", {
      username,
      room,
    });
  }, [location]);

  useEffect(() => {
    socketIO.current.on("hello", (payload) => {
      setMessageList([...messageList, payload]);
    });
  });

  return (
    <>
      <div className="chat-container">
        <RoomChatHeader />
        <main className="chat-main">
          <div className="chat-sidebar">
            <h3>
              <i className="fas fa-comments"></i> Room Name:
            </h3>
            <h2 id="room-name"> {room} </h2>
            <h3>
              <i className="fas fa-users"></i> Users
            </h3>
            <ul id="users"></ul>
          </div>
          <div className="chat-messages">
            {messageList.map((item, key) => (
              <Chat key={key} data={item} />
            ))}
          </div>
        </main>
        <RoomChatFooter socketIO={socketIO} username={username} />
      </div>
    </>
  );
};

export default RoomChat;
