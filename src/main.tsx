/* eslint-disable @typescript-eslint/no-unused-vars */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { MainPage } from "./Pages/MainPage";
import { ShoppingKart } from "./Pages/ShoppingKart";
import { SnackbarProvider } from "notistack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/carrinho",
        element: <ShoppingKart />,
      },
    ],
  },
  {
    path: "/login",
    // errorElement: <ErrorPage />,
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SnackbarProvider>
    <RouterProvider router={router} />
    </SnackbarProvider>
  </StrictMode>
);
