import { Navbar } from "./components/NavBar/index.js";
import { Footer } from "./components/Footer/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { StarlightSodaPage } from "./pages/projects/StarlightSodaPage.jsx";
import { MenuDesignPage } from "./pages/projects/MenuDesignPage.jsx";
import { ProjectsPage } from "./pages/ProjectsPage.jsx";
import { GalleryPage } from "./pages/GalleryPage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { SafeSpaceCaseStudyPage } from "./pages/projects/SafeSpaceCaseStudyPage.jsx";
import { TwicePostersPage } from "./pages/projects/TwicePostersPage.jsx";
import { TravelMagazinePage } from "./pages/projects/TravelMagazinePage.jsx";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-lg shadow-purple-200/50 text-[#672AAF] transition-all duration-300 hover:bg-white/70 hover:scale-110"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible
          ? "translateY(0) scale(1)"
          : "translateY(12px) scale(0.9)",
      }}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-200/50 via-pink-100/30 to-purple-100/40 overflow-x-hidden">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route
              path="/projects/starlight-soda"
              element={<StarlightSodaPage />}
            />
            <Route path="/projects/menu-design" element={<MenuDesignPage />} />
            <Route
              path="/projects/safespace"
              element={<SafeSpaceCaseStudyPage />}
            />
            <Route
              path="/projects/twice-posters"
              element={<TwicePostersPage />}
            />
            <Route
              path="/projects/travel-magazine"
              element={<TravelMagazinePage />}
            />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
