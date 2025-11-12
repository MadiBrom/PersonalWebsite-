import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/About/About";
import Coding from "./components/about/coding/Coder";
import Contact from "./components/contact/Contact";
import AppLayout from "./layouts/AppLayout";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/coding" element={<Coding />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
