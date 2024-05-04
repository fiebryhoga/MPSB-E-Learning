import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Card from "./Components/Card";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="px-8 md:px-24 flex flex-col gap-8">
        <Hero />
        <Card/>
      </div>
      <Footer />
    </main>
  );
}
