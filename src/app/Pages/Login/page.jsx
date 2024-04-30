import Navbar from "@/app/Components/Navbar";
import React from "react";
import SignIn from "@/app/Components/SignIn";

export default function Login() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col py-2 px-8">
        <Navbar />
      </div>
      <div className="px-[350px] py-[50px]">
        <SignIn/>
      </div>
      ini Sign In
    </main>
  );
}
