import React, { useRef } from "react";
import "./Resume.css";
import { FaGraduationCap, FaHistory } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import { GoProject } from "react-icons/go";

const Resume = () => {
  /* const ScrollLink = scroll.ScrollLink; */

  const education = useRef(null);
  const workHistory = useRef(null);
  const programming = useRef(null);
  const project = useRef(null);

  const toEducation = () => {
    education.current?.scrollIntoView({ behavior: "smooth" });

    return;
  };
  const toHistory = () => {
    workHistory.current?.scrollIntoView({
      behavior: "smooth",
    });
    return;
  };
  const toProgramming = () => {
    programming.current?.scrollIntoView({
      behavior: "smooth",
    });
    return;
  };
  const toProjects = () => {
    project.current?.scrollIntoView({
      behavior: "smooth",
    });
    return;
  };
  const activeClass = (e) => {
    console.log(e.nativeEvent);
    e.nativeEvent.path[0].classList.remove("active");
    e.target.classList.add("active");
    /*  el */
  };
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
          <div className="bullet-container" onClick={activeClass}>
            <div className="bullet-icons">
              <FaGraduationCap onClick={toEducation} />
              <FaHistory onClick={toHistory} />
              <GiLaptop onClick={toProgramming} />{" "}
              <GoProject onClick={toProjects} />
            </div>
            <div className="bullets">
              <div className="bullet active" onClick={toEducation}>
                Education <span className="highlight-column"></span>
              </div>
              <div className="bullet" onClick={toHistory}>
                Work History
                <span className="highlight-column"></span>
              </div>
              <div className="bullet " onClick={toProgramming}>
                {" "}
                <span className="highlight-column"></span>
                Programming Skills
              </div>
              <div className="bullet" onClick={toProjects}>
                Projects <span className="highlight-column"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-bullet-details">
          <div className="resume-details">
            {/* Education */}
            <div className="resume-screen-container" ref={education}>
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
            {/* Work History */}
            <div className="resume-screen-container" ref={workHistory}>
              Work History
            </div>
            {/* Programming Skills */}
            <div className="resume-screen-container" ref={programming}>
              {" "}
              Programming Skills
            </div>
            {/* Projects */}
            <div className="resume-screen-container" ref={project}>
              Projects
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
