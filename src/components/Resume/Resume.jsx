import React, { useRef, useState, useEffect } from "react";
import { resumeData } from "../../data";

function Resume() {
  const targetedBox = useRef(null);
  const [selected, setSelected] = useState(0);

  const handleBoxClick = (i) => {
    setSelected(i);
    targetedBox.current.children[i].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
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
        <article className="resume-left h-2/5 sm:h-full md:h-full flex p-4 justify-center flex-col relative w-full sm:w-[30%]  min-w-[250px] ">
          <div className="bullet-icons absolute z-1 h-full lg:h-full sm:h-3/4 w-[32px] "></div>

          {resumeData.map((item, i) => (
            <div
              key={i}
              id={i}
              onClick={() => handleBoxClick(i)}
              className={`r-bullet-box flex items-center cursor-pointer my-1 sm:my-8 px-2 sm:h-8 py-1 rounded-full w-[30px] bg-primary-color ${
                i == selected ? "selected" : ""
              }`}
            >
              <span className="logo z-40 text-white mr-[30px] h-[16px] round-md ">
                {item.icon}
              </span>
              <h2 className="bullet-label whitespace-nowrap text-sm z-1">
                {item.header}
              </h2>
            </div>
          ))}
        </article>
        {/* resume right box */}
        <article
          className="resume-right px-2 pt-2 w-full h-full  overflow-y-hidden sm:m-2 min-w-[330px] "
          ref={targetedBox}
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
                    <div className="flex w-full ">
                      <span className="resume-circle w-4 h-4 rounded-full	mr-4  bg-dark-orange "></span>
                      <div className="sm:w-[80%] w-full">
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
                    </div>

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
        </article>
      </div>
    </section>
  );
}

export default Resume;
