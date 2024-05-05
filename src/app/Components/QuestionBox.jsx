import React from 'react'

const QuestionBox = ({children,onClick,activeId}) => {
  return (
    <div onClick={onClick} className={`${activeId===children?"border-secondary":"border-neutral-700"}  w-full aspect-[10/12] border md:border-2  rounded-lg flex items-center justify-center text-lg md:text-2xl`}>{children}</div>
  )
}

export default QuestionBox