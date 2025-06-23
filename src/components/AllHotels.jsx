import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { hotelData } from "./CardData/hotels";

const AllHotels = () => {
  const [imageIndexes, setImageIndexes] = useState(hotelData.map(() => 0));
  

  const navigate=useNavigate()

  const  navigateHandle =(id)=>{
    navigate(`/hotels/review/${id}`)
  }

  const bookingPage=()=>{
    navigate('/hotels/booking')
  }
  const handlePrev = (index) => {
    setImageIndexes((prev) =>
      prev.map((imgIdx, i) =>
        i === index
          ? imgIdx === 0
            ? hotelData[i].images.length - 1
            : imgIdx - 1
          : imgIdx
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
  return (
    <div>
      <div className="bg-sky-600 h-12 md:flex items-center px-10 text-white text-sm font-medium shadow">
        <span className="mr-2">Dreamviewer Yatra</span> /
        <span className="ml-2">Contact Us</span>
      </div>
      <div className="w-full mb-6 px-12 py-8 flex justify-start">
        <Link
          to="/hotels"
          className="flex items-center gap-2 text-base sm:text-lg text-sky-600 hover:text-sky-800"
        >
          <GoArrowLeft className="text-xl" />
          Back
        </Link>
      </div>
      <h1 className="px-12 pt-6 text-3xl font-semibold">
        The best last-minute holiday deals.
      </h1>
      <p className="px-12 pb-6 text-sm">viled for 20 jun 25</p>
      <div className="felx justify-center items-center w-full md:px-28 py-4">
        <div className="bg-[url(/Images/hotels/mumbai.jpg)] md:w-6xl  bg-red-500 rounded-xl h-90"></div>
      </div>
      <div className="md:flex flex-wrap gap-4 hover:shadow-2xl px-12 md:px-30 justify-center py-4">
        {hotelData.map((data, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-md w-80 flex-shrink-0"
          >
            <figure className="relative">
              <img
              onClick={()=>navigateHandle(data.id)}
                src={data.images[imageIndexes[index]]}
                alt={`slide-${imageIndexes[index]}`}
                className="w-full max-w-xs cursor-pointer md:w-80 md:h-60 object-cover rounded-lg"
              />
              <div className="absolute left-2 right-2 top-1/2 flex justify-between -translate-y-1/2">
                <button
                  className="btn btn-circle btn-sm"
                  onClick={() => handlePrev(index)}
                >
                  ❮
                </button>
                <button
                  className="btn btn-circle btn-sm"
                  onClick={() => handleNext(index)}
                >
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
                <strong>{data.rating} / 10</strong> – {data.label} (
                {data.reviews} reviews)
              </p>

              <div className="mt-2 space-y-1">
                <p className="line-through text-sm text-gray-400">
                  {data.originalPrice} {data.currency}
                </p>
                <p className="text-lg font-bold">
                  {data.currentPrice} {data.currency}
                </p>

                <p className="text-xs text-gray-500">
                  {data.perNight} {data.currency} per night incl. taxes
                </p><div className="badge badge-outline text-green-600 font-semibold">
                  {data.discount}
                </div>
              </div>

              <div className="card-actions justify-between items-center flex   mt-4">
                
                <p onClick={()=>navigateHandle(data.id)} className="link text-blue-500">View Detils</p>
                <button onClick={bookingPage} className="btn text-white btn-accent">
                Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllHotels;
