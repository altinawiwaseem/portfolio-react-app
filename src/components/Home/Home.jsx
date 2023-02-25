import React from "react";
import { FaInstagram, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import Typewriter from "typewriter-effect";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div className="profile-container">
        <Navbar />
        <p>hello from home</p>
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon flex ">
                <a
                  href="https://www.instagram.com/waseemdam/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/altinawiwaseem"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubSquare />
                </a>
                <a
                  href="https://www.linkedin.com/in/waseem-altinawi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://vercel.com/altinawiwaseem"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiVercel />
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello, I'M <span className="highlighted-text"> </span>
              </span>
            </div>
            <div className="profile-details-role min-w-min">
              <span className="primary-text min-w-min ">
                <h1>
                  {" "}
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 60,
                      delay: 100,
                      strings: [
                        "Enthusiastic Developer ✨",
                        "Full Stack Developer 💻",

                        "MERN Stack Developer 😎",

                        "React Developer ⚛️",

                        "Backend Developer 🖥",

                        `Frontend Developer 💫`,
                      ],
                    }}
                  />
                </h1>
                <span className="profile-role-tagline">
                  <strong style={{ color: "#5bc5fe" }}> Passionate </strong>
                  <strong> && </strong>
                  <strong style={{ color: "#5bc5fe" }}> knack </strong>
                  of building application with front and back end operation
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn">Hire Me</button>

              <a href="files/CV.pdf" download="Waseem's Cv.pdf">
                <button className="btn highlighted-btn"> Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
