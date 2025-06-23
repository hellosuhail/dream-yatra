import React, { useEffect, useRef, useState } from "react";
import { CiSearch, CiWifiOn } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import {
  FaEarthOceania,
  FaHotTubPerson,
  FaPlus,
  FaSquarespace,
} from "react-icons/fa6";
import { GrFormSubtract } from "react-icons/gr";
import { hotelData, hotelFilterData } from "./CardData/hotels";
import { useNavigate } from "react-router-dom";
import {
  MdAirportShuttle,
  MdCurrencyRupee,
  MdOutlinePets,
  MdOutlinePool,
  MdSoupKitchen,
} from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { RiRestaurantLine } from "react-icons/ri";
import { PiWashingMachine } from "react-icons/pi";

const recommendedList = [
  "Bali - Expoinn",
  "Maldives - Sea View Resort",
  "Dubai - Palm Inn",
  "Goa - Ocean Breeze",
  "Paris - Eiffel Suites",
  "London - Royal Stay",
];
const placeFilter = [
  "Ocean view",
  "Family friendly",
  "Breakfast included",
  "Reserve now, pay later",
  "Hotel",
];
const Amenities = [
  { icon: <FaEarthOceania />, title: "Ocean view" },
  { icon: <MdOutlinePool />, title: "Pool" },
  { icon: <CiWifiOn />, title: "Kitchen" },
  { icon: <MdSoupKitchen />, title: "Kitchen" },
  { icon: <TbAirConditioning />, title: "Air Condition" },
  { icon: <CgGym />, title: "Gym" },
  { icon: <MdOutlinePets />, title: "Pet Frindly" },
  { icon: <PiWashingMachine />, title: "Washer and dryer " },
  { icon: <FaHotTubPerson />, title: "Hot Tup" },
  { icon: <FaSquarespace />, title: "Spa" },
  { icon: <RiRestaurantLine />, title: "Restaurant" },
  { icon: <MdAirportShuttle />, title: "Airport shuttle included" },
];
const HotelSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeAmenity, setActiveAmenity] = useState(null);
  const [show, setShow] = useState(false);
  const [counter, setCounters] = useState({ adults: 0, children: 0 });
  const [filteredList, setFilteredList] = useState(recommendedList);
  const [imageIndexes, setImageIndexes] = useState(hotelData.map(() => 0));
  const [sliderValue, setSliderValue] = useState(0); // default starting value

  const searchRef = useRef(null);

  const navigate = useNavigate();
  
const navigateToReview=(id)=>{
  navigate(`/hotels/review/${id}`)
}
  const navigateHandle = () => {
    navigate("/hotels/recommended");
  };
  const maxPrice = 28000;

  // Map slider value (0–100) to price range (0–28000)
  const currentPrice = Math.round((sliderValue / 100) * maxPrice);
  const handlePrev = (index) => {
    setImageIndexes((prev) =>
      prev.map((imgIdx, i) =>
        i === index
          ? imgIdx === 0
            ? hotelData[i].images.length - 1
            : imgIdx - 1
          : imgIdx
      )
    );
  };

  const handleNext = (index) => {
    setImageIndexes((prev) =>
      prev.map((imgIdx, i) =>
        i === index ? (imgIdx + 1) % hotelData[i].images.length : imgIdx
      )
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = recommendedList.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredList(filtered);
  };

  const showHandler = () => {
    setShow(!show);
  };

  const updateCounter = (type, action) => {
    setCounters((prev) => {
      const current = prev[type];

      if (action === "decrease" && current === 0) return prev;

      return {
        ...prev,
        [type]: action === "increase" ? current + 1 : current - 1,
      };
    });
  };
  return (
    <div>
      <div className="md:flex px-12 py-12 w-full  gap-10 mt-8" ref={searchRef}>
        <input
          type="text"
          value={searchTerm}
          onFocus={() => setShowSuggestions(true)}
          onChange={handleChange}
          placeholder="Search places or hotels..."
          className="md:w-1/4 w-full mt-2 border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="date"
          placeholder="Search places or hotels..."
          className="md:w-1/4 w-full mt-2 border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div
          onClick={showHandler}
          className="flex gap-2 cursor-pointer border-1 mt-2 items-center border-black pr-18  rounded py-2 px-4"
        >
          <IoMdPerson /> 2 travellers, 1 room
        </div>
        {show && (
          <div className="absolute top-24 right-36 bg-white border border-gray-300 shadow-lg rounded-lg p-4 w-64 z-50 space-y-4">
            <p className="font-semibold text-lg mb-2">Room 1</p>

            {/* Adults Section */}
            <div className="flex justify-between items-center">
              <p className="text-gray-700">Adults</p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateCounter("adults", "decrease")}
                  className="btn btn-sm bg-gray-200 text-black rounded-full"
                >
                  <GrFormSubtract />
                </button>
                <p className="text-sm font-medium">{counter.adults}</p>
                <button
                  onClick={() => updateCounter("adults", "increase")}
                  className="btn btn-sm bg-gray-200 text-black rounded-full"
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            {/* Children Section */}
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-700">Children</p>
                <p className="text-xs text-gray-500">Ages 0 to 17</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateCounter("children", "decrease")}
                  className="btn btn-sm bg-gray-200 text-black rounded-full"
                >
                  <GrFormSubtract />
                </button>
                <p className="text-sm font-medium">{counter.children}</p>
                <button
                  onClick={() => updateCounter("children", "increase")}
                  className="btn btn-sm bg-gray-200 text-black rounded-full"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        )}
        <button className="btn rounded-full w-full md:w-auto mt-2 text-white bg-blue-600 text-3xl">
          <CiSearch />
        </button>
        {showSuggestions && (
          <ul className="absolute left-0 right-0 bg-white border border-gray-200 mt-1 rounded-md shadow-md max-h-60 overflow-y-auto z-10">
            {filteredList.length > 0 ? (
              filteredList.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSearchTerm(item);
                    setShowSuggestions(false);
                  }}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                >
                  {item}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No matches found</li>
            )}
          </ul>
        )}
      </div>

      <div className="flex ">
        <div className="w-96 bg-base-300 py-12 px-12">
          <h1 className="text-3xl">Fillter by</h1>
          <p className="text-xl py-4">Popular filters</p>
          {placeFilter.map((place, index) => (
            <div key={index} className="flex gap-2 py-2">
              <input type="checkbox" />
              {place}
            </div>
          ))}

          <div className="py-12">
            <p className="text-lg font-semibold mb-4">Nightly Price</p>

            <div className="flex gap-4 mb-6">
              {/* Min Price Display */}
              <div className="border px-4 py-2 rounded w-1/2">
                <p className="text-sm text-gray-600 mb-1">Min</p>
                <p className="flex items-center text-base font-medium">
                  <MdCurrencyRupee /> {currentPrice}
                </p>
              </div>

              {/* Max Price Display */}
              <div className="border px-4 py-2 rounded w-1/2">
                <p className="text-sm text-gray-600 mb-1">Max</p>
                <p className="flex items-center text-base font-medium">
                  <MdCurrencyRupee /> {maxPrice}
                </p>
              </div>
            </div>

            {/* Slider */}
            <input
              type="range"
              min={0}
              max={100}
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="range range-accent w-full"
            />
          </div>
          <div className="py-6">
            <p>Stay Options</p>
            <div className="py-2 flex gap-2">
              <input
                type="radio"
                name="radio-6"
                className="radio radio-accent"
                defaultChecked
              />
              <label htmlFor="stay-option">Any</label>
            </div>
            <div className="py-2 flex gap-2">
              <input
                type="radio"
                name="radio-6"
                className="radio radio-accent"
                defaultChecked
              />
              <label htmlFor="stay-option">Hotels</label>
            </div>
            <div className="py-2 flex gap-2">
              <input
                type="radio"
                name="radio-6"
                className="radio radio-accent"
                defaultChecked
              />
              <label htmlFor="stay-option">Homes</label>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full">
              <p className="text-lg font-semibold mb-4">Amenities</p>

              <div className="grid grid-cols-2 gap-4">
                {Amenities.map((item, index) => {
                  const isActive = activeAmenity === index;

                  return (
                    <button
                      key={index}
                      onClick={() => setActiveAmenity(index)}
                      className={`flex flex-col items-center justify-center text-center border rounded-lg p-4 transition-all duration-200 shadow-sm hover:shadow-md
                ${
                  isActive
                    ? "bg-accent text-white border-accent"
                    : "bg-white text-gray-800"
                }
              `}
                    >
                      <div
                        className={`text-2xl mb-2 ${
                          isActive ? "text-white" : "text-accent"
                        }`}
                      >
                        {item.icon}
                      </div>
                      <p className="text-sm font-medium">{item.title}</p>
                    </button>
                  );
                })}
              </div>
            </div>
            {hotelFilterData.map((item,index)=>(
            <div key={index} className="">
            <h1 className="text-lg pt-8 pb-4 font-bold">{item.title}</h1>
{item.type.map((data,index)=>(
            <div key={index} className="flex gap-2 py-2">
              <input type="checkbox" />
             {data}
            </div>))}
           </div>))}
            
         
          </div>
        </div>
        <div className="w-full flex flex-col space-y-6 px-4 md:px-8 lg:px-16">
          <div className="dropdown flex flex-col border-1 w-70 rounded-lg">
            <label className="text-[10px] font-extrabold">sort by</label>
  <div tabIndex={0} role="button" className="cursor-pointer m-1 py-0 px-18">Recommended</div>
  <ul tabIndex={0} className=" absolute left-20 top-10 dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li className=" border-b-1 d border-gray-400"><a>Price: low to high</a></li>
    <li className=" border-b-1 d border-gray-400" ><a>high to low</a></li>
    <li className=" border-b-1 d border-gray-400"><a>Guest rating + our choice</a></li>
    <li className=" border-b-1 d border-gray-400"><a>Distance from city center </a></li>
  </ul>
</div>
          {hotelData.map((data, index) => (
            <div
              key={data.id}
              className="card bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row max-w-4xl mx-auto hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image section */}
              <figure className="relative md:w-48 md:h-40 flex-shrink-0">
                <img
                  onClick={()=>navigateToReview(data.id)}
                  src={data.images[imageIndexes[index]]}
                  alt={`slide-${imageIndexes[index]}`}
                  className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none cursor-pointer"
                />
                <div className="absolute left-2 right-2 top-1/2 flex justify-between -translate-y-1/2">
                  <button
                    className="btn btn-circle btn-sm bg-white bg-opacity-80 hover:bg-opacity-100"
                    onClick={() => handlePrev(index)}
                    aria-label="Previous image"
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-circle btn-sm bg-white bg-opacity-80 hover:bg-opacity-100"
                    onClick={() => handleNext(index)}
                    aria-label="Next image"
                  >
                    ❯
                  </button>
                </div>
              </figure>

              {/* Text content section */}
              <div className="card-body p-6 flex flex-col justify-between md:w-[calc(100%-12rem)] rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
                <div>
                  <h2 className="card-title text-xl font-semibold flex items-center space-x-3">
                    <span>{data.name}</span>
                    <span className="badge badge-secondary text-sm">
                      {data.label}
                    </span>
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">{data.location}</p>
                  <p className="text-sm text-gray-800 mt-2">
                    <strong>{data.rating} / 10</strong> – {data.label} (
                    {data.reviews} reviews)
                  </p>

                  <div className="mt-4 space-y-1">
                    <p className="line-through text-sm text-gray-400">
                      {data.originalPrice} {data.currency}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {data.currentPrice} {data.currency}
                    </p>
                    <p className="text-xs text-gray-500">
                      {data.perNight} {data.currency} per night incl. taxes
                    </p>
                  </div>
                </div>

                <div className="card-actions flex justify-between items-center mt-6">
                  {/* <div className="badge badge-outline text-green-600 font-semibold px-3 py-1 rounded-md">
            {data.discount}
          </div>
           <button className="btn btn-accent text-white px-6 py-2 rounded-md hover:bg-accent-focus transition-colors">
            Book Now
          </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;
