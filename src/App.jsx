import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DemandFunctionPage from "./pages/demandFunctionPage.jsx";
import ErrorPage from "./pages/errorPages.jsx";
import SupllyFunctionPage from "./pages/supplyFunctionPage.jsx";
import MarketEquilibriumPage from "./pages/marketEquilibriumPage.jsx";
import MarketEquilibriumFullVersion from "./pages/marketEquilibriumFullVersionPage.jsx";
import ComingSoonPage from "./pages/comingSoon.jsx";
import ChangeInDemand from "./pages/changeInDemandPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/demandFunction",
    element: (
      <>
        <Navbar />
        <DemandFunctionPage />
      </>
    ),
  },
  {
    path: "/supplyFunction",
    element: (
      <>
        <Navbar />
        <SupllyFunctionPage />
      </>
    ),
  },
  {
    path: "/marketEquilibrium",
    element: (
      <>
        <Navbar />
        <MarketEquilibriumPage />
      </>
    ),
  },
  {
    path: "/marketEquilibriumFullVersion",
    element: (
      <>
        <Navbar />
        <MarketEquilibriumFullVersion />
      </>
    ),
  },
  {
    path: "/ChangeInDemand",
    element: (
      <>
        <Navbar />
        <ChangeInDemand />
      </>
    ),
  },
  { path: "/comingSoon", element: <ComingSoonPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
