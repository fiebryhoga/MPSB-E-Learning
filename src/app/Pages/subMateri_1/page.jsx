"use client"; 

import React, { useEffect, useState } from "react";
import Navbar from "@/app/Components/Navbar";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import axios from "axios";

const subMateri = () => {
  const [data, setData] = useState(null);
  const [itemId, setItemId] = useState(null);
  const [judulMateri, setJudulMateri] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const judul = urlParams.get('judulMateri');
    if (id && judul) {
      console.log(`ID: ${id}, Judul Materi: ${judul}`);
      setItemId(id);
      setJudulMateri(judul);
      
      axios.get(`https://mpsb-e-learning.my.id/api/mapels/${id}`)
        .then(response => {
          const course = response.data.courses;
          const subcourse = course.subcourses.find(sub => sub.subcourse_name === judul);
          setData(subcourse);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex flex-col max-w-[1640px] mx-auto">
      <Navbar />
      <Header> {data.subcourse_name} - Kelas {data.grade_id}  - Kurikulum {data.curriculum_id}</Header>
      <div className="px-8 md:px-10 flex flex-col justify-center w-full items-center md:justify-center md:items-center">
        <div className="flex flex-row gap-12">
          <div className="flex flex-col md:w-full">
            <div className=" justify-between flex flex-row items-start md:mb-5">
              <h2 className=" font-bold text-5xl w-60 leading-relaxed md:px-20 md:w-full md:text-2xl ">
                {data.subcourse_name}
              </h2>
              <u className="font-light text-xs pt-2 md:hidden">
                <i>Judul Sub Materi</i>
              </u>
            </div>
            <p className=" -mt-2 text-justify" dangerouslySetInnerHTML={{ __html: data.content }}>
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
