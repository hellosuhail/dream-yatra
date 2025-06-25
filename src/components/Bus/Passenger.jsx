import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

const Passenger = () => {
  const [passenger, setPassenger] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("UPI");

  const handleChange = (e) => {
    setPassenger({ ...passenger, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Confirmed!\n" + JSON.stringify(passenger, null, 2));
    setPassenger({
      name:"",
      age:"",
      gender:"",
      contact:""
    })
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 mt-10 rounded-xl shadow-md">
       <div className="bg-sky-600 h-12 flex items-center px-10 text-white text-sm font-medium shadow">
        <span className="mr-2">Dreamviewer Yatra</span> /
        <span className="ml-2">Bus</span>
      </div>

      {/* Back button */}
      <div className="w-full m-6 flex justify-start">
        <Link
          to="/bus"
          className="flex items-center gap-2 text-base sm:text-lg text-sky-600 hover:text-sky-800"
        >
          <GoArrowLeft className="text-xl" />
          Back
        </Link>
      </div>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Passenger Information</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={passenger.name}
          onChange={handleChange}
          required
          className="input input-bordered w-full"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={passenger.age}
          onChange={handleChange}
          required
          className="input input-bordered w-full"
        />
        <select
          name="gender"
          value={passenger.gender}
          onChange={handleChange}
          required
          className="select select-bordered w-full"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="tel"
          name="contact"
          placeholder="Contact Number"
          value={passenger.contact}
          onChange={handleChange}
          required
          className="input input-bordered w-full"
        />

        <h3 className="text-xl font-semibold text-blue-600 mt-6">Payment Method</h3>
        <div className="flex flex-wrap gap-4">
          {['UPI', 'Credit Card', 'Debit Card', 'Net Banking'].map((method) => (
            <label key={method} className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value={method}
                checked={paymentMethod === method}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="radio radio-accent"
              />
              {method}
            </label>
          ))}
        </div>

        <button
          type="submit"
          className="mt-6 px-6 py-2 bg-sky-600 cursor-pointer hover:bg-sky-700 text-white font-semibold rounded"
        >
          Confirm and Pay
        </button>
      </form>
    </div>
  );
};

export default Passenger;