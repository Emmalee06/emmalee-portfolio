import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { StarlightSodaPage } from "./pages/projects/StarlightSodaPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { AboutPage } from "./pages/AboutPage";

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-200/50 via-pink-100/30 to-purple-100/40 overflow-x-hidden">
      <BrowserRouter>
        <Navbar />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/starlight-soda" element={<StarlightSodaPage />} />
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
