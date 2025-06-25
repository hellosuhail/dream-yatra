import React, { useMemo } from "react";
import Carousel from "../Carousel";
import Card from "../Card";
import HolidayPakages from "../HolidayPakages";
import Travel from "../Travel";
import MidNav from "../MidNav";
import {motion} from 'framer-motion'
import Search from "../Search";
import BusOffers from "../Bus/BusOffers";
import OnlineBus from "../Bus/OnlineBus";

const MidNavData = [
  { title: "Bus Bokoking Routes", top: 800 },
  { title: "Bus Routes to Hill Stations", top: 1100 },
  { title: "Bus Routes from India", top: 1500 },
  { title: "Pilgrimage Bus Routes", top: 1800 },
];
 const slides = [
    [
      "/Images/south-africa.jpg",
      "/Images/thailand.jpg",
      "/Images/Sri-Lanka.jpg",
    ],
    [
      "/Images/hong-kong.jpg",
      "/Images/vietnam.jpg",
      "/Images/south-africa.jpg",
    ],
  ];
const Bus = () => {
  const search = useMemo(() => (
    <div className="flex font-bold flex-col md:flex-row flex-wrap items-center w-full">
      <input
        type="search"
        placeholder="e.g. City, Area"
        className="w-1/3 p-4 bg-transparent rounded  h-16"
      />
        <input
        type="search"
        placeholder="e.g.Enter destination City, Area"
        className="w-1/3 p-4 bg-transparent rounded h-16"
      />
        <input
        type="date"
        className="w-1/3 text-gray-600 p-4 bg-transparent rounded h-16"
      />
    </div>
  ));

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }} className="overflow-auto">
       <Search searchInput={search} />
    {/*  <div className="flex justify-center">
        <MidNav initalData={MidNavData} />
      </div>
      <Carousel slides={slides}/>
      <Card title="India Tour Packages - Dekho My India"   />
      <HolidayPakages />
      <Travel /> */}
      <div className="flex gap-2 items-center mx-12 my-10 border-b-1 border-gray-300">
        <img src="/Images/bus/icons8-bus.png" alt="" />
        <div className="2">
          <h1  className="font-bold  text-2xl">Book Bus on Dreamviewer Yatra</h1>
          <p className="text-gray-500">Book now to get confirmed ticket</p>
        </div>
      </div>
      <div className="md:flex gap-14 mx-12">
        <p className="flex gap-2">Get ₹100 off using code <span className="text-green-400 font-bold">FESTIVE</span></p>
        <div className="flex gap-2">
          <div className="border-[1px] w-50 h-20 border-[#b53aca] rounded-2xl flex flex-col justify-center text-center">
            <p className="font-semibold">Jul</p>
            <p className="text-[#b53aca]">Muharram</p>
            
          </div>
           <div className="border-[1px] w-50  border-blue-600 rounded-2xl flex flex-col justify-center text-center">
            <p className="font-semibold">Aug</p>
            <p className="text-blue-600">Rakhi</p>
            
          </div>
        </div>
      </div>
     <div className="relative mt-12 bg-gradient-to-r from-[#b53aca] to-[#313e9e] h-64 overflow-hidden">
  {/* Wavy snake background */}
  <svg
    className="absolute top-0 left-0 w-full h-full"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="#313e9e" // green-500
      d="M0,128 C360,32 1080,224 1440,128 L1440,320 L0,320 Z"
    />
  </svg>

  <div className="relative   z-10 p-10 text-white">
    <div className="flex justify-center items-center">
    <h2 className="text-2xl font-bold">5,500+ people booked from Noida</h2>
    <img src="/Images/bus/icons8-family.png" alt="img" className="w-20 md:w-40"/></div>
  </div>
</div>

<BusOffers/>
<OnlineBus/>
    </motion.div>
  );
};

export default Bus;
