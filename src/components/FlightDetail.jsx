import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import img2 from "../assets/aeroplane2.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const FlightDetails = () => {
  const { flightId } = useParams();
  const navigate = useNavigate();
  const flight = useSelector((state) =>
    state.flight.flights.find((f) => f.id === flightId)
  );
  console.log(flight);

  if (!flight) {
    return (
      <div
        className="p-4 sm:p-6 md:p-8 lg:p-12 min-h-screen relative bg-gray-100"
        style={{
          backgroundImage: `url(${img2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay with gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-800/50 backdrop-blur-md z-0"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-blue-900 drop-shadow-sm">
            Flight Not Found
          </h2>
          <p className="text-white mb-8 text-lg sm:text-xl">
            The flight you're looking for does not exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Back to Flight List
          </button>
        </div>
      </div>
    );
  }


  
  return (
    <div
      className="p-4 sm:p-6 md:p-8 lg:p-12 min-h-screen relative bg-gray-100 flex items-center justify-center"
      style={{
        backgroundImage: `url(${img2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay with gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-800/50 backdrop-blur-md z-0"></div>

      <Link to="/flight-list">
        {" "}
        <div className="rounded-xl z-30 absolute top-[30px] left-[100px]">
          <FaArrowLeft className="bg-gray-100 text-black z-10 p-4 rounded-full w-12 h-12" />
        </div>{" "}
      </Link>
      <div className="max-w-lg w-full bg-white/90 rounded-2xl shadow-xl border border-purple-600 p-6 sm:p-8 transform transition-all duration-300 hover:shadow-2xl backdrop-blur-lg relative z-10">
        {/* Header with Airline and Icon */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 tracking-tight">
            {flight.airline}
          </h2>
          <span className="text-3xl text-blue-900">✈️</span>
        </div>

        {/* Flight Route Section */}
        <div className="flex items-center justify-between mb-8 bg-blue-50 rounded-lg p-4 border border-purple-600">
          <div className="text-center">
            <p className="text-sm sm:text-base font-medium text-blue-900">
              From
            </p>
            <p className="text-lg sm:text-xl font-semibold text-gray-800">
              {flight.from}
            </p>
          </div>
          <span className="text-blue-900 text-2xl">→</span>
          <div className="text-center">
            <p className="text-sm sm:text-base font-medium text-blue-900">To</p>
            <p className="text-lg sm:text-xl font-semibold text-gray-800">
              {flight.to}
            </p>
          </div>
        </div>

        {/* Flight Details Section */}
        <div className="space-y-6">
          {/* Flight ID */}
          <div className="flex justify-between items-center border-b border-gray-200 pb-3">
            <span className="text-sm sm:text-base font-medium text-blue-900">
              Flight ID
            </span>
            <span className="text-sm sm:text-base text-gray-800">
              {flight.id.slice(0, 8)}...
            </span>
          </div>

          {/* Departure */}
          <div className="flex justify-between items-center border-b border-gray-200 pb-3">
            <span className="text-sm sm:text-base font-medium text-blue-900">
              Departure
            </span>
            <span className="text-sm sm:text-base text-gray-800">
              {new Date(flight.departureTime).toLocaleString("en-US", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </span>
          </div>

          {/* Arrival */}
          <div className="flex justify-between items-center border-b border-gray-200 pb-3">
            <span className="text-sm sm:text-base font-medium text-blue-900">
              Arrival
            </span>
            <span className="text-sm sm:text-base text-gray-800">
              {new Date(flight.arrivalTime).toLocaleString("en-US", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </span>
          </div>

          {/* Price */}
          <div className="flex justify-between items-center border-b border-gray-200 pb-3">
            <span className="text-sm sm:text-base font-medium text-blue-900">
              Price
            </span>
            <span className="text-lg sm:text-xl font-semibold text-yellow-500">
              ₹{flight.price.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex justify-between gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Back to List
          </button>
          <button
            onClick={() => alert("Booking functionality to be implemented")}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
