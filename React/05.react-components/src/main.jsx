import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AlertPage from "./pages/AlertPage.jsx";
import "./assets/css/main.css";
import Button from "./pages/Button.jsx";
import CardPage from "./pages/CardPage.jsx";

const route = new createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AlertPage />,
      },
      {
        path: "/button",
        element: <Button />,
      },
      {
        path: "/cards",
        element: <CardPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={route} />
  </div>
);
