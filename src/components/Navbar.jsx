import React from "react";
import Banner from "./Banner";
import NavMenu from "./NavMenu";

const Navbar = () => {
  
  return (
    <div className="w-full overflow-hidden">
      {/* Background Container */}
      <div className="bg-[#39c9bb] md:bg-[url('/Images/img.avif')] bg-cover bg-center md:h-[70vh] mt-1 w-full">
        <div className="px-4 py-4 md:py-6">
          {/* Navbar Row */}
       <NavMenu/>

          {/* Heading Below Navbar */}
          <div className="text-center mt-6 md:mt-10">
            <h1 className="text-xl md:text-3xl font-semibold text-white leading-snug max-w-4xl mx-auto">
              Book Flights Tickets, Tour Packages, Hotels & Sightseeing
            </h1>
          </div>

          {/* Banner Component */}
          <div className="mt-8 mb-7 ">
            <Banner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
