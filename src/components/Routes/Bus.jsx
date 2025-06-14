import React, { useMemo } from "react";
import Carousel from "../Carousel";
import Card from "../Card";
import HolidayPakages from "../HolidayPakages";
import Travel from "../Travel";
import MidNav from "../MidNav";
import Search from "../Search";

const MidNavData = [
  { title: "Bus Bokoking Routes", top: 800 },
  { title: "Bus Routes to Hill Stations", top: 1100 },
  { title: "Bus Routes from India", top: 1500 },
  { title: "Pilgrimage Bus Routes", top: 1800 },
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
    <div>
      <Search searchInput={search} />
      <div className="flex justify-center">
        <MidNav initalData={MidNavData} />
      </div>
      <Carousel />
      <Card title="India Tour Packages - Dekho My India" />
      <HolidayPakages />
      <Travel />
    </div>
  );
};

export default Bus;
