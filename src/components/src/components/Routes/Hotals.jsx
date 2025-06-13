import React, { useMemo, useState } from 'react'
import Carousel from '../Carousel'
import Card from '../Card'
import HolidayPakages from '../HolidayPakages'
import Travel from '../Travel'
import MidNav from '../MidNav'
import Search from '../Search'
const MidNavData=["Hotel Destinations in India","Hill Station Hotel Destinations","Pilgrimage Hotel Destinations","International Hotel Destinationa"]
const Hotals = () => {
  const [searchIn, setSearchIn]=useState('')

     const search=useMemo(()=>(
       <div className="flex flex-col md:flex-row flex-wrap items-center w-full">
         <input value={searchIn} onChange={(e)=>setSearchIn(e.target.value)} type="search" placeholder='type here to search...' className="w-full p-4  rounded h-16" />
       </div>
     ),[searchIn])
  
    
  return (
    <div>
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

export default Hotals