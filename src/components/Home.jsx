import React from 'react'
import image from "../assets/image/robin.png.png"

function Home() {
  return (
    <>
      <div className=' w-full h-full lg:flex lg:justify-center lg:items-center p-10 bg-purple-200 '>
          <div className='w-full h-70 lg:h-full lg:flex lg:flex-col lg:justify-center lg:items-start gap-5 px-20'>
               <h1 className=' lg:text-6xl lg:font-bold lg:uppercase  '>hello, i'am md rubel</h1>
               <p className=' lg:text-2xl '>I am a MERN stack frontend web developer with strong expertise in UI design and API integration. I specialize in building responsive, modern web applications using Tailwind CSS. I am highly skilled in React.js, including routing and dynamic navigation, and I write clean, maintainable, and efficient code.</p>
               <p className=' lg:text-2xl'>If you believe I am a good fit for your project or company, I would greatly appreciate the opportunity to work your company.</p>
          
          </div>
          <div className='w-full h-50 lg:h-full flex justify-center items-center'>
               <div className=' w-50 lg:w-100 h-50 lg:h-100 flex justify-center items-center shadow-2xl rounded-full  border-2 border-black hover:border-white '>
                    <img src={image} alt="" className=' w-full h-full flex justify-center items-center bg-green-400 rounded-full ' />
               </div>
          </div>
      </div>
    </>
  )
}

export default Home;
