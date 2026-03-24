import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-16 py-4 backdrop-blur-md bg-black/30 text-white">
      {/* LOGO */}
      <div className="text-2xl font-bold tracking-wide">
        Caffe <span className="text-amber-500">Atlas</span>
      </div>

      {/* LINKS */}
      <div className="flex items-center gap-10 text-lg">
        <a href="#" className="hover:text-amber-400 transition duration-300">
          Home
        </a>

        <a href="#" className="hover:text-amber-400 transition duration-300">
          Menu
        </a>

        <a href="#" className="hover:text-amber-400 transition duration-300">
          About
        </a>

        <a href="#" className="hover:text-amber-400 transition duration-300">
          Contact
        </a>
      </div>

      {/* BUTTON */}
      <button className="bg-white hover:bg-amber-400 text-black px-6 py-3 rounded-lg font-semibold transition hover:scale-105">
        Book Table
      </button>
    </nav>
  );
};

export default Navbar;
