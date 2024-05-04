import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start w-full bg-[#112A46] py-8 px-8 mt-20 bottom-0">
      <div className="flex flex-col justify-start items-start w-full md:w-[50%] gap-4 lg:px-8 md:pr-6">
        <div className="flex flex-row gap-2 mb-2 items-center">
          <Image
            src="/Assets/Images/Mangcoding.svg"
            alt="Mangcoding"
            width={30}
            height={30}
          />
          <h4 className="font-semibold tracking-wider text-white text-sm">
            Mangcoding
          </h4>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xs text-[#DDDDDD] font-light tracking-wide leading-6">
            Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
            diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
            muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde.
          </p>
          <Image src="/Assets/Images/sosmed.svg" width={110} height={20}></Image>
        </div>
      </div>

      <div className="flex flex-col mt-8 md:mt-0 md:px-4 justify-start w-full gap-4 md:w-[50%]">
        <div className="grid grid-cols-2 lg:flex lg:flex-row lg:px-8 gap-16 mb-6 pt-1">
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold tracking-wider text-white text-sm mb-4">
              Pages
            </h4>
            <a href="#" className="text-xs tracking-wider font-light text-[#DDDDDD]">
              Home It Work
            </a>
            <a href="#" className="text-xs tracking-wider font-light text-[#DDDDDD]">
              pricing
            </a>
            <a href="#" className="text-xs tracking-wider font-light text-[#DDDDDD]">
              Blog
            </a>
            <a href="#" className="text-xs tracking-wider font-light text-[#DDDDDD]">
              Demo
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold tracking-wider text-white text-sm mb-4">
              Service
            </h4>
            <a href="#" className="text-xs tracking-wider font-light text-[#DDDDDD]">
              Shopify
            </a>
            <a href="#" className="text-xs tracking-wider font-light text-[#DDDDDD]">
              WordPress
            </a>
            <a href="#" className="text-xs tracking-wider font-light text-[#DDDDDD]">
              UI/UX Design
            </a>
          </div>
          <div className="flex flex-col gap-4 w-60">
            <h4 className="font-semibold tracking-wider text-white text-sm mb-4">
              Contact
            </h4>
            <a href="#" className="flex items-center gap-4 text-xs tracking-wider font-light text-[#DDDDDD]">
              <Image src="/Assets/Images/Contact1.svg" width={17} height={17}></Image>
              (406) 555-0120
            </a>
            <a href="#" className="flex items-center gap-4 text-xs tracking-wider font-light text-[#DDDDDD]">
              <Image src="/Assets/Images/Contact2.svg" width={17} height={17}></Image>
              mangcoding123@gmail.com
            </a>
            <a href="#" className="flex items-center gap-4 text-xs tracking-wider font-light text-[#DDDDDD]">
              <Image src="/Assets/Images/Contact3.svg" width={17} height={17}></Image>
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
