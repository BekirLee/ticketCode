import { useState } from "react";
import "./App.css";
import Navbar from "./assets/components/navbar/Navbar";
import Layout from "./assets/components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/pages/Home/Home";
import Pages from "./assets/pages/Pages/Pages";
import About from "./assets/pages/About/About";
import Blog from "./assets/pages/Blog/Blog";
import Contact from "./assets/pages/Contact/Contact";
import ErrorPage from "./assets/pages/ErrorPage/ErrorPage";
import Admin from "./assets/pages/Admin/Admin";
import Basket from "./assets/pages/Basket/Basket";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/pages", element: <Pages /> },
        { path: "/aboutus", element: <About /> },
        { path: "/blog", element: <Blog /> },
        { path: "/contact", element: <Contact /> },
        { path: "/shop", element: <Contact /> },
        { path: "/admin", element: <Admin /> },
        { path: "/basket", element: <Basket /> },
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
