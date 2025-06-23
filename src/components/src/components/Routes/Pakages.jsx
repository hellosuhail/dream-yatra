import React, { useMemo } from 'react'
import Carousel from '../Carousel'
import Card from '../Card'
import HolidayPakages from '../HolidayPakages'
import Travel from '../Travel'
import MidNav from '../MidNav'
import Search from '../Search'

const MidNavData=["india Holiday Packages","International Holiday pakages","Holiday Ideas","Honeymoon Packagess"]
const Pakages = () => {

  const search=useMemo(()=>(
    <div className="flex flex-col md:flex-row flex-wrap items-center w-full">
      <input type="search" placeholder='type here to search...' className="md:w-full w-96 p-4 rounded h-16" />
    </div>
  ))
  return (
    <div>
          <Search searchInput={search}/>
        <div className="flex justify-center">
        <MidNav initalData={MidNavData} />
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