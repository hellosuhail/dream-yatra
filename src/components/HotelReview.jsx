import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { RiSubtractFill } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';

const PartySize = () => {
  const location = useLocation();
  const selected = location.state?.selected;

  const [rooms, setRooms] = useState([
    { adults: 1, children: 0 },
  ]);
  const [accessible, setAccessible] = useState(false);

  if (!selected) {
    return <p className="text-center text-lg text-gray-500 mt-10">No itinerary selected.</p>;
  }

  const updateCount = (roomIndex, type, delta) => {
    setRooms(prevRooms =>
      prevRooms.map((room, idx) => {
        if (idx === roomIndex) {
          const updated = {
            ...room,
            [type]: Math.max(0, room[type] + delta),
          };
          return updated;
        }
        return room;
      })
    );
  };

  const addRoom = () => {
    setRooms([...rooms, { adults: 1, children: 0 }]);
  };

  const handleContinue = () => {
    console.log("Final room selection:", rooms);
    console.log("Wheelchair accessible:", accessible);
    // Proceed to next step or navigation here
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Your Trip Starts Here</h1>
      <p className="text-center text-gray-600 text-lg mb-10">
        First, let’s confirm the number of rooms and guests
      </p>

      {rooms.map((room, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Room {index + 1} Configuration</h2>

          {/* Adults */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-medium text-gray-700">Adults</p>
            <div className="flex items-center gap-4">
              <button
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                onClick={() => updateCount(index, 'adults', -1)}
              >
                <RiSubtractFill className="text-xl text-gray-600" />
              </button>
              <p className="w-6 text-center text-lg font-semibold">{room.adults}</p>
              <button
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                onClick={() => updateCount(index, 'adults', 1)}
              >
                <FaPlus className="text-sm text-gray-600" />
              </button>
            </div>
          </div>

          {/* Children */}
          <div className="flex items-center justify-between">
            <p className="text-lg font-medium text-gray-700">Children</p>
            <div className="flex items-center gap-4">
              <button
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                onClick={() => updateCount(index, 'children', -1)}
              >
                <RiSubtractFill className="text-xl text-gray-600" />
              </button>
              <p className="w-6 text-center text-lg font-semibold">{room.children}</p>
              <button
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                onClick={() => updateCount(index, 'children', 1)}
              >
                <FaPlus className="text-sm text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Accessibility Option */}
      <div className="flex items-center gap-3 mb-8">
        <input
          type="checkbox"
          id="wheelchair"
          className="accent-blue-600"
          checked={accessible}
          onChange={(e) => setAccessible(e.target.checked)}
        />
        <label htmlFor="wheelchair" className="text-gray-700 text-md">
          Wheelchair accessible
        </label>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <button
          className="w-full md:w-1/2 bg-white border border-blue-500 text-blue-500 py-3 rounded-xl hover:bg-blue-50 transition"
          onClick={addRoom}
        >
          + Add Another Room
        </button>
        <button
          className="w-full md:w-1/2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          onClick={handleContinue}
        >
          Continue to Room Selection
        </button>
      </div>
    </div>
  );
};

export default PartySize;