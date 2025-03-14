import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white text-black navbar fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-lg font-bold">
              <img src="/logo.png" alt="" className="w-[100px]" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                ABOUT
              </Link>
              <Link
                to="/experties"
                className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                OUR EXPERTISE
              </Link>
              <Link
                to="/registration"
                className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                REGISTRATIONS
              </Link>
              <Link
                to="/contact"
                className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                CONTACT US
              </Link>
            </div>
          </div>
          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-black focus:outline-none focus:text-black"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            onClick={()=>setIsOpen(false)}
            className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            HOME
          </Link>
          <Link
            to="/about"
            onClick={()=>setIsOpen(false)}
            className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            ABOUT
          </Link>
          <Link
            to="/experties"
            onClick={()=>setIsOpen(false)}
            className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            OUR EXPERTISE
          </Link>
          <Link
            to="/registration"
            onClick={()=>setIsOpen(false)}
            className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            REGISTRATIONS
          </Link>
          <Link
            to="/contact"
            onClick={()=>setIsOpen(false)}
            className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
