import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./components/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);