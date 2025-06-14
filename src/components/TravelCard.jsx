import React from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

import "swiper/css/navigation";

const TravelCard = ({data,name}) => {
 

  return (
    <div className="px-6 max-w-7xl mx-30 my-12 border-b-1 pb-8 border-gray-300">
      <h1 className="text-3xl font-bold text-center text-accent mb-8">
{name}
      </h1>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={100}
        navigation
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 3 },
          400: { slidesPerView: 1.2 },
        }}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-2xs w-full  rounded-xl  hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-xl group">
                <img
                  src={item.img}
                  alt={item.place}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <p className="text-white text-sm font-light">{item.dis}</p>
                </div>
              </div>
              <div className="p-4 text-center space-y-2">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.place}
                </h2>
                <p className="text-sm text-gray-600">{item.date}</p>
                <p className="text-base font-semibold flex items-center justify-center text-accent">
                  <MdOutlineCurrencyRupee className="text-lg" /> {item.price}
                </p>
                <button className="mt-3 w-full bg-accent text-white py-2 rounded-lg font-medium hover:bg-accent-focus transition-colors duration-300">
                  Send Enquiry
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-8">
        <button className="bg-accent to-accent-focus text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
          View More Nepal Packages
        </button>
      </div>
    </div>
  );
};

export default TravelCard;
