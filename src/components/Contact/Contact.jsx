import React from "react";
import { FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className=" w-screen flex  border-2 items-center flex-col tablet:px-8 md:px-12 sm:py-10 border-red-600"
    >
      <div className="Contact-header">
        <h1 className="text-4xl font-bold  ">Contact Me</h1>
        <span className="underline w-full   block  relative mt-3 h-1 bg-black">
          <span className="underline-node bg-dark-orange"></span>
        </span>
      </div>
      <div className="contact-container grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-[35%_58%]  border-2 border-red-400 w-full gab-4 rounded-2xl justify-center  bg-primary-color md:w-[85%]  p-6 mt-4">
        <div className="contact-options flex flex-col gap-4 sm:gap-8 text-white items-center">
          <div className="contact-option border border-white  py-4 rounded-xl flex flex-col items-center tablet:gap-2 w-full lg:w-[60%] h-[130px] tablet:h-[150px] justify-center">
            <FiMail />
            <h4>Email</h4> <h5>wasemm@live.com</h5>{" "}
            <a
              className="text-dark-orange"
              href="mailto:wasemm@live.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </div>
          <div className="contact-option border border-white py-4 rounded-xl flex flex-col  items-center tablet:gap-2 gap-1 w-full lg:w-[60%] h-[130px] tablet:h-[150px] justify-center">
            <BsWhatsapp />
            <h4>WhatsApp</h4>{" "}
            <a
              className="text-dark-orange"
              href="http://api.whatsapp.com/send?phone=+4915771109914"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </div>

          <div className="flex justify-around w-full lg:w-[60%] text-2xl md:text-3xl text-white ">
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
        <form action="" className=" ">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name required"
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="primary-btn btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
