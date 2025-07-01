import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";

const BookingCruise = () => {
  const location = useLocation();
  const selected = location.state?.selected;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: 1,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    alert("Booking submitted successfully!");
    // Optionally, send the form data to a backend here
  };

  if (!selected) {
    return (
      <p className="text-center mt-10 text-red-600">No itinerary selected.</p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <div className="bg-sky-600 h-12 flex items-center px-10 text-white text-sm font-medium shadow">
        <span className="mr-2">Dreamviewer Yatra</span> /
        <span className="ml-2">Cruise</span>
      </div>

      {/* Back button */}
      <div className="w-full m-6 flex justify-start">
        <Link
          to="/cruise/date/room-configuration/select-room"
          className="flex items-center gap-2 text-base sm:text-lg text-sky-600 hover:text-sky-800"
        >
          <GoArrowLeft className="text-xl" />
          Back
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-4 text-sky-600">
        Booking for: {selected.place}
      </h1>
      <p className="text-gray-600 mb-1">
        <strong>Date:</strong> {selected.date}
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Time:</strong> {selected.time}
      </p>

      <img
        src={selected.img}
        alt={selected.place}
        className="w-full h-60 object-cover rounded-lg mb-6"
      />

      <p className="text-gray-700 leading-relaxed mb-6">{selected.dis}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-gray-700">Number of Guests</label>
          <input
            type="number"
            name="guests"
            min="1"
            value={formData.guests}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700">Special Requests</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            placeholder="Any special instructions?"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-800 cursor-pointer"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingCruise;
