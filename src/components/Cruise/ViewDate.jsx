// ViewDate.jsx
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { listData } from "../CardData/CruiseData";



const ViewDate = () => {
  const [date, setDate] = useState(listData[0]);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-md px-10 py-6 flex flex-wrap justify-between gap-4">
        <div>
          <p className="text-sm text-gray-500">Departure Date</p>
          <p className="font-semibold text-lg">Mar 28, 2027</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Number of Guests</p>
          <p className="font-semibold text-lg">Two Guests</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Select Room Type</p>
          <p className="font-semibold text-lg">Ocean View Deluxe</p>
        </div>
        <div className="self-center">
          <button
            onClick={() => navigate("/cruise/date/room-configuration/select-room", { state: { selected: date } })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Book Now
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row px-6 py-10 gap-6">
        <div className="bg-white md:w-1/3 rounded-xl shadow-md">
          <p className="text-2xl font-bold text-center py-4 border-b border-gray-200">Itinerary</p>
          <ul className="overflow-y-auto h-[65vh] p-4 space-y-3">
            {listData.map((data) => (
              <li
                key={data.id}
                onClick={() => setDate(data)}
                className={`rounded-lg px-4 py-3 cursor-pointer transition ${
                  date.id === data.id ? "bg-blue-100 border-l-4 border-blue-600" : "bg-gray-50 hover:bg-blue-50"
                }`}
              >
                <div className="flex gap-4 items-center">
                  <div className="flex flex-col text-sm items-center">
                    <p className="font-semibold">{data.day}</p>
                    <p>{data.dateCount}</p>
                  </div>
                  <div className="flex-grow text-sm">
                    <p className="text-gray-500">{data.date}</p>
                    <p className="font-medium">{data.place}</p>
                    <p className="text-gray-500">{data.time}</p>
                  </div>
                  <FaAngleRight className="text-gray-400" />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white w-full md:w-2/3 rounded-xl shadow-md overflow-y-auto p-6">
          {date && (
            <>
              <p className="text-gray-500">{date.date}</p>
              <h2 className="text-4xl font-bold mb-2">{date.place}</h2>
              <p className="text-gray-600 mb-4">{date.time}</p>
              <img
                src={date.img}
                alt={date.place}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{date.dis}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewDate;