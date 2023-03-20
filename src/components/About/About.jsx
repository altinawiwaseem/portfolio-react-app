import React from "react";
import aboutImg from "../../assets/myImg/aboutImg.png";
import headerFooter from "../../assets/shape-bg.png";
import { aboutMe } from "../../data";

const About = () => {
  return (
    <div
      id="about"
      className=" about-main-container h-auto width-screen flex justify-between items-center flex-col px-12 sm:py-4 box-border "
    >
      <div className="about-header">
        <h1 className="text-4xl font-bold  ">About Me</h1>
        <span className="underline w-full  block relative my-2 h-1 bg-black">
          <span className="underline-node bg-dark-orange"></span>
        </span>
      </div>
      <div className="about-container  rounded-2xl bg-primary-color h-auto w-screen md:h-[90%] sm:w-[85%]  border-2 border-white  sm:px-12 sm:py-10 box-border  flex z-20 flex-col-reverse items-center lg:flex-row relative ">
        <div className=" text-md m-4 p-4 tablet:text-base text-white  text-justify text-area text-white w-full h-auto  flex items-center justify-center ">
          {aboutMe}
        </div>
        <div className="about-me-image w-full h-auto lg:h-[500px] flex justify-around py-4">
          <div className="pic-container h-full w-2/3 bg-primary-color relative  ">
            <img
              className="about-img z-40 w-full h-full "
              src={aboutImg}
              alt="my pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
