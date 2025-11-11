import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Coding from "./components/coding/Coding";
import Contact from "./components/contact/Contact";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/coding" element={<Coding />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
