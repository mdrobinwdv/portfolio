import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import useAuth from "../UseContext/UseAuth";

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
      className={`w-full min-h-screen flex flex-col items-center justify-center gap-8 p-5 transition-all duration-700 ${
        scroll
          ? "bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white"
          : "bg-white text-black"
      }`}
    >
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        Contact Me
      </h1>

      <p className="text-center text-base md:text-lg max-w-xl opacity-90">
        Feel free to contact me for any project, freelance work, or collaboration.
      </p>

      {/* Contact Card */}
      <div
        className={`w-full max-w-3xl rounded-3xl p-8 shadow-xl border ${
          scroll
            ? "bg-white/10 border-white/20"
            : "bg-white border-gray-200"
        }`}
      >
        {/* Contact Info */}
        <div className="text-base md:text-lg flex flex-col gap-3 text-center mb-8">
          <p>
            <span className="font-semibold">Email :</span>{" "}
            robinkhan1r66@gmail.com
          </p>

          <p>
            <span className="font-semibold">Phone :</span> 01752162066
          </p>

          <p>
            <span className="font-semibold">Location :</span> Kalihati, Tangail
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-3xl mb-8">
          <a
            href="https://www.facebook.com/robinkhan.robinkhan.946179"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300 text-blue-500"
          >
            <FaFacebook />
          </a>

          <a
            href="https://github.com/mdrobinwdv"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:scale-110 transition duration-300 ${
              scroll ? "text-white" : "text-black"
            }`}
          >
            <FaGithub />
          </a>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={sendEmail}
          className="w-full max-w-xl mx-auto flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={`p-4 rounded-xl border outline-none ${scroll ? "text-white": "text-black"} `}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className={`p-4 rounded-xl border outline-none ${scroll ? "text-white": "text-black"}`}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className={`p-4 rounded-xl border h-36 outline-none resize-none ${scroll ? "text-white": "text-black"}`}
          />

          <button
            type="submit"
            className="bg-emerald-500 text-white py-3 rounded-xl font-semibold hover:bg-emerald-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;