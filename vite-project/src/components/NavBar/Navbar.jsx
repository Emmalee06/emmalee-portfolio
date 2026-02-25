import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/", isActive: true },
  { label: "Projects", href: "/projects", isActive: false },
  { label: "Gallery", href: "/gallery", isActive: false },
  { label: "About", href: "/about", isActive: false },
];

export const Navbar = () => {
  const location = useLocation();

  const getActiveLabel = (pathname) => {
    const match = navItems.find((i) =>
      i.href === "/" ? pathname === "/" : pathname.startsWith(i.href),
    );
    return match ? match.label : "Home";
  };

  const activeLabel = getActiveLabel(location.pathname);

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="relative bg-white/30 backdrop-blur-md rounded-full shadow-lg border border-white/40 px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" aria-label="Go to home">
            <img src="/logo_navbar.png" alt="ED Logo" className="h-8 w-auto" />
          </Link>

          <ul className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`text-lg font-medium transition-all ${
                    activeLabel === item.label
                      ? "bg-gradient-to-r from-[#6C42A8] to-[#B54CB5] bg-clip-text text-transparent font-bold"
                      : "text-gray-800 hover:text-purple-600"
                  }`}
                >
                  {item.label}
                </Link>
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
