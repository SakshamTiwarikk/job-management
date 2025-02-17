import React from "react";
import brandlogo from "../assets/logo/brand1.png";

function Navbar({ onCreateJob }) {
  return (
    <nav className="bg-white">
      <header className="py-4 bg-gray-100">
        {/* Outer background (optional) */}
        <div className="mx-auto max-w-4xl px-4">
          {/* Nav "pill" container */}
          <div className="flex items-center justify-between bg-white rounded-full shadow-md px-6 py-2">
            {/* Left side: Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
                <img
                  src={brandlogo}
                  alt="Logo"
                  className="object-cover w-full h-full"
                />
              </div>
              
            </div>

            {/* Middle: Nav links */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#find-jobs" className="text-gray-600 hover:text-gray-900">
                Find Jobs
              </a>
              <a href="#find-talents" className="text-gray-600 hover:text-gray-900">
                Find Talents
              </a>
              <a href="#about-us" className="text-gray-600 hover:text-gray-900">
                About us
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900">
                Testimonials
              </a>
            </nav>

            {/* Right side: "Create Jobs" button */}
            <button
              onClick={onCreateJob}
              className="bg-gradient-to-r from-[#A128FF] to-[#6100AD] text-white px-4 py-2 rounded-full hover:opacity-90"
            >
              Create Jobs
            </button>
          </div>
        </div>
      </header>
    </nav>
  );
}

export default Navbar;
