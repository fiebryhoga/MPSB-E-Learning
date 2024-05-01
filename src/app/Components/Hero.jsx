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
    <div className="flex flex-row bg-[#112A46] w-full h-[449px] rounded-xl">
      <div className="flex flex-col pl-[60px] pr-4 w-[50%] justify-center h-full gap-3">
        <h1 className="text-white text-[31px] font-semibold pr-10 tracking-tight">
          Loren Ipsum <br /> Can we please not hating each other, please?
        </h1>
        <p className="text-lg text-white pr-12">
          Ah mana mungkin bambang tak la mau sama dia please deh mending sama
          satpam dah gua daripada sama dia.
        </p>
        <div className="mt-8 flex flex-row gap-2">
          <Link
            href="/Pages/Login"
            passHref
            className="px-3 py-2 text-sm font-medium text-[#112A46] bg-[#FED767] rounded-full border border-[#FED767] hover:bg-transparent hover:text-[#FED767]"
          >
            Sign Up
          </Link>
          <Link
            href="/Pages/Login"
            passHref
            className="px-4 py-2 text-sm font-medium text-[#FED767] bg-transparent rounded-full border border-[#FED767] hover:bg-[#FED767] hover:text-[#112A46]"
          >
            Login
          </Link>
        </div>
      </div>
      <div className="w-[50%] relative h-full bg-black rounded-r-xl">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index}`}
            className={
              "w-full object-cover transition-all duration-1000 rounded-r-xl " +
              (index === currentSlide
                ? "opacity-100"
                : "opacity-0 absolute top-0 left-0 transition-all duration-1000 rounded-r-xl")
            }
            style={{ height: "100%", width: "100%" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
