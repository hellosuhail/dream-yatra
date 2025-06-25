import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'Alice Johnson',
    rating: 5,
    text: "The ride was smooth and the staff was friendly. Highly recommend!",
  },
  {
    id: 2,
    name: 'Michael Lee',
    rating: 4,
    text: "Seats were comfortable, and the bus was clean. Will travel again.",
  },
  {
    id: 3,
    name: 'Sara Williams',
    rating: 5,
    text: "Punctual service and amazing experience. Kudos to the team!",
  },
  {
    id: 4,
    name: 'David Brown',
    rating: 4,
    text: "Good Wi-Fi and charging ports. A++ experience overall.",
  },
   {
    id: 4,
    name: 'David Brown',
    rating: 4,
    text: "Good Wi-Fi and charging ports. A++ experience overall.",
  },
   {
    id: 4,
    name: 'David Brown',
    rating: 4,
    text: "Good Wi-Fi and charging ports. A++ experience overall.",
  },
];

export default function BusReview() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { clientWidth } = sliderRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-8 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-6 ">Bus Reviews</h2>

      {/* Slider Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className=":flex absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 transition"
        >
          <FaChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Reviews List */}
        <div
          ref={sliderRef}
          className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth gap-4 pb-4"
        >
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="snap-start flex-shrink-0 w-72 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-3">
                <p className="font-semibold text-gray-900 mr-2">{rev.name}</p>
                <div className="flex items-center text-yellow-500">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <FaStar key={i} className="w-4 h-4" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic">"{rev.text}"</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="flex absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 transition"
        >
          <FaChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
}