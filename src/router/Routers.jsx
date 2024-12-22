import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllArtifacts from "../pages/AllArtifacts";
import AddArtifacts from "../pages/AddArtifacts";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import ArtifactsDetails from "../pages/ArtifactsDetails";
import MyArtifacts from "../pages/MyArtifacts";
import PrivateRoutes from "./PrivateRoutes";
import UpdatedArtifact from "../pages/UpdatedArtifact";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-artifacts",
        element: <AllArtifacts></AllArtifacts>,
      },
      {
        path: "/add-artifacts",
        element: (
          <PrivateRoutes>
            <AddArtifacts></AddArtifacts>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-artifacts",
        element: <MyArtifacts></MyArtifacts>,
      },
      {
        path: "/artifacts-details/:id",
        element: <ArtifactsDetails></ArtifactsDetails>,
      },
      {
        path: "/artifacts-updated/:id",
        element: <UpdatedArtifact></UpdatedArtifact>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Routers;
