import React from "react";
import "./Resume.css";
import { FaGraduationCap, FaHistory } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import { GoProject } from "react-icons/go";

const Resume = () => {
  return (
    <div className="resume-contain">
      <div className="resume-header">
        <h2>Resume</h2>
        <p>My formal Bio Details</p>
        <div className="header-line">
          <div className="line-body"></div>
        </div>
      </div>
      <div className="resume-card">
        <div className="resume-bullet">
          <div className="bullet-container">
            <div className="bullet-icons">
              <FaGraduationCap />
              <FaHistory />
              <GiLaptop />
              <GoProject />
            </div>
            <div className="bullets">
              <div className="bullet bullet-active">
                Education <span className="highlight-colum"></span>
              </div>
              <div className="bullet">
                Work History <span className="highlight-colum"></span>
              </div>
              <div className="bullet ">
                {" "}
                <span className="highlight-colum"></span>Programming Skills
              </div>
              <div className="bullet">
                Projects <span className="highlight-colum"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-bullet-details">
          <div className="resume-details">
            <div className="resume-screen-container">
              <div className="e-resume-heading">
                <div className="main-heading">
                  <div className="heading-bullet"></div>
                  <div className="main-heading-text">
                    Full stack developer at DCI Digital Career Institute gGmbH
                  </div>
                  <div className="heading-date">2021-now</div>
                </div>
                <div className="resume-heading-description">
                  full stack developer, front end and back end Completing
                  multiple practical projects to practice programming skills
                  Taking German lessons as part of the course
                </div>
              </div>
              <div className="e-resume-heading">
                <div className="main-heading">
                  <div className="heading-bullet"></div>
                  <div className="main-heading-text">University of Potsdam</div>
                  <div className="heading-date">2018-now</div>
                </div>
                <div className="resume-heading-description">
                  Master in Anglophone Modernities in Literature and Culture
                </div>
              </div>
              <div className="e-resume-heading">
                <div className="main-heading">
                  <div className="heading-bullet"></div>
                  <div className="main-heading-text">Damascus University</div>
                  <div className="heading-date">2005-2010</div>
                </div>
                <div className="resume-heading-description">
                  Bachelor's degree in English Literature{" "}
                </div>
              </div>
            </div>
            <div className="resume-screen-container"></div>
            <div className="resume-screen-container"></div>
            <div className="resume-screen-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
