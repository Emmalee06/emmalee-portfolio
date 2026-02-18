import { ProjectCard } from "../ProjectCard";

const projects = [
  {
    title: "SafeSpace",
    tags: [{ label: "Case Study" }, { label: "Marketing" }, { label: "UI/UX" }],
    description:
      "SafeSpace is an app designed to help women and gender-diverse people foster safer, and more inclusive worksites.",
    image: "/safespace_project_cover.png",
    layout: "left" as const,
    colorScheme: "purple" as const,
  },
  {
    title: "Can Design",
    tags: [{ label: "Graphic Design" }, { label: "Product Design" }],
    description:
      "Starlight Soda is a naturally flavoured soda that takes inspiration from the constellations. Discover your zodiac sign through a unique taste of bubbles.",
    image: "/can_project_cover.png",
    layout: "right" as const,
    colorScheme: "blue" as const,
    to: "/projects/starlight-soda",
  },
  {
    title: "Menu Design",
    tags: [{ label: "Graphic Design" }, { label: "Marketing" }],
    description:
      "Daydream Diner is a popular retro-themed brunch spot for families to spend their time. Enjoy the warm food and refreshing drinks, kids eat free!",
    image: "/menu_project_cover.png",
    layout: "left" as const,
    colorScheme: "pink" as const,
  },
];

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="relative pt-12 pb-20 px-4">
      <h2 className="text-4xl md:text-5xl font-light text-gray-900 text-center mb-16">
        Featured Projects
      </h2>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};
