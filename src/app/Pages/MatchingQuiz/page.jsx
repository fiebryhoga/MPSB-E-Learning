"use client";
import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Navbar from "@/app/Components/Navbar";
import Header from "@/app/Components/Header";
import BoxTitle from "@/app/Components/BoxTitle";
import { QuestionData } from "@/app/Data/Question";


const ItemTypes = {
  ANSWER: "answer",
};

const DraggableAnswer = ({ answer, index, fromOption }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.ANSWER,
    item: { index, answer, fromOption },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`flex flex-row border border-black rounded-lg lg:min-w-[283px] md:min-w-[200px] py-1 bg-[#E1E1E1] px-6 gap-3 items-center ${
        isDragging ? "opacity-50 cursor-grabbing" : "cursor-grab"
      }`}
    >
      <div className="h-8 w-8 rounded-full border border-black flex justify-center items-center text-sm font-bold">
        {answer.id}
      </div>
      <span className="text-base font-medium tracking-wide">
        {answer.label}
      </span>
    </div>
  );
};

const DroppableOption = ({ option, index, currentAnswer, onDropAnswer }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.ANSWER,
    drop: (item) => onDropAnswer(item.index, index, item.fromOption),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`flex flex-row border border-black rounded-lg lg:min-w-[283px] md:min-w-[200px] py-1 px-6 gap-3 items-center ${
        isOver ? "bg-yellow-200" : "bg-[#E1E1E1]"
      }`}
    >
      <div className="h-8 w-8 rounded-full border border-black flex justify-center items-center text-sm font-bold">
        {option.id}
      </div>
      <span className="text-base font-medium tracking-wide">
        {currentAnswer ? (
          <DraggableAnswer
            answer={currentAnswer}
            index={index}
            fromOption={true}
          />
        ) : (
          option.label
        )}
      </span>
    </div>
  );
};

const DropArea = ({ index, currentAnswer, onDropAnswer }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.ANSWER,
    drop: (item) => onDropAnswer(item.index, index, item.fromOption),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`flex flex-row border border-dashed border-gray-400 rounded-lg min-w-[283px] py-1 bg-slate-100 px-6 gap-3 items-center ${
        isOver ? "bg-yellow-200" : ""
      } cursor-grab`}
    >
      <div className="h-8 w-8 rounded-full border border-dashed border-gray-400 flex justify-center items-center text-sm font-bold">
        ?
      </div>
      <span className="text-base font-medium tracking-wide">
        {currentAnswer ? (
          <DraggableAnswer
            answer={currentAnswer}
            index={index}
            fromOption={false}
          />
        ) : (
          "Drop Kembali"
        )}
      </span>
    </div>
  );
};

const MatchingQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(QuestionData.map((q) => q.answers));
  const [assignedAnswers, setAssignedAnswers] = useState(
    QuestionData.map(() => new Array(4).fill(null))
  );
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [score, setScore] = useState(0);
  // const [resultDetails, setResultDetails] = useState([]);

  const handleQuestionChange = (index) => {
    setCurrentQuestion(index);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) =>
      prev < QuestionData.length - 1 ? prev + 1 : prev
    );
  };

  const moveAnswer = (fromIndex, toIndex, fromOption) => {
    const updatedAssignedAnswers = [...assignedAnswers];
    const updatedAnswers = [...answers];

    if (fromOption) {
      const movedAnswer = updatedAssignedAnswers[currentQuestion][fromIndex];
      const targetAnswer = updatedAssignedAnswers[currentQuestion][toIndex];

      if (targetAnswer) {
        updatedAssignedAnswers[currentQuestion][fromIndex] = targetAnswer;
      } else {
        updatedAssignedAnswers[currentQuestion][fromIndex] = null;
      }

      updatedAssignedAnswers[currentQuestion][toIndex] = movedAnswer;
    } else {
      const movedAnswer = updatedAnswers[currentQuestion][fromIndex];
      const targetAnswer = updatedAssignedAnswers[currentQuestion][toIndex];

      if (targetAnswer) {
        updatedAnswers[currentQuestion][fromIndex] = targetAnswer;
      } else {
        updatedAnswers[currentQuestion][fromIndex] = null;
      }

      updatedAssignedAnswers[currentQuestion][toIndex] = movedAnswer;
    }

    setAssignedAnswers(updatedAssignedAnswers);
    setAnswers(updatedAnswers);
  };

  const moveAnswerBackToDropArea = (fromIndex, toIndex, fromOption) => {
    const updatedAssignedAnswers = [...assignedAnswers];
    const updatedAnswers = [...answers];

    if (fromOption) {
      const movedAnswer = updatedAssignedAnswers[currentQuestion][fromIndex];
      updatedAssignedAnswers[currentQuestion][fromIndex] = null;
      updatedAnswers[currentQuestion][toIndex] = movedAnswer;
    } else {
      const movedAnswer = updatedAnswers[currentQuestion][fromIndex];
      updatedAnswers[currentQuestion][fromIndex] = null;
      updatedAnswers[currentQuestion][toIndex] = movedAnswer;
    }

    setAssignedAnswers(updatedAssignedAnswers);
    setAnswers(updatedAnswers);
  };

const handleFinishAttempt = () => {
  let correctQuestions = 0;
  let totalQuestion = parseInt(QuestionData.length);
  totalQuestion = Math.abs(totalQuestion);

  const userSelectedAnswers = [];

  QuestionData.forEach((question, qIndex) => {
    const userAnswersForQuestion = {}; 
    let allMatchesCorrect = true; 
    question.options.forEach((option, oIndex) => {
      const assignedAnswer = assignedAnswers[qIndex][oIndex];
      if (assignedAnswer) {
        userAnswersForQuestion[option.id] = assignedAnswer.id;
        if (assignedAnswer.id !== question.matches[option.id]) {
          allMatchesCorrect = false; 
        }
      }
    });
    userSelectedAnswers.push(userAnswersForQuestion);
    if (Object.keys(userAnswersForQuestion).length > 0 && allMatchesCorrect) {
      correctQuestions += 1; 
    }
  });

  correctQuestions = parseInt(Math.abs(correctQuestions));

  const calculatedScore = Math.floor((100 / totalQuestion) * correctQuestions);
  setScore(calculatedScore); 
  setShowConfirmationPopup(false); 
  setShowResultPopup(true); 
  
  console.log("Total Questions:", totalQuestion);
  console.log("Correct Questions:", correctQuestions);
  console.log("Score:", calculatedScore);
  console.log("User Selected Answers:", userSelectedAnswers);
};
  return (
    <DndProvider backend={HTML5Backend}>
      <main className="flex flex-col h-[160vh]">
        <Navbar />
        <Header>Sub Materi</Header>
        <div className="flex flex-col lg:px-36 md:px-16">
          <h3 className="py-12 font-semibold text-2xl">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <div className="flex flex-row w-full gap-4">
            <div className="flex flex-col w-[365px]">
              <BoxTitle>Campur Campur</BoxTitle>
              <div className="px-8 py-8 bg-[#CCCCCC] rounded-t-xl grid grid-cols-4 gap-2 mt-6">
                {QuestionData.map((question, index) => (
                  <button
                    key={question.id}
                    onClick={() => handleQuestionChange(index)}
                    className={`border border-gray-400 px-1 py-2 rounded-md mr-1 ml-1 ${
                      currentQuestion === index ? "bg-slate-100" : ""
                    }`}
                  >
                    {question.id}
                  </button>
                ))}
              </div>
              <div className="w-full py-2 bg-[#CCCCCC] rounded-b-xl flex justify-center items-center">
                <button
                  className="py-2 px-4 mb-2 bg-yellow-400 rounded-full text-sm sm:px-2"
                  onClick={() => setShowConfirmationPopup(true)}
                >
                  Kumpulkan
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full gap-8">
              <div className="flex flex-col bg-[#CCCCCC] rounded-lg py-10">
                <h4 className="text-center text-base py-6">
                  {QuestionData[currentQuestion].question}
                </h4>
                <div className="flex flex-row lg:px-16 md:px-10 mt-10 justify-between">
                  <div className="flex flex-col gap-6 md:mr-6">
                    {QuestionData[currentQuestion].options.map(
                      (option, index) => (
                        <DroppableOption
                          key={option.id}
                          option={option}
                          index={index}
                          currentAnswer={
                            assignedAnswers[currentQuestion][index]
                          }
                          onDropAnswer={moveAnswer}
                        />
                      )
                    )}
                  </div>
                  <div className="flex flex-col gap-6">
                    {answers[currentQuestion].map((answer, index) =>
                      answer !== null ? (
                        <DraggableAnswer
                          key={answer.id}
                          answer={answer}
                          index={index}
                          fromOption={false}
                        />
                      ) : (
                        <DropArea
                          key={index}
                          index={index}
                          currentAnswer={null}
                          onDropAnswer={moveAnswerBackToDropArea}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <button
                  onClick={handlePrevQuestion}
                  className="py-1 px-4 bg-yellow-400 rounded-full"
                >
                  Kembali
                </button>
                <button
                  onClick={handleNextQuestion}
                  className="py-1 px-4 bg-yellow-400 rounded-full"
                >
                  Lanjutkan
                </button>
              </div>
            </div>
          </div>
        </div>
        {showConfirmationPopup && (
          <div className="absolute flex flex-col h-[160px] translate-x-[300px] translate-y-[950px] w-[928px] items-center justify-center rounded-lg bg-white shadow-lg">
            <h2 className="text-xl font-bold mb-4">Konfirmasi</h2>
            <p className="mb-4">Apakah anda yakin ingin Finish Attempt?</p>
            <div className="flex justify-end items-end w-full pr-10 gap-4">
              <button
                onClick={() => setShowConfirmationPopup(false)}
                className="py-2 px-4 border border-slate-300 rounded-full"
              >
                Batal
              </button>
              <button
                onClick={handleFinishAttempt}
                className="py-2 px-4 bg-yellow-400 rounded-full"
              >
                Finish Attempt
              </button>
            </div>
          </div>
        )}
        {showResultPopup && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Hasil</h2>
              <p className="mb-4">Nilai Anda: {score}</p>
              <button
                onClick={() => setShowResultPopup(false)}
                className="py-2 px-4 bg-yellow-400 rounded-full"
              >
                Selesai
              </button>
            </div>
          </div>
        )}
      </main>
    </DndProvider>
  );
};

export default MatchingQuiz;
