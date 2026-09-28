import Header from "@/components/layout/Header";
import DiscoverCourses from "@/components/sections/home/DiscoverCourses";
import Hero from "@/components/sections/home/Hero";
import PartnerLogos from "@/components/sections/home/PartnerLogos";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <PartnerLogos />
        <DiscoverCourses />
      </main>
    </>
  );
}
