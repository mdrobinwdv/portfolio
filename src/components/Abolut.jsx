import React from 'react'
import { FaFacebook, FaGithub } from "react-icons/fa";

function Abolut() {
  return (
    <>
      <div className=' w-full h-full grid grid-cols-1 justify-center items-center lg:flex lg:justify-center lg:items-center  lg:bg-purple-300'>
          <div className=' w-full h-140 lg:h-full flex flex-col justify-start items-center lg:gap-5 gap-2 lg:py-20 '>
              <h1 className=' w-full lg:h-20 flex justify-center items-center text-4xl lg:text-6xl font-bold'>About-me</h1>
              <div className=' w-full lg:h-40  flex justify-center items-center px-13 lg:mt-10 '>
                  <p className=' text-2xl font-semibold text-black '>I am a passionate MERN stack frontend web developer specializing in React.js and Tailwind CSS, focused on creating clean, responsive, and high-performance web applications.</p>
              </div>
              <div className=' w-130 h-60 text-2xl lg:text-3xl text-black  flex flex-col justify-center items-start gap-3 '>
                  <p><span className="font-semibold">Name :</span> MD Rubel</p>
                  <p><span className="font-semibold">Study :</span> Diploma in Computer Science & Technology</p>
                  <p><span className="font-semibold">Institute :</span> Tangail Polytechnic Institute</p>
                  <p><span className="font-semibold">Location :</span> Kalihati, Tangail, Dhaka</p>
              </div>
              <div className=' w-full h-20 flex justify-center items-center gap-5 '>
                  <p className=' w-15 h-15 flex justify-center items-center rounded-full '><a href="https://www.facebook.com/robinkhan.robinkhan.946179" target="_blank" rel="noopener noreferrer" className="text-blue-600 bg-white rounded-full text-6xl hover:scale-110 transition"><FaFacebook /></a></p>
                  <p className=' w-15 h-15 flex justify-center items-center rounded-full '><a href="https://github.com/mdrobinwdv" target="_blank" rel="noopener noreferrer" className="text-blue-600 bg-white rounded-full text-6xl hover:scale-110 transition"><FaGithub /></a></p>
              </div>
          </div>
          <div className=' w-full h-100 lg:h-full flex flex-col justify-center items-center lg:justify-start lg:items-center gap-3 lg:gap-5 py-5 lg:py-20 '>
              <h1 className=' w-full h-20  flex justify-center items-center text-4xl lg:text-6xl font-bold'>Skill</h1>
              <div className=' w-120 h-100 flex flex-col justify-center items-start '>
                 <ul className="list-disc pl-5 space-y-5 text-black text-3xl  ">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind CSS</li>
                    <li>JavaScript</li>
                    <li className=' font-bold '>React.js (Fetch API, API Data Handling, React Router,  .etc)</li>
                  </ul>
              </div>
          </div>
          <div className=' w-full h-fit lg:h-full flex flex-col justify-center items-center lg:justify-start lg:items-center lg:gap-5 lg:py-20 '>
              <h1 className=' w-full lg:h-20 flex justify-center items-center text-4xl lg:text-6xl font-bold'>Project</h1>
              <div className=' w-100 lg:w-150 h-100 flex flex-col justify-center items-center lg:justify-start lg:items-start gap-3 lg:gap-5 lg:mt-10 '>
                  <p className=' w-100 lg:w-full text-2xl lg:text-3xl '>Below are some of my recent projects that demonstrate my expertise in React.js, Tailwind CSS, and modern web development.</p>
                  <p className=' lg:text-2xl '>View my projects by clicking the links below.</p>
                  <p><a href="https://movies-weab-01.netlify.app/" target="_blank"   rel="noopener noreferrer" className=" text-2xl lg:text-3xl text-blue-600 underline">Movie project</a></p>
                  <p><a href="https://simple-calculator-r.netlify.app/" target="_blank"   rel="noopener noreferrer" className=" text-2xl lg:text-3xl text-blue-600 underline">Calculator</a></p>
                  <p><a href="https://simple-todo-weab.netlify.app/" target="_blank"   rel="noopener noreferrer" className=" text-2xl lg:text-3xl text-blue-600 underline">Todo list app</a></p>
              </div>
          </div>
      </div>
    </>
  )
}

export default Abolut;
