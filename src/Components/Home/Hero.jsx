import React, { useState, useEffect } from "react";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";

const Hero = () => {
  const images = [
    "/imgs/slide-1.jpg",
    "/imgs/slider-1.jpg",
    "/imgs/slider-2.jpg",
    "/imgs/slider-3.jpg",
    
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto-sliding effect
  useEffect(() => {
    // Set up interval to change slide every 3 seconds
    const slideInterval = setInterval(() => {
      handleNextClick();
    }, 3000);

    // Clean up interval on component unmount
    return () => clearInterval(slideInterval);
  }, [currentImageIndex]); // Re-run effect when currentImageIndex changes

  return (
    <div className="w-[100vw] overflow-x-hidden relative  lg:mt-[240px] bg-black">
      <div className="h-[400px] sm:h-[600px] lg:h-[710px] w-full bg-zinc-500 relative overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 h-full w-full transition-opacity duration-500 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      
      <div className="hidden sm:flex justify-between items-center w-full absolute top-1/2 transform -translate-y-1/2 px-6 md:px-20 z-20">
        <div
          className="h-12 w-12 md:h-16 md:w-16 rounded-full hover:bg-black bg-gray-700 flex items-center justify-center cursor-pointer"
          onClick={handlePrevClick}
        >
          <VscTriangleLeft className="size-6 md:size-8 text-white" />
        </div>
        <div
          className="h-12 w-12 md:h-16 md:w-16 rounded-full hover:bg-black bg-zinc-700 flex items-center justify-center cursor-pointer"
          onClick={handleNextClick}
        >
          <VscTriangleRight className="size-6 md:size-8 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Hero;