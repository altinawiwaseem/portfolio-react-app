import React from "react";
import "./RS.css";
import { resumeData } from "./data";
function RS() {
  return (
    <div className="r-main-container">
      <div className="r-header"></div>
      <h1>Resume</h1>
      <p>My formal Bio Details</p>
      <span className="underline">
        <span className="underline-node"></span>
      </span>
      <div className="r-content-container">
        <div className="r-left">
          <div className="bullet-icons"></div>
          {resumeData.map((item, i) => (
            <div key={i} id={i} className="r-bullet-box">
              <span className="logo">{item.icon}</span>
              <h2 className="bullet-label">{item.header}</h2> <span></span>
            </div>
          ))}
        </div>
        <div className="r-right">
          {resumeData.map((item, i) => (
            <div key={i} id={i} className={"r-details-container"}>
              {item.title.map((el) => (
                <div className="resume-element-detail">
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
