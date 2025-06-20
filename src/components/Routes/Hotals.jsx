import React, { useMemo, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import Search from "../Search";
import HotalCard from "../HotalCard";
import Carousel from "../Carousel";
import { slider } from "../CardData/hotels";
import HotelsDeals from "../HotelsDeals";
import HotelsPopularArea from "../hotelsPopularArea";
import HotelAreas from "../HotelAreas";


const Hotals = () => {
  const [searchIn, setSearchIn] = useState("");

  const search = useMemo(
    () => (
      <div className="flex flex-col font-bold md:flex-row flex-wrap items-center w-full">
        <input
          value={searchIn}
          onChange={(e) => setSearchIn(e.target.value)}
          type="search"
          placeholder="Enter City,Location or  Hotal Name..."
          className="w-1/3 p-4  rounded h-16"
        />
        <input
          value={searchIn}
          onChange={(e) => setSearchIn(e.target.value)}
          type="date"
          className="w-1/3 p-3  rounded h-16"
        />
        <input
          value={searchIn}
          onChange={(e) => setSearchIn(e.target.value)}
          type="date"
          className="w-1/3  p-4  rounded h-16"
        />
    
      </div>
    ),
    [searchIn]
  );


  return (
    <div>
      <Search searchInput={search} />
      <HotalCard/>
      <div className="px-8 flex w-full justify-between ">
        <h1 className="font-semibold text-3xl">Find your new favorite place to stay</h1>
   <label className="input rounded-lg">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
      </div>
      <Carousel slides={slider}/>
      <HotelsDeals num={6} num1={0} title="The best last-minute holiday deals" />
      <HotelAreas/>
      <HotelsPopularArea/>



      
    </div>
  );
};

export default Hotals;
