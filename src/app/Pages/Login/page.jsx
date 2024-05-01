import Navbar from "@/app/Components/Navbar";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  return (
    <main className="flex flex-col">
      <Navbar />

      <div className="px-[350px] py-[50px] flex flex-col">
        <h1 className="text-2xl font-bold text-center mb-6 tracking-wide">
          MASUK
        </h1>
        <form className=" flex flex-col gap-6" action="">
          <input
            className="w-full h-[48px] border border-black rounded-lg placeholder:opacity-80 placeholder:text-black px-6 py-1 text-base outline-none tracking-wider"
            placeholder="Email"
            type="email"
            required
          />
          <input
            className="w-full h-[48px] border border-black rounded-lg placeholder:opacity-80 placeholder:text-black px-6 py-1 text-base outline-none tracking-wider"
            placeholder="Kata Sandi"
            type="password"
            required
          />
          <button
            className="w-full h-[48px] border border-black rounded-lg text-white text-lg font-semibold px-6 py-1  outline-none tracking-wider hover:bg-white hover:border-[#112A46] hover:text-[#112A46] transition-all bg-[#112A46]"
            type="submit"
          >
            Masuk
          </button>
        </form>
        <p className=" text-right py-2 opacity-70">
          <Link
            className=" mx-2 hover:text-[#112A46]"
            href="/Pages/Login"
            passHref
          >
            <u>Lupa Kata Sandi?</u>
          </Link>
        </p>

        <div className="flex flex-row py-4 mb-4 justify-center w-full items-center">
          <hr className="w-48 border-[0.2] border-[#414141] border-opacity-60" />
          <i className="text-[#414141] text-base tracking-wider p-4">Atau</i>
          <hr className="w-48 border-[0.2] border-[#414141] border-opacity-60" />
        </div>
        <button className=" flex flex-row justify-center items-center w-full h-[48px] border border-black rounded-lg text-black text-base font-normal px-6 py-1  outline-none tracking-wider transition-all">
          <Image src="/Assets/Images/Google.svg" width={25} height={25}></Image>
          Daftar dengan Google
        </button>

        <p className="text-[13px] text-center mt-10 opacity-70">
          By creating an account you agree with our
          <a href="https://dribbble.com/terms">
            <u>Terms of Service</u>
          </a>
          ,
          <a href="https://dribbble.com/privacy">
            <u>Privacy Policy</u>
          </a>
          , and our default
          <a href="https://dribbble.com/notifications">
            <u>Notification Settings</u>
          </a>
          .
        </p>
      </div>

      <div></div>
    </main>
  );
}
