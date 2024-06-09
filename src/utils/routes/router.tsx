import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { Header } from "components";
import { MainList } from "pages";
import { DETAIL_ROUTERS, MAIN_LIST_ROUTERS } from "constants/routers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: MAIN_LIST_ROUTERS.index,
        element: <MainList />,
      },
      {
        path: DETAIL_ROUTERS.POKEMON("pikachu"),
        element: <div>Detail Page</div>,
      },
    ],
    // errorElement: <ErrorPage/>
  },
]);
