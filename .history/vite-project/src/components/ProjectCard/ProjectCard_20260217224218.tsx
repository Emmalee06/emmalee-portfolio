import { ArrowRight } from "lucide-react";

interface Tag {
  label: string;
}

interface ProjectCardProps {
  title: string;
  tags: Tag[];
  description: string;
  image: string;
  layout: "left" | "right";
  colorScheme: "purple" | "pink" | "blue";
}

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
}: ProjectCardProps) => {
  const colors = colorSchemes[colorScheme];

  return (
    <div
      className={`group flex flex-col ${layout === "right" ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch gap-8 w-full max-w-6xl mx-auto mb-12 px-4`}
    >
      <div
        className={`w-full lg:w-2/5 ${colors.bg} ${colors.hover} backdrop-blur-md rounded-3xl p-8 shadow-xl ${colors.shadow} transition-all duration-300 border border-white/50 flex flex-col justify-between`}
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

        <button className="flex items-center gap-2 text-gray-900 font-medium text-lg group/btn">
          <span>View More</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>

      <div
        className={`w-full lg:w-3/5 ${colors.bg} ${colors.hover} backdrop-blur-md rounded-3xl overflow-hidden shadow-xl ${colors.shadow} transition-all duration-300 border border-white/50 flex items-center justify-center min-h-[500px]`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
};
