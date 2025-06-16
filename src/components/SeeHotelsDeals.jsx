import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SeeHotelsDeals = () => {
  return (
    <div>
      <div className="bg-sky-600 h-12 flex items-center px-10 text-white text-sm font-medium shadow">
        <span className="mr-2">Dreamviewer Yatra</span> /
        <span className="ml-2">Contact Us</span>
      </div>
      <div className="w-full mb-6 px-12 py-8 flex justify-start">
        <Link
          to="/hotels"
          className="flex items-center gap-2 text-base sm:text-lg text-sky-600 hover:text-sky-800"
        >
          <GoArrowLeft className="text-xl" />
          Back
        </Link>
      </div>

      <div className="felx justify-center items-center w-full px-28 py-4">
        <div className="bg-[url(/Images/hotels/mumbai.jpg)] w-6xl  bg-red-500 rounded-xl h-90">
          <div className="w-90">
            <h1 className="px-14 pt-12 text-white text-2xl block">
              <span>A couple on a scooter rides off </span>
              <span>from a restaurant in the city.</span>
            </h1>
            <p className="px-14 py-2 text-white ">Last-minute summer deals</p>
          </div>
        </div>
      </div>
      <div className="border-1 border-gray-200 m-14 flex p-4 justify-between">
<div className="join border-2 flex justify-between rounded-lg items-center text-lg p-4 border-gray-300 w-1/3 ">
<IoLocationOutline/>
<input type="text" className="w-full outline-0" placeholder="search here" />
</div>
<input type="date" className="input p-4" />
<input type="date" className="input p-4" />
      </div>
    </div>
  );
};

export default SeeHotelsDeals;
