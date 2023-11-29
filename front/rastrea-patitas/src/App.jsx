import React from "react";
import Register from "./features/register/Register";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./features/login/Login";
import RegisterData from "./features/register/RegisterData";

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
  }
])
export default function App() {
  return <RouterProvider router={router} />
}