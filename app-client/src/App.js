import { useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";

const HOST = "http://localhost:3001";

function App() {
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient.connect(HOST);
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
