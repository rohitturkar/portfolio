import React from "react";
import Experience from "./components/Experience";
import profile from "../../assets/profile.jpeg";
import Education from "./components/Education";
import Certification from "./components/Certification";
import About from "./components/About";
import Projects from "./components/Project";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Skills from "./components/Skills";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import { SparklesCore } from "../../components/ui/sparkles";
import { Button } from "../../components/ui/moving-border";
import { FaArrowUp } from "react-icons/fa";

const Home = () => {
  return (
    <div className="p-4 mt-10 ">
      <div className="mb-8 flex md:flex-row flex-wrap gap-4 md:gap-6 items-start  ">
        <img
          src={profile}
          className="w-full lg:max-w-[170px]   md:max-w-[170px] h-auto md:rounded-3xl rounded-md object-cover md:order-1 order-2"
          alt="Profile"
        />

        <div className="md:order-2 order-1 relative h-full ">
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
            {/* <a
              href="https://drive.google.com/file/d/1GnvqJBNkZJP1yGUFgytluOXAg-R4iZ4V/view?usp=sharing"
              className="px-4 py-2 bg-[#f3f0a3] text-[#222] border border-gray-900  hover:bg-[#666] hover:text-white"
              target="_blank"
            >
              Resume
            </a> */}

            <Button borderRadius="0.5rem" className="px-5 py-2">
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
      {/* <Projects /> */}
      <div className="flex md:flex-row flex-col md:gap-10  gap-5  items-center  mt-10 mb-2  justify-start ">
        <Education />
        <Certification />
      </div>

      <div>Thank you for visiting !!</div>
    </div>
  );
};

export default Home;
