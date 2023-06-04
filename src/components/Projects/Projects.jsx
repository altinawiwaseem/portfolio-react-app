import React from "react";
import headerFooter from "../../assets/shape-bg.png";
import { projects } from "../../data";
import { motion } from "framer-motion";

function Projects() {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
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
        <motion.div
          className="projects-container grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-8  bg-primary-color px-4 tablet:px-8 sm:px-10 py-6 lg:px-32 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
        >
          {projects.map((item) => (
            <motion.article
              key={item.id}
              className="project-item p-4 bg-white"
              variants={childVariant}
            >
              <div className="h-[420px]  flex flex-col">
                <div className="project-img ">
                  <img
                    className="static rounded-2xl object-cover"
                    src={item.imgStatic}
                    alt="mern+ project"
                  />
                  <img className="gif" src={item.imgGif} alt={item.title} />
                </div>
                <h3 className="project-title mt-5 mb-2 text-dark-orange font-poppins-semibold  text-lg ">
                  {item.title}
                </h3>
                <p className="  font-poppins-medium  text-sm sm:text-base">
                  {item.detail}
                </p>
                <div className="project-links flex  mb-4 mt-auto">
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
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="header-footer ">
          <img src={headerFooter} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
