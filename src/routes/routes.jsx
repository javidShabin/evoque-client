import {
    createBrowserRouter,
   
  } from "react-router-dom";
import { Home } from "../pages/Home";
import { MainLayout } from "../layouts/mainLayout";
import { About } from "../components/About";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,

        },
        {
          path: "About/",
          element:<About />,
          
        },
      ],
    },
  ]);