import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col max-w-[1640px] mx-auto">
      <Navbar />
      <div className="px-8 md:px-24 flex flex-col gap-8">
        <Hero />
        <Card />
      </div>
      <Footer />
    </main>
  );
}
