import React, { useEffect, useState } from 'react'
import { hotelData } from './CardData/hotels'
import { Link, useNavigate } from 'react-router-dom'

const HotelsDeals = ({title,date,num,num1}) => {
  const [imageIndexes, setImageIndexes] = useState(
  hotelData.map(() => 0)
);
    
     const handlePrev = (index) => {
  setImageIndexes((prev) =>
    prev.map((imgIdx, i) =>
      i === index ? (imgIdx === 0 ? hotelData[i].images.length - 1 : imgIdx - 1) : imgIdx
    )
  );
};

const handleNext = (index) => {
  setImageIndexes((prev) =>
    prev.map((imgIdx, i) =>
      i === index ? (imgIdx + 1) % hotelData[i].images.length : imgIdx
    )
  );
};

const navigate =useNavigate()
const booking=()=>{
    navigate('/hotels/booking')
}

  return (
    <div className="w-full py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-6 md:px-12 ">
        <h1 className="text-2xl md:text-3xl font-semibold">
        {title}
        </h1>
        
        <Link to="/hotels/bestdeals" className="btn btn-accent text-white mt-4 md:mt-0">
          See more...
        </Link>
      </div>

      <p className="px-6 md:px-12 text-sm text-gray-600 mb-6">
        Showing deals for: <span className="font-medium">June 20 – June 25</span>
      </p>

      
      <div className="flex overflow-x-auto px-4 md:px-12 space-x-4">
      
        {hotelData.slice(num1,num).map((data, index) => (
       
          <div key={index} className="card bg-base-100 shadow-md w-80 flex-shrink-0">
         <figure className="relative">
  <img
  onClick={booking}
    src={data.images[imageIndexes[index]]}
    alt={`slide-${imageIndexes[index]}`}
    className="w-full max-w-xs cursor-pointer md:w-80 md:h-60 object-cover rounded-lg"
  />
  <div className="absolute left-2 right-2 top-1/2 flex justify-between -translate-y-1/2">
    <button className="btn btn-circle btn-sm" onClick={() => handlePrev(index)}>
      ❮
    </button>
    <button className="btn btn-circle btn-sm" onClick={() => handleNext(index)}>
      ❯
    </button>
  </div>
</figure>


            <div className="card-body">
              <h2 className="card-title text-lg">
                {data.name}
                <div className="badge badge-secondary">{data.label}</div>
              </h2>
              <p className="text-sm text-gray-600">{data.location}</p>
              <p className="text-sm text-gray-800">
                <strong>{data.rating} / 10</strong> – {data.label} ({data.reviews} reviews)
              </p>

              <div className="mt-2 space-y-1">
                <p className="line-through text-sm text-gray-400">{data.originalPrice} {data.currency}</p>
                <p className="text-lg font-bold">{data.currentPrice} {data.currency}</p>
                <p className="text-xs text-gray-500">{data.perNight} {data.currency} per night incl. taxes</p>
              </div>

              <div className="card-actions justify-end mt-4">
                <div className="badge badge-outline text-green-600 font-semibold">
                  {data.discount}
                </div>
              </div>
            </div>
          </div>
      
         ))}
      </div>
    </div>
  )
}

export default HotelsDeals
