import React from 'react'

const SignIn = () => {
  return (
    <div flex flex-col>
      <h1 className="font-bold flex justify-center text-2xl mb-6">MASUK</h1>
      <form action="">
        <input className="border border-[#000000] rounded-lg w-full h-[44px] px-6 text-base text-black tracking-wider py-1 placeholder:text-black placeholder:opacity-80" placeholder='Email' type="email" />
      </form>
    </div>
  );
}

export default SignIn
