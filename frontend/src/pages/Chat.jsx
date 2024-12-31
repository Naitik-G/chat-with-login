import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import ChatBox from '../components/chat/chatBox';
import ChatInput from '../components/chat/chatInput';
import UserSearch from '../components/chat/UserSearch';
import { useNavigate } from 'react-router-dom';

// Initialize socket connection
const socket = io('http://localhost:5000');

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [recipient, setRecipient] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (!userData) {
      navigate('/login');
    } else {
      socket.emit('registerUser', userData);
    }

    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on('receivePrivateMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, { ...message, private: true }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [navigate]);

  const sendMessage = (message) => {
    if (!recipient) {
      alert('Please select a user to send a message.');
      return;
    }
  
    socket.emit('sendPrivateMessage', { toUsername: recipient, message });
  
    setMessages((prevMessages) => [
      ...prevMessages,
      { message, private: true, sender: 'You' },
    ]);
  };
  
  const searchUsers = async (username) => {
    try {
      const userData = JSON.parse(sessionStorage.getItem('userData'));
      if (username === userData.username) {
        alert('You cannot search for yourself.');
        return;
      }
  
      const response = await fetch(`http://localhost:5000/api/users/search?username=${username}`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error searching users:', error);
    }
  };
  

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-gray-900 text-gray-200">
      {/* Sidebar */}
      <div className="w-1/4 p-4 border-r border-pink-500 overflow-y-auto scrollbar-thin scrollbar-thumb-pink-700 scrollbar-track-gray-700">
        <UserSearch
          onSearch={searchUsers}
          users={users}
          onSelectUser={setRecipient}
          selectedUser={recipient}
        />
      </div>
  
      {/* Chat Section */}
      <div className="flex flex-col w-3/4">
        {/* Recipient Info (Optional) */}
        {recipient && (
          <div className="p-4 bg-gray-800 border-b border-pink-500 text-center text-gray-300">
            <strong>Chatting with: </strong>{recipient}
          </div>
        )}
  
        {/* Chat Messages */}
        <div
          className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-pink-700 scrollbar-track-gray-700"
          style={{ height: "calc(100vh - 150px)" }} // Adjust for Header and Input
        >
          <ChatBox messages={messages} />
        </div>
  
        {/* Chat Input */}
        <div className="p-4 bg-gray-800">
          <ChatInput onSendMessage={sendMessage} />
        </div>
      </div>
    </div>
  );
  
  
  
};

export default Chat;
