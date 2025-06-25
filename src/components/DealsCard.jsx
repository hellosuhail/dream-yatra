import React, { useState } from 'react';
import { MdCurrencyRupee } from "react-icons/md";

const DealsCard = () => {
  const [current, setCurrent] = useState(0);

  const cardData = [
    {
      img: 'https://media.dpauls.com/drive-server/images/packages/india/goa/vagator-beach-panaji-goa-india.jpg',
      place: "Goa",
      dis: "Airfare, 4 Nts Singapore, Breakfast, Singapore City Tour, Visa, Transfers & GST.",
      date: "Travel Valid: Jul - Sep 2025",
      price: "4567",
      btnText: "Book Now"
    },
    {
      img: 'https://media.dpauls.com/drive-server/images/packages/india/goa/vagator-beach-panaji-goa-india.jpg',
      place: "Goa",
      dis: "Airfare, 4 Nts Singapore, Breakfast, Singapore City Tour, Visa, Transfers & GST.",
      date: "Travel Valid: Jul - Sep 2025",
      price: "4567",
      btnText: "Book Now"
    },
    {
      img: 'https://media.dpauls.com/drive-server/images/packages/india/goa/vagator-beach-panaji-goa-india.jpg',
      place: "Goa",
      dis: "Airfare, 4 Nts Singapore, Breakfast, Singapore City Tour, Visa, Transfers & GST.",
      date: "Travel Valid: Jul - Sep 2025",
      price: "4567",
      btnText: "Book Now"
    },
    {
      img: 'https://media.dpauls.com/drive-server/images/packages/india/goa/vagator-beach-panaji-goa-india.jpg',
      place: "Goa",
      dis: "Airfare, 4 Nts Singapore, Breakfast, Singapore City Tour, Visa, Transfers & GST.",
      date: "Travel Valid: Jul - Sep 2025",
      price: "4567",
      btnText: "Book Now"
    },
  ];

  const next = () => {
    setCurrent((prev) => (prev + 1) % cardData.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto py-10 px-4 relative">
      <div className="overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
            width: `${cardData.length * 100}%`,
          }}
        >
          {cardData.map((item, index) => (
            <div
              key={index}
              className=" flex-shrink-0 px-4 sm:px-6 md:px-8"
              style={{ width: '100%' }}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                <img
                  src={item.img}
                  alt={item.place}
                  className=""
                />
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-bold text-gray-800">{item.place}</h2>
                    <span className="badge badge-secondary">NEW</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{item.dis}</p>
                  <p className="text-sm text-gray-500 mb-1">{item.date}</p>
                  <div className="text-lg font-semibold text-blue-600 flex items-center mt-2">
                    Starting From <MdCurrencyRupee className="ml-1" /> {item.price}
                  </div>
                  <div className="mt-4 flex justify-between">
                    <button className="btn btn-accent btn-sm">Book Now</button>
                    <button className="btn btn-outline btn-sm btn-accent">Send Enquiry</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="btn btn-circle bg-white shadow-md hover:shadow-xl absolute  left-2 md:left-4 md:top-60 top-1/2 transform -translate-y-1/2 z-20"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="btn btn-circle bg-white shadow-md hover:shadow-xl absolute right-2 md:right-45 md:top-60 top-1/2 transform -translate-y-1/2 z-20"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default DealsCard;
