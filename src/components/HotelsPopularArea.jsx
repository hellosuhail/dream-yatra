import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import HotelsDeals from './HotelsDeals'

const HotelsPopularArea = () => {
  return (
    <div className='overflow-hidden'>
      <div className="flex  justify-center items-center">
       <div className="w-6xl h-96 m-8 rounded-lg bg-[url('/Images/img.avif')] bg-cover bg-center bg-no-repeat">
          
                <div className="card relative top-20 left-16 bg-amber-100 text-black w-96">
  <div className="card-body">
    <h2 className="card-title text-2xl">A couple on a scooter drives off from a restaurant in the city.
Last-minute summer deals</h2>
    <p>You can make the most of your weekends this summer with last-minute savings.
</p>
    <div className="card-actions justify-end">
      <Link to="/hotels/deals" className="btn btn-accent text-white">See deals

</Link>
    </div>

</div>
            </div>
        </div></div>

<HotelsDeals  num={13} num1={6} title="Take a look at these unique accommodations" date="Showing deals for: July 11 – July 13"/>
<div className="carousel w-6xl h-90 mx-26 ">
  <div id="item1" className="carousel-item w-full">
    <img
      src="/Images/hotels/mumbai.jpg"
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="/Images/hotels/Esbjerg.jpg"
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="/Images/hotels/berjaya.jpg"
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="/Images/hotels/new-york.avif"
      className="w-full" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </div>
  )
}

export default HotelsPopularArea