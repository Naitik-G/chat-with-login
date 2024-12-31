import React, { useState } from 'react';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    onSendMessage(message);
    setMessage('');
  };

  return (
    <div className="flex items-center bg-gray-800 p-3 rounded-md shadow-md">
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 bg-gray-700 text-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <button
        onClick={handleSendMessage}
        className="ml-3 px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-500 transition"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
