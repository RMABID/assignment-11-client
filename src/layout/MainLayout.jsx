import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
const MainLayout = () => {
  return (
    <div>
      <section className="">
        <Navbar></Navbar>
      </section>

      <section className="w-10/12 py-16 min-h-[calc(100vh-400px)] mx-auto">
        <Outlet></Outlet>
      </section>
      <footer className="">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
