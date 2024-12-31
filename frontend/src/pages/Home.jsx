import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
      {/* Randomly Moving Hearts */}
      <div className="absolute animate-random-move">
        {/* Neon Pink Heart */}
        <svg
          className="relative z-10"
          width="200"
          height="200"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            stroke="pink"
            strokeWidth="0.5"
            fill="#ff4ecb"
            className="neon-pink"
          />
        </svg>
      </div>

      <div className="absolute animate-random-move delay-500">
        {/* Neon Purple Heart */}
        <svg
          className="relative z-10"
          width="200"
          height="200"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            stroke="purple"
            strokeWidth="0.5"
            fill="#a855f7"
            className="neon-purple"
          />
        </svg>
      </div>

      {/* Glassmorphism Container */}
      <div className="relative bg-gray-800 bg-opacity-30 p-10 rounded-lg shadow-lg text-center backdrop-filter backdrop-blur-md h-screen w-screen"></div>

      <div className="absolute text-center ">

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
          Find Your Lost Love
        </h1>
        {/* Subtitle */}
        <p className="text-lg sm:text-xl mb-8 text-gray-300">
          Start your journey to reconnect with someone special.
        </p>
        {/* Find Button */}
        <Link
          to="/register"
          className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 transition duration-300"
        >
          Find
        </Link>
      </div>
    </div>
  );
};

export default Home;
