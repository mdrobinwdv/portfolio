import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import useAuth from "../UseContext/UseAuth";
import Reveal from "./Reveal";

function Contact() {
  const { scroll } = useAuth();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u31mjpn",
        "template_q8enf58",
        e.target,
        "F_FATFZng5Hj9jiMD"
      )
      .then(() => {
        alert("Message sent successfully ✅");
      })
      .catch((error) => {
        console.log("ERROR", error);
        alert("Failed to send ❌");
      });

    e.target.reset();
  };

  return (
    <div
      className={`w-full min-h-screen flex flex-col items-center justify-center gap-8 p-6 transition-all duration-700 ${
        scroll
          ? "bg-gradient-to-br from-indigo-700 via-purple-600 to-blue-700 text-white"
          : " bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500"
      }`}
    >
      {/* TITLE */}
      <Reveal direction="up">
        <h1 className="text-4xl md:text-5xl font-bold text-center tracking-wide">
          Contact Me
        </h1>
      </Reveal>

      {/* SUB TITLE */}
      <Reveal direction="up">
        <p className="text-center text-base md:text-lg max-w-xl opacity-80">
          Feel free to contact me for any project, freelance work, or collaboration.
        </p>
      </Reveal>

      {/* CARD */}
      <Reveal direction="up">
        <div
          className={`w-full max-w-3xl rounded-3xl p-8 shadow-2xl border transition-all duration-500 backdrop-blur-md ${
            scroll
              ? "bg-white/10 border-white/20"
              : " bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500"
          }`}
        >
          {/* INFO */}
          <Reveal direction="left">
            <div className="text-base md:text-lg flex flex-col gap-3 text-center mb-8">
              <p>
                <span className="font-semibold">Email :</span>{" "}
                <span className="opacity-80">robinkhan1r66@gmail.com</span>
              </p>

              <p>
                <span className="font-semibold">Phone :</span> 01752162066
              </p>

              <p>
                <span className="font-semibold">Location :</span> Kalihati, Tangail
              </p>
            </div>
          </Reveal>

          {/* SOCIAL */}
          <Reveal direction="up">
            <div className="flex justify-center gap-6 text-3xl mb-8">
              <a
                href="https://www.facebook.com/robinkhan.robinkhan.946179"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-300"
                style={{ color: "#1877F2" }}
              >
                <FaFacebook />
              </a>

              <a
                href="https://github.com/mdrobinwdv"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-300"
                style={{ color: "#171515" }}
              >
                <FaGithub />
              </a>
            </div>
          </Reveal>

          {/* FORM */}
          <form
            onSubmit={sendEmail}
            className="w-full max-w-xl mx-auto flex flex-col gap-4"
          >
            {/* NAME */}
            <Reveal direction="up">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className={`p-4 rounded-xl border outline-none transition-all duration-300 focus:scale-[1.02] ${
                  scroll
                    ? "bg-white/10 text-white border-white/20 placeholder-white/70"
                    : " bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500 text-white  border-gray-300"
                }`}
              />
            </Reveal>

            {/* EMAIL */}
            <Reveal direction="up">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className={`p-4 rounded-xl border outline-none transition-all duration-300 focus:scale-[1.02] ${
                  scroll
                    ? "bg-white/10 text-white border-white/20 placeholder-white/70"
                    : "bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500 text-white border-gray-300"
                }`}
              />
            </Reveal>

            {/* MESSAGE */}
            <Reveal direction="up">
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className={`p-4 rounded-xl border h-36 outline-none resize-none transition-all duration-300 focus:scale-[1.02] ${
                  scroll
                    ? "bg-white/10 text-white border-white/20 placeholder-white/70"
                    : "bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500 text-white border-gray-300"
                }`}
              />
            </Reveal>

            {/* BUTTON */}
            <Reveal direction="up">
              <button
                type="submit"
                className="py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:scale-[1.03] transition duration-300 shadow-lg px-3"
              >
                Send Message
              </button>
            </Reveal>
          </form>
        </div>
      </Reveal>
    </div>
  );
}

export default Contact;