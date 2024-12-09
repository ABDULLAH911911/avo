import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bg1 from "../assets/bg_1.jpeg";
import bg2 from "../assets/bg_2.jpeg";
import design from "../assets/design.png";
import web from "../assets/web.png";
import mobile from "../assets/mobile.png";
import seo from "../assets/seo.png";
import computer from "../assets/computer.png";
import aboutsection from "../assets/aboutsection.webp";
import expert1 from "../assets/expert1.webp";
import expert2 from "../assets/expert2.webp";
import expert3 from "../assets/expert3.webp";
import expert4 from "../assets/expert4.webp";
import expert5 from "../assets/expert5.webp";
import expert6 from "../assets/expert6.webp";
import expert7 from "../assets/expert7.webp";
import expert8 from "../assets/expert8.webp";
import jamie from "../assets/jamie.webp";
import charles from "../assets/charles.webp";
import arthur from "../assets/arthur.webp";

function About() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgrounds = [bg1, bg2];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [backgrounds.length]);

  const [startIndex, setStartIndex] = useState(0); // Define startIndex state

  const clientsData = [
    { name: 'Roger Scott', position: 'Marketing Manager', quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: charles },
    { name: 'Sarah Johnson', position: 'Software Engineer', quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: arthur },
    { name: 'John Doe', position: 'Product Manager', quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: jamie },
    { name: 'Sarah Johnson', position: 'Software Engineer', quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: arthur },
    { name: 'John Doe', position: 'Product Manager', quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: charles},
    { name: 'Sarah Johnson', position: 'Software Engineer', quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: jamie },
    { name: 'John Doe', position: 'Product Manager', quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: charles },
    { name: 'Sarah Johnson', position: 'Software Engineer', quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: arthur },
    { name: 'John Doe', position: 'Product Manager', quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: jamie },
    // Add more cards as needed...
  ];

  const handleBubbleClick = (index) => {
    setStartIndex(index);
  };

  // Function to get the next set of 3 clients to display
  const currentClients = clientsData.slice(startIndex, startIndex + 3);

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
        <span>About Us</span>
      </div>
      <h1 className="font-bold">About Us</h1>
    </div>
  </div>
</div>




      {/*---------------------------------------------- Second Portion */}
      <div className="px-4 sm:px-8 md:px-24 flex flex-col items-center pt-10 md:pt-20">

{/* About Us Header */}
<div className="pt-10 md:pt-20">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black pt-6 md:pt-12">ABOUT US</h1>
</div>

{/* Icons Section */}
<div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 py-12 sm:py-16 md:py-24 mt-6 md:mt-10">
  {[
    { src: design, label: "UI/UX Design" },
    { src: seo, label: "SEO" },
    { src: web, label: "Web Development" },
    { src: mobile, label: "Mobile Apps" },
    { src: computer, label: "Product Design" },
  ].map((item, index) => (
    <div key={index} className="flex flex-col items-center text-center w-24 sm:w-28">
      <img src={item.src} alt={item.label} className="w-16 h-16 sm:w-20 sm:h-20 mb-2" />
      <h3 className="text-sm sm:text-lg font-semibold">{item.label}</h3>
    </div>
  ))}
</div>

{/* Intro Text Section */}
<div className="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12 text-center lg:text-left">
  <div className="flex flex-col">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
      Welcome to AVO<br />
      A Personal Portfolio<br />
      Web Agency
    </h1>
    <p className="text-sm sm:text-base pt-4">
      Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
      language ocean. A small river named Duden flows by their place and supplies it with the
      necessary regelialia. It is a paradisematic country, in which roasted parts of sentences
      fly into your mouth.
    </p>
  </div>
  <img src={aboutsection} alt="About Section" className="w-64 sm:w-72 h-auto" />
  <div className="flex flex-col">
    <p className="text-sm sm:text-base">
      Far far away, behind the word mountains, far far from the countries Vokalia and Consonantia,
      there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
      Semantics, a large language ocean. A small river named Duden flows by their place and
      supplies it with the necessary regelialia. It is a paradisematic country, in which roasted
      parts of sentences fly into your mouth.
    </p>
    <a
      href="https://www.youtube.com/watch?v=VIDEO_ID"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4"
    >
      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        View all Projects
      </button>
    </a>
  </div>
</div>

{/* Services Section */}
<div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 pt-6 md:pt-10 pb-4">
  {[
    { number: "01", title: "Search Engine Optimization", description: "Let your words be heard" },
    { number: "02", title: "Web Development", description: "Build stunning websites" },
    { number: "03", title: "Mobile Apps", description: "Innovative mobile solutions" },
  ].map((service, index) => (
    <div key={index} className="flex flex-col items-center text-center w-40 sm:w-56">
      <h1 className="text-3xl sm:text-4xl text-red-600 font-bold">{service.number}</h1>
      <p>________</p>
      <div>
        <h2 className="text-sm sm:text-base font-bold">{service.title}</h2>
        <p className="text-xs sm:text-sm">{service.description}</p>
      </div>
    </div>
  ))}
</div>
</div>
      


        {/* ---------------------------------------------------Expert team Section */}
<div className="flex flex-col justify-center items-center bg-slate-100">
  <h1 className="text-4xl font-bold text-black pt-20 pb-10">OUR EXPERT TEAM</h1>
  
  {/* First Row */}
  <div className="flex flex-wrap justify-center items-center pb-20 space-x-6">
    <div className="flex flex-col items-center mb-8 sm:mb-0">
      <img src={expert1} alt="team" className="w-60 h-80 mb-2" />
      <h2 className="text-2xl font-bold text-black pt-10 pb-5">EMMA WATSON</h2>
      <h3 className="text-red-500">Graphic Designer</h3>
    </div>
    <div className="flex flex-col items-center mb-8 sm:mb-0">
      <img src={expert2} alt="team" className="w-60 h-80 mb-2" />
      <h2 className="text-2xl font-bold text-black pt-10 pb-5">RICKY JONES</h2>
      <h3 className="text-red-500">Web Developer</h3>
    </div>
    <div className="flex flex-col items-center mb-8 sm:mb-0">
      <img src={expert3} alt="team" className="w-60 h-80 mb-2" />
      <h2 className="text-2xl font-bold text-black pt-10 pb-5">MIKE SMITH</h2>
      <h3 className="text-red-500">Web Designer</h3>
    </div>
    <div className="flex flex-col items-center">
      <img src={expert4} alt="team" className="w-60 h-80 mb-2" />
      <h2 className="text-2xl font-bold text-black pt-10 pb-5">ROBERT WILLS</h2>
      <h3 className="text-red-500">System Analyst</h3>
    </div>
  </div>

  {/* Second Row */}
  <div className="flex flex-wrap justify-center items-center pb-20 space-x-6">
    <div className="flex flex-col items-center mb-8 sm:mb-0">
      <img src={expert5} alt="team" className="w-60 h-80 mb-2" />
      <h2 className="text-2xl font-bold text-black pt-10 pb-5">MARY LINTON</h2>
      <h3 className="text-red-500">Web Programmer</h3>
    </div>
    <div className="flex flex-col items-center mb-8 sm:mb-0">
      <img src={expert6} alt="team" className="w-60 h-80 mb-2" />
      <h2 className="text-2xl font-bold text-black pt-10 pb-5">SADIE ADLER</h2>
      <h3 className="text-red-500">SEO</h3>
    </div>
    <div className="flex flex-col items-center mb-8 sm:mb-0">
      <img src={expert7} alt="team" className="w-60 h-80 mb-2" />
      <h2 className="text-2xl font-bold text-black pt-10 pb-5">ZAYN MALIK</h2>
      <h3 className="text-red-500">Software Engineer</h3>
    </div>
    <div className="flex flex-col items-center">
      <img src={expert8} alt="team" className="w-60 h-80 mb-2" />
      <h2 className="text-2xl font-bold text-black pt-10 pb-5">ABDULLAH AZHAR</h2>
      <h3 className="text-red-500">Web Designer</h3>
    </div>
  </div>
</div>
{/* Expert team Section end */}

          {/* --------------------------------------------Client Says Section------------------------ */}
      <div className="pt-28 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-10">
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold text-center pt-10">CLIENTS SAY ABOUT US?</h1>
        </div>

        {/* Client Cards */}
        <div className="flex flex-wrap justify-center gap-6 pt-10 pb-10">
          {currentClients.map((client, index) => (
            <div
              key={index}
              className="card w-full sm:w-64 lg:w-80 h-auto bg-gray-200 p-6 rounded-lg text-center shadow-md"
            >
              <div className="quote text-sm sm:text-base italic">"{client.quote}"</div>
              <div className="client-info mt-6 flex flex-col items-center">
                <img
                  src={client.image}
                  alt="client"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg"
                />
                <div className="client-name font-bold mt-4 text-lg sm:text-xl">{client.name}</div>
                <div className="client-position text-sm sm:text-base text-gray-500">
                  {client.position}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Bubbles */}
        <div className="mt-4 flex justify-center space-x-3 pb-10">
          {[0, 3, 6].map((index) => (
            <div
              key={index}
              onClick={() => handleBubbleClick(index)}
              className={`bubble w-4 h-4 sm:w-6 sm:h-6 rounded-full cursor-pointer transition ${
                startIndex === index ? "bg-blue-500" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>

        {/* Photo Div */}
        <div
          className="w-full max-w-screen-lg mx-auto mb-40 relative overflow-hidden rounded-lg px-6 sm:px-10 py-10 text-center"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-xl sm:text-2xl font-normal text-red-500 lg:pt-8 sm:pt-16">
            Get Started
          </h1>
          <h2 className="text-2xl sm:text-4xl font-bold text-white pt-4 flex flex-col">
            Fill in the brief and get the
            <br /> project estimate
          </h2>
          <p className="text-base sm:text-lg font-normal text-white lg:pb-20 lg:pt-4 leading-relaxed">
            Far far away, behind the word mountains, far from the
            <br className="hidden sm:block" /> countries Vokalia and Consonantia, there live the blind
            <br className="hidden sm:block" /> texts.
          </p>
          
          {/* Button for Desktop and Laptop Views */}
          <button
            className="bg-slate-400 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg 
                      mt-6 lg:absolute lg:bottom-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:py-3 lg:px-8"
          >
            Get Started
          </button>
        </div>

      </div>
      {/* --------------------------------------------Client says part ended----------------- */}

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

export default About;
