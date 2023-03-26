import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdLaptopChromebook } from "react-icons/md";

const Navbar = () => {
  const [scrolling, handleScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY > 100 &&
        window.innerHeight + window.scrollY + 210 < document.body.scrollHeight
      ) {
        handleScrolling(true);
      } else if (window.scrollY < 100) {
        handleScrolling(false);
      } else {
        handleScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isMobile || (
        <div className=" nav w-full sm:w-[60%] md:w-[50%]  flex justify-between sm:mt-10 mt-2">
          <div className="sm:w-1/7  "></div>
          <ul className="flex w-full justify-center tablet:justify-around  sm:font-poppins-semibold font-poppins-regular sm:text-sm md:text-lg">
            <li className="text-dark-orange">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                {"Home"}
              </Link>
            </li>

            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="resume"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      )}
      {((isMobile &&
        window.innerHeight + window.scrollY + 210 <
          document.body.scrollHeight) ||
        scrolling) && (
        <div className="floating-navbar bg-primary-color bg-opacity-30 backdrop-blur-[15px] max-w-max fixed bottom-5 flex rounded-full z-50">
          <ul className="active py-3 px-7 flex gap-4 ">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                {<AiOutlineHome />}
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-15}
                duration={500}
              >
                {<AiOutlineUser />}
              </Link>
            </li>
            <li>
              <Link
                to="resume"
                spy={true}
                smooth={true}
                offset={-15}
                duration={500}
              >
                {<ImProfile />}
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-15}
                duration={500}
              >
                {<MdLaptopChromebook />}
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-15}
                duration={500}
              >
                {" "}
                {<BiMessageSquareDetail />}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
