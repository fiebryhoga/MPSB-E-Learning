"use client";
import React, { useState, useRef, useEffect } from "react";
import { data } from "../Data/Data";

const Card = () => {
  const [isOpenKelas, setIsOpenKelas] = useState(false);
  const [isOpenJurusan, setIsOpenJurusan] = useState(false);
  const [isOpenKurikulum, setIsOpenKurikulum] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedJurusan, setSelectedJurusan] = useState("");
  const [selectedKurikulum, setSelectedKurikulum] = useState("");
  const [searchSubject, setSearchSubject] = useState("");
  const [showAllCards, setShowAllCards] = useState(false);
  const dropdownKelasRef = useRef(null);
  const dropdownJurusanRef = useRef(null);
  const dropdownKurikulumRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownKelasRef.current &&
        !dropdownKelasRef.current.contains(event.target)
      ) {
        setIsOpenKelas(false);
      }
      if (
        dropdownJurusanRef.current &&
        !dropdownJurusanRef.current.contains(event.target)
      ) {
        setIsOpenJurusan(false);
      }
      if (
        dropdownKurikulumRef.current &&
        !dropdownKurikulumRef.current.contains(event.target)
      ) {
        setIsOpenKurikulum(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    switch (dropdown) {
      case "kelas":
        setIsOpenKelas(!isOpenKelas);
        break;
      case "jurusan":
        setIsOpenJurusan(!isOpenJurusan);
        break;
      case "kurikulum":
        setIsOpenKurikulum(!isOpenKurikulum);
        break;
      default:
        break;
    }
  };

  const handleSelect = (dropdown, value) => {
    switch (dropdown) {
      case "kelas":
        setSelectedClass(value);
        setIsOpenKelas(false);
        break;
      case "jurusan":
        setSelectedJurusan(value);
        setIsOpenJurusan(false);
        break;
      case "kurikulum":
        setSelectedKurikulum(value);
        setIsOpenKurikulum(false);
        break;
      default:
        break;
    }
  };

  const handleSearch = (e) => {
    setSearchSubject(e.target.value);
  };

  const matchSubject = (subject, search) => {
    return subject.toLowerCase().includes(search.toLowerCase());
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Filter */}
      <div className="flex flex-row justify-between relative">
        <input
          className="border border-black rounded-full w-[630px] py-[7px] px-8 outline-none text-sm tracking-wider placeholder-italic placeholder-font-light mr-8"
          placeholder="Pencarian"
          type="text"
          value={searchSubject}
          onChange={handleSearch}
        />
        {/* Dropdown kelas */}
        <div ref={dropdownKelasRef} className="relative inline-block">
          <button
            className={`border border-black rounded-full w-[180px] py-[7px] px-8 ${
              isOpenKelas ? "bg-gray-100" : ""
            }`}
            onClick={() => toggleDropdown("kelas")}
          >
            {selectedClass !== "" ? selectedClass : "Kelas"}
          </button>
          {/* Dropdown kelas content */}
          {isOpenKelas && (
            <div className="absolute z-10 mt-1 gap-2 flex flex-col pt-4">
              <button
                className="block border bg-white border-black rounded-full w-[180px] py-[7px] px-8 hover:bg-gray-200"
                onClick={() => handleSelect("kelas", "All")}
              >
                All
              </button>
              <button
                className="block border bg-white border-black rounded-full w-[180px] py-[7px] px-8 hover:bg-gray-200"
                onClick={() => handleSelect("kelas", "Kelas X")}
              >
                Kelas X
              </button>
              <button
                className="block border bg-white border-black rounded-full w-[180px] py-[7px] px-8 hover:bg-gray-200"
                onClick={() => handleSelect("kelas", "Kelas XI")}
              >
                Kelas XI
              </button>
              <button
                className="block border bg-white border-black rounded-full w-[180px] py-[7px] px-8 hover:bg-gray-200"
                onClick={() => handleSelect("kelas", "Kelas XII")}
              >
                Kelas XII
              </button>
            </div>
          )}
        </div>

        {/* Dropdown jurusan */}
        <div ref={dropdownJurusanRef} className="relative inline-block">
          <button
            className={`border border-black rounded-full w-[180px] py-[7px] px-8 ${
              isOpenJurusan ? "bg-gray-100" : ""
            }`}
            onClick={() => toggleDropdown("jurusan")}
          >
            {selectedJurusan !== "" ? selectedJurusan : "Jurusan"}
          </button>
          {/* Dropdown jurusan content */}
          {isOpenJurusan && (
            <div className="absolute z-10 mt-1 gap-2 flex flex-col pt-4">
              <button
                className="block border bg-white border-black rounded-full w-[180px] py-[7px] px-8 hover:bg-gray-200"
                onClick={() => handleSelect("jurusan", "All")}
              >
                All
              </button>
              <button
                className="block border bg-white border-black rounded-full w-[180px] py-[7px] px-8 hover:bg-gray-200"
                onClick={() => handleSelect("jurusan", "TKJ")}
              >
                TKJ
              </button>
              <button
                className="block border bg-white border-black rounded-full w-[180px] py-[7px] px-8 hover:bg-gray-200"
                onClick={() => handleSelect("jurusan", "RPL")}
              >
                RPL
              </button>
              <button
                className="block border bg-white border-black rounded-full w-[180px] py-[7px] px-8 hover:bg-gray-200"
                onClick={() => handleSelect("jurusan", "Multimedia")}
              >
                Multimedia
              </button>
              <button
                className="block border bg-white border-black rounded-full w-[180px] py-[7px] px-8 hover:bg-gray-200"
                onClick={() => handleSelect("jurusan", "Tata Boga")}
              >
                Tata Boga
              </button>
            </div>
          )}
        </div>

        {/* Dropdown kurikulum */}
        <div ref={dropdownKurikulumRef} className="relative inline-block">
          <button
            className={`border border-black rounded-full w-[180px] py-[7px] px-8 ${
              isOpenKurikulum ? "bg-gray-100" : ""
            }`}
            onClick={() => toggleDropdown("kurikulum")}
          >
            {selectedKurikulum !== "" ? selectedKurikulum : "Kurikulum"}
          </button>
          {/* Dropdown kurikulum content */}
          {isOpenKurikulum && (
            <div className="absolute z-10 mt-1 gap-2 flex flex-col pt-4">
              <button
                className="block border bg-white border-black rounded-full w-[180px] py-[7px] px-8 hover:bg-gray-200"
                onClick={() => handleSelect("kurikulum", "All")}
              >
                All
              </button>
              <button
                className="block border bg-white border-black rounded-full w-[180px] py-[7px] px-8 hover:bg-gray-200"
                onClick={() => handleSelect("kurikulum", "K-2013")}
              >
                K-2013
              </button>
              <button
                className="block border bg-white border-black rounded-full w-[180px] py-[7px] px-8 hover:bg-gray-200"
                onClick={() => handleSelect("kurikulum", "K-Merdeka")}
              >
                K-Merdeka
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Card */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-6">
        {data
          .filter((item) => {
            if (selectedClass !== "" && selectedClass !== "All") {
              if (item.class !== selectedClass) return false;
            }

            if (selectedJurusan !== "" && selectedJurusan !== "All") {
              if (
                item.department !==
                (selectedJurusan === "TKJ"
                  ? "Teknik Komputer dan Jaringan"
                  : selectedJurusan === "RPL"
                  ? "Rekayasa Perangkat Lunak"
                  : selectedJurusan)
              ) {
                return false;
              }
            }

            if (selectedKurikulum !== "" && selectedKurikulum !== "All") {
              if (
                item.curriculum !==
                (selectedKurikulum === "K-2013"
                  ? "Kurikulum 2013"
                  : selectedKurikulum === "K-Merdeka"
                  ? "Kurikulum Merdeka"
                  : selectedKurikulum)
              ) {
                return false;
              }
            }

            if (!matchSubject(item.subject, searchSubject)) return false;

            return true;
          })
          .slice(0, showAllCards ? data.length : 6)
          .map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:w-[300px] sm:h-[408px] md:w-[400px] md:h-[508px] xl:w-[400px] xl:h-[508px] rounded-xl shadow-md border border-black"
            >
              <div className="w-full h-[65%] rounded-t-xl">
                <img
                  className="w-full h-full object-cover rounded-t-xl"
                  src={item.cover}
                  alt=""
                />
              </div>
              <div className=" flex flex-col p-4 bg-[#FED767] h-[35%] rounded-b-xl gap-2">
                <h4 className="font-semibold text-lg mb-3">{item.subject}</h4>
                <p className="font-light italic">{item.class}</p>
                <p className="font-light italic">{item.department}</p>
                <p className="font-light italic">{item.curriculum}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="flex flex-row justify-center">
        {!showAllCards ? (
          <button
            className="bg-[#FED767] py-2 rounded-full px-3"
            onClick={() => setShowAllCards(true)}
          >
            See More
          </button>
        ) : (
          <button
            className="bg-[#FED767] py-2 rounded-full w-16"
            onClick={() => setShowAllCards(false)}
          >
            Hide
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;