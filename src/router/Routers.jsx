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
import LikedArtifacts from "../pages/LikedArtifacts";
import ErrorPage from "../pages/ErrorPage";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
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
        element: (
          <PrivateRoutes>
            <MyArtifacts></MyArtifacts>
          </PrivateRoutes>
        ),
      },
      {
        path: "/like-artifacts",
        element: (
          <PrivateRoutes>
            <LikedArtifacts></LikedArtifacts>
          </PrivateRoutes>
        ),
      },
      {
        path: "/artifacts-details/:id",
        element: (
          <PrivateRoutes>
            <ArtifactsDetails></ArtifactsDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/artifacts-updated/:id",
        element: (
          <PrivateRoutes>
            <UpdatedArtifact></UpdatedArtifact>
          </PrivateRoutes>
        ),
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
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default Routers;
