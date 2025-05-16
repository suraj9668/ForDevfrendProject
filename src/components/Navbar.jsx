import React, { useState } from "react";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoEarthOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
const Navbar = () => {
 
  return (
    <div className="w-full bg-[#111827] text-white h-20 sticky top-0 z-10">
    <div className="container mx-auto grid grid-cols-5 justify-center items-center " >
      <div className="col-span-1 flex items-center mt-4">
        <img src="https://pmcbarber.devfrend.com/_next/image?url=%2Fimages%2Fpmcbarber%2Flogo.webp&w=128&q=75" alt="" width={50} height={50} />
      </div>
      <div className="bg-[#111827] col-span-2 flex justify-center mt-4">
        <ul className="flex justify-center gap-9 "> 
        <li className="hover:text-blue-400 font-bold"><a href="#home" >Home</a></li>
        <li className="hover:text-blue-400 font-bold"><a href="#about" >About</a></li>
        <li className="hover:text-blue-400 font-bold"><a href="#service" >Serveic</a></li>
        <li className="hover:text-blue-400 font-bold"><a href="#gallery" >Gallery</a></li>
        <li className="hover:text-blue-400 font-bold"><a href="#contact" >Contact</a></li>
        </ul>
        </div>
      <div className="bg-[#111827] col-span-2 flex justify-end mt-4">

        <IoColorPaletteOutline className="m-4  text-2xl"/>
        <IoEarthOutline className="m-4 text-2xl"/>
        <span className="mx-3" ><CiPhone />+19408081569</span>


        <button className="text-white bg-blue-500 px-5 py-2 rounded-2xl font-bold" ><a href="#contact" >Book Apointment</a>   </button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
