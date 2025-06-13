import React, { useState } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import axios from 'axios'
import { Link } from 'react-router-dom';

const GiftCard = () => {
  const [recverVisible, setRecverVisible] = useState(true);
  const [name , setName]=useState("")
  const [moble , setMobie]=useState("")
  const [email , setEmial]=useState("")
  const [pin , setPin]=useState("")
  const [city , setCity]=useState("")
  const [state , setState]=useState("")
  const [address , setAddress]=useState("")


 const handlesubmit = async ()=>{
    axios.post('url..')
 }

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-20 py-10 text-gray-800">

      {/* Back Button */}
      <div className="w-full mb-6 flex justify-start">
        <Link to='/' className="flex items-center gap-2 text-base sm:text-lg text-sky-600 hover:text-sky-800">
          <GoArrowLeft className="text-xl" />
          Back
        </Link>
      </div>

      {/* ...Header & Description (same as before)... */}

      {/* Sender Details */}
      <div className="mt-12 w-full max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Sender Details</h3>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              checked={recverVisible === false}
              onChange={() => setRecverVisible(!recverVisible)}
            />
            <label className="text-sm text-gray-600">Buy For Myself</label>
          </div>
        </div>

        <input
        value={name}
        onChange={(e)=>setName(e.target.value)}
          type="text"
          className="w-full border border-gray-300 rounded px-4 py-2"
          placeholder="Full Name"
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <input
             value={moble}
        onChange={(e)=>setMobie(e.target.value)}
            type="text"
            className="flex-1 border border-gray-300 rounded px-4 py-2"
            placeholder="Mobile No."
          />
          <input
             value={email}
        onChange={(e)=>setEmial(e.target.value)}
            type="email"
            className="flex-1 border border-gray-300 rounded px-4 py-2"
            placeholder="Email"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
             value={pin}
        onChange={(e)=>setPin(e.target.value)}
            type="text"
            className="flex-1 border border-gray-300 rounded px-4 py-2"
            placeholder="Pin Code*"
          />
          <input
             value={city}
        onChange={(e)=>setCity(e.target.value)}
            type="text"
            className="flex-1 border border-gray-300 rounded px-4 py-2"
            placeholder="City"
          />
          <input
             value={state}
        onChange={(e)=>setState(e.target.value)}
            type="text"
            className="flex-1 border border-gray-300 rounded px-4 py-2"
            placeholder="State"
          />
        </div>

        <textarea
           value={address}
        onChange={(e)=>setAddress(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2"
          rows="3"
          placeholder="Address"
        />
      </div>

      {/* Receiver Details */}
      {recverVisible && (
        <div className="mt-10 w-full max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-6">
          <h3 className="text-lg font-semibold text-gray-800">Receiver Details</h3>

          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="Full Name"
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded px-4 py-2"
              placeholder="Mobile No."
            />
            <input
              type="email"
              className="flex-1 border border-gray-300 rounded px-4 py-2"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded px-4 py-2"
              placeholder="Pin Code*"
            />
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded px-4 py-2"
              placeholder="City"
            />
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded px-4 py-2"
              placeholder="State"
            />
          </div>

          <textarea
            className="w-full border border-gray-300 rounded px-4 py-2"
            rows="3"
            placeholder="Address"
          />
        </div>
      )}
    </div>
  );
};

export default GiftCard;
