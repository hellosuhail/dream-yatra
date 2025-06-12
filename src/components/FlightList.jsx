import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFlight, bookFlight } from "../store/flightSlice";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../assets/aeroplane.webp";

const FlightList = () => {
  const { flights } = useSelector((state) => state.flight);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    from: "",
    to: "",
    departureDate: "",
    travellers: 1,
    travelClass: "Economy",
  });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [newFlight, setNewFlight] = useState({
    airline: "",
    from: "",
    to: "",
    departureTime: "",
    arrivalTime: "",
    price: "",
  });
  const [bookingDetails, setBookingDetails] = useState({
    passengerName: "",
    email: "",
    travellers: 1,
  });

  // Filter flights based on search parameters
  const filteredFlights = flights.filter(
    (flight) =>
      (!searchParams.from ||
        flight.from.toLowerCase().includes(searchParams.from.toLowerCase())) &&
      (!searchParams.to ||
        flight.to.toLowerCase().includes(searchParams.to.toLowerCase())) &&
      (!searchParams.departureDate ||
        (flight.departureTime &&
          new Date(flight.departureTime).toLocaleDateString("en-US", {
            dateStyle: "medium",
          }) ===
            new Date(searchParams.departureDate).toLocaleDateString("en-US", {
              dateStyle: "medium",
            })))
  );

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Parameters:", searchParams);
  };

  // Navigate to flight details page
  const handleFlightClick = (flightId) => {
    navigate(`/flight-list/${flightId}`);
  };

  // Handle adding a new flight
  const handleAddFlight = (e) => {
    e.preventDefault();
    if (
      newFlight.airline &&
      newFlight.from &&
      newFlight.to &&
      newFlight.departureTime &&
      newFlight.arrivalTime &&
      newFlight.price
    ) {
      dispatch(
        addFlight({
          airline: newFlight.airline,
          from: newFlight.from,
          to: newFlight.to,
          departureTime: newFlight.departureTime,
          arrivalTime: newFlight.arrivalTime,
          price: parseInt(newFlight.price),
        })
      );
      setNewFlight({
        airline: "",
        from: "",
        to: "",
        departureTime: "",
        arrivalTime: "",
        price: "",
      });
      setIsAddModalOpen(false);
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Handle booking a flight
  const handleBookFlight = (e) => {
    e.preventDefault();
    if (
      bookingDetails.passengerName &&
      bookingDetails.email &&
      bookingDetails.travellers
    ) {
      dispatch(
        bookFlight({
          ...selectedFlight,
          bookingDetails: {
            passengerName: bookingDetails.passengerName,
            email: bookingDetails.email,
            travellers: parseInt(bookingDetails.travellers),
          },
        })
      );
      setBookingDetails({
        passengerName: "",
        email: "",
        travellers: 1,
      });
      setIsBookModalOpen(false);
      setSelectedFlight(null);
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Open booking modal
  const openBookModal = (flight) => {
    setSelectedFlight(flight);
    setIsBookModalOpen(true);
  };

  // Safeguard for rendering
  if (!flights) {
    return (
      <div className="text-center text-red-600">
        Error: Flight data not available.
      </div>
    );
  }

  return (
    <div
      className="p-4 sm:p-6 md:p-8 lg:p-12 min-h-screen relative bg-gray-100"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay with blur effect */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 ">
        <Link to="/">
          <div className="rounded-xl">
            <FaArrowLeft className="bg-gray-200 text-black z-10 p-4 rounded-full w-12 h-12" />
          </div>
        </Link>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-center text-white tracking-tight drop-shadow-sm">
          ✈️ Find Your Flight
        </h2>

        {/* Search Form */}
        <div className="mb-8 bg-black/30 rounded-xl shadow-lg p-4 sm:p-6 border  backdrop-blur-md ">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {/* From */}
            <div className="flex-1 min-w-[150px]">
              <label className="block text-sm font-medium text-white mb-1">
                From
              </label>
              <input
                type="text"
                placeholder="Delhi, DEL"
                value={searchParams.from || ""}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, from: e.target.value })
                }
                className="w-full px-4 py-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base bg-gray-100/70 shadow-sm placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
              />
            </div>

            {/* To */}
            <div className="flex-1 min-w-[150px]">
              <label className="block text-sm font-medium text-white mb-1">
                To
              </label>
              <input
                type="text"
                placeholder="Bengaluru, BLR"
                value={searchParams.to || ""}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, to: e.target.value })
                }
                className="w-full px-4 py-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base bg-gray-100/70 shadow-sm placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
              />
            </div>

            {/* Departure Date */}
            <div className="flex-1 min-w-[150px]">
              <label className="block text-sm font-medium text-white mb-1">
                Departure
              </label>
              <input
                type="date"
                value={searchParams.departureDate || ""}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    departureDate: e.target.value,
                  })
                }
                className="w-full px-4 py-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base bg-gray-100/70 shadow-sm placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
              />
            </div>

            {/* Travellers & Class */}
            <div className="flex-1 min-w-[150px]">
              <label className="block text-sm font-medium text-white mb-1">
                Travellers & Class
              </label>
              <select
                value={`${searchParams.travellers} Traveller${
                  searchParams.travellers > 1 ? "s" : ""
                }, ${searchParams.travelClass}`}
                onChange={(e) => {
                  const [travellers, travelClass] = e.target.value.split(", ");
                  setSearchParams({
                    ...searchParams,
                    travellers: parseInt(travellers),
                    travelClass,
                  });
                }}
                className="w-full px-4 py-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base bg-gray-100/70 shadow-sm transition-all duration-300 backdrop-blur-sm"
              >
                <option>1 Traveller, Economy</option>
                <option>1 Traveller, Premium Economy</option>
                <option>2 Travellers, Economy</option>
                <option>2 Travellers, Premium Economy</option>
              </select>
            </div>
          </div>

          {/* Special Fare Options */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-white sm:gap-3">
            <span className="text-xs sm:text-sm font-medium text-white">
              Select a special fare:
            </span>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="fare"
                value="Regular"
                className="text-white focus:ring-blue-500"
                defaultChecked
              />
              <span className="text-xs sm:text-sm text-white">
                Regular fares
              </span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="fare"
                value="Student"
                className="text-white focus:ring-blue-500"
              />
              <span className="text-xs sm:text-sm text-white">Student</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="fare"
                value="Senior Citizen"
                className="text-white focus:ring-blue-500"
              />
              <span className="text-xs sm:text-sm text-white">
                Senior Citizen
              </span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="fare"
                value="Armed Forces"
                className="text-white focus:ring-blue-500"
              />
              <span className="text-xs sm:text-sm text-white">
                Armed Forces
              </span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="fare"
                value="Doctor & Nurses"
                className="text-white focus:ring-blue-500"
              />
              <span className="text-xs sm:text-sm text-white">
                Doctor & Nurses
              </span>
            </label>
          </div>

          {/* Search Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleSearch}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              SEARCH
            </button>
          </div>
        </div>

        {/* Add Flight Modal */}
        {isAddModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-md w-full mx-4 transform transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900">
                  Add New Flight
                </h3>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>
              <form onSubmit={handleAddFlight} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Airline
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., IndiGo"
                    value={newFlight.airline}
                    onChange={(e) =>
                      setNewFlight({ ...newFlight, airline: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base bg-gray-50 shadow-sm placeholder-gray-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    From
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Delhi"
                    value={newFlight.from}
                    onChange={(e) =>
                      setNewFlight({ ...newFlight, from: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base bg-gray-50 shadow-sm placeholder-gray-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    To
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Mumbai"
                    value={newFlight.to}
                    onChange={(e) =>
                      setNewFlight({ ...newFlight, to: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base bg-gray-50 shadow-sm placeholder-gray-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Departure Time
                  </label>
                  <input
                    type="datetime-local"
                    value={newFlight.departureTime}
                    onChange={(e) =>
                      setNewFlight({
                        ...newFlight,
                        departureTime: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base bg-gray-50 shadow-sm transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Arrival Time
                  </label>
                  <input
                    type="datetime-local"
                    value={newFlight.arrivalTime}
                    onChange={(e) =>
                      setNewFlight({
                        ...newFlight,
                        arrivalTime: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base bg-gray-50 shadow-sm transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Price (₹)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 4500"
                    value={newFlight.price}
                    onChange={(e) =>
                      setNewFlight({ ...newFlight, price: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base bg-gray-50 shadow-sm placeholder-gray-400 transition-all duration-300"
                  />
                </div>
                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Add Flight
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Book Flight Modal */}
        {isBookModalOpen && selectedFlight && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-md w-full mx-4 transform transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900">
                  Book Flight
                </h3>
                <button
                  onClick={() => setIsBookModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>
              <div className="mb-6 bg-blue-50 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-600">
                  Flight Details
                </p>
                <p className="text-base font-semibold text-gray-800">
                  {selectedFlight.airline}: {selectedFlight.from} →{" "}
                  {selectedFlight.to}
                </p>
                <p className="text-sm text-gray-600">
                  Departure:{" "}
                  {new Date(selectedFlight.departureTime).toLocaleString(
                    "en-US",
                    {
                      dateStyle: "medium",
                      timeStyle: "short",
                    }
                  )}
                </p>
              </div>
              <form onSubmit={handleBookFlight} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Passenger Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., John Doe"
                    value={bookingDetails.passengerName}
                    onChange={(e) =>
                      setBookingDetails({
                        ...bookingDetails,
                        passengerName: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base bg-gray-50 shadow-sm placeholder-gray-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="e.g., john@example.com"
                    value={bookingDetails.email}
                    onChange={(e) =>
                      setBookingDetails({
                        ...bookingDetails,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base bg-gray-50 shadow-sm placeholder-gray-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Number of Travellers
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={bookingDetails.travellers}
                    onChange={(e) =>
                      setBookingDetails({
                        ...bookingDetails,
                        travellers: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base bg-gray-50 shadow-sm transition-all duration-300"
                  />
                </div>
                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsBookModalOpen(false)}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={() => alert("Confirm Booking")}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {filteredFlights.length === 0 ? (
          <p className="text-center text-white text-lg sm:text-xl font-medium bg-black/50 py-8 px-6 rounded-2xl shadow-lg border border-gray-100">
            {searchParams.from || searchParams.to || searchParams.departureDate
              ? "No flights match your search."
              : "No flights available at the moment."}
          </p>
        ) : (
          <div className="overflow-x-auto  rounded-2xl shadow-lg border border-gray-100 backdrop-blur-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-400 text-white text-xs sm:text-sm md:text-base font-semibold">
                <tr>
                  <th className="px-4 py-4 sm:px-6 sm:py-5 text-left">ID</th>
                  <th className="px-4 py-4 sm:px-6 sm:py-5 text-left">
                    Airline
                  </th>
                  <th className="px-4 py-4 sm:px-6 sm:py-5 text-left">From</th>
                  <th className="px-4 py-4 sm:px-6 sm:py-5 text-left">To</th>
                  <th className="px-4 py-4 sm:px-6 sm:py-5 text-left">
                    Departure
                  </th>
                  <th className="px-4 py-4 sm:px-6 sm:py-5 text-left">
                    Arrival
                  </th>
                  <th className="px-4 py-4 sm:px-6 sm:py-5 text-left">
                    Price (₹)
                  </th>
                  <th className="px-4 py-4 sm:px-6 sm:py-5 text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-800 text-xs sm:text-sm md:text-base">
                {filteredFlights.map((flight) => (
                  <tr
                    key={flight.id}
                    className="hover:bg-blue-600/30 text-gray-200 transition-colors duration-300"
                  >
                    <td className="px-4 py-3 sm:px-6 sm:py-4 truncate max-w-[80px] sm:max-w-[120px]">
                      {flight.id.slice(0, 8)}...
                    </td>
                    <td className="px-4 py-3 sm:px-6 sm:py-4 font-medium text-gray-300">
                      {flight.airline}
                    </td>
                    <td className="px-4 py-3 sm:px-6 sm:py-4 text-gray-200">{flight.from}</td>
                    <td className="px-4 py-3 sm:px-6 sm:py-4 text-gray-200">{flight.to}</td>
                    <td className="px-4 py-3 sm:px-6 sm:py-4 text-gray-200">
                      {new Date(flight.departureTime).toLocaleString("en-US", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </td>
                    <td className="px-4 py-3 sm:px-6 sm:py-4">
                      {new Date(flight.arrivalTime).toLocaleString("en-US", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </td>
                    <td className="px-4 py-3 sm:px-6 sm:py-4 font-semibold text-gray-300">
                      ₹{flight.price.toLocaleString("en-IN")}
                    </td>
                    <td className="px-4 py-3 sm:px-6 sm:py-4 flex justify-center gap-2 sm:gap-4">
                      <button
                        onClick={() => handleFlightClick(flight.id)}
                        className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => openBookModal(flight)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                      >
                        Book Flight
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightList;