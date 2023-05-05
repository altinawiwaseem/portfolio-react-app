import React, { useRef, useState, useEffect } from "react";
import { resumeData } from "../../data";
import { motion } from "framer-motion";

function Resume() {
  const targetedBox = useRef(null);
  const [selected, setSelected] = useState(0);
  const baseWidth = 20;
  const handleBoxClick = (i) => {
    setSelected(i);
    targetedBox.current.children[i].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section
      id="resume"
      className=" resume-main-container h-screen w-screen flex justify-between  items-center flex-col px-12 sm:py-10 box-border "
    >
      <div className="resume-header">
        <h1 className="text-4xl font-bold  ">Resume</h1>
        <span className="underline w-full  border-1 block border-black relative mt-3 h-1 bg-black">
          <span className="underline-node bg-dark-orange"></span>
        </span>
      </div>
      {/* description container */}
      <div className="resume-content-container w-screen h-full md:w-[90%] md:h-4/5 flex flex-col  sm:flex-row items-center overflow-y-hidden">
        {/* resume left box */}
        <motion.article
          className="resume-left h-2/5 sm:h-full md:h-full flex p-4 justify-center flex-col relative w-full sm:w-[30%]  min-w-[250px] "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <motion.div
            className="bullet-icons absolute z-1 h-full sm:h-[70%] lg:h-[80%] w-[32px] "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
          ></motion.div>

          {resumeData.map((item, i) => (
            <motion.div
              key={i}
              id={i}
              onClick={() => handleBoxClick(i)}
              className={`r-bullet-box flex items-center cursor-pointer my-1 sm:my-8 px-2 sm:h-8 py-1 rounded-full w-[30px] bg-primary-color ${
                i == selected ? "selected" : ""
              }`}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={childVariant}
            >
              <span className="logo z-40 text-white mr-[30px] h-[16px] round-md ">
                {item.icon}
              </span>
              <h2 className="bullet-label whitespace-nowrap text-sm z-1">
                {item.header}
              </h2>
            </motion.div>
          ))}
        </motion.article>
        {/* resume right box */}
        <motion.article
          className="resume-right px-2 pt-2 w-full h-full  overflow-y-hidden sm:m-2 min-w-[330px] "
          ref={targetedBox}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* mapping the resume data content */}
          {resumeData.map((item, i) => (
            <div
              key={i}
              id={i}
              className={
                "resume-details-container h-full max-w-[800px] flex flex-col md:p-4 justify-evenly"
              }
            >
              {item.title.map((el, i) => (
                <div key={i} className="resume-element-detail  w-full ">
                  <div className="resume-element-header flex  justify-between w-full ">
                    <div className="flex w-full  ">
                      <span className="resume-circle w-4 h-4 rounded-full	mr-4  bg-dark-orange "></span>
                      {el.headerDescription && (
                        <div className="sm:w-[80%] w-full ">
                          <h3
                            className={` sm:mb-2 text-justify w-full font-poppins-medium sm:font-poppins-semibold sm:text-base  text-sm sm:text-base ${
                              el.detail ? "text-dark-orange" : "text-black"
                            } `}
                          >
                            {el.headerDescription}
                          </h3>

                          <p className="text-justify p-1 font-poppins-normal sm:font-poppins-medium text-sm sm:text-base">
                            {el.detail}
                          </p>
                        </div>
                      )}

                      {el.skill && (
                        <div className="sm:w-[80%] w-full flex h-full ">
                          <h3 className="sm:mb-2 text-justify w-full font-poppins-medium sm:font-poppins-semibold sm:text-base  text-sm sm:text-base">
                            {el.skill}
                          </h3>
                        </div>
                      )}
                    </div>
                    {el.level && (
                      <span className="w-40 inline h-4 bg-primary-color relative">
                        <span
                          style={{ width: `${el.level * 15}%` }}
                          className="h-4 bg-dark-orange absolute top-0 left-0 inline "
                        ></span>
                      </span>
                    )}
                    {el.date && (
                      <h4 className="w-32 border-2 bg-dark-orange py-1 text-center  rounded-3xl h-fit text-white">
                        {el.date}
                      </h4>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.article>
      </div>
    </section>
  );
}

export default Resume;
