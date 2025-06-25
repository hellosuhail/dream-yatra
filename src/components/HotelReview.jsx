import React, { useRef, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { IoMdPerson } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { GrFormSubtract } from "react-icons/gr";
import { FaPlus, FaStar } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdOutlinePool } from "react-icons/md";
import { hotelData } from "./CardData/hotels";
import HotelRoom from "./HotelRoom";
import HotelsDeals from "./HotelsDeals";
import { a } from "framer-motion/client";

const recommendedList = ["Delhi", "Mumbai", "Hyderabad", "Goa", "Manali"];
// const hotelDataOne = [{ images: ["https://source.unsplash.com/400x300/?hotel"] }];

const atAGlance = [
  { title: "Hotel size", text: ["207 rooms", "Arranged over 33 floors"] },
  {
    title: "Arriving/Leaving",
    text: [
      "Check-in start time: 3:00 PM; check-in end time: 3:00 AM",
      "Express check-out available",
      "Late check-in subject to availability",
      "Minimum check-in age – 18",
      "Check-out time is noon",
      "Contactless check-out",
      "Late check-out subject to availability",
    ],
  },
  {
    title: "Special check-in instructions",
    text: [
      "This property offers transfers from the airport (surcharges may apply); to arrange pick-up, guests must contact the property 24 hours prior to arrival, using the contact information on the booking confirmation",
      "Guests will receive an email within 48 hours before arrival with check-in instructions; front desk staff will greet guests on arrival at the property",
      "If you are planning to arrive after midnight please contact the property in advance using the information on the booking confirmation",
      "For any questions, please contact the property using the information on the booking confirmation",
      "To register at this property, guests who are Indian citizens must provide a valid photo identity card issued by the Government of India; travelers who are not citizens of India must present a valid passport and visa."
    ],
  }
];
const requiredAtCheck = [
  {
    title: "Required at check-in",
    text: [
      "Credit card, debit card or cash deposit required for incidental charges",
      "Government-issued photo ID may be required",
      "Minimum check-in age is 18",
    ],
  },
  { title: "Children", text: ["hildren (18 years old and younger) stay free when occupying the parent or guardian's room using existing bedding", "ABabysitting*"] },
  { title: "Pets", text: ["Pets allowed (1 total)*", "Service animals welcome","Specific rooms only, restrictions apply*","Pets must be supervised","Food and water bowls available"] },
  { title: "Internet", text: ["Free WiFi in public areas", "Free Wi-Fi in rooms (speed: 25+ Mbps)"] },
  { title: "Parking", text: ["Free on-site valet parking", "Wheelchair-accessible parking on site"] },
  { title: "Transfers", text: ["Airport shuttle on request (available 24 hours a day)*"] },
  { title: "Other information", text: ["Designated smoking area (fines apply)"] },
];

const HotelReview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState({ adults: 2, children: 0 });
  const [filteredList, setFilteredList] = useState(recommendedList);

  const navigate = useNavigate();

  const navegateTo = (id) => {
    navigate(`/hotels/booking`);
  };

  const { id } = useParams();
  const hotel = hotelData.find((e) => e.id === id);
  console.log("Route param id:", id);

 

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this hotel!",
          text: "Amazing hotel I found on Dreamviewer Yatra.",
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  const searchRef = useRef(null);

  const handleChange = (e) => {
    const input = e.target.value;
    setSearchTerm(input);
    const filtered = recommendedList.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredList(filtered);
    setShowSuggestions(true);
  };

  const showHandler = () => {
    setShow((prev) => !prev);
  };

  const updateCounter = (type, action) => {
    setCounter((prev) => {
      const value = type === "adults" ? prev.adults : prev.children;
      const newValue =
        action === "increase" ? value + 1 : Math.max(0, value - 1);
      return { ...prev, [type]: newValue };
    });
  };

  return (
    <div>
      <div className="bg-sky-600 h-12 flex items-center px-10 text-white text-sm font-medium shadow">
        <span className="mr-2">Dreamviewer Yatra</span> /{" "}
        <span className="ml-2">Hotels</span>
      </div>
      <div className="flex items-center">
        <Link
          to="/hotels"
          className="flex m-12 mb-0 items-center gap-2 text-base sm:text-lg text-sky-600 hover:text-sky-800 transition-colors"
        >
          <GoArrowLeft className="text-xl" />
          Back
        </Link>
      </div>

      <div className="md:flex w-full px-12 justify-between items-center py-6 bg-white shadow-sm">
        {/* Back Link */}
        <div
          className="md:flex md:px-12 py-12 w-full gap-4 relative"
          ref={searchRef}
        >
          <input
            type="text"
            value={searchTerm}
            onFocus={() => setShowSuggestions(true)}
            onChange={handleChange}
            placeholder="Search places or hotels..."
            className="md:w-1/4 border px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="date"
            className="md:w-1/4 border w-full mt-2 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div
            onClick={showHandler}
            className="flex mt-2 gap-2 md:w-1/4 items-center border border-black rounded py-2 px-4 cursor-pointer"
          >
            <IoMdPerson />
            {counter.adults + counter.children} travellers, 1 room
          </div>

          {show && (
            <div className="absolute top-24 mdd:right-36 bg-white border border-gray-300 shadow-lg rounded-lg p-4 w-64 z-50 space-y-4">
              <p className="font-semibold text-lg mb-2">Room 1</p>

              {/* Adults */}
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

              {/* Children */}
              <div className="flex justify-between items-center">
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

          <button className="btn rounded-full w-full md:w-auto mt-2 text-white bg-blue-600 text-2xl px-4">
            <CiSearch />
          </button>

          {/* Suggestions */}
          {showSuggestions && (
            <ul className="absolute top-20 left-12 w-1/4 bg-white border border-gray-200 mt-1 rounded-md shadow-md max-h-60 overflow-y-auto z-10">
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

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="btn flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          <FaShareAlt className="text-lg" />
          Share
        </button>
      </div>

      <div
        key={id}
        className="md:flex flex-col md:flex-row gap-6 px-8 py-6 bg-white"
      >
        {/* Main Image */}
        <div className="w-full md:w-2/3">
          <img
            src={hotel.images[0]}
            alt="Main hotel"
            className="w-full md:h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 gap-3 w-full md:w-1/3">
          {hotel.images.map((i) => (
            <img
              key={i}
              src={i}
              alt={`Thumbnail ${i}`}
              className="w-full h-36 object-cover rounded-lg shadow-sm hover:scale-105 hover:shadow-md transition-transform duration-300"
            />
          ))}
        </div>
      </div>
      <div className="w-full overflow-hidden bg-white">
        {/* Navigation Tabs */}
        <div className="border-b w-full px-6 md:px-28 border-gray-300">
          <ul className="flex gap-6 items-center text-sm md:text-base py-4 font-medium text-gray-700">
            {["Overview", "About", "Room", "Accessibility", "Policies"].map(
              (tab, idx) => (
                <li
                  key={idx}
                  className="hover:text-accent cursor-pointer transition-colors duration-200"
                >
                  {tab}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-28 py-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {hotel.name}
            </h1>
            <div className="flex text-yellow-500 mt-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="mr-1 text-lg" />
              ))}
            </div>
            <div className="flex gap-10 text-green-500">
              <p>Full refundable</p>
              <p>Reserve now, pay later</p>
            </div>
            <div className="flex">
              <span className="p-1 rounded-lg bg-green-500 font-bold text-white mr-2">
                {" "}
                8.0{" "}
              </span>
              Very good
            </div>
            {/* The button to open modal */}
            <label htmlFor="my_modal_7" className="link mt-6 text-blue-600">
              See all 228 reviews
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle " />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <h3 className="text-lg font-bold">Guest reviews</h3>
                <p className="py-4">This modal works with a hidden checkbox!</p>
              </div>
              <label className="modal-backdrop" htmlFor="my_modal_7">
                Close
              </label>
            </div>

            <p className="pt-6 font-bold text-lg">About this property</p>
            <p className="py-2">
              Luxury hotel in Jaipur with 2 restaurants and spa
            </p>
            <ul className="flex flex-wrap justify-between w-50">
              <li className="flex p-2 items-center gap-2 ">
                <MdOutlinePool />
                Pool
              </li>
              <li className="flex p-2 items-center gap-2 ">
                <MdOutlinePool />
                Pool
              </li>
              <li className="flex p-2 items-center gap-2 ">
                <MdOutlinePool />
                Pool
              </li>
              <li className="flex p-2 items-center gap-2 ">
                <MdOutlinePool />
                Pool
              </li>
            </ul>
            <label htmlFor="my_modal_7" className="link mt-6 text-blue-600">
              See all about this property
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle " />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <h3 className="text-lg font-bold">Guest reviews</h3>
                <p className="py-4">This modal works with a hidden checkbox!</p>
              </div>
              <label className="modal-backdrop" htmlFor="my_modal_7">
                Close
              </label>
            </div>
            <div className="w-full mt-4 flex justify-between">
              <button
                onClick={() => navegateTo(hotelData.id)}
                className="btn btn-accent"
              >
                Book Now
              </button>
              <button className="link text-blue-500 ">Call Now</button>
            </div>
          </div>

          {/* Explore the Area */}
          <div className=" font-medium  mt-4 md:mt-0 ">
            Explore the area
            <div className="w-full   mt-10  lg:pl-10">
              <div className="md:w-full w-[85%] border-1 rounded-lg h-80  overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086639391105!2d144.96305761560717!3d-37.81410797975147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f00f3c3f%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1612914831197!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Company Location"
                ></iframe>
              </div>{" "}
              <p className="">{hotel.compliteLocation}</p>
            </div>
            <div className="w-full flex  justify-center gap-6 py-8 items-center">
              <ul className="flex flex-col justify-between w-50">
                <li className="flex p-2 items-center gap-2 ">Nearest place</li>
                <li className="flex p-2 items-center gap-2 ">Nearest place</li>
                <li className="flex p-2 items-center gap-2 ">Nearest place</li>
                <li className="flex p-2 items-center gap-2 ">Nearest place</li>
              </ul>
              <div className="flex flex-col justify-between w-50">
                <p className="flex p-2 items-center gap-2 ">10 min walk</p>
                <p className="flex p-2 items-center gap-2 ">10 min walk</p>
                <p className="flex p-2 items-center gap-2 ">10 min walk</p>
                <p className="flex p-2 items-center gap-2 ">10 min walk</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-16">
        <h1 className="font-bold text-2xl">Choose your room</h1>
        <div
          className="md:flex md:px-12 py-6 md:py-12 w-full gap-4 relative"
          ref={searchRef}
        >
          <input
            type="date"
            placeholder="Search places or hotels..."
            className="date md:w-1/4 w-full mt-2 border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="date"
            className="md:w-1/4 w-full mt-2 border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div
            onClick={showHandler}
            className="flex gap-2 mt-2 items-center border border-black rounded py-2 px-4 cursor-pointer"
          >
            <IoMdPerson />
            {counter.adults + counter.children} 1 room,travellers
          </div>

          {show && (
            <div className="md:absolute md:top-24 md:right-36 bg-white border border-gray-300 shadow-lg rounded-lg p-4 w-64 z-50 space-y-4">
              <p className="font-semibold text-lg mb-2">Room 1</p>

              {/* Adults */}
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

              {/* Children */}
              <div className="flex justify-between items-center">
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
        </div>

        <div className="border-1 md:px-8 py-6 shadow-2xl border-gray-300 rounded-lg">
          <div className="md:w-1/2">
            <div className="collapse bg-base-100 border-base-300 border">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                Prices are lower than typical
              </div>
              <div className="collapse-content text-sm md:flex justify-between w-full">
                <div className="mt-2">
                  The nightly price before taxes and fees is lower than our
                  estimated range for similar properties on our site (in this
                  destination and others)
                </div>
                <div className="mt-2">hello</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex gap-4 md:px-12 py-12"></div>
      <HotelRoom hotel={hotel} />

      <div className="px-12 py-12">
        <h1 className="text-2xl font-bold">
          Similar properties to Taj Holiday Village Resort & Spa
        </h1>
        <div className="overflow-x-auto">
          <HotelsDeals />
        </div>
      </div>
      <div className="md:flex px-12 md:px-36">
        <p className="px-12 font-bold text-2xl">At a glance</p>
        <div className="md:flex gap-10 ">
          <div className=" flex flex-col">
            {atAGlance.map((data, index) => (
              <div key={index} className="w-70 m-2">
                <p className="font-semibold text-2xl">{data.title}</p>
                {data.text.map((text, index) => (
                  <div key={index} className="">
                    <p className="px-2 py-[4px]">{text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className=" flex flex-col">
            {requiredAtCheck.map((data, index) => (
              <div key={index} className="w-70 m-2">
                <p className="font-semibold text-2xl">{data.title}</p>
                {data.text.map((text, index) => (
                  <div key={index} className="">
                    <p className="px-2 py-[4px]">{text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelReview;
