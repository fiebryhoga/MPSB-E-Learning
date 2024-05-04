"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center py-3 px-8 w-full">
      <div className=" flex flex-row justify-center items-center md:gap-6">
        <button className=" md:hidden" onClick={() => setNav(!nav)}>
          <Image src="/Assets/Images/Toggle.svg" width={25} height={25}></Image>
        </button>
        <Link className="hidden md:block" href="/" passHref>
          <div>
            <i className="font-bold text-sm">Lorem Ipsum</i>
          </div>
        </Link>
        <Link href="/" passHref>
          <i className="text-xs font-light hidden pt-1 md:flex">Home</i>
        </Link>
        <Link href="/Pages/Course" passHref>
          <i className="text-xs font-light hidden pt-1 md:flex">My Course</i>
        </Link>
      </div>
      <Link className="md:hidden" href="/" passHref>
        <div>
          <i className="font-bold text-sm">Lorem Ipsum</i>
        </div>
      </Link>
      <Link href="/Pages/SignUp" passHref>
        <div className="bg-[#FED767] py-[8.4px] px-3 rounded-full text-xs font-semibold">
          Masuk
        </div>
      </Link>

      {nav ? (
        <div className="bg-black opacity-25 fixed w-full h-screen z-10 top-0 right-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0 w-[80%] left-0 h-screen bg-white z-10 transition-all ease-in-out duration-700 opacity-95"
            : "fixed top-0 w-[80%] right-[100%] h-screen bg-white z-10 transition-all ease-in-out duration-700"
        }
      >
        <nav className="w-full">
          <ul className="flex flex-col mt-5 w-full">
            <button className="w-full flex flex-row justify-end px-8">
              <AiOutlineClose
                onClick={() => setNav(!nav)}
                size={22}
                className=" md:hidden font-bold left-60 cursor-pointer"
              />
            </button>
            <Link className="py-2 px-8 hover:bg-gray-200" href="/" passHref>
              <i className="text-xs font-light">Home</i>
            </Link>
            <Link
              className="py-2 px-8 hover:bg-gray-200"
              href="/Pages/Course"
              passHref
            >
              <i className="text-xs font-light">My Course</i>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
