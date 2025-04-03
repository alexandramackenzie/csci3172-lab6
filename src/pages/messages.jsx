import { useEffect, useState } from "react";

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/messages")
      .then((res) => res.json())
      .then(setMessages);
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Messages</h1>
      {messages.map((message, index) => (
        <div key={index} className="border p-3 mb-4">
          <h5>From: {message.name} | Subject:{message.subject}</h5>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
}

export default Messages;
