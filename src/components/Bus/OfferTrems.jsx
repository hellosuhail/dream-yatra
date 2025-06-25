import React from "react";
import { offerCard } from "./BusOffers";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const OfferTrems = () => {
  return (
    <div>

       <div className="bg-sky-600 h-12 flex items-center px-10 text-white text-sm font-medium shadow">
        <span className="mr-2">Dreamviewer Yatra</span> /
        <span className="ml-2">Bus</span>
      </div>

      {/* Back button */}
      <div className="w-full m-6 flex justify-start">
        <Link
          to="/bus"
          className="flex items-center gap-2 text-base sm:text-lg text-sky-600 hover:text-sky-800"
        >
          <GoArrowLeft className="text-xl" />
          Back
        </Link>
      </div>
      <div className="flex flex-wrap md:px-20 md:ml-40 snap-x scroll-smooth my-6 gap-4 px-4  py-4">
        {offerCard.map((data, index) => (
          <div
            key={index}
            style={{ backgroundColor: data.color }}
            className="min-w-[250px] cursor-pointer md:min-w-0 md:w-1/4 shrink-0 snap-start rounded-xl p-5 shadow-md hover:shadow-2xl transition duration-300"
          >
            <p className="bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full inline-block">
              Bus
            </p>

            <p className="text-lg md:text-xl font-semibold py-4">
              {data.title}
            </p>

            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-6">
                <p className="text-sm text-gray-700">{data.date}</p>
                <p className="text-center px-3 py-1 rounded-xl bg-white/90 font-semibold text-sm shadow">
                  {data.code}
                </p>
              </div>

              <img
                src={data.img}
                alt="bus"
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferTrems;
