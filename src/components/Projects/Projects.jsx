import React from "react";
import headerFooter from "../../assets/shape-bg.png";
import { projects } from "../../data";

function Projects() {
  return (
    <div
      id="projects"
      className=" w-screen flex flex-col justify-between items-center my-4 relative"
    >
      {" "}
      <div className="projects-header">
        <h1 className="text-4xl font-bold  ">Projects</h1>
        <span className="underline w-full  block relative mt-2 mb-10 h-1 bg-black">
          <span className="underline-node bg-dark-orange"></span>
        </span>
      </div>
      <div className="bg-primary-color">
        <div className="projects-container grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-8  bg-primary-color px-4 tablet:px-8 sm:px-10 py-6 lg:px-32">
          {projects.map((item) => (
            <article key={item.id} className="project-item p-4 bg-white">
              <div className="project-img ">
                <img
                  className="static rounded-2xl"
                  src={item.imgStatic}
                  alt="mern+ project"
                />
                <img className="gif" src={item.imgGif} alt={item.title} />
              </div>
              <h3 className="project-title mt-5 mb-2 text-dark-orange font-poppins-semibold  text-lg ">
                {item.title}
              </h3>
              <p className="mb-4 font-poppins-medium  text-sm sm:text-base">
                {item.detail}
              </p>
              <div className="project-links flex  mb-4 flex  ">
                <a
                  className="w-full text-center "
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="highlighted-btn w-2/3 py-3 rounded-full ">
                    Github
                  </button>
                </a>
                <a
                  className="w-full text-center"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="primary-btn w-2/3 py-3 rounded-full text-white">
                    {" "}
                    Visit
                  </button>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="header-footer ">
          <img src={headerFooter} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
