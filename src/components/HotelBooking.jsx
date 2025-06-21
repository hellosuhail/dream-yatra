import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { MdCurrencyRupee } from "react-icons/md";
import { Link } from "react-router-dom";

const Booking = () => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const pricePerNight = 3200;
  const nights =
    checkIn && checkOut
      ? Math.max(
          1,
          (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
        )
      : 1;
  const total = pricePerNight * nights;

  return (
    <> <div className="bg-sky-600 h-12 flex items-center px-10 text-white text-sm font-medium shadow">
          <span className="mr-2">Dreamviewer Yatra</span> /
          <span className="ml-2">Contact Us</span>
        </div><div className="w-full mb-6 px-12 py-8 flex justify-start">
          <Link
            to="/hotels"
            className="flex items-center gap-2 text-base sm:text-lg text-sky-600 hover:text-sky-800"
          >
            <GoArrowLeft className="text-xl" />
            Back
          </Link>
        </div>
      <div className="max-w-4xl mx-auto px-4 py-10">
       
        
        {/* Hotel Overview */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h1 className="text-2xl font-bold mb-2">Hotel Paradise Residency</h1>
          <p className="text-gray-600 mb-4">Delhi, India</p>
          <img
            src="/Images/hotel_booking.jpg"
            alt="Hotel Room"
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <p className="text-gray-700">
            Enjoy your stay at our premium property with all modern amenities
            including free Wi-Fi, 24/7 room service, and more.
          </p>
        </div>

        {/* Booking Form */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Side */}
          <div className="space-y-6">
            {/* Dates */}
            <div>
              <label className="block font-medium mb-1">Check-in</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Check-out</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
              />
            </div>

            {/* Guests */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Adults</label>
                <input
                  type="number"
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  min={1}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Children</label>
                <input
                  type="number"
                  value={children}
                  onChange={(e) => setChildren(Number(e.target.value))}
                  min={0}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Summary */}
          <div className="bg-gray-50 border rounded-lg p-6 shadow">
            <h2 className="text-lg font-semibold mb-4">Booking Summary</h2>
            <div className="space-y-2">
              <p>
                <strong>Guests:</strong> {adults} Adults, {children} Children
              </p>
              <p>
                <strong>Dates:</strong> {checkIn || "–"} to {checkOut || "–"}
              </p>
              <p>
                <strong>Price per night:</strong> ₹{pricePerNight}
              </p>
              <p>
                <strong>Nights:</strong> {nights}
              </p>
              <hr className="my-3" />
              <p className="text-xl font-bold flex items-center gap-1">
                <MdCurrencyRupee /> {total.toLocaleString("en-IN")}
              </p>
            </div>
            <button className="btn btn-accent text-white w-full mt-6 py-2 rounded-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
