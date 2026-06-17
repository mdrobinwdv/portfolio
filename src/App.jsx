import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Cursorlight from "./components/Cursorlight";
import useAuth from "./UseContext/UseAuth";

function App() {
  const { scroll } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navBar = [
    { id: 1, name: "Home", Link: "/" },
    { id: 2, name: "About", Link: "/about" },
    { id: 3, name: "Contact", Link: "/contact" },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Cursorlight />

      {/* Navbar */}
      <div
        className={`w-full h-20 fixed top-0 left-0 z-50 flex items-center justify-between px-4 md:px-10 text-white backdrop-blur-md transition-all duration-500 ${
          scroll
            ? "bg-purple-600/60"
            : "bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500 text-white"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <h1 className="w-12 h-12 border flex items-center justify-center rounded-full text-3xl font-bold italic hover:bg-white hover:text-purple-500 transition">
            R
          </h1>

          <h1 className="font-bold text-2xl md:text-3xl">MD Rubel</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {navBar.map((item) => (
            <NavLink
              key={item.id}
              to={item.Link}
              end={item.Link === "/"}
              className={({ isActive }) =>
                `px-5 py-2 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out
                   ${
                    isActive
                      ? "bg-cyan-500 text-white shadow-md"
                      : "text-black hover:bg-cyan-500/20 hover:text-cyan-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-20 left-0 w-full z-50 md:hidden">
          {/* THIS IS THE UPDATED CONTAINER */}
          <div className="mx-4 rounded-xl bg-black/30 backdrop-blur-md p-4 shadow-xl transition-all duration-300">
            <div className="flex flex-col gap-3">
              {navBar.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.Link}
                  end={item.Link === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-center py-2 rounded-lg font-semibold transition ${
                      isActive
                        ? "bg-yellow-400 text-red-600"
                        : "bg-gray-700 text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Page Content */}
      <main className="w-full mt-20 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
