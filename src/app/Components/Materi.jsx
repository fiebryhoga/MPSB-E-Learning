import React, { useState } from "react";

function Materi({ judulMateriList, id }) {
  const [isOpen, setIsOpen] = useState({});
  const [selectedMateri, setSelectedMateri] = useState(null);

  const handleMateriClick = (materi) => {
    setSelectedMateri(materi === selectedMateri ? null : materi);
    setIsOpen((prevState) => ({ ...prevState, [materi]: !prevState[materi] }));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {judulMateriList.map((materi, index) => (
        <div key={index} className="w-full mb-8">
          <div
            className="w-full h-20 bg-gray-300 cursor-pointer flex items-center relative"
            onClick={() => handleMateriClick(materi)}
          >
            <span className="w-1/12 bg-gray-600 h-full"></span>
            <h3 className="p-4">
              <b>{materi}</b>
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`h-6 w-6 absolute right-4 transition-transform duration-300 transform ${
                isOpen[materi] ? "rotate-180" : ""
              }`}
            >
              <path d="M7 10l5 5 5-5z" fill="currentColor" />
            </svg>
          </div>
          <div
            className={`w-full bg-white rounded-md mt-3 overflow-hidden transition-opacity duration-300 ease-in-out ${
              isOpen[materi]
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform -translate-y-2"
            }`}
          >
            {isOpen[materi] && (
              <div className="flex flex-col items-center gap-1">
                <a
                  href={`/Pages/subMateri_1?id=${id}&judulMateri=${encodeURIComponent(materi)}`}
                  className="block p-4 w-[90%] bg-gray-300 hover:bg-gray-400"
                >
                  Materi
                </a>
                <a
                  href="#"
                  className="block p-4 w-[90%] bg-gray-300 hover:bg-gray-400"
                >
                  Evaluasi
                </a>
                <a
                  href="#"
                  className="block p-4 w-[90%] bg-gray-300 hover:bg-gray-400"
                >
                  Quiz
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
      <div className="w-full h-20 bg-gray-300 cursor-pointer flex flex-col mb-8">
          <a
                  href="#"
                  className="block p-4 w-full h-full bg-gray-300 hover:bg-gray-400"
                >
                  UTS
                </a>
      </div>
      <div className="w-full h-20 bg-gray-300 cursor-pointer flex flex-col items-center">
          <a
                  href="#"
                  className="block p-4 w-full h-full bg-gray-300 hover:bg-gray-400"
                >
                  UAS
                </a>
      </div>
    </div>
  );
}

export default Materi;
