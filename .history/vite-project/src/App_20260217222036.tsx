import { FallingPetals } from "./components/FallingPetals";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-200/50 via-pink-100/30 to-purple-100/40 overflow-x-hidden">
      <FallingPetals />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <FeaturedProjects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
