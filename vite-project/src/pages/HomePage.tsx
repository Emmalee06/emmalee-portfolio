import { FeaturedProjects } from "../components/FeaturedProjects";
import { FallingPetals } from "../components/FallingPetals";
import { HeroSection } from "../components/HeroSection";

export const HomePage = () => {
  return (
    <>
      <FallingPetals />
      <HeroSection />
      <FeaturedProjects />
    </>
  );
};

