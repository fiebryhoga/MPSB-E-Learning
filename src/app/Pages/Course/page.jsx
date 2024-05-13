import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import React from "react";
import ProgressBar from "@/app/Components/ProgressBar";
import Card from "@/app/Components/Card";
import Header from "@/app/Components/Header";

export default function Course() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="w-full bg-primary py-24 px-8 bottom-0">
        <p className="text-secondary text-center md:text-start text-xl">
          <i>
            <b>My Course</b>
          </i>
        </p>
      </div>
      <div className=" px-8 md:px-24 mt-8">
        <p className="text-center text-xl mb-3">
          <b>
            <i>Progress :</i>
          </b>
        </p>
        <ProgressBar />

        <Card />
      </div>
      <Footer />
    </main>
  );
}
