import React from "react";
import Navbar from "@/app/Components/Navbar";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";

// const subJudul = [
//   {
//     id: 1,
//     subjudul: "anjing anjing",
//   },
//   {
//     id: 2,
//     subjudul: "anjing anjing",
//   },
//   {
//     id: 3,
//     subjudul: "anjing anjing",
//   },
//   {
//     id: 4,
//     subjudul: "anjing anjing",
//   },
//   {
//     id: 5,
//     subjudul: "anjing anjing",
//   },

// ]

const subMateri = () => {
  return (
    <main className="flex flex-col max-w-[1640px] mx-auto">
      <Navbar />
      <Header>Judul Materi - Kelas XX - Kurikulum XX</Header>
      <div className="px-8 md:px-10 flex flex-col justify-center w-full items-center md:justify-center md:items-center">
        <div className="flex flex-row gap-12">
          <div className="flex flex-col md:w-full">
            <div className=" justify-between flex flex-row items-start md:mb-5">
              <h2 className=" font-bold text-5xl w-60 leading-relaxed md:px-20 md:w-full md:text-2xl ">
                Judul Sub Materi
              </h2>
              <u className="font-light text-xs pt-2 md:hidden">
                <i>Judul Sub Materi</i>
              </u>
            </div>
            <p className=" -mt-2 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="hidden md:flex w-[322px] h-auto border border-black border-opacity-80 rounded-xl py-4 flex-col gap-4 items-center justify-center">
            <u className="text-sm font-light opacity-80">
              Judul Sub judul materi 1
            </u>
            <u className="text-sm font-light opacity-80">
              Judul Sub judul materi 1
            </u>
            <u className="text-sm font-light opacity-80">
              Judul Sub judul materi 1
            </u>
            <u className="text-sm font-light opacity-80">
              Judul Sub judul materi 1
            </u>
            <u className="text-sm font-light opacity-80">
              Judul Sub judul materi 1
            </u>
          </div>
        </div>

        <div className="lg:w-full lg:flex lg:justify-start lg:items-start mt-6">
          <div className=" bg-[#CCCCCC] h-[208px] w-full md:w-[882px] md:h-[552px] rounded-[30px] mt-7"></div>
        </div>
        <div className="bg-[#FED767] h-[40px] w-[160px] rounded-full mt-10 flexjustify-center items-center">
          <p className="text-center font-bold text-[#000000]">Attemp Quiz</p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default subMateri;
