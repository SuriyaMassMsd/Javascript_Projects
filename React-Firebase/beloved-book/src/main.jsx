import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AddBook from "./pages/AddBook.jsx";
import Books from "./pages/Books.jsx";
import SeeMore from "./pages/SeeMore.jsx";
import Update from "./pages/Update.jsx";

const route = new createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AddBook />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/seemore/:id",
        element: <SeeMore />,
      },
      {
        path: "/update/:id",
        element: <Update />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={route} />
);
