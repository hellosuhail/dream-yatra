import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import img2 from "../assets/aeroplane2.jpg";
import Sidebar from "./Sidebar";
import Suggestionflight from "./Suggestionflight";

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
        className="min-h-screen relative bg-gray-100"
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

        <div className="flex flex-col item-center justify-center lg:flex-row min-h-screen relative z-10">
          <Sidebar />

          <div className="flex-1 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 xl:p-12">
            <div className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 text-blue-900 drop-shadow-sm">
                Flight Not Found
              </h2>
              <p className="text-white mb-6 sm:mb-8 text-sm sm:text-base md:text-lg lg:text-xl">
                The flight you're looking for does not exist.
              </p>
              <button
                onClick={() => navigate("/")}
                className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Back to Flight List
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen relative bg-gray-100"
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

      <div className="flex flex-col lg:flex-row min-h-screen relative z-10">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content (FlightDetails and Suggestionflight) */}
        <div className="flex-1 flex flex-col  lg:flex-row lg:justify-evenly lg:items-center p-2 sm:p-4 md:p-6 lg:p-8 xl:p-12 gap-4   lg:gap-6">
          {/* Flight Details Card */}
          <div className="w-full lg:w-2/5 bg-white/45 rounded-2xl shadow-xl border border-purple-600 p-3 sm:p-4 md:p-6 transform transition-all duration-300 hover:shadow-2xl backdrop-blur-lg">
            {/* Header with Airline and Icon */}
            <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-blue-900 tracking-tight">
                {flight.airline}
              </h2>
              <span className="text-xl sm:text-2xl md:text-3xl text-blue-900">✈️</span>
            </div>

            {/* Flight Route Section */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6 md:mb-8 bg-blue-50 rounded-lg p-2 sm:p-3 md:p-4 border border-purple-600">
              <div className="text-center mb-2 sm:mb-0">
                <p className="text-xs sm:text-sm md:text-base font-medium text-blue-900">
                  From
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800">
                  {flight.from}
                </p>
              </div>
              <span className="text-blue-900 text-lg sm:text-xl md:text-2xl">→</span>
              <div className="text-center">
                <p className="text-xs sm:text-sm md:text-base font-medium text-blue-900">
                  To
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800">
                  {flight.to}
                </p>
              </div>
            </div>

            {/* Flight Details Section */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {/* Flight ID */}
              <div className="flex justify-between items-center border-b border-gray-200 pb-2 sm:pb-3">
                <span className="text-xs sm:text-sm md:text-base font-medium text-blue-900">
                  Flight ID
                </span>
                <span className="text-xs sm:text-sm md:text-base text-gray-800">
                  {flight.id.slice(0, 8)}...
                </span>
              </div>

              {/* Departure */}
              <div className="flex justify-between items-center border-b border-gray-200 pb-2 sm:pb-3">
                <span className="text-xs sm:text-sm md:text-base font-medium text-blue-900">
                  Departure
                </span>
                <span className="text-xs sm:text-sm md:text-base text-gray-800">
                  {new Date(flight.departureTime).toLocaleString("en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </span>
              </div>

              {/* Arrival */}
              <div className="flex justify-between items-center border-b border-gray-200 pb-2 sm:pb-3">
                <span className="text-xs sm:text-sm md:text-base font-medium text-blue-900">
                  Arrival
                </span>
                <span className="text-xs sm:text-sm md:text-base text-gray-800">
                  {new Date(flight.arrivalTime).toLocaleString("en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </span>
              </div>

              {/* Price */}
              <div className="flex justify-between items-center border-b border-gray-200 pb-2 sm:pb-3">
                <span className="text-xs sm:text-sm md:text-base font-medium text-blue-900">
                  Price
                </span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-yellow-500">
                  ₹{flight.price.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 flex flex-col sm:flex-row justify-between gap-2 sm:gap-3 md:gap-4">
              <button
                onClick={() => navigate("/flight-list")}
                className="w-full cursor-pointer sm:w-auto flex-1 bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Back to List
              </button>
              <button
                onClick={() => alert("Booking functionality to be implemented")}
                className="w-full sm:w-auto flex-1 cursor-pointer bg-green-500 hover:bg-green-600 text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Suggested Flights Section */}
          <Suggestionflight />
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;