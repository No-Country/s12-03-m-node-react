/* eslint-disable no-unused-vars */
import React from "react";
import Register from "./features/register/Register";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./features/login/Login";
import RegisterData from "./features/register/RegisterData";
import Footer from "./features/footer/Footer";
import Header from "./features/header/Header";

const router = createBrowserRouter([
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
    path: "/footer",
    element : <Footer />
  },
  {
    path: "/header",
    element : <Header />
  }
])
export default function App() {
  return <RouterProvider router={router} />
}
