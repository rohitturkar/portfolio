import React from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

const Skills = () => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold mb-8">Skills</h3>

      <div className="border-l border-white pl-4">
        <div className="flex gap-2 items-center text-sm mb-2">
          <span className="md:text-sm text-md bg-[#666] text-white p-2 rounded-md font-medium">
            Frontend 
          </span>
          : Reactjs, Nextjs, Typescript, Javascript, Angular, Threejs, HTML5,
          CSS
        </div>
        <div className="flex gap-2 items-center text-sm mb-2">
          <span className="md:text-sm text-md bg-[#666] text-white p-2 rounded-md font-medium">
            Backend
          </span>
          : Nodejs, Expressjs, Firebase, Supabase,
        </div>
        <div className="flex gap-2 items-center text-sm">
          <span className="md:text-sm text-md bg-[#666] text-white p-2 rounded-md font-medium">
            Tools & libraries
          </span>
          : Postman, MaterialUI, Tailwind CSS, Git, Github, Cypress
        </div>
      </div>
    </div>
  );
};

export default Skills;
