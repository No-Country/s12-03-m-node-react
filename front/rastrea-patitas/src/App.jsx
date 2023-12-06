/* eslint-disable no-unused-vars */
import React from "react";
import Register from "./features/register/Register";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./features/login/Login";
import RegisterData from "./features/register/RegisterData";
import Layout from "./ui/Layout";
import Home from "./features/home/Home";
import Onboarding from "./features/onboarding/Onboarding";
import Blog from "./features/blog/Blog";
import PagePost from "./features/blog/PagePost";
import Poster from "./features/pet/Poster";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Onboarding />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      }, {
        path: "/post",
        element: <PagePost />,
      },
    ],
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/register/data",
    element: <RegisterData />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/poster",
    element: <Poster />,
  }
])
export default function App() {
  return <RouterProvider router={router} />;
}
