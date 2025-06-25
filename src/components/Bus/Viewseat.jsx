import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { GoArrowLeft } from 'react-icons/go';
import { TbSteeringWheel } from "react-icons/tb";
import { PiArmchairThin } from "react-icons/pi";

const rows = 6;
const leftSeats = 2;
const rightSeats = 2;
const seatPrice = 250;

const Viewseat = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    const navigate =useNavigate()

const navigateHandle=()=>{
  navigate('/bus/fillter/viewseat/passenger')
}

  const handleSeatClick = (seatNumber) => {
    setSelectedSeats((prev) =>
      prev.includes(seatNumber)
        ? prev.filter((s) => s !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  const totalPrice = selectedSeats.length * seatPrice;

  let seatNumber = 1;

  
  return (
    <div className="overflow-hidden">
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
<div className="flex flex-col md:flex-row gap-8 justify-center items-start p-6">
  {/* Boarding Card */}
  <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md hover:shadow-2xl transition-all">
    <h2 className="text-xl font-semibold text-[#0084d1]  mb-2">Boarding Point</h2>
    <p className="text-gray-800 font-medium border-b pb-2 mb-2">BEAWAR RSRTC BUS STAND</p>
    <p className="text-sm text-gray-600 mb-3">⏰ 12:12</p>
    <div className="text-sm text-gray-700 mb-4">
      <p className="font-semibold">BEAWAR RSRTC BUS STAND</p>
      <p className="text-gray-600">ROADWAYS BUS STAND, PARAS COLONY, BEAWAR, RAJASTHAN</p>
    </div>
    <label className="flex items-center gap-2">
      <input type="radio" name="boarding" className="radio radio-accent" defaultChecked />
      <span className="text-sm text-gray-800">Select this point</span>
    </label>
  </div>

  {/* Dropping Card */}
  <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md hover:shadow-2xl transition-all">
    <h2 className="text-xl font-semibold text-[#0084d1] mb-2">Dropping Point</h2>
    <p className="text-gray-800 font-medium border-b pb-2 mb-2">Sindhi Camp</p>
    <p className="text-sm text-gray-600 mb-3">⏰ 20:30</p>
    <div className="text-sm text-gray-700 mb-4">
      <p className="font-semibold">Sindhi Camp</p>
      <p className="text-gray-600">RSRTC bus stand, Kanti Nagar, Sindhi Camp, Jaipur, Rajasthan</p>
    </div>
    <label className="flex items-center gap-2">
      <input type="radio" name="dropping" className="radio radio-accent" defaultChecked />
      <span className="text-sm text-gray-800">Select this point</span>
    </label>
  </div>
</div>
  
          <div className="min-h-screen  bg-blue-50 py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-[#0084d1]  mb-8">
        Select Your Seats
      </h2>

      <div className="max-w-md mx-auto bg-white  p-6 rounded-xl shadow-md">
        <div className="flex flex-col gap-4">
         
          <div className="flex justify-end pr-4">
        <TbSteeringWheel className="text-6xl" />
          </div>

          
          {Array.from({ length: rows }, (_, rowIndex) => (
            <div key={rowIndex} className="flex justify-between gap-4">

              <div className="flex gap-4">
                {Array.from({ length: leftSeats }).map(() => {
                  const currentSeat = seatNumber++;
                  const isSelected = selectedSeats.includes(currentSeat);
                  return (
                    <div
                      key={currentSeat}
                      onClick={() => handleSeatClick(currentSeat)}
                      className={`w-14 h-14 cursor-pointer rounded-md flex flex-col justify-center items-center text-xs font-medium border ${
                        isSelected
                          ? "bg-green-500 text-white border-green-600"
                          : "bg-gray-100 hover:bg-blue-100 border-gray-300"
                      }`}
                    >
                     <PiArmchairThin  className="text-3xl"/> {currentSeat}
                      <div className="text-[10px]">₹{seatPrice}</div>
                    </div>
                  );
                })}
              </div>

             
              <div className="w-6"></div>

              
              <div className="flex gap-4">
                {Array.from({ length: rightSeats }).map(() => {
                  const currentSeat = seatNumber++;
                  const isSelected = selectedSeats.includes(currentSeat);
                  return (
                    <div
                      key={currentSeat}
                      onClick={() => handleSeatClick(currentSeat)}
                      className={`w-14 h-14 cursor-pointer rounded-md flex flex-col justify-center items-center text-xs font-medium border ${
                        isSelected
                          ? "bg-green-500 text-white border-green-600"
                          : "bg-gray-100 hover:bg-blue-100 border-gray-300"
                      }`}
                    >
                      <PiArmchairThin className="text-3xl"/> {currentSeat}
                      <div className="text-[10px]">₹{seatPrice}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

       
        
      </div><div className="mt-8 text-center">
          <p className="text-lg font-semibold">
            Selected Seats: {selectedSeats.join(", ") || "None"}
          </p>
          <p className="text-xl font-bold text-green-700 mt-2">
            Total Price: ₹{totalPrice}
          </p>
          <button
          onClick={navigateHandle}
            disabled={selectedSeats.length === 0}
            className="mt-4 px-6 py-2 bg-[#0084d1]  hover:bg-sky-700  cursor-pointer text-white rounded disabled:opacity-50"
          >
            Confirm Booking
          </button>
        </div>
    </div>
    
    </div>
  )
}

export default Viewseat