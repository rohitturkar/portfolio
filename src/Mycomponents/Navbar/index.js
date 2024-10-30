import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center p-4 w-full bg-[#333] shadow-2xl rounded-lg">
      <div className="text-2xl font-bold shadow-2xl text-orange-50 ">Rohit</div>

      <ul className="flex justify-between items-center md:gap-6 gap-4">
        <li className="md:text-xl text-lg  shadow-xl cursor-pointer hover:text-orange-100 hover:border-b hover:border-orange-300 hover:pb-1">
          <a href="#experience">experience</a>
        </li>
        <li className="md:text-xl text-lg  shadow-xl cursor-pointer hover:text-orange-100 hover:border-b hover:border-orange-300 hover:pb-1">
          {" "}
          <a href="#projects">projects</a>
        </li>
        <li className="md:text-xl text-lg  shadow-xl cursor-pointer hover:text-orange-100 hover:border-b hover:border-orange-300 hover:pb-1">
          <a href="https://rohitturkar02.hashnode.dev/" target="_blank">blogs</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
