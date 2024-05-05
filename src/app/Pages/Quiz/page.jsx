"use client";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa6";
import Header from "@/app/Components/Header";
import RadioOption from "@/app/Components/RadioOption";
import { soal } from "@/app/Data/Data";
import QuestionBox from "@/app/Components/QuestionBox";
import Button from "@/app/Components/Button";

export default function Quiz() {
  const [activeQuestionId, setActiveQuestionId] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(() => soal.find((item) => item.id === activeQuestionId));
  const [history, setHistory] = useState([{ questionId: activeQuestionId, activeOption: null }]);

  const handleOption = (option) => {
    const existingEntry = history.find(entry => entry.questionId === activeQuestionId);
    if (existingEntry) {
        setHistory(history.map(entry =>
            entry.questionId === activeQuestionId ? { ...entry, activeOption: option } : entry
        ));
    } else {
        setHistory([...history, { questionId: activeQuestionId, activeOption: option }]);
    }
    console.log(history)
};

  const handleActiveQuestionId = (id) => {
    setActiveQuestionId(id);
  };
  const handleNextQuestion = () => {
    activeQuestionId === soal.length ? setActiveQuestionId(1) : setActiveQuestionId(activeQuestionId + 1);
  };
  const handlePrevQuestion = () => {
    activeQuestionId === 1 ? setActiveQuestionId(soal.length) : setActiveQuestionId(activeQuestionId - 1);
  };

  const filterAnswer = (id)=>{

      const data = history.find(item => item.questionId === activeQuestionId);
      return data ? data.activeOption : null;

  }
  const handleActiveQuestion = (id) => {
    setActiveQuestion(soal.find((item) => item.id === id));
  };

  useEffect(() => {
    handleActiveQuestion(activeQuestionId);
  }, [activeQuestionId]);


  return (
    <main className="flex flex-col">
      <Navbar />
      <Header>Sub materi</Header>
      <div className="container px-5 md:px-12 mx-auto  ">
        <section className="py-12 text-2xl md:text-4xl font-bold italic text-center lg:text-left">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        </section>
        <section className="flex justify-between lg:flex-row flex-col  gap-3">
          <aside className="lg:w-1/5 flex flex-col  gap-8  ">
            <div className="lg:w-full w-fit h-fit lg:h-auto lg:aspect-[16/12] flex flex-col gap-3 lg:gap-0 justify-between rounded-3xl p-5 bg-[#4792E0]">
              <div className="flex gap-2">
                <div className="size-10 lg:size-14 rounded-full bg-neutral-500"></div>
                <div className="text-black">
                  <h5 className="md:ext-xl text-lg ">Nama Materi</h5>
                  <small className="">10 soal</small>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaUser></FaUser>
                <small>Oleh : Course creator</small>
              </div>
            </div>
            <div className="bg-[#CCCCCC] flex flex-col p-5 gap-2 rounded-3xl w-full h-fit lg:aspect-[10/12] ">
              <div className="overflow-y-auto w-full lg:aspect-[10/12] ">
                <div className=" grid lg:grid-cols-4  md:grid-cols-10 grid-cols-7  gap-2  ">
                  {soal.map((item) => (
                    <QuestionBox key={item.id} activeId={activeQuestionId} onClick={() => handleActiveQuestionId(item.id)}>
                      {item.id}
                    </QuestionBox>
                  ))}
                </div>
              </div>
             <Button className={"mx-auto"}>Kumpulkan</Button>
            </div>
          </aside>
        <main className="lg:w-4/5 w-full bg-[#CCCCCC] flex flex-col justify-between gap-2 rounded-2xl p-5 md:p-10 lg:p-16">
            <h2 className="lg:text-3xl md:text-xl text-lg text-center">{activeQuestion.pertanyaan}</h2>
            <label htmlFor="answer"></label>
            <section className="w-full flex flex-col gap-3">
              {activeQuestion.pilihanJawaban.map((item, index) => (
                <RadioOption key={index} activeOption={filterAnswer(item.id)} onClick={() => handleOption(String.fromCharCode(65 + index))} option={String.fromCharCode(65 + index)} name={"answer"}>
                  {item}
                </RadioOption>
              ))}
            </section>
          </main>
        </section>
        <section className="lg:w-4/5 w-full flex justify-between ms-auto lg:px-3  mt-3">
          <Button onClick={() => handlePrevQuestion()}>Kembali</Button>
          <Button onClick={() => handleNextQuestion()}>Selanjutnya</Button>
        </section>
      </div>

      <Footer />
    </main>
  );
}
