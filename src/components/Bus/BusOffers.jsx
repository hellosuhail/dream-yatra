import React from "react";
import { FaStar } from "react-icons/fa6";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export const offerCard = [
  {
    title: "Save up to Rs 250 on bus tickets",
    date: "Valid till 30 Jun",
    code: "First",
    img: "/Images/bus/bus.gif",
    color: "#f7dad7",
  },
  {
    title: "Save up to Rs 250 on bus tickets",
    date: "Valid till 30 Jun",
    code: "First",
    img: "/Images/bus/smartphone.gif",
    color: "#fce4d2",
  },
  {
    title: "Save up to Rs 250 on bus tickets",
    date: "Valid till 30 Jun",
    code: "First",
    img: "/Images/bus/bus.gif",
    color: "#f7dad7",
  },
  {
    title: "Save up to Rs 250 on bus tickets",
    date: "Valid till 30 Jun",
    code: "Fi",
    img: "/Images/bus/smartphone.gif",
    color: "#d64e55",
  },
];

const whatNew = [
  {
    title: "Free Cancellation",
    date: "Get 100% refund on cancellation",
    code: "Know more",
    img: "/Images/bus/rupee.png",
    color: "#86013e",
  },
  {
    title: "Introducing Bus timetable",
    date: "Get local bus times between cities in your satate",
    code: "Know more",
    img: "/Images/bus/location.png",
    color: "#ffffff",
  },
  {
    title: "FlexiTicket",
    date: "Get amazing benefits ondate change & cancellation",
    code: "Know more",
    img: "/Images/bus/transfer.png",
    color: "#c9ddf7",
  },
  {
    title: "Assurance program",
    date: "Get 100% refund on cancellation",
    code: "Know more",
    img: "/Images/bus/bag.png",
    color: "#eccaca",
  },
];

export const GovBus = [
  {
    id:"1",
    logo: "/Images/bus/rsrtc.jpeg",
    name: "RSRTC",
    rating: "3.71",
    lang: "राजस्थान स्टेट रोड ट्रांसपोर्ट कॉर्पोरशन",
    list: [
      "6000 services including Deluxe, Ordinary and more",
      "Official booking partner of RSRTC",
    ],
    dis:"RSRTC Rajasthan State Road Transport Corporation (Hindi: राजस्थान राज्य पथ परिवहन निगम ), popularly known as Rajasthan Roadways is the largest provider of intercity buses. It was established on the 1st of October 1964, under the Road Transport Act 1950, to provide efficient & economical buses for daily commuters and tourists in Rajasthan. RSRTC is headquartered in Jaipur, Rajasthan. They have dedicated staff members in each field, like finance, administration, traffic management, civil engineering, legal terms, etc., who are responsible for different roles and responsibilities. They cover 38,811 routes (approximately) every day across Rajasthan roadways. RSRTC also has 41 bus depots and 4500 buses in its fleet that run for approximately 755821 kilometres daily.RSRTC provides various types of buses for each section of society. It also falls under the RTI (Right to Information) Act, which highlights its transparency. RSRTC shares the latest news and services through its accounts on different social media platforms. It provides bus services in many cities throughout the day.",
    Amenities:"RSRTC's maxim is customer satisfaction, and constant customer support has shown this. They have different types of buses with different fares. They have luxurious facilities like televisions for long-route travellers or pilgrimage visitors. They also have fully air-conditioned buses. One can book RSRTC tickets online using a trusted source like Dreamviewer yatra.",
    AmenitiesList:["Water bottle","Charging Point","WIFI","Studying light","Blankets/Sheets","Emergency contact helplines"]
  },
  {
    id:"2",
    logo: "/Images/bus/rsrtc.jpeg",
    name: "RSRTC",
    rating: "3.71",
    lang: "राजस्थान स्टेट रोड ट्रांसपोर्ट कॉर्पोरशन",
    list: [
      "6000 services including Deluxe, Ordinary and more",
      "Official booking partner of RSRTC",
    ],
  },
];

const testimonials = [
  {
    title: "Incredible Journey. Safest and comfortable.",
    name: "Suresh Kumar",
    since: "redbus customer since 2015",
  },
  {
    title: "Punctual and clean buses.",
    name: "Abhinav Jain",
    since: "redbus customer since 2016",
  },
  {
    title: "All time favourite buses",
    name: "Mohit Patil",
    since: "2019 से redBus ग्राहक",
  },
];
const BusOffers = () => {

  const navigate =    useNavigate();

const handleNavigate = (id)=>{
  id = Math.random()*100
  navigate(`/bus/online-booking/${id}`)
}

const goToOffers=()=>{
  navigate('/bus/Offers-terms')
}

  const Card = ({ offer }) => (
    <>
     
    </>
  );
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-between my-6 border-b-1 border-gray-400 py-2 mx-12">
        <p className="font-bold text-2xl">Offers for you</p>
        <p className="link text-blue-800 font-bold">view more</p>
      </div>
   <div className="flex overflow-x-auto snap-x scroll-smooth my-6 gap-4 px-4 md:px-12 py-4">
  {offerCard.map((data, index) => (
    <div
    onClick={goToOffers}
      key={index}
      style={{ backgroundColor: data.color }}
      className="min-w-[250px] cursor-pointer md:min-w-0 md:w-1/4 shrink-0 snap-start rounded-xl p-5 shadow-md hover:shadow-lg transition duration-300"
    >
      
      <p className="bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full inline-block">
        Bus
      </p>

      <p className="text-lg md:text-xl font-semibold py-4">{data.title}</p>

     
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
      {/* <card /> */}
      {/* <div className="">
        <div className=" my-6 border-b-1 border-gray-400 py-2 mx-12">
          <p className="font-bold text-2xl">What's new</p>
        </div>
        <Card offer={whatNew} />
      </div> */}
   <div className="py-6 px-4 md:px-12 bg-white">
  
  <div className="mb-6 border-b border-gray-300 pb-2">
    <h2 className="text-2xl font-bold text-gray-800">Government Buses</h2>
  </div>

  
  <div
    className="
      flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
      gap-4
      overflow-x-auto md:overflow-visible snap-x md:snap-none
      pb-2
    "
  >
    {GovBus.map((data) => (
      <div
      onClick={()=>handleNavigate(data.id)}
        key={data.id}
        className="
          snap-start cursor-pointer flex-shrink-0 md:flex-shrink
          min-w-[260px] md:min-w-0
          bg-gray-50 border border-gray-200
          rounded-2xl overflow-hidden
          shadow-md hover:shadow-xl transition-shadow duration-300
        "
      >

        <div className="flex items-center gap-4 p-4 border-b border-gray-200">
          <img src={data.logo} alt={data.name} className="w-12 h-12 object-contain" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">{data.name}</h3>
              <span className="flex items-center gap-1 bg-green-600 text-white text-sm font-bold px-2 py-1 rounded-full">
                <FaStar className="w-4 h-4" /> {data.rating}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">{data.lang}</p>
          </div>
        </div>

       
        <ul className="divide-y divide-gray-200">
          {data.list.map((li, i) => (
            <li key={i} className="px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">
              {li}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>
<div className="py-6 px-4 md:px-12 bg-white">
  
  <div className="mb-6 border-b border-gray-300 pb-2">
    <h2 className="text-2xl font-bold text-gray-800">Trip Buse</h2>
  </div>

  
  <div
    className="
      flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
      gap-4
      overflow-x-auto md:overflow-visible snap-x md:snap-none
      pb-2
    "
  >
    {GovBus.map((data) => (
      <div
      onClick={()=>handleNavigate(data.id)}
        key={data.id}
        className="
          snap-start cursor-pointer flex-shrink-0 md:flex-shrink
          min-w-[260px] md:min-w-0
          bg-gray-50 border border-gray-200
          rounded-2xl overflow-hidden
          shadow-md hover:shadow-xl transition-shadow duration-300
        "
      >

        <div className="flex items-center gap-4 p-4 border-b border-gray-200">
          <img src={data.logo} alt={data.name} className="w-12 h-12 object-contain" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">{data.name}</h3>
              <span className="flex items-center gap-1 bg-green-600 text-white text-sm font-bold px-2 py-1 rounded-full">
                <FaStar className="w-4 h-4" /> {data.rating}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">{data.lang}</p>
          </div>
        </div>

       
        <ul className="divide-y divide-gray-200">
          {data.list.map((li, i) => (
            <li key={i} className="px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">
              {li}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>
    <div className="py-8 px-4 md:px-16 bg-gray-50 relative overflow-hidden">
  {/* Decorative Background Shape */}
  <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-green-200 to-green-400 rounded-full opacity-30 pointer-events-none"></div>

  {/* Header */}
  <div className="mb-8 text-center">
    <h2 className="text-3xl font-extrabold text-gray-800">Testimonials</h2>
    <p className="text-gray-600 mt-2 max-w-xl mx-auto">
      Hear from our satisfied customers in their own words
    </p>
  </div>

  {/* Testimonials */}
  <div
    className="
      flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6
      overflow-x-auto md:overflow-visible snap-x md:snap-none
      pb-4
    "
  >
    {testimonials.map((data, index) => (
      <div
        key={index}
        className="
          snap-start flex-shrink-0 md:flex-shrink-1
          min-w-[260px] md:min-w-0
          bg-white border border-gray-200
          rounded-2xl p-6
          flex flex-col justify-between
          shadow-lg hover:shadow-2xl transition-all duration-300
          transform hover:-translate-y-1 hover:scale-105
        "
      >
        
        <div className="text-green-500 mb-3">
          <svg
            className="w-6 h-6 opacity-75"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.17 6A5 5 0 0 0 2 11v2a5 5 0 0 0 5.17 5H9v-2H7.17A3 3 0 0 1 4 13v-2a3 3 0 0 1 3.17-3H9V6H7.17zm10 0A5 5 0 0 0 12 11v2a5 5 0 0 0 5.17 5H19v-2h-1.83A3 3 0 0 1 14 13v-2a3 3 0 0 1 3.17-3H19V6h-1.83z" />
          </svg>
        </div>

       
        <p className="text-gray-800 italic mb-6 flex-grow">
          “{data.title}”
        </p>

       
        <div className="flex items-center">
     
          <img
            src={data.avatar || "/default-avatar.png"}
            alt={data.name}
            className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-green-300"
          />
          
          <div>
            <p className="font-semibold text-gray-900">{data.name}</p>
            <p className="text-sm text-gray-500">{data.position || "Passenger"}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
      <div className="">
        <div className=" my-6 border-b-1 border-gray-400 py-2 mx-12">
          <p className="font-bold text-2xl">Get the Dreamviewer Yatra App</p>
        </div>
        <div className="md:flex items-center justify-between px-12">
          <div className="flex items-center gap-2">
            <img src="/Images/bus/download.png" alt="" className="w-30" />
            <div className="">
              <p className="font-bold  text-lg">Rated 4.6 on Play Store</p>
              <p className="text-gray-500">Download for exciting offers!</p>
            </div>
          </div>
          <button className="btn rounded-2xl w-80 bg-[#fed9d5]">Download app</button>
        </div>
      </div>
    </motion.div>
  );
};

export default BusOffers;
