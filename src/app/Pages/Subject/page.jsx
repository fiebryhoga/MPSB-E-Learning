import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import ProgressBar from "@/app/Components/ProgressBar";
import Materi from "@/app/Components/Materi";
import data from "../Data/Data";

import React from "react";

export default function Subject() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="w-full bg-primary py-20 px-10 bottom-0">
        <p className="text-secondary text-center md:text-start text-xl">
          <i>
            <b>Kelas {data.kelas} - Kurikulum {data.kurikulum}</b>
          </i>
        </p>
      </div>
      <div className="w-full h-[500px] py-20 px-[8vw] mb-20 flex justify-between lg:flex-row md:flex-row sm:flex-col">
        <div>
          <h1 className="text-3xl my-8">{data.judulMateri}</h1>
          <div className=" flex justify-between lg:flex-col md:flex-col sm-row">
            <p className=" w-[40vw] text-justify h-[150px]">{data.deskripsiMateri}</p>
            <button className="text-white w-[180px] mt-4 h-[50px] bg-[#666666] lg:self-center sm:self-start rounded hover:bg-[#9e9e9e]">Enroll</button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <iframe className="lg:w-[480px] lg:h-[280px] md:w-[400px] md:h-[240px] sm:w-[350px] sm:h-[200px]" src="https://www.youtube.com/watch?v=_38OWbFYYh4&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=4" frameborder="0"></iframe>
        </div>
      </div>
      <div className="px-6 py-3">
        <p className="text-center text-xl mb-3">
          <b>
            <i>Progress :</i>
          </b>
        </p>
        <ProgressBar />
      </div>
      <div className="flex justify-center items-center w-full py-5">
        <span className="bg-gray-200 w-[95%] h-1"></span>
      </div>
      <div >
        <Materi />
      </div>
      <Footer />
    </main>
  );
}
