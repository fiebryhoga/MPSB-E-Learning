import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center h-8">
      <div className="flex flex-row gap-4 justify-center items-center">
        <a href="">
          <i className="font-bold text-sm">Lorem Ipsum</i>
        </a>
        <a href="">
          <i className="text-xs">Home</i>
        </a>
        <a href="">
          <i className="text-xs">My Course</i>
        </a>
      </div>
      <button className="bg-[#FED767] py-[8.4px] px-3 rounded-full text-xs font-semibold">
        Masuk
      </button>
    </div>
  );
}

export default Navbar
