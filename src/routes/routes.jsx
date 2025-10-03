import {
    createBrowserRouter,
   
  } from "react-router-dom";
import { Home } from "../Home";
import { MainLayout } from "../layouts/mainLayout";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);