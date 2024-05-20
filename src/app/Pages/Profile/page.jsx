import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import Modal from "@/app/Components/Modal";
import React from "react";

export default function Profile() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="w-full bg-primary py-20 px-24 bottom-0">
        <p className="text-secondary text-center md:text-start text-xl">
          <i>
            <b>Profile</b>
          </i>
        </p>
      </div>
      <div className="flex items-center justify-center py-2">
        <img className="rounded-full h-40 w-40" src="/Assets/Images/pm.png" alt="" />
      </div>
      <div className="grid grid-cols-6 gap-4 pt-10">
        <div className="col-start-2 col-span-4">
          <div className="grid px-5 lg:grid-cols-2 px-24 md:grid-cols-1 gap-4 px-10 sm:px-5 py-5 text-sm mx-2 font-medium italic bg-white rounded-lg shadow-me">
            <div className="text-slate-500">Nama</div>
            <div>Tifa Lockheart</div>
            <div className="text-slate-500">Pendidikan</div>
            <div>S1 tapi cintaku padamu S3</div>
            <div className="text-slate-500">Alamat</div>
            <div>di hati ku</div>
          </div>
        </div>
        <div className="col-start-2 col-span-4 pt-5">
          <div className="grid px-5 text-sm lg:grid-cols-2 px-5 md:grid-cols-1 gap-4 px-10 sm:px-5 py-5 font-medium italic bg-white rounded-lg shadow-me">
            <div className="text-slate-500">Kontak</div>
            <div>08122121888</div>
            <div className="text-slate-500">Email</div>
            <div>tifalockheart@gmail.com</div>
          </div>
        </div>
      </div>

      <Modal />
      <Footer />
    </main>
  );
}