import React from 'react'
import { FaFacebook, FaGithub } from "react-icons/fa";

function Abolut() {
  return (
    <>
      <div className=' w-full h-full grid grid-cols-1 justify-center items-center lg:flex lg:justify-center lg:items-center '>
          <div className=' w-full h-140 lg:h-204 flex flex-col justify-start lg:justify-center items-center gap-15 lg:gap-0 '>
              <h1 className=' w-full flex justify-center items-center text-4xl lg:text-6xl font-bold lg:mt-5'>About-me</h1>
              <div className=' w-full lg:h-50 flex justify-center items-center px-13 lg:mt-5 '>
                  <p className='w-full h-full flex justify-center items-center lg:text-2xl lg:font-semibold text-black '>I am a passionate MERN stack frontend web developer specializing in React.js and Tailwind CSS, focused on creating clean, responsive, and high-performance web applications.</p>
              </div>
              <div className=' w-full lg:h-50 lg:text-2xl text-black  flex flex-col justify-center items-start gap-2 px-13 '>
                  <p><span className="lg:font-semibold">Name :</span> MD Rubel</p>
                  <p><span className="lg:font-semibold">Study :</span> Diploma in Computer Science & Technology</p>
                  <p><span className="lg:font-semibold">Institute :</span> Tangail Polytechnic Institute</p>
                  <p><span className="lg:font-semibold">Location :</span> Kalihati, Tangail, Dhaka</p>
              </div>
              <div className=' w-full lg:h-20 flex justify-center items-center gap-5 '>
                  <p className='w-10 lg:w-15 h-10 lg:h-15 flex justify-center items-center rounded-full '><a href="https://www.facebook.com/robinkhan.robinkhan.946179" target="_blank" rel="noopener noreferrer" className="text-blue-600 bg-white rounded-full text-6xl hover:scale-110 transition"><FaFacebook /></a></p>
                  <p className='w-10 lg:w-15 h-10 lg:h-15 flex justify-center items-center rounded-full '><a href="https://github.com/mdrobinwdv" target="_blank" rel="noopener noreferrer" className="text-blue-600 bg-white rounded-full text-6xl hover:scale-110 transition"><FaGithub /></a></p> 
              </div>
          </div>
          <div className=' w-full h-100 lg:h-204 flex flex-col justify-center items-center lg:justify-start lg:py-33 gap-2  '>
              <h1 className=' w-full lg:h-20 flex justify-center items-center text-4xl lg:text-6xl font-bold'>Skill</h1>
              <div className=' w-full h-70 lg:h-60 flex flex-col justify-center items-center lg:items-start gap-2 px-13 lg:mt-5 '>
                 <ul className="list-none  lg:space-y-2 text-black text-2xl   ">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind CSS</li>
                    <li>JavaScript</li>
                    <li className=' font-bold '>React.js (Fetch API, API Data Handling, React Router,  .etc)</li>
                  </ul>
              </div>
          </div>
          <div className=' w-full h-100 lg:h-204 flex flex-col justify-center items-center lg:justify-start lg:py-33 gap-2  '>
              <h1 className=' w-full flex justify-center items-center text-4xl lg:text-6xl font-bold'>Project</h1>
              <div className=' w-full h-100 flex flex-col justify-center items-center gap-2 lg:gap-5 px-13 lg:mt-5 pb-5 lg:pb-0 '>
                  <p className=' w-full lg:w-full mt-10 lg:mt-0 text-2xl lg:text-3xl lg:px-6 '>Below are some of my recent projects that demonstrate my expertise in React.js, Tailwind CSS, and modern web development.</p>
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
