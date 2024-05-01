import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center h-8 py-6 px-8">
      <div className="flex flex-row gap-4 justify-center items-center">
        <Link href="/" passHref>
          <div>
            <i className="font-bold text-sm">Lorem Ipsum</i>
          </div>
        </Link>
        <Link href="/" passHref>
          <div>
            <i className="text-xs">Home</i>
          </div>
        </Link>
        <Link href="/Pages/Course" passHref>
          <div>
            <i className="text-xs">My Course</i>
          </div>
        </Link>
      </div>
      <Link href="/Pages/SignUp" passHref>
        <div className="bg-[#FED767] py-[8.4px] px-3 rounded-full text-xs font-semibold">
          Masuk
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
