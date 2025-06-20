import React from 'react'
import { Link } from 'react-router-dom'
import { cardOne } from './CardData/hotels';
import { IoMdArrowForward } from "react-icons/io";
const HotalCard = () => {
  
  return (
    <>
    <div className="md:flex justify-between m-12">
    {cardOne.map((item, index) => (
  <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4 flex justify-center">
    <Link to="/accommodations" className="w-full">
      <div className="card card-side flex flex-col md:flex-row text-black bg-amber-100 shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-full">
        

        <div className="card-body w-full md:w-2/3 flex flex-col justify-between p-4">
          <h2 className="card-title text-lg md:text-xl font-semibold">
            {item.title}
          </h2>

          <div className="flex items-center justify-between mt-4">
            <p className="text-sm md:text-base text-gray-700">
                {item.text}
            </p>
            <button className="text-2xl text-blue-600 hover:text-blue-800">
              <IoMdArrowForward />
            </button>
          </div>
        </div>
        <figure className="w-full md:w-1/3 flex justify-center items-center p-4">
          <img
            src={item.img}
            alt="Hotel"
            className="h-40 object-cover rounded-md"
          />
        </figure>
      </div>
    </Link>
  </div>
))}</div>

</>
  )
}

export default HotalCard