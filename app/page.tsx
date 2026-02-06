import AboutSection from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import PortfolioPreview from "./Components/Portraits";

export default function Page() {
  return (
<div>
  <Navbar />
  <Hero />
  <PortfolioPreview />
  <AboutSection />
</div>
  );
}
