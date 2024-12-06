import { MdDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Set true if page is scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 ${
        isScrolled
          ? "bg-white/80 text-black shadow-lg"
          : "bg-[#1F0735] text-white"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-4 w-full h-full">
        {/* Logo */}
        <div className="flex justify-center items gap-6">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-8" />
          </div>

          {/* Navigation Links */}
          <ul className="hidden lg:flex space-x-6">
            <li>
              <a href="#" className="hover:text-purple-400">
                Buy Crypto
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Markets
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Trade
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Rewards Program
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Research
              </a>
            </li>
          </ul>
        </div>

        {/* Login and Register */}
        <div className="flex justify-center items-center lg:space-x-4">
          <button className="hover:text-purple-400 hidden lg:flex">
            Login
          </button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600">
            Register
          </button>
          <span className="text-white/20">|</span>
          <button className="text-white px-2 py-2 rounded-full bg-white/20">
            <MdDarkMode />
          </button>
          <button className=" text-white px-2 py-2 rounded-full bg-white/20 ">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
