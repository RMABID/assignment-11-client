import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import UpdatedArtifact from "../components/UpdatedArtifact";

const MainLayout = () => {
  return (
    <div>
      <section className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </section>
      <section className="w-10/12 mx-auto">
        <Outlet></Outlet>
        <UpdatedArtifact></UpdatedArtifact>
      </section>
    </div>
  );
};

export default MainLayout;
