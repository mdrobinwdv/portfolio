import React from "react";
import image from "../assets/image/robin.png.png";
import Reveal from "../components/Reveal";
import useAuth from "../UseContext/UseAuth";
import ProjectSlider from "../Home/ProjectSlider";
import Testimonials from "../Home/component/Testimonials";
import BackToTop from "../Home/component/BackToTop";
import CursorGlow from "../Home/component/CursorGlow";
import { FaFacebook, FaGithub } from "react-icons/fa";

function Home() {
  const { scroll } = useAuth();

  return (
    <section
      className={`w-full min-h-screen transition-all duration-700 ${
        scroll
          ? "bg-gradient-to-br from-indigo-700 via-purple-600 to-blue-700 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      {/* HERO SECTION */}
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* TEXT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <Reveal direction="up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-blue-400">MD Robin</span>
              </h1>
            </Reveal>

            <Reveal direction="up">
              <p className="mt-6 text-lg sm:text-xl opacity-80">
                I am a MERN Stack Frontend Developer focused on building modern,
                responsive, and high-performance web applications using React.js
                & Tailwind CSS.
              </p>
            </Reveal>

            {/* CTA BUTTONS */}
            <Reveal direction="up">
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="px-6 py-3 rounded-xl bg-blue-600 hover:scale-105 transition">
                  <a href="/contact">Hire Me</a>
                </button>

                <a
                  href="/about#project"
                  className="px-6 py-3 rounded-xl border border-blue-500 hover:bg-blue-600 hover:text-white transition"
                >
                  View Projects
                </a>
              </div>
            </Reveal>
            <Reveal direction="up">
              <div className=" w-full h-20 mt-5 flex justify-center items-center gap-5 ">
                <a
                  href="https://www.facebook.com/robinkhan.robinkhan.946179"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 hover:bg-white transition w-10 h-10 flex justify-center items-center text-4xl border rounded-full"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://github.com/mdrobinwdv"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="hover:text-blue-500 hover:bg-white transition w-10 h-10 flex justify-center items-center text-4xl border rounded-full"
                >
                  <FaGithub/>
                </a>
              </div>
            </Reveal>
          </div>

          {/* IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Reveal direction="up">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full animate-pulse"></div>

                <img
                  src={image}
                  alt="profile"
                  className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full object-cover border-4 border-blue-500"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* SMALL CTA SECTION */}
        <Reveal direction="up">
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-semibold">
              Want to know more about me?
            </h2>

            <a
              href="/about"
              className="inline-block mt-5 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white hover:scale-105 transition"
            >
              Explore About Me
            </a>
          </div>
        </Reveal>
        {/* SERVICES SECTION */}
        <Reveal direction="up">
          <div className="mt-24">
            <h2 className="text-4xl font-bold text-center mb-12">
              My Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-8 rounded-3xl border border-blue-500/30 backdrop-blur-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-3">🌐 Website Design</h3>
                <p>
                  Modern and responsive website design using React and Tailwind
                  CSS.
                </p>
              </div>

              <div className="p-8 rounded-3xl border border-purple-500/30 backdrop-blur-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-3">⚛ React Development</h3>
                <p>
                  Fast and scalable React applications with clean architecture.
                </p>
              </div>

              <div className="p-8 rounded-3xl border border-cyan-500/30 backdrop-blur-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-3">
                  🚀 Performance Optimization
                </h3>
                <p>
                  Optimized websites with better speed, SEO and user experience.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* STATS */}
        <Reveal direction="up">
          <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-3xl border">
              <h2 className="text-5xl font-bold text-blue-400">20+</h2>
              <p className="mt-2">Projects</p>
            </div>

            <div className="text-center p-6 rounded-3xl border">
              <h2 className="text-5xl font-bold text-purple-400">100%</h2>
              <p className="mt-2">Responsive</p>
            </div>

            <div className="text-center p-6 rounded-3xl border">
              <h2 className="text-5xl font-bold text-cyan-400">5+</h2>
              <p className="mt-2">Technologies</p>
            </div>

            <div className="text-center p-6 rounded-3xl border">
              <h2 className="text-5xl font-bold text-green-400">24/7</h2>
              <p className="mt-2">Support</p>
            </div>
          </div>
        </Reveal>

        {/* TESTIMONIAL */}
        <Reveal direction="up">
          <div className="mt-24">
            <h2 className="text-4xl font-bold text-center mb-12">
              Client Feedback
            </h2>

            <div className="max-w-4xl mx-auto p-10 rounded-3xl border backdrop-blur-md text-center">
              <p className="text-xl italic">
                "Amazing work! Very professional, responsive and delivered
                exactly what I needed."
              </p>

              <h3 className="mt-6 text-2xl font-bold text-blue-400">
                John Client
              </h3>

              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </Reveal>

        {/* PRICING */}
        <Reveal direction="up">
          <div className="mt-24">
            <h2 className="text-4xl font-bold text-center mb-12">
              Pricing Plans
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl border text-center">
                <h3 className="text-3xl font-bold">Basic</h3>
                <h2 className="text-5xl font-bold mt-4">$50</h2>

                <ul className="mt-6 space-y-3">
                  <li>✔ Responsive Design</li>
                  <li>✔ 3 Pages</li>
                  <li>✔ Contact Form</li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl border-2 border-blue-500 text-center scale-105 shadow-2xl">
                <h3 className="text-3xl font-bold">Standard</h3>
                <h2 className="text-5xl font-bold mt-4">$100</h2>

                <ul className="mt-6 space-y-3">
                  <li>✔ React Website</li>
                  <li>✔ API Integration</li>
                  <li>✔ Responsive Design</li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl border text-center">
                <h3 className="text-3xl font-bold">Premium</h3>
                <h2 className="text-5xl font-bold mt-4">$200</h2>

                <ul className="mt-6 space-y-3">
                  <li>✔ Full Website</li>
                  <li>✔ Backend Integration</li>
                  <li>✔ Admin Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
        <ProjectSlider />
        <Testimonials />
        <BackToTop />
        <CursorGlow />
      </div>
    </section>
  );
}

export default Home;
