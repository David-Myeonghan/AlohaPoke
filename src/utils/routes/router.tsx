import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { Header } from "../../components";
import { MainList } from "../../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/main-list",
        element: <MainList />,
      },
    ],
    // errorElement: <ErrorPage/>
  },
]);
