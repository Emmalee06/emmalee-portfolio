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
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
