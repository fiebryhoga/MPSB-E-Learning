import React from 'react'

const Header = ({children}) => {
  return (
    <header className="bg-primary mb-3">
    <div className="container px-12 py-10 md:py-20 flex items-center mx-auto">
      <h3 className="text-2xl font-bold italic lg:mx-0 mx-auto text-secondary">{children}</h3>
    </div>
  </header>
  )
}

export default Header