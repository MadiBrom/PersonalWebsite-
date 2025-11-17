import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import StarfieldCanvas from "../components/backgrounds/StarfieldCanvas";

const AppLayout = () => {
  return (
    <>
      <StarfieldCanvas />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
