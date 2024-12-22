import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./router/Routers";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Routers} />
      <Toaster position="top-center" reverseOrder={false}></Toaster>
    </AuthProvider>
  </StrictMode>
);
