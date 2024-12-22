import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <section className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </section>
      <section className="w-10/12 mx-auto">
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default MainLayout;
