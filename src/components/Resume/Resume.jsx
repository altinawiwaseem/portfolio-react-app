import React, { useRef, useState, useEffect } from "react";
import { resumeData } from "./data";

function Resume() {
  const targetedBox = useRef(null);
  const [selected, setSelected] = useState(0);

  console.log(selected);
  const handleBoxClick = (i) => {
    setSelected(i);
    targetedBox.current.children[i].scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="resume-main-container h-screen width-screen flex justify-between items-center flex-col px-12 pb-12 box-border ">
      <div className="resume-header"></div>
      <h1 className="text-4xl font-bold underline ">Resume</h1>
      <span className="underline">
        <span className="underline-node"></span>
      </span>
      {/* description container */}
      <div className="resume-content-container w-screen h-screen text-sm  md:h-3/4 flex flex-col  sm:flex-row items-center overflow-y-hidden	">
        {/* resume left box */}
        <div className="resume-left h-2/5 sm:h-full md:h-full flex p-4 justify-center flex-col relative w-full sm:w-[30%] md:w-[20%] min-w-[250px] ">
          <div className="bullet-icons rounded-3xl absolute z-1 sm:h-[80%] md:h-full h-full w-[34px] "></div>

          {resumeData.map((item, i) => (
            <div
              key={i}
              id={i}
              onClick={() => handleBoxClick(i)}
              className={`r-bullet-box flex items-center cursor-pointer my-1 md:my-8 sm:my-8 px-2 py-1 rounded-full w-[30px]  ${
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
        </div>
        {/* resume right box */}
        <div
          className="resume-right w-full h-full  overflow-y-hidden m-2 "
          ref={targetedBox}
        >
          {/* mapping the resume data content */}
          {resumeData.map((item, i) => (
            <div
              key={i}
              id={i}
              className={
                "r-details-container h-full max-w-[700px] flex flex-col p-4 justify-start "
              }
            >
              {item.title.map((el, i) => (
                <div key={i} className="resume-element-detail p-2 ">
                  <div className="resume-element-header">
                    <span className="r-circle w-8 h-8 rounded-full	"></span>
                    <h3>{el.headerDescription}</h3>
                    <h4>{el.date}</h4>
                  </div>

                  <p>{el.detail}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
