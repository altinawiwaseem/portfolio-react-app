import React from "react";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer bg-primary-color text-white py-12 flex flex-col items-center mt-12 sm:font-poppins-semibold font-poppins-regular sm:text-sm md:text-lg">
      <ul className="flex flex-wrap justify-center gap-12 mx-auto mb-12">
        <li>
          {" "}
          <Link to="home" spy={true} smooth={true} offset={-20} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={-15} duration={500}>
            About
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
            Resume
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
            Contact Me
          </Link>
        </li>
      </ul>
      <div className="flex justify-center gap-12 mb-16 text-2xl md:text-3xl text-white">
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
      <div>
        <small>&copy; WASEEM ALTINAWI. All rights reserved. </small>
      </div>
    </footer>
  );
};

export default Footer;
