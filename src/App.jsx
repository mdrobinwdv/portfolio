import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

function App() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navBar = [
    { id: 1, name: "Home", Link: "/" },
    { id: 2, name: "About", Link: "/about" },
    { id: 3, name: "Contact", Link: "/contact" }
  ];

  return (
    <div className='w-full min-h-screen flex flex-col'>

      {/* Navbar */}
      <div className='w-full h-20 flex justify-between items-center bg-gray-500 text-white px-4 md:px-10 fixed top-0 left-0 z-50'>
        
        {/* Logo */}
        <div className='flex items-center gap-3'>
          <h1 className='w-12 h-12 border font-bold flex justify-center items-center rounded-full text-4xl hover:bg-white hover:text-purple-500 italic'>R</h1>
          <h1 className='font-bold text-2xl md:text-3xl'>MD Rubel</h1>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-4 px-10'>
          {navBar.map((item) => (
            <Link
              key={item.id}
              to={item.Link}
              onClick={() => setActive(item.name)}
              className={`px-4 py-2 rounded-lg text-lg font-semibold 
              ${active === item.name 
                ? "bg-yellow-400 text-red-600" 
                : "hover:bg-gray-600"}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <span className="text-3xl">✖</span>
            ) : (
              <span className="text-3xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='fixed top-20 right-2 z-50 md:hidden bg-gray-500 w-40 flex flex-col items-center gap-2 py-4 rounded-lg shadow-lg'>
          {navBar.map((item) => (
            <Link
              key={item.id}
              to={item.Link}
              onClick={() => {
                setActive(item.name);
                setIsOpen(false);
              }}
              className={`w-3/4 text-center px-4 py-2 rounded-lg text-lg font-semibold
              ${active === item.name 
                ? "bg-yellow-400 text-red-600" 
                : "bg-gray-600 hover:bg-gray-700"}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Page Content */}
      <div className='w-full h-228 pt-20'>
        <Outlet />
      </div>

    </div>
  );
}

export default App;