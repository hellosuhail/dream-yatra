// BookingForm.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const BookingCruise = () => {
  const location = useLocation();
  const selected = location.state?.selected;
console.log(selected)
  if (!selected) return <p className="text-center mt-10">No itinerary selected.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Booking for: {selected.place}</h1>
      <p className="text-gray-600 mb-2">Date: {selected.date}</p>
      <p className="text-gray-600 mb-2">Time: {selected.time}</p>
      <img
        src={selected.img}
        alt="preview"
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border p-3 rounded" required />
        <input type="email" placeholder="Email" className="w-full border p-3 rounded" required />
        <input type="email" placeholder="Email" className="w-full border p-3 rounded" required />
        <input type="email" placeholder="Email" className="w-full border p-3 rounded" required />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingCruise;