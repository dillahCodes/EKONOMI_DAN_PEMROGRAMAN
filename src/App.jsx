import { Footer } from "./components/Footer/Footer";
import FeaturesSection from "./components/Fragments/FeaturesSection";
import HeroSection from "./components/Fragments/HeroSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </>
  );
}

export default App;
