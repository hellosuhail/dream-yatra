import React, { useMemo, useState } from "react";
import Carousel from "../Carousel";
import { motion } from "framer-motion";
import Card from "../Card";
import HolidayPakages from "../HolidayPakages";
import Travel from "../Travel";
import MidNav from "../MidNav";
import Search from "../Search";

 const slides = [
    [
      "/Images/Napal.jpg",
      "/Images/bhutan.avif",
      "/Images/singhapora.jpg",
    ],
    [
      "/Images/hong-kong.jpg",
      "/Images/paris.jpg",
      "/Images/south-africa.jpg",
    ],
  ];

const Flight = () => {
  const [from, setFrom] = useState("New Delhi");
  const [goingTo, setGoingTo] = useState("BOM-Mumbai");

  const MidNavData = [
    { title: "Domestic Flights", top: 800 },
    { title: "International Flights", top: 1100  },
    { title: "with Flight Packages" , top: 1500 },
    {title:"Sightseeing Tours", top: 1800 },
  ];

  const search = useMemo(
    () => (
      <div className="flex text-gray-600 flex-col md:flex-row font-bold flex-wrap items-center w-full ">
        <input
          type="search"
          placeholder="Leaving From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="w-full md:w-48 h-16 px-3 border border-gray-300 rounded"
        />
        <input
          type="search"
          placeholder="Going To"
          value={goingTo}
          onChange={(e) => setGoingTo(e.target.value)}
          className="w-full md:w-48 h-16 px-3 border border-gray-300 rounded"
        />
        <input
          type="date"
          className="w-full md:w-44 h-16 px-2 border border-gray-300 rounded"
        />
        <input
          type="date"
          className="w-full md:w-44 h-16 px-2 border border-gray-300 rounded"
        />
        <button className="w-full md:w-48 h-16 rounded">
          1 Traveller(s) | Economy
        </button>
      </div>
    ),
    [from, goingTo]
  );

  return (
    <div className="overflow-hidden">
            <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className=""
      >
      {/* <div className="">
      <div className="bg-img bg-[#39c9bb] top-0  md:bg-[url('/Images/img.avif')] rounded-2xl md:rounded-none bg-cover bg-center md:h-[70vh] mt-1 w-full">
</div></div> */}

      <Search searchInput={search} />
      <div className="flex justify-center">
        <MidNav initalData={MidNavData} />
      </div>
      <div className="flex justify-center">
        <Carousel  slides={slides}/>
      </div>
      <Card title="India Tour Packages - Dekho My India" />
      <HolidayPakages />
      <Travel /></motion.h1>
    </div>
  );
};

export default Flight;
