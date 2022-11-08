import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Error404, ErrorPage } from "./components/ErrorPage";
import NuevoCliente, {
  action as actionNuevoCliente,
} from "./pages/NuevoCliente";
import {
  EditarCliente,
  loader as editarCliente,
  action as actionEditarCliente,
} from "./pages/EditarCliente";
import { action as actionEliminarCliente } from "./components/Cliente";
import Index, { loader as clientesLoader } from "./pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: actionNuevoCliente,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/:id/editar",
        element: <EditarCliente />,
        loader: editarCliente,
        errorElement: <ErrorPage />,
        action: actionEditarCliente,
      },
      {
        path: "/clientes/:id/eliminar",
        action: actionEliminarCliente,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
