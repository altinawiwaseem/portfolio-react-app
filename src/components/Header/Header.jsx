import React from "react";
import { FaInstagram, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-scroll";
import profileImg from "../../assets/myImg/profileImg.jpg";
import headerFooter from "../../assets/shape-bg.png";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <div
        id="home"
        className="profile-container flex flex-col   w-screen items-center bg-primary-color "
      >
        <div className="tablet:flex tablet:w-full lg:w-[70%] sm:w-full lg:justify-end tablet:justify-center text-white">
          <Navbar />
        </div>
        <div className="profile-parent flex flex-col-reverse tablet:flex-row w-screen p-4 h-full sm:p-8 ">
          <motion.div
            className="profile-details w-full h-full flex flex-col items-center  sm:justify-center "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="colz sm:w-2/5 p-4 w-full">
              <div className="colz-icon  flex justify-around text-2xl md:text-3xl text-white ">
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
              <span className="primary-text font-poppins-semibold sm:text-xl text-white">
                Hello, I'M{" "}
                <span className="highlighted-text font-poppins-bold text-dark-orange text-2xl">
                  WASEEM{" "}
                </span>
              </span>
            </div>
            <div className="profile-details-role min-w-min">
              <span className="primary-text min-w-min flex flex-col items-center">
                <h1 className="text-2xl sm:text-3xl font-poppins-semibold my-2 text-white">
                  {" "}
                  <TypeIt
                    options={{
                      strings: [
                        "Enthusiastic Developer ✨",
                        "Full Stack Developer 💻",
                        "MERN Stack Developer 😎",
                        "React Developer ⚛️",
                        "Backend Developer 🖥",
                        "Frontend Developer 💫",
                      ],
                      speed: 80,
                      breakLines: false,
                      nextStringDelay: 1000,
                      deleteSpeed: 60,
                      pause: 1000,
                      loop: true,
                    }}
                  />
                </h1>
                <span className="profile-role-tagline  mt-2 mb-4 block p-2 text-justify font-poppins-semibold sm:text-xl text-white">
                  <strong className="text-light-blue "> Passionate </strong>
                  <strong className="text-white"> && </strong>
                  <strong className="text-light-blue"> knack </strong>
                  of building application with front and back end operation
                </span>
              </span>
            </div>
            <div className="profile-options flex gap-8">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                {" "}
                <button className="btn primary-btn text-white ">Hire Me</button>
              </Link>

              <a href="files/CV.pdf" download="Altinawi-Cv.pdf">
                <button className="btn highlighted-btn"> Get Resume</button>
              </a>
            </div>
          </motion.div>
          <motion.div
            className="profile-pic w-full h-full md:w-2/3 flex justify-center items-center px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="profile-pic-border  flex justify-center items-center tablet:w-[280px] tablet:h-[280px] sm:h-[360px] sm:w-[360px] h-[300px] w-[300px] lg:h-[380px] lg:w-[380px]">
              <img
                className="profile-img w-[92%] h-[92%]"
                src={profileImg}
                alt="myPic"
              />{" "}
            </div>
          </motion.div>
        </div>
        <div className="header-footer ">
          <img src={headerFooter} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
