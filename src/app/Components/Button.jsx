import React from 'react'

const Button = ({onClick,children,className}) => {
  return (
    <button onClick={onClick} className={`${className} py-1 px-5 text-sm md:text-lg font-medium w-fit bg-secondary rounded-xl duration-300 ease-in-out active:scale-95`}>{children}</button>
  )
}

export default Button