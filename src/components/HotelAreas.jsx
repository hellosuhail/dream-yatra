import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
const HotelAreas = () => {
    const cardData = [
        {
            img:"/Images/bali.jpg",
            hotelName:"Expoinn",
            PlaceName:"Bali",
            price:"20,000",
            dis:"",
        },
             {
            img:"/Images/bali.jpg",
            hotelName:"Expoinn",
            PlaceName:"Bali",
            price:"20,000",
            dis:"",
        },
             {
            img:"/Images/bali.jpg",
            hotelName:"Expoinn",
            PlaceName:"Bali",
            price:"20,000",
            dis:"",
        },
        //      {
        //     img:"/Images/bali.jpg",
        //     hotelName:"Expoinn",
        //     PlaceName:"Bali",
        //     price:"20,000",
        //     dis:"",
        // },
        //   {
        //     img:"/Images/bali.jpg",
        //     hotelName:"Expoinn",
        //     PlaceName:"Bali",
        //     price:"20,000",
        //     dis:"",
        // },
        //  {
        //     img:"/Images/bali.jpg",
        //     hotelName:"Expoinn",
        //     PlaceName:"Bali",
        //     price:"20,000",
        //     dis:"",
        // },
    ]
  return (
    <div>
      <div className=" flex w-full  gap-6 justify-center  overflow-x-auto ">
        {cardData.map((data, index)=>(
     <div key={index} className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={data.img}
      alt="img" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      
{data.hotelName}
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{data.PlaceName}</div>
      <div className="badge badge-outline"><MdCurrencyRupee />{data.price}</div>
    </div>
  </div>
</div>))}
      </div>
    </div>
  );
};

export default HotelAreas;
