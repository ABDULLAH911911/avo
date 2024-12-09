import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bg1 from "../assets/bg_1.jpeg";
import bg2 from "../assets/bg_2.jpeg";
import keyboard from "../assets/keyboard.webp";
import minwallclock from "../assets/minwallclock.webp";
import chair from "../assets/chair.webp";
import handwriting from "../assets/handwriting.webp";
import kursi from "../assets/2kursi.webp";
import woman from "../assets/woman.webp";
import salt from "../assets/salt.webp";
import uff from "../assets/uff.webp";


function Blog() {
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
        <span>Blog</span>
      </div>
      <h1 className="font-bold">Blog</h1>
    </div>
  </div>
</div>


        
       
      
      {/* Second portion start */}
      {/* --------------------------------------------Recent blog part started----------------- */}
<div className="pt-28 flex flex-col justify-center items-center">
  <div className="flex flex-col justify-center items-center">
    <h1 className="text-4xl font-bold pt-10 pb-20">RECENT BLOG</h1>
  </div>

  {/* Blog posts container */}
  <div className="flex flex-wrap justify-center gap-6 pb-9">

    {/* Blog 1 */}
    <div className="flex flex-col justify-center items-center w-full sm:w-72 md:w-72 lg:w-72">
      <img src={keyboard} alt="keyboard" className="w-full h-72 object-cover" />
      <h1 className="text-xl font-bold pt-2">
        JUNE 01, 2020 ADMIN <i className="fa fa-circle"></i> 2
      </h1>
      <p className="text-lg font-normal pt-2">
        Far far away, behind the word<br /> mountains, far from the<br /> countries Vokalia and<br /> Consonantia.
      </p>
      <Link to="/blogsingle" className="bg-slate-400 hover:bg-red-700 text-white font-bold py-2 px-4 pt-2 rounded">
        Read More
      </Link>
    </div>

    {/* Blog 2 */}
    <div className="flex flex-col justify-center items-center w-full sm:w-72 md:w-72 lg:w-72">
      <img src={chair} alt="chair" className="w-full h-72 object-cover" />
      <h1 className="text-xl font-bold pt-2">
        JUNE 01, 2020 ADMIN <i className="fa fa-circle"></i> 2
      </h1>
      <p className="text-lg font-normal pt-2">
        Far far away, behind the word<br /> mountains, far from the<br /> countries Vokalia and<br /> Consonantia.
      </p>
      <Link to="/blog" className="bg-slate-400 hover:bg-red-700 text-white font-bold py-2 px-4 pt-2 rounded">
        Read More
      </Link>
    </div>

    {/* Blog 3 */}
    <div className="flex flex-col justify-center items-center w-full sm:w-72 md:w-72 lg:w-72">
      <img src={minwallclock} alt="clock" className="w-full h-72 object-cover" />
      <h1 className="text-xl font-bold pt-2">
        JUNE 01, 2020 ADMIN <i className="fa fa-circle"></i> 2
      </h1>
      <p className="text-lg font-normal pt-2">
        Far far away, behind the word<br /> mountains, far from the<br /> countries Vokalia and<br /> Consonantia.
      </p>
      <Link to="/blog" className="bg-slate-400 hover:bg-red-700 text-white font-bold py-2 px-4 pt-2 rounded">
        Read More
      </Link>
    </div>

    {/* Blog 4 */}
    <div className="flex flex-col justify-center items-center w-full sm:w-72 md:w-72 lg:w-72">
      <img src={handwriting} alt="handwriting" className="w-full h-72 object-cover" />
      <h1 className="text-xl font-bold pt-2">
        JUNE 01, 2020 ADMIN <i className="fa fa-circle"></i> 2
      </h1>
      <p className="text-lg font-normal pt-2">
        Far far away, behind the word<br /> mountains, far from the<br /> countries Vokalia and<br /> Consonantia.
      </p>
      <Link to="/blog" className="bg-slate-400 hover:bg-red-700 text-white font-bold py-2 px-4 pt-2 rounded">
        Read More
      </Link>
    </div>
  </div>

  {/* Second row of blogs */}
  <div className="pt-28 flex flex-col justify-center items-center pb-10">
    <div className="flex flex-wrap justify-center gap-6 pb-9">
    
      {/* Blog 5 */}
      <div className="flex flex-col justify-center items-center w-full sm:w-72 md:w-72 lg:w-72">
        <img src={kursi} alt="chair" className="w-full h-72 object-cover" />
        <h1 className="text-xl font-bold pt-2">
          JUNE 01, 2020 ADMIN <i className="fa fa-circle"></i> 2
        </h1>
        <p className="text-lg font-normal pt-2">
          Far far away, behind the word<br /> mountains, far from the<br /> countries Vokalia and<br /> Consonantia.
        </p>
        <Link to="/blogsingle" className="bg-slate-400 hover:bg-red-700 text-white font-bold py-2 px-4 pt-2 rounded">
          Read More
        </Link>
      </div>

      {/* Blog 6 */}
      <div className="flex flex-col justify-center items-center w-full sm:w-72 md:w-72 lg:w-72">
        <img src={woman} alt="woman" className="w-full h-72 object-cover" />
        <h1 className="text-xl font-bold pt-2">
          JUNE 01, 2020 ADMIN <i className="fa fa-circle"></i> 2
        </h1>
        <p className="text-lg font-normal pt-2">
          Far far away, behind the word<br /> mountains, far from the<br /> countries Vokalia and<br /> Consonantia.
        </p>
        <Link to="/blog" className="bg-slate-400 hover:bg-red-700 text-white font-bold py-2 px-4 pt-2 rounded">
          Read More
        </Link>
      </div>

      {/* Blog 7 */}
      <div className="flex flex-col justify-center items-center w-full sm:w-72 md:w-72 lg:w-72">
        <img src={salt} alt="salt" className="w-full h-72 object-cover" />
        <h1 className="text-xl font-bold pt-2">
          JUNE 01, 2020 ADMIN <i className="fa fa-circle"></i> 2
        </h1>
        <p className="text-lg font-normal pt-2">
          Far far away, behind the word<br /> mountains, far from the<br /> countries Vokalia and<br /> Consonantia.
        </p>
        <Link to="/blog" className="bg-slate-400 hover:bg-red-700 text-white font-bold py-2 px-4 pt-2 rounded">
          Read More
        </Link>
      </div>

      {/* Blog 8 */}
      <div className="flex flex-col justify-center items-center w-full sm:w-72 md:w-72 lg:w-72">
        <img src={uff} alt="uff" className="w-full h-72 object-cover" />
        <h1 className="text-xl font-bold pt-2">
          JUNE 01, 2020 ADMIN <i className="fa fa-circle"></i> 2
        </h1>
        <p className="text-lg font-normal pt-2">
          Far far away, behind the word<br /> mountains, far from the<br /> countries Vokalia and<br /> Consonantia.
        </p>
        <Link to="/blog" className="bg-slate-400 hover:bg-red-700 text-white font-bold py-2 px-4 pt-2 rounded">
          Read More
        </Link>
      </div>
    </div>
  </div>
</div>
{/* --------------------------------------------Recent blog part end----------------- */}

      
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
      

      {/* MAIN DIV END */}
    </div>
  );
}

export default Blog;
