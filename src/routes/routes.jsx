import {
    createBrowserRouter,
   
  } from "react-router-dom";
import { Home } from "../pages/Home";
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