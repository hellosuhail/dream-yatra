import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MidNav from "./MidNav";

const Banner = () => {


  const navItems = [
    { name: "Flight", path: "/flight", color:"bg-blue-500 hover:bg-blue-600", },
    { name: "Packages", path: "/packages", color:"bg-green-500 hover:bg-green-600" },
    { name: "Travel Deals", path: "/deals", color:"bg-red-500 hover:bg-red-600" },
    { name: "Hotels", path: "/hotels", color:"bg-yellow-500 hover:bg-yellow-600" },
    { name: "Bus", path: "/bus", color:"bg-purple-500 hover:bg-purple-600" },
    { name: "Cruise", path: "/cruise", color:"bg-pink-500 hover:bg-pink-600" },
  ];

  return (
    <div className="w-full bg-transparent text-white px-4 md:py-6">
      
      {/* Nav Tabs */}
     <div className="flex md:pl-22 mb-1 md:absolute items-center md:mb-6">
  <div className="w-full overflow-x-auto md:overflow-visible">
    <ul className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-0.5 min-w-max">
      {navItems.map((item, index) => (
        <li key={index} className="flex-shrink-0">
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded text-sm font-medium cursor-pointer transition ${
                isActive
                  ? "bg-[#39c9bb] text-white"
                  : item.name === "Travel Deals"
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : `${item.color} text-white`
              }`
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
</div>

      {/* Form Section */}
    

    
    </div>
  );
};

export default Banner;
