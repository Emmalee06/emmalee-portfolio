import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
  isActive: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home", isActive: true },
  { label: "Projects", href: "#projects", isActive: false },
  { label: "Gallery", href: "#gallery", isActive: false },
  { label: "About", href: "#about", isActive: false },
];

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="relative bg-white/30 backdrop-blur-md rounded-full shadow-lg border border-white/40 px-8 py-4">
        <div className="flex items-center justify-between">
          <img src="/logo_navbar.png" alt="ED Logo" className="h-8 w-auto" />

          <ul className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={`text-lg font-medium transition-all ${
                    activeItem === item.label
                      ? "bg-gradient-to-r from-[#6C42A8] to-[#B54CB5] bg-clip-text text-transparent font-bold"
                      : "text-gray-800 hover:text-purple-600"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button className="md:hidden text-gray-800">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
