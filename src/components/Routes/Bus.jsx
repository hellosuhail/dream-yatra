import React, { useMemo } from "react";
import Carousel from "../Carousel";
import Card from "../Card";
import HolidayPakages from "../HolidayPakages";
import Travel from "../Travel";
import MidNav from "../MidNav";
import Search from "../Search";

const MidNavData=["Bus Bokoking Routes","Bus Routes to Hill Stations","Bus Routes from India","Pilgrimage Bus Routes"]
const Bus = () => {
  const search=useMemo(()=>(
      <div className="flex flex-col md:flex-row flex-wrap items-center w-full">
        <input type="search" placeholder='type here to search...' className="w-full p-4 bg-transparent rounded h-16" />
      </div>
    ))

  return (
    <div>
      <Search searchInput={search}/>
        <div className="flex justify-center">
        <MidNav initalData={MidNavData} />
      </div>
      <Carousel/>
      <Card title="India Tour Packages - Dekho My India" />
      <HolidayPakages />
      <Travel />
    </div>
  );
};

export default Bus;
