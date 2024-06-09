import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { Header } from "../../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/main-list",
        element: <div>Main Page</div>,
      },
    ],
    // errorElement: <ErrorPage/>
  },
]);
