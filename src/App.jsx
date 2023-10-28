import Navbar from "./components/Navbar/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import DemandFunctionPage from "./pages/demandFunctionPage.jsx";
import ErrorPage from "./pages/errorPages.jsx";
import SupllyFunctionPage from "./pages/supplyFunctionPage.jsx";
import MarketEquilibriumPage from "./pages/marketEquilibriumPage.jsx";
import MarketEquilibriumFullVersion from "./pages/marketEquilibriumFullVersionPage.jsx";
import ComingSoonPage from "./pages/comingSoon.jsx";
import ChangeInDemand from "./pages/changeInDemandPage.jsx";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ChangeInSupply from "./pages/changeInSupplyPage";
import ChangeInDemandAndSupply from "./pages/changeInDemandAndSupplyPage";
import PriceElasticityOfDemand from "./pages/priceElasticityOfDemand";
import CrossPriceElasticity from "./pages/crossPriceElasticity";

// fungsi untuk memuat halaman dari atas
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Komponen untuk menampilkan navbar di setiap rute
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      {children}
    </>
  );
}
Layout.propTypes = {
  children: PropTypes.node,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/demandFunction",
    element: (
      <Layout>
        <DemandFunctionPage />
      </Layout>
    ),
  },
  {
    path: "/supplyFunction",
    element: (
      <Layout>
        <SupllyFunctionPage />
      </Layout>
    ),
  },
  {
    path: "/marketEquilibrium",
    element: (
      <Layout>
        <MarketEquilibriumPage />
      </Layout>
    ),
  },
  {
    path: "/marketEquilibriumFullVersion",
    element: (
      <Layout>
        <MarketEquilibriumFullVersion />
      </Layout>
    ),
  },
  {
    path: "/ChangeInDemand",
    element: (
      <Layout>
        <ChangeInDemand />
      </Layout>
    ),
  },
  {
    path: "/ChangeInSupply",
    element: (
      <Layout>
        <ChangeInSupply />
      </Layout>
    ),
  },
  {
    path: "/ChangeInDemandAndSupply",
    element: (
      <Layout>
        <ChangeInDemandAndSupply />
      </Layout>
    ),
  },
  {
    path: "/PriceElasticityOfDemand",
    element: (
      <Layout>
        <PriceElasticityOfDemand />
      </Layout>
    ),
  },
  {
    path: "/CrossPriceElasticity",
    element: (
      <Layout>
        <CrossPriceElasticity />
      </Layout>
    ),
  },
  {
    path: "/comingSoon",
    element: (
      <Layout>
        <ComingSoonPage />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
