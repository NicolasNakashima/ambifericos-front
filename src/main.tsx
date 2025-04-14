/* eslint-disable @typescript-eslint/no-unused-vars */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { MainPage } from "./Pages/MainPage";
import { ShoppingCart } from "./Pages/ShoppingCart";
import { SnackbarProvider } from "notistack";
import { Produto } from "./Pages/Produto";
import QueryProvider from "./service/queryProvider";
import { Orders } from "./Pages/Orders";
import { UserProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ErrorPage } from "./Pages/ErrorPage";
import { Admin } from "./Pages/Admin";
import { Cadastro } from "./Pages/Cadastro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/carrinho",
            element: <ShoppingCart />,
          },
          {
            path: "/produto/:id",
            element: <Produto />,
          },
          {
            path: "/meus-pedidos",
            element: <Orders />,
          },
        ],
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
  {
    path: "/login",
    errorElement: <ErrorPage />,
    element: <Login />,
  },
  {
    path: "/cadastro",
    // errorElement: <ErrorPage />,
    element: <Cadastro />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <UserProvider>
        <SnackbarProvider>
          <RouterProvider router={router} />
        </SnackbarProvider>
      </UserProvider>
    </QueryProvider>
  </StrictMode>
);
