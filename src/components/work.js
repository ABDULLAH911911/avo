import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bg1 from "../assets/bg_1.jpeg";
import bg2 from "../assets/bg_2.jpeg";
import cassete from "../assets/cassete.webp";
import minwallclock from "../assets/minwallclock.webp";
import portfolioagency from "../assets/portfolioagency.webp";
import handwriting from "../assets/handwriting.webp";
import keyboard from "../assets/keyboard.webp";

import spiral from "../assets/spiral.webp";
import jamie from "../assets/jamie.webp";

function Work() {
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
    backgroundSize: "auto 160%", // Image drops from the bottom
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat", // Adjust to start from the bottom center
    width: "100%",
    height: "100vh",
    transition: "background-image 1s ease-in-out",
  }}
  className="flex justify-center items-center relative"
>
  {/* Logo and Navigation Links */}
  <div className="absolute top-4 left-4 w-full flex justify-between items-center px-4 sm:px-6 lg:px-44">
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
  <div className="flex flex-col items-start absolute sm:left-4 lg:left-64">
    <div className="flex flex-col text-white text-2xl sm:text-xl lg:text-4xl font-bold">
      <div className="text-gray-600 text-sm">
        <a href="/" className="hover:text-blue-500">Home</a>
        <span className="mx-2">&gt;</span>
        <span>Work</span>
      </div>
      <h1 className="font-bold">Work</h1>
    </div>
  </div>
</div>

      {/* MAIN DIV END */}
        {/*------------------------------------------- third portion started------------------------------ */}
      <div className="flex flex-col justify-center items-center pt-10 px-4">
        <h1 className="text-4xl font-bold text-center pt-20 lg:pt-48">OUR WORKS</h1>

        {/* Work Section */}
        {[
          { img: cassete, title: "CASSETE TAPE", author: "Jamie Smith", website: "avo.com" },
          { img: minwallclock, title: "MIN WALL CLOCK", author: "Jamie Smith", website: "avo.com" },
          { img: portfolioagency, title: "PORTFOLIO AGENCY", author: "Jamie Smith", website: "avo.com" },
          { img: handwriting, title: "HANDWRITING DESIGN", author: "Jamie Smith", website: "avo.com" },
          { img: keyboard, title: "KEYBOARD ART", author: "Jamie Smith", website: "avo.com" },
          { img: spiral, title: "SPIRAL PROJECT", author: "Jamie Smith", website: "avo.com" },
        ].map((work, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center pt-10 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <img
              src={work.img}
              alt={work.title}
              className="w-full h-72 sm:h-80 lg:h-96 mb-4 lg:mb-0 lg:w-1/2 object-cover"
            />
            <div className="flex flex-col items-start lg:items-start lg:ml-10 text-center lg:text-left lg:w-1/2">
              <p className="font-roboto text-sm lg:text-base text-gray-500">Web Design</p>
              <h1 className="font-bold text-2xl lg:text-3xl pt-2">{work.title}</h1>
              <p className="font-normal text-gray-400 leading-relaxed pt-2 text-sm lg:text-base">
                Far far away, behind the word mountains, far far from the countries Vokalia and
                Consonantia.
              </p>
              <div className="flex flex-row items-center justify-center lg:justify-start pt-6">
                <img
                  src={jamie}
                  alt={work.author}
                  className="rounded-full w-12 h-12 sm:w-16 sm:h-16"
                />
                <div className="ml-4">
                  <h1 className="text-sm sm:text-base font-medium">{work.author}</h1>
                  <p className="text-gray-500 text-sm">{work.website}</p>
                </div>
              </div>
              <button className=" mb-4 mt-4 bg-slate-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                View Portfolio
              </button>
            </div>
          </div>
        ))}
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

    </div>
  );
}

export default Work;
