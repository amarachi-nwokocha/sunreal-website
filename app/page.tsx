import AboutSection from "./Components/About";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import PortfolioGrid from "./Components/Portfolio";
import PortfolioPreview from "./Components/Portraits";

export default function Page() {
  return (
<div>
  <Navbar />
  <Hero />
  <PortfolioGrid />
  <PortfolioPreview />
  <AboutSection />
  <Footer />
</div>
  );
}
