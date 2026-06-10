import React from "react";
import { FaBriefcase, FaLaptopCode } from "react-icons/fa";
import Reveal from "./Reveal";
import useAuth from "../UseContext/UseAuth";

function Abolut() {
  const { scroll } = useAuth();

  const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React JS",
    "GitHub",
    "VS Code",
  ];

  const cardStyle = `
    w-full
    max-w-[650px]
    min-h-[550px]
    rounded-3xl
    p-6 lg:p-8
    border
    shadow-xl
    hover:shadow-2xl
    hover:-translate-y-2
    transition-all
    duration-500
    backdrop-blur-md
  `;

  return (
    <div
      className={`w-full min-h-screen px-4 sm:px-8 lg:px-16 py-10 lg:py-20 grid grid-cols-1 xl:grid-cols-2 gap-8 ${
        scroll
          ? "bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white"
          : "bg-white text-black"
      }`}
    >
      {/* ABOUT */}
      <Reveal direction="left">
        <div
          className={`${cardStyle} ${
            scroll
              ? "bg-white/10 border-white/20"
              : "bg-white border-gray-200"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            About Me
          </h2>

          <p
            className={`text-base sm:text-lg lg:text-xl leading-8 lg:leading-10 ${
              scroll ? "text-white" : "text-gray-700"
            }`}
          >
            Hi, I'm{" "}
            <span className="font-bold text-emerald-500">
              MD Rubel
            </span>
            , a passionate Front-End Web Developer specializing in
            React.js, JavaScript, and Tailwind CSS.
            <br />
            <br />
            I build modern, responsive, and interactive web applications
            with a strong focus on clean code, performance, and
            user-friendly experiences.
            <br />
            <br />
            My goal is to create visually appealing, accessible, and
            high-performing websites that work seamlessly across all
            devices and platforms.
          </p>
        </div>
      </Reveal>

      {/* EXPERIENCE */}
      <Reveal direction="right">
        <div
          className={`${cardStyle} ${
            scroll
              ? "bg-white/10 border-white/20"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <FaBriefcase className="text-emerald-500 text-2xl" />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>

          <div className="relative pl-10">
            <div className="absolute left-3 top-0 w-1 h-full bg-emerald-500 rounded-full"></div>

            <div className="relative">
              <div className="absolute -left-10 top-1 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white"></div>

              <h3 className="text-2xl font-bold mb-5">
                Front-End Web Developer
              </h3>

              <ul className="space-y-4 text-base lg:text-lg">
                <li>✓ Developed responsive websites using React.js and Tailwind CSS.</li>
                <li>✓ Built modern and user-friendly UI/UX focused applications.</li>
                <li>✓ Integrated REST APIs and managed dynamic data efficiently.</li>
                <li>✓ Implemented React Router for seamless SPA navigation.</li>
                <li>✓ Optimized performance, accessibility, and SEO best practices.</li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      {/* SKILLS */}
      <Reveal direction="left">
        <div
          className={`${cardStyle} ${
            scroll
              ? "bg-white/10 border-white/20"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <FaLaptopCode className="text-emerald-500 text-2xl" />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="py-3 px-4 rounded-full border text-center font-semibold hover:bg-emerald-500 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* PROJECTS */}
      <Reveal direction="right">
        <div id="project"
          className={`${cardStyle} ${
            scroll
              ? "bg-white/10 border-white/20"
              : "bg-white border-gray-200"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            Projects
          </h2>

          <div className="space-y-5">
            <a
              href="https://movies-weab-01.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-2xl border hover:border-emerald-500 hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2">
                Movie Project
              </h3>
              <p className="opacity-80">
                Responsive movie discovery application built with React.js.
              </p>
            </a>

            <a
              href="https://simple-calculator-r.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-2xl border hover:border-emerald-500 hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2">
                Calculator App
              </h3>
              <p className="opacity-80">
                Clean and responsive calculator with modern UI.
              </p>
            </a>

            <a
              href="https://simple-todo-weab.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-2xl border hover:border-emerald-500 hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2">
                Todo List App
              </h3>
              <p className="opacity-80">
                Task management application with dynamic state handling.
              </p>
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default Abolut;