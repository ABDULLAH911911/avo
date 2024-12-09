import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bg1 from "../assets/bg_1.jpeg";
import bg2 from "../assets/bg_2.jpeg";
import jamie from "../assets/jamie.webp";
import phone from "../assets/phone-call.png";
import location from "../assets/location.png";
import gmail from "../assets/gmail.png";
import global from "../assets/global.png";


function Contact() {
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
        <span>Contact</span>
      </div>
      <h1 className="font-bold">Contact</h1>
    </div>
  </div>


            
                </div>
                {/* first section div end */}


                {/* second section div start */}
<div className="flex items-center flex-col pt-24 pb-24">
  <h1 className="items-center font-bold text-red-400 text-2xl">CONTACT US</h1>
  <h2 className="items-center pt-8 font-semibold text-4xl">HAVE A PROJECT?</h2>
  <div className="flex-col items-center">
    <p className="pt-8 px-4 lg:px-16 text-center">
      Far far away, behind the word mountains, far from the countries Vokalia and<br /> Consonantia
    </p>
  </div>
  <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-16 space-y-8 lg:space-y-0 p-8">
    {/* Form Section */}
    <form className="flex flex-col bg-slate-100 bg-opacity-95 rounded-lg p-8 w-full lg:w-[45%]">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center">
          <label className="w-1/4 font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/4 font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/4 font-medium text-gray-700">Subject</label>
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
        </div>
        <div className="flex items-start">
          <label className="w-1/4 font-medium text-gray-700">Message</label>
          <textarea
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            rows="4"
          ></textarea>
        </div>
        <button className="mt-4 bg-slate-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Send Message
        </button>
      </div>
    </form>

    {/* Contact Info Section */}
    <div className="flex flex-col space-y-6 w-full lg:w-[45%]">
      {/* Address */}
      <div className="flex items-start space-x-4">
        <img
          src={location}
          alt="location"
          className="rounded-full w-10 h-10"
        />
        <div>
          <h1 className="font-bold">Address</h1>
          <p>198 West 21th Street, Suite 721<br /> New York NY 10016</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start space-x-4">
        <img
          src={phone}
          alt="phone"
          className="rounded-full w-10 h-10"
        />
        <div>
          <h1 className="font-bold">Phone</h1>
          <p>+ 1235 2355 98</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start space-x-4">
        <img
          src={gmail}
          alt="gmail"
          className="rounded-full w-10 h-10"
        />
        <div>
          <h1 className="font-bold">Email</h1>
          <p>info@yousite.com</p>
        </div>
      </div>

      {/* Website */}
      <div className="flex items-start space-x-4">
        <img
          src={global}
          alt="global"
          className="rounded-full w-10 h-10"
        />
        <div>
          <h1 className="font-bold">Website</h1>
          <p>yoursite.com</p>
        </div>
      </div>
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
      
    
    
      {/* MAIN DIV END */}
    </div>
    
  );
}

export default Contact;
