import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certification from "./components/Certification";
import { Button } from "../../components/ui/moving-border";

const Home = () => {
  const handleResumeClick = () => {
   
    window.location.href = "https://drive.google.com/file/d/1nNf9O6hZgf7l67RKtql43jeXBvO3w5I9/view";
  };

  return (
    <div className="p-4 mt-10 ">
      <div className="mb-8 items-start ">
        <div className="relative h-full ">
          <h1 className="text-2xl">Hi there 👋, I'm</h1>
          <h2 className="text-5xl font-bold my-2">Rohit Turkar</h2>
          <p className="text-lg">22, he/him</p>
          <p className="text-md mb-1 mt-1 text-wrap">
            Frontend Software Engineer from India,
          </p>

          <p className="text-md mb-4 mt-1 text-wrap">
            I love to code and I love Chai 🍵
          </p>
          <div className="flex justify-start items-center gap-4 mb-8">
            <Button
              borderRadius="0.5rem"
              className="px-5 py-2"
              onClick={handleResumeClick} // Add the onClick handler here
            >
              Resume
            </Button>

            <a
              href="mailto:rohittur2002@gmail.com"
              target="_blank"
              className="hover:bg-[#444]  hover:p-1 hover:rounded-md"
            >
              <CiMail size={30} />
            </a>
            <a
              href="https://github.com/rohitturkar"
              target="_blank"
              className="hover:bg-[#444]  hover:p-1 hover:rounded-md"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-turkar-7aa27a203/"
              target="_blank"
              className="hover:bg-[#444]  hover:p-1 hover:rounded-md"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>

      <About />
      <Skills />
      <Experience />
      <div className="flex md:flex-row flex-col md:gap-10  gap-5  items-center  mt-10 mb-2  justify-start ">
        <Education />
        <Certification />
      </div>

      <div>Thank you for visiting !!</div>
    </div>
  );
};

export default Home;
