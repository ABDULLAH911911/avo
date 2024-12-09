import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/home";
import About from "./components/about";
import Work from "./components/work";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Blogsingle from "./components/blogsingle";



function App() {
  return (
    <Router>
      <Routes>
        {/* Default route renders Home.js */}
        <Route path="/" element={<Home />} />
        {/* Other routes for About, Work, Blog, and Contact */}
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogsingle" element={<Blogsingle />} />
      </Routes>
    </Router>
  );
}

export default App;
