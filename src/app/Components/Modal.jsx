"use client";
import React, { useState } from "react";
import Image from "next/image";

function PopUpForm() {
    const [isOpen, setIsOpen] = useState(false);
  
    const togglePopUp = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        <div className="flex items-center justify-center py-2 pt-10">
          <button class="rounded-full text-lg font-semibold px-6 py-1 bg-secondary" onClick={togglePopUp}>Edit Profile</button>
        </div>
        {isOpen && (
          <div id="formModal" className="fixed inset-0 z-10 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="bg-white px-20 py-2 rounded-lg w-5/12 h-4/5">
              <h2 className="text-lg text-right font-semibold mb-4 text-slate-500 cursor-pointer" id="closeFormBtn" onClick={togglePopUp}>X</h2>
              <form>
                <div className="flex items-center justify-center py-2">
                  <div className="relative">
                    <img className="rounded-full h-32 w-32" src="/Assets/Images/pm.png" alt="" />
                    <Image src="/Assets/Images/Camera.svg" width={30} height={30} className="absolute bottom-0 right-5 cursor-pointer" htmlFor="foto"></Image>
                    <label htmlFor="foto" className="absolute bottom-0 right-5 cursor-pointer opacity-0">yes</label>
                  </div>
                </div>
                <div>
                  <input type="file" id="foto" name="foto" accept="image/*" className="text-xs hidden"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="nama" className="block mb-1 text-xs">Nama Lengkap</label>
                  <input
                    className="w-full h-[30px] border border-slate-500 rounded-lg placeholder:opacity-80 placeholder:text-gray-700 px-4 py-1 text-xs outline-none tracking-wider"
                    placeholder="Nama Lengkap"
                    type="text" id="nama" name="nama"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="block mb-1 text-xs">Email</label>
                  <input
                    className="w-full h-[30px] border border-slate-500 rounded-lg placeholder:opacity-80 placeholder:text-gray-700 px-4 py-1 text-xs outline-none tracking-wider"
                    placeholder="Email"
                    type="email" id="email" name="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="kontak" className="block mb-1 text-xs">Kontak</label>
                  <div className="flex space-x-2">
                  <select id="countryCode" name="countryCode" className="border border-slate-500 rounded-lg h-[30px] px-4 py-1 text-xs outline-none tracking-wider">
                    <option value="+62">+62</option>
                    <option value="+38">+38</option>
                  </select>
                  <input
                    className="w-full h-[30px] border border-slate-500 rounded-lg placeholder:opacity-80 px-4 py-1 text-xs outline-none tracking-wider"
                    type="text" id="kontak" name="kontak"
                  />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="pendidikan" className="block mb-1 text-xs">Pendidikan</label>
                  <input
                    className="w-full h-[30px] border border-slate-500 rounded-lg placeholder:opacity-80 placeholder:text-gray-700 px-4 py-1 text-xs outline-none tracking-wider"
                    placeholder="Pendidikan"
                    type="text" id="pendidikan" name="pendidikan"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="alamat" className="block mb-1 text-xs">Alamat</label>
                  <input
                    className="w-full h-[30px] border border-slate-500 rounded-lg px-4 py-1 text-xs outline-none tracking-wider"
                    type="text" id="alamat" name="alamat"
                  />
                </div>
                <div className="flex items-center justify-center py-2">
                  <button type="submit" class="rounded-full font-semibold text-base px-6 py-1 bg-secondary">Update Profile</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default PopUpForm;
