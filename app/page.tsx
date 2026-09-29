import Header from "@/components/layout/Header";
import CareerGrowth from "@/components/sections/home/CareerGrowth";
import CreatorCta from "@/components/sections/home/CreatorCta";
import DiscoverCourses from "@/components/sections/home/DiscoverCourses";
import Hero from "@/components/sections/home/Hero";
import LearningPaths from "@/components/sections/home/LearningPaths";
import PartnerLogos from "@/components/sections/home/PartnerLogos";
import Testimonials from "@/components/sections/home/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <PartnerLogos />
        <DiscoverCourses />
        <LearningPaths />
        <CareerGrowth />
        <CreatorCta />
        <Testimonials />
      </main>
    </>
  );
}
