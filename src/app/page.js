import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col py-2 px-8">
        <Navbar />
      </div>
      
      <Footer />
    </main>
  );
}
