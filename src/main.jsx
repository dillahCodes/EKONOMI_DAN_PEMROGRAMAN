import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DemandFunctionPage from "./pages/demandFunctionPage.jsx";
import ErrorPage from "./pages/errorPages.jsx";
import SupllyFunctionPage from "./pages/supplyFunctionPage.jsx";
import MarketEquilibriumPage from "./pages/marketEquilibriumPage.jsx";
import MarketEquilibriumFullVersion from "./pages/marketEquilibriumFullVersionPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <ErrorPage />, errorElement: <ErrorPage /> },
  { path: "/home", element: <App /> },
  { path: "/demandFunction", element: <DemandFunctionPage /> },
  { path: "/supplyFunction", element: <SupllyFunctionPage /> },
  { path: "/marketEquilibrium", element: <MarketEquilibriumPage /> },
  { path: "/marketEquilibriumFullVersion", element: <MarketEquilibriumFullVersion /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
