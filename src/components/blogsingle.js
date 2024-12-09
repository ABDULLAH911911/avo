import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bg1 from "../assets/bg_1.jpeg";
import bg2 from "../assets/bg_2.jpeg";
import jamie from "../assets/jamie.webp";

import chair from "../assets/chair.webp";
import keyboard from "../assets/keyboard.webp";
import clock from "../assets/minwallclock.webp";


function Blogsingle() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgrounds = [bg1, bg2];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [backgrounds.length]);

  return (
    <div>
       <div
  style={{
    backgroundImage: `url(${backgrounds[backgroundIndex]})`,
    backgroundSize: "auto 160%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    transition: "background-image 1s ease-in-out",
  }}
  className="flex justify-center items-center relative"
>
  {/* Logo and Navigation Links */}
  <div className="absolute top-4 left-4 w-full flex justify-between items-center px-4 sm:px-6 lg:px-20 xl:px-44">
    <div className="text-white text-2xl font-bold">
      <h1>Avo</h1>
    </div>
    <nav className="text-white text-sm sm:text-lg space-x-4 sm:space-x-6 flex flex-wrap pr-4 sm:pr-0">
      <Link to="/" className="hover:text-red-600">Home</Link>
      <Link to="/about" className="hover:text-red-600">About</Link>
      <Link to="/work" className="hover:text-red-600">Work</Link>
      <Link to="/blog" className="hover:text-red-600">Blog</Link>
      <Link to="/contact" className="hover:text-red-600">Contact</Link>
    </nav>
  </div>

  {/* Main Content */}
  <div className="flex flex-col items-start absolute sm:left-4 lg:left-16 xl:left-64">
    <div className="flex flex-col text-white text-2xl sm:text-xl lg:text-4xl font-bold">
      <div className="text-gray-600 text-sm">
        <a href="/" className="hover:text-blue-500">Home</a>
        <span className="mx-2">&gt;</span>
        <a href="/blog" className="hover:text-blue-500">Blog</a>
        <span className="mx-2">&gt;</span>
        <span>Blog Single</span>
      </div>
      <h1 className="font-bold">Blog</h1>
    </div>
  </div>

  {/* Split Bottom Border */}
  <div className="absolute bottom-0 w-full flex">
    <div className="w-1/2 h-12 bg-white transform origin-bottom-right skew-y-6"></div>
    <div className="w-1/2 h-12 bg-white transform origin-bottom-left -skew-y-6"></div>
  </div>
</div>

{/* Second Part */}
<div className="flex flex-col lg:flex-row justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16">
  {/* Left Part */}
  <div className="w-full sm:w-[70%] flex flex-col items-center justify-start">
    <img src={chair} alt="chair" className="w-2/4 h-2/4 mb-10 mt-10" />
    <h1 className="font-bold text-3xl text-center sm:text-left">It is a long established fact a reader be<br /> distracted</h1>
    <p className="text-center sm:text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>

    <h2 className="font-bold text-3xl pt-5 flex items-start">#2. Creative WordPress Themes</h2>
    <p>Temporibus ad error suscipit exercitationem hic molestiae...</p>
    <img src={keyboard} alt="keyboard" className="w-2/4 h-2/4 mb-10 mt-10" />
    <p>Quisquam esse aliquam fuga distinctio, quidem delectus...</p>

    {/* Four Buttons */}
    <div className="flex flex-row mt-10 mb-10 flex-wrap justify-center">
      <button className="bg-white hover:bg-red-600 text-black font-bold py-2 px-4 rounded border border-gray-400 mb-4 sm:mb-0 sm:mr-4">
        <a href="#top">House</a>
      </button>
      <button className="bg-white hover:bg-red-600 text-black font-bold py-2 px-4 mb-4 sm:mb-0 sm:mr-4 rounded border border-gray-400">
        <a href="#top">Home</a>
      </button>
      <button className="bg-white hover:bg-red-600 text-black font-bold py-2 px-4 mb-4 sm:mb-0 sm:mr-4 rounded border border-gray-400">
        <a href="#top">Building</a>
      </button>
      <button className="bg-white hover:bg-red-600 text-black font-bold py-2 px-4 mb-4 sm:mb-0 rounded border border-gray-400">
        <a href="#top">Travel</a>
      </button>
    </div>

    {/* User Picture and Comments Section */}
    <div className="flex flex-row items-center bg-slate-200 pb-10 h-64">
      <img src={jamie} alt="jamie" className="w-28 h-28 mb-10 mt-10" />
      <div className="flex flex-col items-center">
        <h1 className="font-roboto text-2xl text-gray-800 pb-3 pt-9">George Washington</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      </div>
    </div>

    {/* Comments */}
    <div className="pt-10 pb-10">
      <h1 className="font-semibold text-3xl text-center sm:text-left">6 Comments</h1>
      {/* Comments code */}
      <div className="flex flex-row mb-6">
        <img src={jamie} alt="jamie" className="w-12 h-12 mr-3 rounded-full" />
        <div className="flex flex-col items-start">
          <h1 className="font-roboto text-xl text-gray-800 mb-2">john Doe</h1>
          <p className="text-red-400">JUL 22, 2020 AT 2:21pm</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>

    {/* Leave a Comment */}
    <div className="flex flex-col items-center">
      <h1 className="font-semibold text-3xl pt-6 pb-6">Leave a Comment</h1>
      <form className="flex flex-col items-center bg-gray-100 w-full rounded-lg px-4 py-6">
        <div className="flex flex-col sm:flex-row mb-4">
          <div className="flex flex-col items-start sm:mr-8 mb-4 sm:mb-0">
            <label className="font-semibold text-xl text-gray-800 mb-2">Name</label>
            <input type="text" className="w-52 h-10 border border-gray-400" />
          </div>
          <div className="flex flex-col items-start">
            <label className="font-semibold text-xl text-gray-800 mb-2">Email</label>
            <input type="email" className="w-52 h-10 border border-gray-400" />
          </div>
        </div>
        <div className="flex flex-col items-start mb-4">
          <label className="font-semibold text-xl text-gray-800 mb-2">Comment</label>
          <input type="text" className="w-52 h-10 border border-gray-400" />
        </div>
        <div className="flex flex-col items-start mb-4">
          <label className="font-semibold text-xl text-gray-800 mb-2">Website</label>
          <input type="text" className="w-52 h-10 border border-gray-400" />
        </div>
        <div className="flex flex-row items-center mb-4">
          <input type="checkbox" className="mr-2" />
          <p>Save my name, email, and website in this browser.</p>
        </div>
        <button className="bg-white hover:bg-red-600 text-black font-bold py-2 px-4 mt-5 mb-10 rounded border border-gray-400">Submit</button>
      </form>
    </div>
  </div>

  {/* Right Part */}
  <div className="w-full lg:w-[30%] flex flex-col items-start justify-start mt-10 lg:mt-0">
    <div>
      <input type="search" placeholder="Search..." className="w-52 h-10 border border-gray-400" />
    </div>
    <div>
      <ul>
        <li>Categories</li>
        <li><a href="#">Web Development (12)</a></li>
        <li><a href="#">Web Design (22)</a></li>
        <li><a href="#">UI/UX Design (37)</a></li>
        <li><a href="#">Graphic Design (42)</a></li>
        <li><a href="#">Application (14)</a></li>
        <li><a href="#">Marketing (25)</a></li>
      </ul>
    </div>
    <div>
      <ul>
        <li>Popular Post</li>
        <li><a href="#">Lorem ipsum dolor sit amet</a></li>
        <li><a href="#">Consectetur adipisicing elit</a></li>
        <li><a href="#">Quisquam esse aliquam fuga</a></li>
        <li><a href="#">Distinctio, quidem delectus</a></li>
        <li><a href="#">Exercitationem hic molestiae</a></li>
      </ul>
    </div>
  </div>
</div>


        {/* --------------------------------------------footer part start----------------- */}
<div className="flex flex-col lg:flex-row justify-evenly items-start bg-black pt-36 pb-36">
  {/* avo */}
  <div className="flex flex-col items-start mb-8 lg:mb-0">
    <h1 className="pt-8 text-white font-bold">AVO</h1>
    <p className="text-white pt-14">Far far away, behind<br /> the word mountains,<br /> far from the countries. </p>
  </div>

  {/* community */}
  <div className="flex flex-col items-start mb-8 lg:mb-0">
    <h1 className="pt-8 pb-8 text-white font-bold">Community</h1>
    <a href="#" className="text-white hover:text-blue-700 cursor-pointer">Projects</a>
    <a href="#" className="text-white hover:text-blue-700 cursor-pointer">Teams</a>
    <a href="#" className="text-white hover:text-blue-700 cursor-pointer">Reviews</a>
    <a href="#" className="text-white hover:text-blue-700 cursor-pointer">FAQs</a>
  </div>

  {/* About Us */}
  <div className="flex flex-col items-start mb-8 lg:mb-0">
    <h1 className="pt-8 pb-8 text-white font-bold">About Us</h1>
    <a href="#" className="text-white hover:text-blue-700 cursor-pointer">Our Story</a>
    <a href="#" className="text-white hover:text-blue-700 cursor-pointer">Meet The Team</a>
    <a href="#" className="text-white hover:text-blue-700 cursor-pointer">Careers</a>
    <a href="#" className="text-white hover:text-blue-700 cursor-pointer">Blog</a>
  </div>

  {/* Company */}
  <div className="flex flex-col items-start mb-8 lg:mb-0">
    <h1 className="pt-8 pb-8 text-white font-bold">Company</h1>
    <a href="#" className="text-white hover:text-blue-700 cursor-pointer">About Us</a>
    <a href="#" className="text-white hover:text-blue-700 cursor-pointer">Press</a>
    <a href="#" className="text-white hover:text-blue-700 cursor-pointer">Contact</a>
    <a href="#" className="text-white hover:text-blue-700 cursor-pointer">Careers</a>
  </div>

  {/* Have a question */}
  <div className="flex flex-col items-start mb-8 lg:mb-0">
    <h1 className="pt-8 pb-8 text-white font-bold">Have a question</h1>
    <p className="text-white pb-5">203 Fake St.<br /> Mountain View,<br /> San Francisco,<br /> California, USA</p>
    <a href="#" className="text-white hover:text-blue-700 cursor-pointer pb-5">+2 392 3929 210</a>
    <a href="#" className="text-white hover:text-blue-700 cursor-pointer">Info@yourdomain.com</a>
  </div>
</div>

{/* Footer bottom */}
<div className="flex flex-col items-center justify-center bg-black pb-28">
  <h1 className="text-white font-roboto text-center">
    Copyright ©2024 All rights reserved | This template is made by Abdullah Azhar
  </h1>
</div>

{/* --------------------------------------------footer part end----------------- */}


    {/* Main div end */}
    </div>


    
    

  );    
}

export default Blogsingle;
