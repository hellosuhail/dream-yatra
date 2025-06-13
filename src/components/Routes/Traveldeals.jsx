import React, { useState } from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { Link } from 'react-router-dom'
import DealsCard from '../DealsCard';
import HandleTabs from '../HandleTabs';


const Traveldeals = () => {
   const images = [
    '/Images/explore-world-famous.webp',
    'https://media.dpauls.com/drive-server/images/traveldeal/disneyland/disney-cruise-header-image.jpg'
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  return (
    <div className=' overflow-hidden'>
      <div className="bg-sky-600 h-12 flex items-center px-10 text-white text-sm font-medium shadow">
        <span className="mr-2">DPauls Holidays</span> /
        <span className="ml-2">Bank Accounts Detail</span>
      </div>

 
    
       <div className="relative w-full overflow-hidden">
      {/* Images */}
      <div className="flex transition-transform duration-500 h-96" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>

      {/* Controls */}
       <button
            onClick={prev}
          className="btn absolute top-1/2 left-10 transform -translate-y-1/2btn btn-circle"
        >
          ❮
        </button>
      
      <button
        onClick={next}
        className="btn absolute top-1/2 right-10 transform -translate-y-1/2btn btn-circle"
      >
        ›
      </button>
    </div>
      <div className="w-full m-6 flex justify-start">
        <Link to='/' className="flex items-center gap-2 text-base sm:text-lg text-sky-600 hover:text-sky-800">
          <GoArrowLeft className="text-xl" />
          Back
        </Link>
      </div> 
    <div className="flex justify-center my-4">
     <h1 className='text-accent text-4xl font-bold'>Hot & Trending Deals</h1>
     </div>
<div className="mx-12">
<DealsCard/>

<div className="flex w-full justify-center m-4 gap-1">
<button className='btn btn-accent '>International packages</button>
<button className='btn btn-accent '>Domestic Packages</button>
</div>
<HandleTabs/>
</div>

    </div>
  )
}

export default Traveldeals