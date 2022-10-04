import React, { useRef, useState, useEffect } from "react";
import "./RS.css";
import { resumeData } from "./data";

function RS() {
  const targetedBox = useRef(null);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    targetedBox.current.children[selected]?.scrollIntoView({
      behavior: "smooth",
    });
    return;
  }, [selected]);

  return (
    <div className="r-main-container">
      <div className="r-header"></div>
      <h1>Resume</h1>
      <p>My formal Bio Details</p>
      <span className="underline">
        <span className="underline-node"></span>
      </span>
      {/* description container */}
      <div className="r-content-container">
        <div className="r-left">
          <div className="bullet-icons"></div>

          {resumeData.map((item, i) => (
            <div
              key={i}
              id={i}
              onClick={() => setSelected(i)}
              className={`r-bullet-box ${i == selected ? "selected" : ""}`}
            >
              <span className="logo">{item.icon}</span>
              <h2 className="bullet-label">{item.header}</h2>
            </div>
          ))}
        </div>
        <div className="r-right" ref={targetedBox}>
          {resumeData.map((item, i) => (
            <div key={i} id={i} className={"r-details-container"}>
              {item.title.map((el, i) => (
                <div key={i} className="resume-element-detail">
                  <div className="resume-element-header">
                    <span className="r-circle"></span>
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

export default RS;
