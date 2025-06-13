import React from "react";

const suggestedFlights = [
  {
    id: "sug1",
    airline: "Air India",
    from: "Mumbai",
    to: "Delhi",
    departureTime: "2025-06-15T08:00:00",
    arrivalTime: "2025-06-15T10:30:00",
    price: 5500,
  },
  {
    id: "sug2",
    airline: "IndiGo",
    from: "Delhi",
    to: "Bangalore",
    departureTime: "2025-06-16T14:00:00",
    arrivalTime: "2025-06-16T16:45:00",
    price: 4800,
  },
  {
    id: "sug3",
    airline: "SpiceJet",
    from: "Chennai",
    to: "Mumbai",
    departureTime: "2025-06-17T09:30:00",
    arrivalTime: "2025-06-17T11:20:00",
    price: 4200,
  },
   {
    id: "sug1",
    airline: "Air India",
    from: "Mumbai",
    to: "Delhi",
    departureTime: "2025-06-15T08:00:00",
    arrivalTime: "2025-06-15T10:30:00",
    price: 5500,
  },
];

const Suggestionflight = () => {
  return (
    <div className="w-full lg:w-2/5 p-2 sm:p-4 md:p-6 z-50">
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white text-center mb-3 sm:mb-4 md:mb-6 drop-shadow-sm">
        Suggested Flights for You
      </h3>

      <ul className="space-y-2 sm:space-y-3 md:space-y-4">
        {suggestedFlights.map((flight) => (
          <li
            key={flight.id}
            className="bg-white/90 backdrop-blur-lg rounded-xl shadow-md border border-purple-600 p-2 sm:p-3 md:p-4 hover:bg-gray-200/20 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 md:gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 md:gap-4 flex-1">
                <div>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-blue-900">{flight.airline}</p>
                  <p className="text-xs sm:text-sm text-gray-700">
                    From <span className="font-semibold">{flight.from}</span>{" "}
                    <span className="text-blue-900">→</span>{" "}
                    <span className="font-semibold">{flight.to}</span>
                  </p>
                </div>

                <div>
                  <p className="text-xs sm:text-sm text-blue-900 font-medium">Departure:</p>
                  <p className="text-xs sm:text-sm text-gray-800">
                    {new Date(flight.departureTime).toLocaleString("en-US", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>
                </div>

                <div>
                  <p className="text-xs sm:text-sm text-blue-900 font-medium">Arrival:</p>
                  <p className="text-xs sm:text-sm text-gray-800">
                    {new Date(flight.arrivalTime).toLocaleString("en-US", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:items-end">
                <p className="text-xs sm:text-sm text-blue-900 font-medium">Price:</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-yellow-500">
                  ₹{flight.price.toLocaleString("en-IN")}
                </p>
                <button
                  onClick={() => alert("View details functionality to be implemented")}
                  className="mt-1 sm:mt-2 bg-blue-900 hover:bg-blue-800 text-white px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-md text-xs sm:text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5"
                >
                  View Details
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestionflight;