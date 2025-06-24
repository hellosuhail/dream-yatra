import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Banner from "./Banner";
import NavMenu from "./NavMenu";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const hideNavbarOnRoutes = ["/bankaccound"];
  const shouldHideNavbar = hideNavbarOnRoutes.includes(location.pathname);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [setIsVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const bgImg = {
    "/":"/Images/img.avif",
    "/packages":"/Images/Maldives.jpg",
    "/hotels":"/Images/hotels/new-york.avif",
    "/bus":"/Images/bus/bus3.jpg",
    "/cruise":"/Images/Mauritius2.jpg",
  }
  const bgTexts = {
  "/": "Book Flights Tickets, Tour Packages, Hotels & Sightseeing",
  "/packages": "Book India & International Holiday Tour Packages",
  "/hotels": "Book Domestic & International Hotels Online",
  "/bus": "Book Bus Ticket Online",
  "/cruise": "Book Online Cruise Tour Packages",
};

  const currentBg = bgImg[location.pathname]|| "/Images/img.avif";
  const currentText = bgTexts[location.pathname]

  return (
    <div className="w-full overflow-hidden">
      
      <div className={`bg-[#39c9bb]  rounded-2xl md:rounded-none bg-cover bg-center md:h-[70vh] mt-1 w-full`}
     style={{
    backgroundImage: window.innerWidth > 768 ? `url(${currentBg})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center", 
  }}
      >
        <div className="px-4 py-4 md:py-6">
          {/* Navbar Row */}
          <NavMenu />

          {/* Heading Below Navbar */}
          <div className="text-center mt-6 md:mt-10">
            <h1 className="text-xl md:text-3xl font-semibold text-white leading-snug max-w-4xl mx-auto">
               {currentText}
            </h1>
          </div>

          {/* Banner Component */}
          <div className="mt-8">{!shouldHideNavbar && <Banner />}</div>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-22 md:bottom-6 right-6 p-3 bg-sky-400 text-white rounded-full shadow-lg hover:bg-sky-500 cursor-pointer transition-opacity duration-300 ${
          isVisible ? "opacity-100 z-10" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Navbar;
