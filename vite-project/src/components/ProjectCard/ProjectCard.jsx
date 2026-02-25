import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const colorSchemes = {
  purple: {
    bg: "bg-purple-100/40",
    hover: "group-hover:bg-purple-200/60",
    shadow: "shadow-purple-200/50",
  },
  pink: {
    bg: "bg-pink-100/40",
    hover: "group-hover:bg-pink-200/60",
    shadow: "shadow-pink-200/50",
  },
  blue: {
    bg: "bg-blue-100/40",
    hover: "group-hover:bg-blue-200/60",
    shadow: "shadow-blue-200/50",
  },
};

export const ProjectCard = ({
  title,
  tags,
  description,
  image,
  layout,
  colorScheme,
  to,
}) => {
  const colors = colorSchemes[colorScheme];
  const isComingSoon = title === "SafeSpace" || title === "TWICE Posters";

  return (
    <div
      className={`group w-full max-w-6xl mx-auto mb-8 px-2`}
    >
      <div className={`flex flex-col ${layout === "right" ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch gap-8 w-full min-h-[180px] lg:min-h-[180px]`}>
        {/* Text Container - wider */}
        <div
          className={`w-full lg:w-2/5 flex-none ${colors.bg} ${colors.hover} backdrop-blur-md rounded-3xl p-4 shadow-xl ${colors.shadow} transition-all duration-300 border border-white/50 flex flex-col justify-between relative`}
        >
        <div>
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            {title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-1.5 rounded-full border border-gray-800 text-sm font-medium text-gray-800 bg-transparent"
              >
                {tag.label}
              </span>
            ))}
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {description}
          </p>
        </div>

        {to ? (
          <Link
            to={to}
            className="flex items-center gap-2 text-gray-900 font-medium text-lg group/btn w-fit"
            aria-label={`View ${title}`}
          >
            <span>View More</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        ) : (
          <button className="flex items-center gap-2 text-gray-900 font-medium text-lg group/btn">
            <span>View More</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
          </button>
        )}
        {isComingSoon && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 rounded-3xl">
            <span className="text-white text-lg font-semibold">Coming soon!</span>
          </div>
        )}
      </div>

        {/* Image Container - narrower */}
        <div
          className={`w-full lg:w-3/5 flex-1 ${colors.bg} ${colors.hover} backdrop-blur-md rounded-3xl overflow-hidden shadow-xl ${colors.shadow} transition-all duration-300 border border-white/50 flex items-center justify-center relative`}
        >
        {to ? (
          <Link
            to={to}
            className="w-full h-full flex items-center justify-center"
            aria-label={`Open ${title}`}
          >
            <img
              src={image}
              alt={title}
              className={`object-contain transition-transform duration-300 group-hover:scale-105 cursor-pointer ${
                title === "SafeSpace"
                  ? "h-full w-auto mb-0"
                  : title === "Can Design"
                  ? "h-full w-auto mb-0"
                  : title === "Menu Design"
                  ? "h-full w-auto mb-0"
                  : "max-h-[180px] max-w-[80%]"
              }`}
              style={title === "SafeSpace" ? { alignSelf: "flex-end" } : {}}
            />
          </Link>
        ) : (
          <img
            src={image}
            alt={title}
            className={`object-contain transition-transform duration-300 group-hover:scale-105 ${
              title === "SafeSpace"
                ? "h-full w-auto mb-0"
                : title === "Can Design"
                ? "h-full w-auto mb-0"
                : title === "Menu Design"
                ? "h-full w-auto mb-0"
                : "max-h-[180px] max-w-[80%]"
            }`}
            style={title === "SafeSpace" ? { alignSelf: "flex-end" } : {}}
          />
        )}
        {isComingSoon && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 rounded-3xl">
            <span className="text-white text-lg font-semibold">Coming soon!</span>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};
