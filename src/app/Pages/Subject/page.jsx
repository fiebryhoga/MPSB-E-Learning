// /* eslint-disable @next/next/no-img-element */
// import Navbar from "@/app/Components/Navbar";
// import Footer from "@/app/Components/Footer";
// import Header from "@/app/Components/Header";
// import ProgressBar from "@/app/Components/ProgressBar";
// import Materi from "./components/Materi";

// import data from "./data/data";




// import React from "react";

// export default function Subject() {
//   return (
//     <main className="flex flex-col">
//       <Navbar />

//       <Header>Kelas XX - Kurikulum XXX</Header>

//       <div className="flex flex-col py-8 px-10 gap-10">
//         <div className="flex flex-col gap-4">
//           <h2 className="text-2xl font-extrabold">Judul Materi</h2>
//           <p>
//             Deskripsi singkat dari materi, semisal dalam materi ini akan
//             membahas dasar dasar cara memahami wanita yang baik dan benar
//           </p>
//         </div>
//         <div className="w-full">
//           <div className="border border-black rounded-xl min-h-[310px]">
//             <img
//               className="w-full h-full object-cover rounded-t-xl"
//               src="/Assets/Images/card.png"
//               alt=""
//             />{" "}
//           </div>
//         </div>
//         <p className="text-center text-xl mb-3">
//           <b>
//             <i>Progress :</i>
//           </b>
//         </p>
//         <ProgressBar />
//       </div>
//       <Footer />
//     </main>
//   );
// }




/* eslint-disable @next/next/no-img-element */


"use client";
import React from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import ProgressBar from "@/app/Components/ProgressBar";
import Materi from "@/app/Components/Materi";
import mapel from "@/app/Data/Data";

export default function Subject() {

  const data = mapel;
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Header>Kelas XX - Materi XX</Header>
      <div className="w-full sm:py-20 sm:px-[8vw] mb-10 sm:mb-20 flex flex-col lg:flex-row md:flex-row sm:flex-col justify-between items-center py-8 px-10 gap-10">
        <div className="flex flex-col lg:items-start w-full lg:w-1/2 mb-10 lg:mb-0 gap-4">
          <h1 className="text-black font-extrabold text-xl sm:text-3xl my-4 lg:my-8 lg:text-left">
            {data.judulMateri}
          </h1>
          <p className="w-full md:w-[40vw] sm:w-[35vw] text-justify mb-4">
            {data.deskripsiMateri}
          </p>
          <button className="w-[180px] h-[50px] bg-[#FED767] rounded-full hover:bg-[#9ea433]">
            Enroll
          </button>
        </div>
        <div className="flex justify-center items-center w-full lg:w-1/2 border-2 border-black rounded-xl">
          <img
            className="w-full h-full object-cover"
            src="/Assets/Images/card.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col py-8 px-10 gap-10 md:px-24">
        <div className="px-4 sm:px-6 py-3">
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
        <div>
          <Materi />
        </div>
      </div>

      <Footer />
    </main>
  );
}