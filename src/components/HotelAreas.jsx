import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HotelAreas = () => {


  const cardData = [
    {
      img: "/Images/bali.jpg",
      hotelName: "Expoinn",
      PlaceName: "Bali",
      price: "20,000",
      dis: "",
    },
    {
      img: "/Images/bali.jpg",
      hotelName: "Expoinn",
      PlaceName: "Bali",
      price: "20,000",
      dis: "",
    },
    {
      img: "/Images/bali.jpg",
      hotelName: "Expoinn",
      PlaceName: "Bali",
      price: "20,000",
      dis: "",
    },
    {
      img: "/Images/bali.jpg",
      hotelName: "Expoinn",
      PlaceName: "Bali",
      price: "20,000",
      dis: "",
    },
    {
      img: "/Images/bali.jpg",
      hotelName: "Expoinn",
      PlaceName: "Bali",
      price: "20,000",
      dis: "",
    },
    {
      img: "/Images/bali.jpg",
      hotelName: "Expoinn",
      PlaceName: "Bali",
      price: "20,000",
      dis: "",
    },
  ];

   const recommendedList = [
    "Bali - Expoinn",
    "Maldives - Sea View Resort",
    "Dubai - Palm Inn",
    "Goa - Ocean Breeze",
    "Paris - Eiffel Suites",
    "London - Royal Stay",
  ];
  
  return (
    <div className="px-4 md:px-12">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          // responsive
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {cardData.map((data, index) => (
          <SwiperSlide key={index}>
           <a href="/hotels/recommended" target="_blank">
            <div className="card bg-base-100 w-full shadow-sm">
              <figure>
                <img src={data.img} alt="img" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.hotelName}</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{data.PlaceName}</div>
                  <div className="badge badge-outline">
                    <MdCurrencyRupee />
                    {data.price}
                  </div>
                </div>
              </div>
            </div></a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotelAreas;
