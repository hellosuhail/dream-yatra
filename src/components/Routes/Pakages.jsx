import React, { useMemo } from 'react'
import Carousel from '../Carousel'
import Card from '../Card'
import HolidayPakages from '../HolidayPakages'
import Travel from '../Travel'
import MidNav from '../MidNav'
import Search from '../Search'

const Test = ()=>{
  return (
    <div className=' mt-6 text-white'>Your Package list is Render Here</div>
  )
}

const MidNavData=["india Holiday Packages","International Holiday pakages","Holiday Ideas","Honeymoon Packagess"]
const Pakages = () => {

  const search=useMemo(()=>(
    <div className="flex flex-col md:flex-row flex-wrap items-center w-full">
      <input type="search" placeholder='type here to search...' className="w-full p-4 rounded h-16" />
    </div>
  ))
  return (
    <div>
        <div className="flex justify-center">
          <Search searchInput={search}/>
        <MidNav initalData={MidNavData} />
        <Test/>
      </div>
       <Carousel />
        <Card title="Best Selling India Holiday Packages
"/>
        
         <HolidayPakages/>
        <Travel/>
    </div>
  )
}

export default Pakages