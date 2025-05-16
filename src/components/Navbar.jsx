import React, { useState } from "react";
import { IoColorPaletteOutline, IoEarthOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full bg-[#111827] text-white sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-20 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://pmcbarber.devfrend.com/_next/image?url=%2Fimages%2Fpmcbarber%2Flogo.webp&w=128&q=75"
            alt="logo"
            width={50}
            height={50}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center gap-9">
          <ul className="flex gap-9">
            <li className="hover:text-blue-400 font-bold">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-blue-400 font-bold">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-blue-400 font-bold">
              <a href="#service">Service</a>
            </li>
            <li className="hover:text-blue-400 font-bold">
              <a href="#gallery">Gallery</a>
            </li>
            <li className="hover:text-blue-400 font-bold">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Desktop Icons + Button */}
        <div className="hidden md:flex items-center gap-4">
          <IoColorPaletteOutline className="text-2xl" />
          <IoEarthOutline className="text-2xl" />
          <span className="flex items-center gap-1">
            <CiPhone /> +19408081569
          </span>
          <a href="#contact">
            <button className="text-white bg-blue-500 px-5 py-2 rounded-2xl font-bold">
              Book Appointment
            </button>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <HiOutlineX className="text-3xl" />
            ) : (
              <HiOutlineMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#111827] px-6 pb-4">
          <ul className="flex flex-col gap-4 pt-4">
            <li className="hover:text-blue-400 font-bold">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-blue-400 font-bold">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-blue-400 font-bold">
              <a href="#service">Service</a>
            </li>
            <li className="hover:text-blue-400 font-bold">
              <a href="#gallery">Gallery</a>
            </li>
            <li className="hover:text-blue-400 font-bold">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div className="flex flex-col gap-4 mt-6">
            <div className="flex gap-4">
              <IoColorPaletteOutline className="text-2xl" />
              <IoEarthOutline className="text-2xl" />
              <span className="flex items-center gap-1">
                <CiPhone /> +19408081569
              </span>
            </div>
            <a href="#contact">
              <button className="text-white bg-blue-500 px-5 py-2 rounded-2xl font-bold w-full">
                Book Appointment
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
