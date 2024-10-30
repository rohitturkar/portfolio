import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Mycomponents/Navbar";
import Home from "./Mycomponents/Home/Home";
import { FaArrowUp } from "react-icons/fa";
import { SparklesCore } from "./components/ui/sparkles";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="relative md:mt-12 mt-3 px-[5px] md:px-[70px] lg:px-[150px] text-[#f2f2f2]">
        <Navbar />
        <Home />

        <div className="absolute inset-0 h-auto pointer-events-none px-[5px] md:px-[100px] lg:px-[200px] ">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.09}
            maxSize={0.6}
            particleDensity={70}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      </div>

      {showScroll && (
        <div
          className="fixed md:bottom-6 bottom-3 md:right-10 right-1.5 text-black bg-[#eddcaf] shadow-2xl p-3 cursor-pointer rounded-full"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </div>
      )}
    </div>
  );
}

export default App;
