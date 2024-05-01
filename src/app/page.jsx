import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col h-[200vh]">
      <Navbar />
      <div className="px-24">
        <Hero />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
