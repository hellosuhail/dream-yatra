import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { GovBus } from "./BusOffers";
import { data, useParams } from "react-router-dom";
import BusReview from "./BusReview";

const service = [
  {
    img: "/Images/bus/Contact.png",
    text: "24*7 customer service(Call & Chat)",
  },
  { img: "/Images/bus/Team.png", text: "3.6 Crores users trust us" },
  { img: "/Images/bus/Counting.png", text: "Assured seat of your choice" },
  { img: "/Images/bus/Search.png", text: "2,00,000+ bookings per day" },
  {
    img: "/Images/bus/Payment.png",
    text: "Secured and Verified payment options",
  },
];

const busDetails = [
  {
    detail: "Owned by",
    info: "Government of Rajasthan ",
  },
  {
    detail: "Founded on",
    info: " 1 October 1964, under the Road Transport Act 1950",
  },
  {
    detail: "Head office",
    info: "Jaipur, Rajasthan",
  },
  {
    detail: "Total RSRTC Fleet",
    info: " 4,500",
  },
  {
    detail: "RSRTC Routes",
    info: " 2,230",
  },
  {
    detail: "Daily Ridership",
    info: " 8.51 lakh per day",
  },
  {
    detail: "Total Depot",
    info: "52",
  },
  {
    detail: "RSRTC Bus Types",
    info: " Volvo Air-conditioned, Deluxe, Super-Deluxe, Express Bus",
  },
  {
    detail: "Subsidiary",
    info: "Jaipur City Transport Services Limited",
  },
  {
    detail: "Key People",
    info: " Sh. Sandeep Verma (Chairman and MD), Sh. Brijendra Singh Ola (Transport Minister, Rajasthan)",
  },
  {
    detail: "Areas Served by RSRTC",
    info: "Rajasthan, Punjab, Haryana, Uttar Pradesh, Delhi, Madhya Pradesh, Gujarat, Himachal Pradesh, Maharashtra, and Uttarakhand",
  },
  {
    detail: "Slogan",
    info: "Aapka RSRTC Apke Sath",
  },
];

export const busTiming =[
    {
        id:"1",
        place:"Jodhpur to Ajmer",
        INR:"From INR 226",
        options:"32 bus options",
        firstBus:"First Bus : 00:00",
        lastBus:"Last Bus : 23:59"
    },
        {
        id:"2",
        place:"Jaipur (Rajasthan) to Jodhpur",
        INR:"From INR 356",
        options:"25 bus options",
        firstBus:"First Bus : 00:30",
        lastBus:"Last Bus : 23:59"
    },
        {
        id:"3",
        place:"Sikar to Jaipur (Rajasthan)",
        INR:"From INR 124",
        options:"88 bus options",
        firstBus:"First Bus : 02:50",
        lastBus:"Last Bus : 22:15"
    },
]
const BusRouteTimng = () => {
    const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const handleDateChange = (date,id) => {
    setSelectedDate(date);
     id = Math.random()*100
    
    navigate(`/bus/fillter/${id}`);
  };
// , { state: { date,id} }
  const id = useParams();
  const bus = GovBus.find((e) => String(e.id === id));
  console.log(bus);
  //   console.log(id);
  return (
    <div>
      <h1 className="text-3xl px-12 py-6 font-semibold">
        {bus.name} Bus Routes & Timings
      </h1>

      <div className="px-12 py-4 ">
        <ul className="w-full flex flex-col gap-2">
            {busTiming.map((data)=>(
          <li key={data.id} className="border-[1px] rounded-2xl shadow hover:shadow-2xl border-gray-300 px-6 py-4">
            <div className="flex justify-between">
              <p className="text-2xl">{data.place}</p>
              <span className="text-lg">{data.INR}</span>
            </div>
            <div className="flex justify-between mt-8">
              <p>32 bus options</p>
              <p className="hidden md:flex">{data.firstBus}</p>
              <p className="hidden md:flex">{data.lastBus}</p>
            <div className="">
      <button
        onClick={() => setShowCalendar(!showCalendar)}
        className="link text-blue-500 font-bold"
      >
        Book Now
      </button>

      
    </div>
            </div>
          </li>))}
    {showCalendar && (
        <div className="mt-4 absolute right-21 ">
          <DatePicker
            selected={selectedDate}
            onChange={()=>handleDateChange(id)}
            inline
          />
        </div>
      )}    </ul>
      </div>

      <div className=" px-12 py-6">
        <p className="text-3xl ">Official RSRTC Booking partner</p>
        <div className="md:flex gap-8 ml-10">
          {service.map((data, index) => (
            <div
              key={index}
              className="md:flex bg-gray-200 rounded-lg px-2 py-2 mt-2 shadow-lg hover:shadow-2xl flex-col items-center w-60 text-center text-lg"
            >
              <img src={data.img} alt="img" className="w-40 h-40" />
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>

      <BusReview/>
    </div>
  );
};

export default BusRouteTimng;
