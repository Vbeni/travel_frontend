import React from 'react';

function Home() {
  return (
    <div className="bg-blue-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg w-2/3">
        <h1 className="text-4xl font-bold mb-5 text-gray-800">Welcome to Travel App</h1>
        <p className="text-gray-600">
          Explore the best hotels, rooms, and get amazing discounts on bookings. Sign up or log in to personalize your experience.
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition duration-300">Sign Up</button>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition duration-300">Log In</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
