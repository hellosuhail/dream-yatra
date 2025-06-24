import React from "react";
import { GovBus } from "./BusOffers";
import { useParams } from "react-router-dom";

const service =[
    {img:"/Images/bus/Contact.png",text:"24*7 customer service(Call & Chat)"},
    {img:"/Images/bus/Team.png",text:"3.6 Crores users trust us"},
    {img:"/Images/bus/Counting.png",text:"Assured seat of your choice"},
    {img:"/Images/bus/Search.png",text:"2,00,000+ bookings per day"},
    {img:"/Images/bus/Payment.png",text:"Secured and Verified payment options"},   
]

const busDetails= [
    {

    }
]
const BusRouteTimng = () => {
  const  id  = useParams();
  const bus= GovBus.find((e)=> String(e.id === id))
  console.log(bus)
//   console.log(id);
  return <div>
<h1 className="text-3xl px-12 py-6 font-semibold">{bus.name} Bus Routes & Timings</h1>

<div className="px-12 py-4 ">
    <ul className="w-full flex flex-col gap-2">
<li className="border-[1px] rounded-2xl shadow hover:shadow-2xl border-gray-300 px-6 py-4">
    <div className="flex justify-between">
        <p className="text-2xl">Jodhpur to Ajmer</p>
        <span className="text-lg">From INR 226</span>
    </div>
    <div className="flex justify-between mt-8">
        <p>32 bus options</p>
        <p className="hidden md:flex">First Bus : 00:00</p>
        <p className="hidden md:flex">Last Bus : 23:59</p>
        <button className="link text-blue-500
        ">BOOK NOW</button>
    </div>
</li>
    </ul>
    
</div>

<div className=" px-12 py-6">
<p className="text-3xl ">Official RSRTC Booking partner</p>
<div className="flex gap-8">
    {service.map((data,index)=>(
    <div key={index} className="md:flex bg-gray-200 rounded-lg px-2 py-2 mt-2 shadow-lg hover:shadow-2xl flex-col items-center w-60 text-center text-lg">
    <img src={data.img} alt="img" className="w-40 h-40" />
    <p>{data.text}</p>
</div>))}</div>
</div>

<p className="py-10 px-12 text-2xl font-bold">Table of Content</p>
<div className="">
    <p className="px-12 py-6 font-bold text-2xl">About {bus.name} | Rajasthan State Road Transport Corporation</p>

    <ul>
        <li><span></span> <span></span></li>
    </ul>
</div>
  </div>;
};

export default BusRouteTimng;
