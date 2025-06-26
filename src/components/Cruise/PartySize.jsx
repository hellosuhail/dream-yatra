import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { RiSubtractFill } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import { listData } from '../CardData/CruiseData';

const PartySize = () => {
      const [counter, setCounter] = useState({ adults: 2, children: 0 });
    
  const location = useLocation();
  const selected = location.state?.selected;

  if (!selected) {
    return <p className="text-center text-lg text-gray-500 mt-10">No itinerary selected.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Your Trip Starts Here</h1>
      <p className="text-center text-gray-600 text-lg mb-10">
        First, let’s confirm the number of rooms and guests
      </p>

      {/* Room Configuration */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Room 1 Configuration</h2>

        {/* Adults */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg font-medium text-gray-700">Adults</p>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <RiSubtractFill className="text-xl text-gray-600" />
            </button>
            <p className="w-6 text-center text-lg font-semibold">0</p>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <FaPlus className="text-sm text-gray-600" />
            </button>
          </div>
        </div>

        {/* Children */}
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-gray-700">Children</p>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <RiSubtractFill className="text-xl text-gray-600" />
            </button>
            <p className="w-6 text-center text-lg font-semibold">0</p>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <FaPlus className="text-sm text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Accessibility Option */}
      <div className="flex items-center gap-3 mb-8">
        <input type="radio" id="wheelchair" name="accessibility" className="accent-blue-600" />
        <label htmlFor="wheelchair" className="text-gray-700 text-md">
          Wheelchair accessible
        </label>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <button className="w-full md:w-1/2 bg-white border border-blue-500 text-blue-500 py-3 rounded-xl hover:bg-blue-50 transition">
          + Add Another Room
        </button>
        <button  className="w-full md:w-1/2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
          Continue to Room Selection
        </button>
      </div>
    </div>
  );
};

export default PartySize;