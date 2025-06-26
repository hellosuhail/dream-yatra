// RoomSelector.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const rooms = [
  {
    id: 1,
    name: "Ocean View Room",
    description: "Beautiful view of the ocean with private balcony.",
    price: 3500,
    img: "/Images/Mauritius2.jpg",
  },
  {
    id: 2,
    name: "Interior Room",
    description: "Cozy and budget-friendly with basic amenities.",
    price: 2000,
    img: "/Images/Mauritius2.jpg",

  },
  {
    id: 3,
    name: "Balcony Suite",
    description: "Luxury suite with large balcony and premium features.",
    price: 5500,
    img: "/Images/Mauritius2.jpg",

  },
];

const RoomSelector = ({ onSelect }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleSelect = (room) => {
    setSelectedRoom(room);
    if (onSelect) onSelect(room);
  };
  const navigate = useNavigate()

  const goTOBooking = ()=>{
    navigate('/cruise/date/booking')
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Select Your Room Type</h2>
      <div className="space-y-6">
        {rooms.map((room) => (
          <div
            key={room.id}
            onClick={() => handleSelect(room)}
            className={`cursor-pointer  rounded-xl transition overflow-hidden hover:shadow-xl ${
              selectedRoom?.id === room.id
                ? "border-blue-600 bg-blue-100"
                : "bg-white"
            }`}
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <img
                src={room.img}
                alt={room.name}
                className="w-full md:w-48 h-36 object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
              />
              <div className="flex-1 p-4">
                <h3 className="text-xl font-semibold text-blue-800">{room.name}</h3>
                <p className="text-gray-600 mt-1">{room.description}</p>
              </div>
              <div className="pr-6 text-right">
                <p className="text-lg font-bold text-blue-700">₹{room.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedRoom && (
        <div className="mt-8 text-center">
          <p className="text-green-600 font-medium text-lg">
            You selected: <strong>{selectedRoom.name}</strong> (₹{selectedRoom.price})
          </p>
        </div>
      )}

      <div className="w-full mt-12">
        <button onClick={goTOBooking} className="btn w-full btn-outline btn-accent"> Continue</button>
      </div>
    </div>
  );
};

export default RoomSelector;