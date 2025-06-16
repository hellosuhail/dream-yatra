import React, { useMemo } from "react";
import Carousel from "../Carousel";
import Card from "../Card";
import HolidayPakages from "../HolidayPakages";
import Travel from "../Travel";
import MidNav from "../MidNav";
import Search from "../Search";

const MidNavData = [
  { title: "india Holiday Packages", top: 800 },
  { title: "International Holiday pakages", top: 1100 },
  { title: "Holiday Ideas", top: 1500 },
  { title: "Honeymoon Packagess", top: 1800 },
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
const Pakages = () => {
  const search = useMemo(() => (
    <div className="flex flex-col md:flex-row text-black flex-wrap items-center w-full">
      <input
        type="search"
        placeholder="where are you goning..."
        className=" w-96 md:w-1/2 p-4 rounded h-16"
      />
      <input
        type="search"
        placeholder="Enter the pin code..."
        className=" w-96 md:w-1/2  p-4 rounded h-16"
      />
    </div>
  ));
  return (
    <div>
      <Search searchInput={search} />
      <div className="flex justify-center">
        <MidNav initalData={MidNavData} />
      </div>
      <Carousel slides={slides}/>
      <Card title="Best Selling India Holiday Packages" />
      <HolidayPakages />
      <Travel />
    </div>
  );
};

export default Pakages;
