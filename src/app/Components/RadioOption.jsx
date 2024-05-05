import React from "react";

const RadioOption = ({ activeOption, children, onClick, name, option }) => {
  return (
    <div className={`${activeOption&&activeOption === option ? "border-secondary" : "border-black"} gap-2 p-2 border md:border-2  flex items-center rounded-md relative aspect-[16/1]`}>
      <div className="md:size-10 size-5 rounded-full flex items-center justify-center border md:border-2 text-xs md:text-base  border-black">{option}</div>
      <h3 className="font-medium text-base md:text-xl">{children}</h3>
      <input onChange={onClick} type="radio" className="size-full absolute top-0 left-0 opacity-0 rounded-md" name={name}></input>
    </div>
  );
};

export default RadioOption;


