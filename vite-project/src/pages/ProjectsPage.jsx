import { useState } from "react";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import { Link } from "react-router-dom";
import { FallingPetals } from "../components/FallingPetals";

const allProjects = [
  {
    id: 1,
    title: "SafeSpace",
    tags: ["Case Study", "Marketing", "UI/UX"],
    tagValues: ["case-study", "marketing", "ui-ux"],
    description:
      "SafeSpace is an app designed to help women and gender-diverse people foster safer, and more inclusive worksites.",
    image: "/safespace_project_cover.png",
  },
  {
    id: 2,
    title: "Can Design",
    tags: ["Graphic Design", "Product Design"],
    tagValues: ["graphic-design", "product-design"],
    description:
      "Starlight Soda is a naturally flavoured soda that takes inspiration from the constellations. Discover your zodiac sign through a unique taste of bubbles.",
    image: "/can_project_cover.png",
    to: "/projects/starlight-soda",
  },
  {
    id: 3,
    title: "Menu Design",
    tags: ["Graphic Design", "Marketing"],
    tagValues: ["graphic-design", "marketing"],
    description:
      "Daydream Diner is a popular retro-themed brunch spot for families to spend their time. Enjoy the warm food and refreshing drinks, kids eat free!",
    image: "/menu_project_cover.png",
    to: "/projects/menu-design",
  },
  {
    id: 6,
    title: "TWICE Posters",
    tags: ["Case Study", "Marketing", "UI/UX"],
    tagValues: ["case-study", "marketing", "ui-ux"],
    description:
      "TWICE Posters is a collection of promotional materials designed to help women and gender-diverse people foster safer, and more inclusive worksites.",
    image: "/twice_project_cover.png",
  },
];

const filterOptions = [
  { label: "Case Study", value: "case-study" },
  { label: "Marketing", value: "marketing" },
  { label: "Graphic Design", value: "graphic-design" },
  { label: "Product Design", value: "product-design" },
  { label: "UI/UX", value: "ui-ux" },
];

const ProjectGridCard = ({ project }) => {
  const isContainImage =
    project.title === "Can Design" || project.title === "Menu Design";

  return (
    <Link
      to={project.to || "#"}
      className="group flex flex-col h-full bg-white/30 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 hover:shadow-xl hover:border-white/70 transition-all duration-300 p-3"
    >
      {/* Image Container */}
      <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className={`transition-transform duration-300 ${
            isContainImage
              ? "w-auto h-auto max-w-[90%] max-h-[90%] object-contain group-hover:scale-105"
              : "w-full h-full object-cover group-hover:scale-105"
          }`}
        />
      </div>

      {/* Content Container */}
      <div className="pl-0 pr-0 pt-1.5 pb-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-light text-gray-900 mb-3">
          {project.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-nowrap gap-2 mb-4">
          {project.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-gray-800 border border-gray-800 rounded-full bg-transparent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        {/* View More Link */}
        <div className="mt-auto">
          <button className="flex items-center gap-2 text-gray-900 font-medium text-sm group/link">
            <span>View More</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export const ProjectsPage = () => {
  const [activeFilters, setActiveFilters] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredProjects =
    activeFilters.length === 0
      ? allProjects
      : allProjects.filter((project) =>
          activeFilters.some((filter) => project.tagValues.includes(filter)),
        );

  const handleFilterToggle = (value) => {
    setActiveFilters((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value],
    );
  };

  const handleClearAll = () => {
    setActiveFilters([]);
  };

  const getSelectedLabels = () => {
    return filterOptions
      .filter((opt) => activeFilters.includes(opt.value))
      .map((opt) => opt.label);
  };

  const isFilterActive = (value) => activeFilters.includes(value);

  return (
    <>
      <FallingPetals />
      <div className="relative z-10 min-h-screen pt-32 pb-20 px-4">
        <div className="mx-auto w-full max-w-4xl">
          {/* Header */}
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8">
            Projects
          </h1>

          {/* Filter Section */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {/* Filter Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-300/60 text-gray-900 font-medium bg-purple-200/40 backdrop-blur-md hover:bg-purple-300/50 transition-all"
              >
                Filter
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white/40 backdrop-blur-md rounded-2xl border-2 border-white/60 shadow-xl overflow-hidden z-50">
                  {/* Clear All Option */}
                  <button
                    onClick={handleClearAll}
                    className={`w-full px-5 py-3 text-left font-medium transition-all ${
                      activeFilters.length === 0
                        ? "bg-purple-400/60 text-white"
                        : "text-gray-900 hover:bg-purple-200/30"
                    }`}
                  >
                    Show All
                  </button>

                  {/* Divider */}
                  <div className="h-px bg-white/30"></div>

                  {/* Filter Options */}
                  {filterOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleFilterToggle(option.value)}
                      className={`w-full px-5 py-3 text-left font-medium transition-all flex items-center gap-2 ${
                        isFilterActive(option.value)
                          ? "bg-purple-400/60 text-white"
                          : "text-gray-900 hover:bg-purple-200/30"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isFilterActive(option.value)}
                        onChange={() => {}}
                        className="w-4 h-4 cursor-pointer"
                      />
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Selected Filter Pills */}
            {getSelectedLabels().map((label, index) => {
              const filterValue = filterOptions.find(
                (opt) => opt.label === label,
              )?.value;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-200/50 backdrop-blur-md border border-purple-300/60"
                >
                  <span className="text-sm font-medium text-gray-900">
                    {label}
                  </span>
                  <button
                    onClick={() => handleFilterToggle(filterValue)}
                    className="flex items-center justify-center w-4 h-4 hover:bg-purple-300/40 rounded-full transition-colors"
                    aria-label={`Remove ${label} filter`}
                  >
                    <X className="w-3 h-3 text-gray-700" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredProjects.map((project) => (
              <ProjectGridCard key={project.id} project={project} />
            ))}
          </div>

          {/* More Projects Section */}
          <div className="text-center py-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              More Projects to Be Added!
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Until then, check out my garden of illustrations and graphics:
            </p>
            <Link
              to="/gallery"
              className="group relative px-8 py-3 rounded-full border border-gray-800 text-gray-800 font-medium text-lg overflow-hidden transition-all duration-300 hover:text-white inline-block"
            >
              <span className="relative z-10">My Garden</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-200/70 via-purple-400/70 to-pink-300/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
