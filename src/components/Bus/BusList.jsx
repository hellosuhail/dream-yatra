import React, { useState } from "react";
import { BusFront, Clock, LocateFixed, Eye } from "lucide-react";
import { busTiming } from "./BusRouteTimng";
import { useNavigate, useParams } from "react-router-dom";

const filtersData = [
  "AC", "Non AC", "Sleeper", "Seater", "Single Seat",
  "Morning", "Evening", "Live Tracking"
];

const dummyBuses = [
  {
    id: 1,
    name: "RedBus Travels",
    type: "AC Sleeper",
    time: "10:00 AM",
    liveTracking: true,
    price: 499,
    rating: 4.5
  },
  {
    id: 2,
    name: "Greenline Express",
    type: "Non AC Seater",
    time: "6:30 AM",
    liveTracking: false,
    price: 399,
    rating: 4.0
  },
  {
    id: 3,
    name: "GoGoBus Elite",
    type: "AC Seater",
    time: "8:00 PM",
    liveTracking: true,
    price: 599,
    rating: 4.7
  },
  {
    id: 4,
    name: "RajExpress",
    type: "Sleeper Non AC",
    time: "11:30 PM",
    liveTracking: false,
    price: 299,
    rating: 3.9
  }
];

const BusList = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleFilterChange = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const { id } = useParams();
  const bus = busTiming.find((e) => String(e.id) === id);

  const navigate =useNavigate();

  const navigateHandle = () => {
  const newId = Math.floor(Math.random() * 10000); 
  navigate(`/bus/fillter/viewseat/${newId}`);

};

  const filteredBuses = dummyBuses.filter((bus) => {
    const timeHour = parseInt(bus.time.split(":")[0]);
    const isMorning = selectedFilters.includes("Morning") && timeHour < 12;
    const isEvening = selectedFilters.includes("Evening") && timeHour >= 12;

    const matchesBasicFilters = selectedFilters.every((filter) => {
      if (filter === "Morning") return isMorning;
      if (filter === "Evening") return isEvening;
      if (filter === "Live Tracking") return bus.liveTracking;
      return bus.type.toLowerCase().includes(filter.toLowerCase());
    });

    const priceMatch = bus.price >= minPrice && bus.price <= maxPrice;
    console.log(priceMatch)

    return matchesBasicFilters && priceMatch;
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-sky-100 to-blue-100 p-6 gap-6">

      
      <aside className="w-full md:w-1/4 bg-white/50 backdrop-blur-md rounded-xl p-6 shadow-md border">
        <h2 className="text-xl font-bold mb-4 text-blue-700">Filters</h2>

        
        <div className="flex flex-wrap gap-2 mb-6">
          {filtersData.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-3 py-1 rounded-full text-sm font-medium border ${
                selectedFilters.includes(filter)
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

      
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Price Range (₹)</h3>
          <input
            type="range"
            min={0}
            max={1000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="text-sm text-gray-700 mt-1">
            ₹{minPrice} – ₹{maxPrice}
          </div>
        </div>
      </aside>

      {/* Bus List */}
      <main className="w-full md:w-3/4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <BusFront className="w-6 h-6 text-blue-500" /> {bus?.place || "Route"} Available Buses
        </h2>

        {filteredBuses.length > 0 ? (
          filteredBuses.map((bus) => (
            <div
              key={bus.id}
              className="bg-white/70 backdrop-blur-md p-6 rounded-xl mb-6 shadow-md hover:shadow-xl transition-all border border-gray-200"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{bus.name}</h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-gray-600">
                    <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded">
                      {bus.type}
                    </span>
                    <span className="text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {bus.time}
                    </span>
                    {bus.liveTracking && (
                      <span className="text-sm flex items-center gap-1 text-green-600">
                        <LocateFixed className="w-4 h-4" /> Live Tracking
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-800">₹ {bus.price}</p>
                  <p className="text-sm text-yellow-600">⭐ {bus.rating} rating</p>
                  <button onClick={navigateHandle} className="mt-2 px-4 py-2 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white rounded flex items-center gap-2 text-sm">
                    <Eye className="w-4 h-4" /> View Seats
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 mt-10">No buses found with selected filters.</p>
        )}
      </main>
    </div>
  );
};

export default BusList;