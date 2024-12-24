import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
const MainLayout = () => {
  return (
    <div>
      <section className="bg-[#6d4715]">
        <Navbar></Navbar>
      </section>

      <section className="w-10/12  mx-auto">
        <Outlet></Outlet>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
