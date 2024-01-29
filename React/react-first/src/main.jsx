import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories.jsx";
import Adverties from "./pages/Adverties.jsx";
import Blogs from "./pages/Blogs.jsx";
import Faqs from "./pages/Faqs.jsx";
import BlogView from "./pages/BlogsView.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/adverties",
        element: <Adverties />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogsview/:id",
        element: <BlogView />,
      },

      {
        path: "/faqs",
        element: <Faqs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={route} />
  </>
);
