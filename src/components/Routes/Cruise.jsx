import React, { useMemo } from "react";
import Carousel from "../Carousel";
import Card from "../Card";
import HolidayPakages from "../HolidayPakages";
import Travel from "../Travel";
import MidNav from "../MidNav";
import { FaAngleDoubleRight } from "react-icons/fa";
import Search from "../Search";
import { useNavigate } from "react-router-dom";
const MidNavData = [
  { title: "Resort World Dream Cruises", top: 800 },
  { title: "NCL Cruise", top: 1100 },
  { title: "Travel Destination Guide", top: 1500 },
  { title: "Cruise Destinations", top: 1800 },
];

const cardData = [
  {
    id: "1",
    img: "/Images/Maldives.jpg",
    title: "Canada",
    dis: "Plunge into the beautiful spirit of 2 historic port towns during a scenic cruise along the coast of Eastern Canada. Stroll the streets of these charming villages and uncover a host of galleries, street musicians and artisan shops.",
  },
  {
    id: "2",
    img: "/Images/Maldives.jpg",
    title: "Canada",
    dis: "Plunge into the beautiful spirit of 2 historic port towns during a scenic cruise along the coast of Eastern Canada. Stroll the streets of these charming villages and uncover a host of galleries, street musicians and artisan shops.",
  },
  {
    id: "3",
    img: "/Images/Maldives.jpg",
    title: "Canada",
    dis: "Plunge into the beautiful spirit of 2 historic port towns during a scenic cruise along the coast of Eastern Canada. Stroll the streets of these charming villages and uncover a host of galleries, street musicians and artisan shops.",
  },
];
const slides = [
  ["/Images/south-africa.jpg", "/Images/thailand.jpg", "/Images/Sri-Lanka.jpg"],
  ["/Images/hong-kong.jpg", "/Images/vietnam.jpg", "/Images/south-africa.jpg"],
];
const Cruise = () => {

  const navigate =useNavigate()
  const GoToView =()=>{
    navigate(`/cruise/date`)
  }
  const search = useMemo(() => (
    <div className="flex flex-col md:flex-row flex-wrap items-center w-full">
      <input
        type="search"
        placeholder="type here to search..."
        className="w-full p-4 text-white rounded h-16"
      />
    </div>
  ));
  return (
    <div>
      <div className="flex justify-center">
        <Search searchInput={search} />
        {/* <div className="flex justify-center m-4"> */}
        {/* <MidNav initalData={MidNavData} /> */}
        {/* </div> */}
      </div>
      {/* 
      <Card title="India Tour Packages - Dekho My India" />
      <HolidayPakages />
      <Travel /> */}
      <div className="w-full bg-gradient-to-b flex justify-center  from-sky-300 to-black/90">
        <div className="bg-white m-4 rounded-xl  w-[70%] px-8 py-8 shadow-2xl shadow-black">
          <p className="font-semibold text-2xl">
            Dreamviewer Yatra Cruise Line Destinations
          </p>
          <img
            src="/Images/bus/ship3.gif"
            alt=""
            className="w-full h-80 rounded-lg mt-4"
          />
          <Carousel slides={slides} />\
          <p className="px-12 pb-4 border-b-1 border-gray-400">
            Get ready to set sail on magical vacations full of new discoveries,
            adventures and cultures, with exciting destinations across Alaska,
            the Caribbean, Europe, Southeast Asia, Australia and New Zealand!
          </p>
          <div className="my-10 full">
            {cardData.map((data) => (
              <div
                key={data.id}
                className="card m-4 hover:shadow-2xl card-side bg-base-100 shadow-lg"
              >
                <figure>
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-90 h-50"
                  />
                </figure>

                <div  className="card-body  cursor-pointer">
                  <h2 className="card-title">{data.title}</h2>
                  <p>
                    {data.dis}
                  </p>
                  <div className="card-actions justify-end">
                    <button onClick={GoToView} className="btn btn-accent">
                     View Date <FaAngleDoubleRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <section className="py-12 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-5xl mx-auto text-left">
              <div>
                <h4 className="font-bold text-xl mb-2">Luxury Ships</h4>
                <p>
                  Experience world-class amenities, fine dining, entertainment,
                  and breathtaking ocean views.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Global Destinations</h4>
                <p>
                  From the Arctic to the tropics, choose from hundreds of exotic
                  cruise routes worldwide.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Easy Booking</h4>
                <p>
                  Find, compare, and book your cruise easily with secure payment
                  and instant confirmation.
                </p>
              </div>
            </div>
          </section>
        
          <section className="bg-blue-600 text-white py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Set Sail?</h2>
            <p className="mb-6 text-lg">
              Book now and get up to 30% off on early bird packages!
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Explore Cruises
            </button>
          </section>
        </div>
      </div>
      
    </div>
  );
};

export default Cruise;
