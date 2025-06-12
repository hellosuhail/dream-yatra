import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const data = [
  {
    id: 1,
    image: "https://source.unsplash.com/400x300/?paris",
    place: "Paris",
    price: "₹15,000",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/400x300/?newyork",
    place: "New York",
    price: "₹20,000",
  },
  {
    id: 3,
    image: "https://source.unsplash.com/400x300/?tokyo",
    place: "Tokyo",
    price: "₹18,000",
  },
  {
    id: 4,
    image: "https://source.unsplash.com/400x300/?london",
    place: "London",
    price: "₹16,500",
  },
  {
    id: 5,
    image: "https://source.unsplash.com/400x300/?dubai",
    place: "Dubai",
    price: "₹19,000",
  },
];

const HolidayPakages = () => {
  return (
  <div className="relative bg-[#020f23] overflow-hidden md:h-[60vh] mx-auto px-4 py-10 flex items-center justify-center">
  {/* Decorative Circles */}
  <div className="w-20 h-20 rounded-full absolute top-[20%] left-[10%] bg-green-100 opacity-30 blur-sm"></div>
  <div className="w-24 h-24 rounded-full absolute top-[40%] left-[80%] bg-red-100 opacity-30 blur-sm"></div>
  <div className="w-16 h-16 rounded-full absolute top-[10%] left-[50%] bg-green-100 opacity-20 blur-sm"></div>
  <div className="w-28 h-28 rounded-full absolute top-[60%] left-[30%] bg-red-100 opacity-20 blur-sm"></div>
  <div className="w-24 h-24 rounded-full absolute top-[70%] left-[70%] bg-green-100 opacity-25 blur-sm"></div>

  {/* Swiper Centered */}
  <div className="w-full max-w-7xl">
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
    >
      {data.map(({ id, image, place, price }) => (
        <SwiperSlide key={id}>
          <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img
              src={image}
              alt={place}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
              <h3 className="text-lg font-semibold">{place}</h3>
              <p className="text-sm">{price}</p>
            </div>
            <button
              className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold text-lg transition-opacity duration-300"
              aria-label={`Book now for ${place}`}
            >
              Book Now
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>


  );
};

export default HolidayPakages;
