import React, { useState } from 'react';

const UserSearch = ({ onSearch, users, onSelectUser, selectedUser }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchQuery.trim() !== '') {
      onSearch(searchQuery);
    }
  };

  return (
    <div className=" ">
      {!selectedUser && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search users"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-gray-700 text-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
      )}
      <ul className="space-y-2">
        {selectedUser ? (
          <li className="bg-gray-700 text-gray-200 p-2 rounded-md">{selectedUser}</li>
        ) : (
          users.map((user) => (
            <li
              key={user._id}
              onClick={() => onSelectUser(user.username)}
              className="bg-gray-700 text-gray-200 p-2 rounded-md cursor-pointer hover:bg-gray-600 transition"
            >
              {user.username}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default UserSearch;
