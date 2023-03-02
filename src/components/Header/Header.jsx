import React from "react";
import { FaInstagram, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <>
      <div
        id="home"
        className="profile-container flex flex-col  h-screen w-screen items-center"
      >
        <div className="tablet:flex tablet:w-full lg:w-[70%] sm:w-full lg:justify-end tablet:justify-center   ">
          <Navbar />
        </div>
        <div className="profile-parent flex flex-col-reverse tablet:flex-row w-screen p-4 h-full sm:p-8">
          <div className="profile-details w-full h-full flex flex-col items-center  sm:justify-center">
            <div className="colz sm:w-2/5 p-4 w-full">
              <div className="colz-icon  flex justify-around text-2xl md:text-3xl ">
                <a
                  className="icon"
                  href="https://github.com/altinawiwaseem"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubSquare />
                </a>
                <a
                  className="icon"
                  href="https://www.linkedin.com/in/waseem-altinawi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="icon"
                  href="https://www.instagram.com/waseemdam/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="profile-details-name text-xl p-2">
              <span className="primary-text font-poppins-semibold sm:text-xl">
                Hello, I'M{" "}
                <span className="highlighted-text font-poppins-bold text-dark-orange text-2xl">
                  WASEEM{" "}
                </span>
              </span>
            </div>
            <div className="profile-details-role min-w-min">
              <span className="primary-text min-w-min flex flex-col items-center">
                <h1 className="text-2xl sm:text-3xl font-poppins-semibold my-2">
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
                <span className="profile-role-tagline  mt-2 mb-4 block p-2 text-justify font-poppins-semibold sm:text-xl">
                  <strong className="text-light-blue"> Passionate </strong>
                  <strong> && </strong>
                  <strong className="text-light-blue"> knack </strong>
                  of building application with front and back end operation
                </span>
              </span>
            </div>
            <div className="profile-options flex gap-8">
              <button className="btn primary-btn text-white ">
                <a href="#contact">Hire Me</a>
              </button>

              <a href="files/CV.pdf" download="Waseem's Cv.pdf">
                <button className="btn highlighted-btn"> Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-pic w-full h-full md:w-2/3"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
