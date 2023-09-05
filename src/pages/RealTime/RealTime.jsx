import React, { useEffect, useState } from "react";

const RealTime = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newSocket = new WebSocket(
      "ws://scorpion-modest-robin.ngrok-free.app/ws"
    );

    newSocket.onopen = () => {
      console.log("WebSocket connection opened");
    };

    newSocket.onmessage = (event) => {
      console.log("Received message:", event.data);
      setMessages((prev) => [...prev, event.data]);
    };

    newSocket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    setSocket(newSocket);

    // Clean up the socket connection when the component unmounts
    return () => {
      if (newSocket) {
        newSocket.close();
      }
    };
  }, []);

  return (
    <div>
      <h1>WebSocket React RealTime</h1>
      {messages.map((e, i) => (
        <p key={i}>{e}</p>
      ))}
    </div>
  );
};

export default RealTime;
