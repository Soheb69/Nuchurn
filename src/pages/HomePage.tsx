import { Hero } from "../components/Hero";
import { BrandStory } from "../components/BrandStory";

interface HomePageProps {
  navigate?: (page: string, path: string) => void;
}

export function HomePage({ navigate }: HomePageProps) {
  return (
    <>
      <Hero navigate={navigate} />
      <BrandStory />
    </>
  );
}