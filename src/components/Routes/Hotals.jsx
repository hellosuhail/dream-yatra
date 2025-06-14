import React, { useMemo, useState } from "react";
import Carousel from "../Carousel";
import Card from "../Card";
import HolidayPakages from "../HolidayPakages";
import Travel from "../Travel";
import MidNav from "../MidNav";
import Search from "../Search";
const MidNavData = [
  { title: "Hotel Destinations in India", top: 800 },
  { title: "Hill Station Hotel Destinations", top: 1100 },
  { title: "Pilgrimage Hotel Destinations", top: 1500 },
  { title: "International Hotel Destinationa", top: 1800 },
];
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
          className="w-1/4 p-4  rounded h-16"
        />
        <input
          value={searchIn}
          onChange={(e) => setSearchIn(e.target.value)}
          type="date"
          className="w-1/4 p-4  rounded h-16"
        />
        <input
          value={searchIn}
          onChange={(e) => setSearchIn(e.target.value)}
          type="date"
          className="w-1/4  p-4  rounded h-16"
        />
        <input
          value={searchIn}
          onChange={(e) => setSearchIn(e.target.value)}
          type="search"
          className="w-1/4 p-4  rounded h-16"
        />
      </div>
    ),
    [searchIn]
  );

  return (
    <div>
      <Search searchInput={search} />
      <div className="flex justify-center">
        <MidNav initalData={MidNavData} />
      </div>
      {/* <Carousel /> */}
      <div className="flex justify-center m-12">
        <div className="shadow-xl gap-4 flex">
          <img
            src="/Images/Napal/hotel.jpg"
            alt=""
            className="rounded-lg"
          />
           <img
            src="https://media.dpauls.com/drive-server/images/defaultpages/slider-banners/hotel/hotel-offer-global.jpg"
            alt=""
            className="rounded-lg"
          />
        </div>
      </div>
      <Card title="India Tour Packages - Dekho My India" />
      <HolidayPakages />
      <Travel />
    </div>
  );
};

export default Hotals;
