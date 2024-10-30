import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Experience = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };


  const experiences = [
    {
      role: "Frontend Software Engineer",
      location: "Remote",
      company: "i-Pangram",
      duration: "Sept 2023 - Present",
      technologies: [
        "Reactjs",
        "Typescript",
        "Nextjs",
        "Javascript",
        "threejs",
        "Nodejs",
        "react-three-fiber",
        "AWS",
        "tailwind css",
        "MUI",
        "HTML, CSS",
      ],
      description: [
        "Developed an AR editor platform from scratch using React, Typescript, and Three.js, achieving a 92% improvement in front-end performance through optimized code and efficient API calls.",
        "Enhanced productivity with Redux for complex state management and Cypress for testing, leading to a 45% improvement in editor speed and performance.",
        "Created a complete front-end editor with reseller and admin functionalities, streamlined search features, and provided comprehensive client support.",
        "Managed complex global state and integrated Three.js with React for a home interior project, improving performance by 87% and delivering a complete 3D dashboard.",
        "Implemented drag-and-drop functionality with vanilla JavaScript in a process management product, optimizing code and ensuring robust performance through Cypress testing, resulting in a fast and scalable application.",
      ],
    },

    {
      role: "Frontend Developer Intern",
      location: "Nagpur",
      company: "Motovators Technologies",
      duration: "Jan 2022 - Aug 2022",
      technologies: ["Reactjs", "Javascript", "HTML, CSS"],
      description: [
        "Led front-end development for a startup investment platform using React, JavaScript, Firebase, TypeScript, and Next.js.",
        "Played a crucial role in optimizing an e-commerce store, enhancing key functionalities such as cart management, authentication, and authorization processes & created the company website and optimize that.",
      ],
    },
  ];

  return (
    <div className="mt-10 " id="experience" >
      <h3 className="text-2xl font-semibold mb-8">Experience</h3>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-12 border-l border-white pl-4 ">
          <div className="flex flex-wrap justify-between">
            <h2 className="text-xl font-semibold">
              {exp.role}
              <span className="bg-[#555] text-white px-2 py-1 rounded-md text-xs ml-2 ">
                {exp.location}
              </span>
            </h2>
            <span className="text-gray-400">{exp.duration}</span>
          </div>

          <div className="text-gray-400 mb-4">{exp.company}</div>
          <div className="flex flex-wrap gap-2 mb-4">
            {exp.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-[#444] font-medium  text-white px-3 py-1 rounded-md text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          {exp.description && (
            <ul className="list-disc pl-5">
              {exp.description.map((desc, i) => (
                <li key={i} className="mb-2">
                  {desc}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}


    </div>
  );
};

export default Experience;
