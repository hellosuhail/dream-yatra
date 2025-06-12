import React from "react";
import data from "./CardData/Carddata";

const Travel = () => {
  return (
    <div className="px-6 md:px-16 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start w-full mt-10 gap-10">
        {/* Left Column: Destination Grid */}
        <div className="w-full md:w-3/5">
          <h1 className="text-2xl font-semibold text-center md:text-left mb-4 text-gray-800">
            Explore Travel Destination Guide
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {data.slice(0, 8).map((item, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={item.image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Holiday Deals */}
        <div className="w-full md:w-2/5">
          <h1 className="text-2xl font-semibold text-center md:text-right mb-4 text-gray-800">
            Holiday Deal Packages
          </h1>

          <div className="flex flex-col gap-4">
            {data.slice(0, 5).map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4   rounded-md shadow-lg hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={index + 1}
                  className="w-40 h-26 object-cover rounded-l-md"
                />
                <div>
                  <p className="font-medium text-gray-700">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
