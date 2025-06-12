import React, { useMemo, useState } from 'react'
import Carousel from '../Carousel'
import Card from '../Card'
import HolidayPakages from '../HolidayPakages'
import Travel from '../Travel'
import MidNav from '../MidNav'
import Search from '../Search'

const Flight = () => {
    const [from, setFrom] = useState("New Delhi");
  const [goingTo, setGoingTo] = useState("BOM-Mumbai");
  
  const MidNavData=["Domestic Flights","International Flights","with Flight Packages","Sightseeing Tours"]

const search = useMemo(() => (
  <div className="flex flex-col md:flex-row font-bold flex-wrap items-center w-full gap-2">
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
    
    <button className="w-full md:w-48 h-16 text-black rounded">
      1 Traveller(s) | Economy
    </button>
  </div>
), [from, goingTo]);


  return (
    <div className="overflow-hidden">
      <Search searchInput={search}/>
        <div className="flex justify-center">
        <MidNav initalData={MidNavData} />
      </div>
        <Carousel />
        <Card title="India Tour Packages - Dekho My India"/>
        <HolidayPakages/>
        <Travel/>
    </div>
  )
}

export default Flight