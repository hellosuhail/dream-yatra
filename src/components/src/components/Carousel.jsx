import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const slides = [
    [
      "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
      "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    ],
    [
      "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
      "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    ],
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const slideStyle = {
    transform: `translateX(-${currentSlide * 100}%)`,
    transition: "transform 0.7s ease-in-out",
  };

  return (
    <div className="relative mt-8 w-full max-w-6xl mx-auto overflow-hidden px-4 py-8">
      {/* Slide wrapper */}
      <div className="flex w-full" style={slideStyle}>
        {slides.map((group, index) => (
          <div
            key={index}
            className="flex justify-center w-full gap-4 flex-shrink-0"
          >
            {group.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`slide-${i}`}
                className={`
                  w-full max-w-xs md:w-80 md:h-60 object-cover rounded-lg 
                  ${i === 0 ? 'block' : 'hidden'} 
                  md:block
                `}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute left-5 right-5 top-1/2 flex justify-between -translate-y-1/2">
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === 0 ? slides.length - 1 : prev - 1
            )
          }
          className="btn btn-circle"
        >
          ❮
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % slides.length)
          }
          className="btn btn-circle"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
