import React, { useMemo } from 'react'
import Carousel from '../Carousel'
import Card from '../Card'
import HolidayPakages from '../HolidayPakages'
import Travel from '../Travel'
import MidNav from '../MidNav'
import Search from '../Search'
const MidNavData=["Resort World Dream Cruises","NCL Cruise","Travel Destination Guide","Cruise Destinations"]
const Cruise = () => {

    const search=useMemo(()=>(
      <div className="flex flex-col md:flex-row flex-wrap items-center w-full">
        <input type="search" placeholder='type here to search...' className="w-full p-4  rounded h-16" />
      </div>
    ))
  return (
    
    <div>
        <div className="flex justify-center">
           <Search searchInput={search}/>
        <MidNav initalData={MidNavData}  />
      </div>
           <Card title="India Tour Packages - Dekho My India"/>
         <HolidayPakages/>
        <Travel/>
    </div>
  )
}

export default Cruise