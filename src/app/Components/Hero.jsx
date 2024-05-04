"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/Assets/Images/pm.png", "/Assets/Images/Slide1.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-[#112A46] w-full md:h-[449px] rounded-xl">
      <div className="flex flex-col py-4 md:py-0 px-4 md:pl-[60px] md:pr-4 md:w-[50%] md:justify-center h-full gap-3">
        <h1 className="text-white text-3xl md:text-[31px] font-semibold pr-10 tracking-tight">
          Loren Ipsum <br /> Can we please not hating each other, please?
        </h1>
        <p className=" text-sm md:text-lg text-white pr-12">
          Ah mana mungkin bambang tak la mau sama dia please deh mending sama
          satpam dah gua daripada sama dia.
        </p>
        <div className=" mt-4 md:mt-8 flex flex-row gap-2">
          <Link
            href="/Pages/Login"
            passHref
            className="md:px-3 py-2 px-2 flex flex-row justify-center items-center text-xs md:text-sm font-medium text-[#112A46] bg-[#FED767] rounded-full border border-[#FED767] hover:bg-transparent hover:text-[#FED767]"
          >
            Sign Up
          </Link>
          <Link
            href="/Pages/Login"
            passHref
            className="md:px-4 py-2 px-2 flex flex-row justify-center items-center text-xs md:text-sm font-medium text-[#FED767] bg-transparent rounded-full border border-[#FED767] hover:bg-[#FED767] hover:text-[#112A46]"
          >
            Login
          </Link>
        </div>
      </div>
      <div className="md:w-[50%] relative h-[300px] md:h-full bg-black rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
        {slides.map((slide, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={index}
            src={slide}
            alt={`Slide ${index}`}
            className={
              "w-full h-full object-cover transition-all duration-1000 rounded-b-xl md:rounded-r-xl md:rounded-bl-none" +
              (index === currentSlide
                ? "opacity-100"
                : "opacity-0 absolute top-0 left-0 transition-all duration-1000 rounded-b-xl md:rounded-r-xl md:rounded-bl-none")
            }
            style={{ height: "100%", width: "100%" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
