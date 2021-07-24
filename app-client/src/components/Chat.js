import React from 'react'

const Chat = (data) => {
  const {username,content, time} = data.data;
  return (
    <div className="message">
      <p className="meta">
        {username} <span>{time}</span>
      </p>
      <div>
        <p className="text">{content}</p>
      </div>
    </div>
  );
}

export default Chat
