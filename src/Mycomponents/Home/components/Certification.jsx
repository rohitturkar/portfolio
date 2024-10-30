import React from "react";

const Certification = () => {
  const education = [
    {
      degree: "Frontend Development",
      college: "Relevel By Unacademy ",
      grade:'A+',
      duration: "2022",
    },
   
  ];

  return (
    <div className='w-full ' >
      <h3 className="text-xl font-semibold mb-4">Certification</h3>
      {education.map((exp, index) => (
        <div key={index} className="mb-12   bg-[#444]  p-4 rounded-lg ">
          <div className="flex flex-wrap justify-between">
            <h2 className="text-xl font-semibold">{exp.degree}</h2>

          
          </div>
          <span className="text-gray-400">{exp.duration}</span>
          <div className="text-gray-400 mb-4">{exp.grade}</div>

          <div className="text-gray-400 ">{exp.college}</div>
        </div>
      ))}
    </div>
  );
};

export default Certification;
