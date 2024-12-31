import React, { useEffect, useRef } from 'react';

const ChatBox = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="h-full overflow-y-scroll bg-gray-800 p-4 rounded-md shadow-inner scrollbar-thin scrollbar-thumb-pink-700 scrollbar-track-gray-700">
      {messages.length > 0 ? (
        messages.map((message, index) => (
          <div
            key={index}
            className={`my-2 p-3 rounded-md ${
              message.private
                ? 'bg-purple-700 text-white'
                : index % 2 === 0
                ? 'bg-pink-700 text-white'
                : 'bg-gray-700 text-gray-300'
            }`}
          >
            {message.message || message}
          </div>
        ))
      ) : (
        <div className="text-center text-gray-400">No messages yet. Start the conversation!</div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatBox;
