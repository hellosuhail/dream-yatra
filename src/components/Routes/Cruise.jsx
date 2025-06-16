import React, { useMemo } from "react";
import Carousel from "../Carousel";
import Card from "../Card";
import HolidayPakages from "../HolidayPakages";
import Travel from "../Travel";
import MidNav from "../MidNav";
import Search from "../Search";
const MidNavData = [
  { title: "Resort World Dream Cruises", top: 800 },
  { title: "NCL Cruise", top: 1100 },
  { title: "Travel Destination Guide", top: 1500 },
  {title:"Cruise Destinations",top:1800},
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
const Cruise = () => {
  const search = useMemo(() => (
    <div className="flex flex-col md:flex-row flex-wrap items-center w-full">
      <input
        type="search"
        placeholder="type here to search..."
        className="w-full p-4 text-white rounded h-16"
      />
    </div>
  ));
  return (
    <div>
      <div className="flex justify-center">
        <Search searchInput={search} />
        <div className="flex justify-center m-4">
        <MidNav initalData={MidNavData} />
        </div>
      </div>
      <Carousel slides={slides}/>
      <Card title="India Tour Packages - Dekho My India" />
      <HolidayPakages />
      <Travel />
    </div>
  );
};

export default Cruise;
