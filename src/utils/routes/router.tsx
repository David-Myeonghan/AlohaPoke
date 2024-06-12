import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { Header } from "components";
import { MainList } from "pages";
import { ROUTES } from "constants/routers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: ROUTES.index,
        element: <MainList />,
      },
      {
        path: `${ROUTES.detail.root}/:pokemonId`,
        element: <div>Detail Page</div>,
      },
    ],
    // errorElement: <ErrorPage/>
  },
]);
