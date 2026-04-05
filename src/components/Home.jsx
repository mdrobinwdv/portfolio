import React from 'react'
import image from "../assets/image/robin.png.png"

function Home() {
  return (
    <>
      <div className='w-full h-full lg:h-full flex flex-col lg:flex-row justify-center items-center gap-5 p-10 '>
          <div className=' w-full h-160 lg:h-190 flex flex-col justify-start lg:justify-center items-center gap-5 lg:px-20 '>
               <h1 className=' text-3xl font-bold lg:text-6xl lg:font-bold lg:uppercase  '>hello, I'am md rubel</h1>
               <p className=' text-2xl lg:text-2xl lg:font-semibold '>I am a MERN stack frontend web developer with strong expertise in UI design and API integration. I specialize in building responsive, modern web applications using Tailwind CSS. I am highly skilled in React.js, including routing and dynamic navigation, and I write clean, maintainable, and efficient code.</p>
               <p className=' text-2xl lg:text-2xl lg:font-semibold'>If you believe I am a good fit for your project or company, I would greatly appreciate the opportunity to work your company.</p>
          </div>
          <div className='w-full h-80 lg:h-190 flex justify-start lg:justify-center items-center '>
               <div className=' w-full h-full flex justify-center items-center '>
                    <img src={image} alt="" className=' w-70 h-70 lg:w-130 lg:h-130 flex justify-center items-center bg-green-400 rounded-full ' />
               </div>
          </div>
      </div>
    </>
  )
}

export default Home;
