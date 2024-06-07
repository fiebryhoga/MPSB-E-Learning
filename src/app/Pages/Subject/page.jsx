"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import ProgressBar from "@/app/Components/ProgressBar";
import Materi from "@/app/Components/Materi";
import axios from "axios";

export default function Apps() {
  const [data, setData] = useState(null);
  const [itemId, setItemId] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if (id) {
      console.log(id);
      setItemId(id);
      
      axios.get(`https://mpsb-e-learning.my.id/api/mapels/${id}`)
        .then(response => {
          console.log('Response data:', response.data);
          console.log(data.course_name);
          const course = response.data.courses;
          setData(course);
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
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Header>Kelas {data.grade_id} - Kurikulum {data.curriculum_id}</Header>
      <div className="container mx-auto px-4 py-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:px-[50px]">
          <div>
            <h1 className="text-black font-extrabold text-xl sm:text-3xl my-4 lg:my-8 lg:text-left">
              {data.course_name}
            </h1>
            <p className="text-justify mb-10" dangerouslySetInnerHTML={{ __html: data.course_description }}></p>
            <button className="w-[180px] h-[50px] bg-[#FED767] rounded-[10px] hover:bg-[#9ea433]">
              Enroll
            </button>
          </div>
          <div>
            <img className="w-full h-full object-cover rounded-xl" src={data.photo_link} alt={data.course_name} />
          </div>
        </div>
        <div className="py-20">
          <div className="px-4 sm:px-6">
            <p className="text-center text-xl mb-3">
              <b><i>Progress :</i></b>
            </p>
            <ProgressBar />
          </div>
          <div className="flex justify-center items-center py-5">
            <span className="bg-gray-200 w-[95%] h-1"></span>
          </div>
        </div>
        <div>
          <Materi id={itemId} judulMateriList={data.subcourses.map(subcourse => subcourse.subcourse_name)} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
