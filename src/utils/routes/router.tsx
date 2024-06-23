import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import { Header, Loading } from "components";
import { MainList, DetailPage } from "pages";
import { ROUTES } from "constants/routers";
import { ErrorPage } from "pages/ErrorPage";

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
        path: `${ROUTES.detail.root}`,
        element: (
          <Suspense fallback={<Loading />}>
            <DetailPage />,
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
