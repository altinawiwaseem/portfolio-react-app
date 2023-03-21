import React, { useEffect, useRef, useState } from "react";
import { FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xk7nssu",
        "template_ieqbrtd",
        form.current,
        "Pm7Yvefk6FIkQePMy"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        e.target.reset(); // Reset the form
      })
      .catch((error) => {
        toast.error(`Failed to send the message: `);
        e.target.reset(); // Reset the form
      });
  };

  return (
    <div
      id="contact"
      className="w-screen flex max-h-screen tablet:h-screen items-center flex-col tablet:px-8 md:px-12 sm:py-10 "
    >
      <div className="Contact-header">
        <h1 className="text-4xl font-bold  ">Contact Me</h1>
        <span className="underline w-full   block  relative mt-3 h-1 bg-black">
          <span className="underline-node bg-dark-orange"></span>
        </span>
      </div>
      <div className="contact-container grid grid-cols-1  gap-y-8 sm:grid-cols-[35%_45%] gap-4 w-full  rounded-2xl justify-center  bg-primary-color md:w-[85%] py-12 px-6 mt-4 relative  max-h-full tablet:h-[90%]">
        <div className="contact-options flex flex-col gap-4 sm:gap-8 text-white ">
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
        <form ref={form} onSubmit={sendEmail} className="form">
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
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Contact;
