import React, { useRef, useState } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { IoMdPerson } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import { GrFormSubtract } from 'react-icons/gr';
import { FaPlus, FaStar } from 'react-icons/fa';
import { FaShareAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlinePool } from 'react-icons/md';

const recommendedList = ['Delhi', 'Mumbai', 'Hyderabad', 'Goa', 'Manali'];
const hotelData = [{ images: ['https://source.unsplash.com/400x300/?hotel'] }];

const HotelReview = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState({ adults: 2, children: 0 });
  const [filteredList, setFilteredList] = useState(recommendedList);
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
      const value = type === 'adults' ? prev.adults : prev.children;
      const newValue =
        action === 'increase' ? value + 1 : Math.max(0, value - 1);
      return { ...prev, [type]: newValue };
    });
  };

  return (
    <div>
      
      <div className="bg-sky-600 h-12 flex items-center px-10 text-white text-sm font-medium shadow">
        <span className="mr-2">Dreamviewer Yatra</span> / <span className="ml-2">Hotels</span>
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
  <div className="md:flex px-12 py-12 w-full gap-4 relative" ref={searchRef}>
        <input
          type="text"
          value={searchTerm}
          onFocus={() => setShowSuggestions(true)}
          onChange={handleChange}
          placeholder="Search places or hotels..."
          className="w-1/4 border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="date"
          className="w-1/4 border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div
          onClick={showHandler}
          className="flex gap-2 items-center border border-black rounded py-2 px-4 cursor-pointer"
        >
          <IoMdPerson />
          {counter.adults + counter.children} travellers, 1 room
        </div>

        {show && (
          <div className="absolute top-24 right-36 bg-white border border-gray-300 shadow-lg rounded-lg p-4 w-64 z-50 space-y-4">
            <p className="font-semibold text-lg mb-2">Room 1</p>

            {/* Adults */}
            <div className="flex justify-between items-center">
              <p className="text-gray-700">Adults</p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateCounter('adults', 'decrease')}
                  className="btn btn-sm bg-gray-200 text-black rounded-full"
                >
                  <GrFormSubtract />
                </button>
                <p className="text-sm font-medium">{counter.adults}</p>
                <button
                  onClick={() => updateCounter('adults', 'increase')}
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
                  onClick={() => updateCounter('children', 'decrease')}
                  className="btn btn-sm bg-gray-200 text-black rounded-full"
                >
                  <GrFormSubtract />
                </button>
                <p className="text-sm font-medium">{counter.children}</p>
                <button
                  onClick={() => updateCounter('children', 'increase')}
                  className="btn btn-sm bg-gray-200 text-black rounded-full"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        )}

        <button className="btn rounded-full text-white bg-blue-600 text-2xl px-4">
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

<div className="md:flex flex-col md:flex-row gap-6 px-8 py-6 bg-white">
  {/* Main Image */}
  <div className="w-full md:w-2/3">
    <img
      src="/Images/hotels/Frederiksberg.webp"
      alt="Main hotel"
      className="w-full md:h-[400px] object-cover rounded-xl shadow-md"
    />
  </div>

  {/* Thumbnail Grid */}
  <div className="grid grid-cols-2 gap-3 w-full md:w-1/3">
    {[1, 2, 3, 4].map((i) => (
      <img
        key={i}
        src={`/Images/hotels/Frederiksberg1.jpg`}
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
      {['Overview', 'About', 'Room', 'Accessibility', 'Policies'].map((tab, idx) => (
        <li key={idx} className="hover:text-accent cursor-pointer transition-colors duration-200">
          {tab}
        </li>
      ))}
    </ul>
  </div>

  <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-28 py-6">
   
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">The LaLiT Jaipur</h1>
      <div className="flex text-yellow-500 mt-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="mr-1 text-lg" />
        ))}
      </div>
      <div className="flex gap-10 text-green-500">
        <p>Full refundable</p>
        <p>Reserve now, pay later</p>
      </div>
      <div className='flex'>
     <span className='p-1 rounded-lg bg-green-500 font-bold text-white mr-2'>   8.0 </span>
Very good
      </div>
      {/* The button to open modal */}
<label htmlFor="my_modal_7" className="link mt-6 text-blue-600">See all 228 reviews</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle " />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="text-lg font-bold">Guest reviews</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>

<p className='pt-6 font-bold text-lg'>About this property</p>
<p className="py-2">Luxury hotel in Jaipur with 2 restaurants and spa</p>
<ul className='flex flex-wrap justify-between w-50'>
  <li className='flex p-2 items-center gap-2 '><MdOutlinePool />Pool</li>
  <li className='flex p-2 items-center gap-2 '><MdOutlinePool />Pool</li>
  <li className='flex p-2 items-center gap-2 '><MdOutlinePool />Pool</li>
  <li className='flex p-2 items-center gap-2 '><MdOutlinePool />Pool</li>
</ul>
<label htmlFor="my_modal_7" className="link mt-6 text-blue-600">See all about this property</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle " />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="text-lg font-bold">Guest reviews</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>
    </div>

    {/* Explore the Area */}
    <div className=" font-medium  mt-4 md:mt-0 ">
      Explore the area
           <div className="w-full   mt-10  lg:pl-10">
  <div className="w-full border-1 rounded-lg h-80  overflow-hidden shadow-md">
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
 
  </div>   <p>B, 2C Jagatpura Road, Near Jawahar Circle, Jaipur, Rajasthan, 302017</p>


</div>
<div className="w-full flex  justify-center gap-6 py-8 items-center">
<ul className='flex flex-col justify-between w-50'>
  <li className='flex p-2 items-center gap-2 '>Nearest place</li>
  <li className='flex p-2 items-center gap-2 '>Nearest place</li>
  <li className='flex p-2 items-center gap-2 '>Nearest place</li>
  <li className='flex p-2 items-center gap-2 '>Nearest place</li>
</ul> 
<div className="flex flex-col justify-between w-50">

  <p className='flex p-2 items-center gap-2 '>10 min walk</p>
  <p className='flex p-2 items-center gap-2 '>10 min walk</p>
  <p className='flex p-2 items-center gap-2 '>10 min walk</p>
  <p className='flex p-2 items-center gap-2 '>10 min walk</p>
</div>
</div>
    </div>

  </div>
</div>


<div className="px-16">
  <h1 className='font-bold text-2xl'>Choose your room</h1>
  <div className="md:flex px-12 py-12 w-full gap-4 relative" ref={searchRef}>
        <input
         type='date'
          placeholder="Search places or hotels..."
          className="date w-1/4 border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="date"
          className="w-1/4 border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div
          onClick={showHandler}
          className="flex gap-2 items-center border border-black rounded py-2 px-4 cursor-pointer"
        >
          <IoMdPerson />
          {counter.adults + counter.children}  1 room,travellers
        </div>

        {show && (
          <div className="absolute top-24 right-36 bg-white border border-gray-300 shadow-lg rounded-lg p-4 w-64 z-50 space-y-4">
            <p className="font-semibold text-lg mb-2">Room 1</p>

            {/* Adults */}
            <div className="flex justify-between items-center">
              <p className="text-gray-700">Adults</p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateCounter('adults', 'decrease')}
                  className="btn btn-sm bg-gray-200 text-black rounded-full"
                >
                  <GrFormSubtract />
                </button>
                <p className="text-sm font-medium">{counter.adults}</p>
                <button
                  onClick={() => updateCounter('adults', 'increase')}
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
                  onClick={() => updateCounter('children', 'decrease')}
                  className="btn btn-sm bg-gray-200 text-black rounded-full"
                >
                  <GrFormSubtract />
                </button>
                <p className="text-sm font-medium">{counter.children}</p>
                <button
                  onClick={() => updateCounter('children', 'increase')}
                  className="btn btn-sm bg-gray-200 text-black rounded-full"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        )}

      

     
      </div>

      <div className="border-1 px-8 py-6 shadow-2xl border-gray-300 rounded-lg">
        <div className="w-1/2">
<div className="collapse bg-base-100 border-base-300 border">
  <input type="checkbox" />
  <div className="collapse-title font-semibold">Prices are lower than typical</div>
  <div className="collapse-content text-sm flex justify-between w-full">
  <div className="">
   The nightly price before taxes and fees is lower than our estimated range for similar properties on our site (in this destination and others)
  </div>
  <div  className="">hello</div>
</div></div>
</div>
      </div>
</div>

<div className="flex gap-4 px-12 py-12">
  <div className="border rounded-xl p-1 text-sm">All Room</div>
  <div className="border rounded-xl p-1 text-sm">1 bed</div>
  <div className="border rounded-xl p-1 text-sm">2 beds</div>
</div>

    </div>
  );
};

export default HotelReview;
