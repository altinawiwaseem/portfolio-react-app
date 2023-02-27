import React from "react";

const Navbar = () => {
  return (
    <div className="nav w-full sm:w-[60%] md:w-[50%]  flex justify-between sm:mt-10 mt-2">
      <div className="sm:w-1/7  "></div>
      <ul className="flex w-full justify-center tablet:justify-around  sm:font-poppins-semibold font-poppins-regular sm:text-sm md:text-lg">
        <li className="text-dark-orange">
          <a href="/#">Home</a>
        </li>

        <li>
          <a href="#about">About Me</a>
        </li>

        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#contactMe">Contact Me</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
