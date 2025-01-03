import React, { useEffect, useRef, useState } from "react";
import { FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Contact = () => {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        e.target.reset(); // Reset the form
      })
      .catch((error) => {
        toast.error(`Failed to send the message: `);
        e.target.reset(); // To Reset the form
      });
  };

  return (
    <div
      id="contact"
      className="w-screen flex  lg:h-screen items-center flex-col tablet:px-8 md:px-12 sm:py-10 "
    >
      <div className="Contact-header">
        <h1 className="text-4xl font-bold  ">Contact Me</h1>
        <span className="underline w-full   block  relative mt-3 h-1 bg-black mb-6">
          <span className="underline-node bg-dark-orange "></span>
        </span>
      </div>
      <div className="contact-container grid grid-cols-1  gap-y-8 lg:grid-cols-[35%_45%] gap-4 w-full  rounded-2xl justify-center  bg-primary-color w-[93%] md:w-[85%] py-10 px-6 mt-4 relative lg:pt-20  max-h-full tablet:h-[90%]">
        <div className="contact-options flex flex-col gap-4 sm:gap-8 text-white ">
          <motion.div
            className="flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="contact-option border border-white  py-4 rounded-xl flex flex-col items-center tablet:gap-2 w-full lg:w-[60%] h-[130px] tablet:h-[140px] sm:h-[150px] justify-center">
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
            <div className="contact-option border border-white py-4 rounded-xl flex flex-col  items-center tablet:gap-2 gap-1 w-full lg:w-[60%] h-[130px] tablet:h-[140px] sm:h-[150px] justify-center">
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
          </motion.div>
          <motion.div
            className="flex justify-around w-full lg:w-[60%] text-2xl md:text-3xl text-white "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            <motion.a
              className="icon"
              href="https://github.com/altinawiwaseem"
              target="_blank"
              rel="noreferrer"
              variants={childVariant}
            >
              <FaGithubSquare />
            </motion.a>
            <motion.a
              className="icon"
              href="https://www.linkedin.com/in/waseem-altinawi/"
              target="_blank"
              rel="noreferrer"
              variants={childVariant}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              className="icon"
              href="https://www.instagram.com/waseemdam/"
              target="_blank"
              rel="noreferrer"
              variants={childVariant}
            >
              <FaInstagram />
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form ref={form} onSubmit={sendEmail} className="form">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
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
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
