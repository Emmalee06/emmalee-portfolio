import { Linkedin, Instagram, Github } from "lucide-react";
import FooterPetals from "./FooterPetals";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-root">
      <div className="footer-dome" aria-hidden="true" />

      <FooterPetals />

      {/* Main content */}
      <div className="footer-content container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <img src="/logo_footer.png" alt="ED Logo" className="h-12 w-auto" />

            <p className="text-gray-800 text-base max-w-sm leading-relaxed">
              You can also connect with me through these links:
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-10">
            <nav className="flex flex-col md:flex-row justify-start md:justify-end gap-8 md:gap-12 w-full">
              <a
                href="/"
                className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors"
                onClick={(e) => {
                  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                }}
              >
                Home
              </a>
              <a
                href="/projects"
                className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors"
                onClick={(e) => {
                  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                }}
              >
                Projects
              </a>
              <a
                href="/gallery"
                className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors"
                onClick={(e) => {
                  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                }}
              >
                Gallery
              </a>
              <a
                href="/about"
                className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors"
                onClick={(e) => {
                  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                }}
              >
                About
              </a>
            </nav>

            <div className="space-y-1 text-left md:text-right w-full">
              <p className="text-gray-700 text-sm">
                Coded & Designed by © Emmalee Dhaliwal, 2026
              </p>
              <p className="text-gray-700 text-sm">
                May your trials end in full bloom &lt;3
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
