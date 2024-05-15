import React from "react";
import { FaUser } from "react-icons/fa6";


const BoxTitle = () => {
  return (
    <div className="flex flex-col w-full bg-[#CCCCCC] rounded-xl py-8 pl-4 gap-10">
      <div className="flex flex-row justify-start items-start gap-2">
        <div className=" border border-white flex justify-center items-center rounded-full h-[45px] w-[45px] bg-slate-800">
          <p className="">logo</p>
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-normal ">Nama Materi</p>
          <p className="text-xs font-light">10 Soal</p>
        </div>
      </div>
      <div className="flex flex-row px-4 gap-2">
        <FaUser></FaUser>
        <small>Oleh : Course creator</small>
      </div>
    </div>
  );
};

export default BoxTitle;
