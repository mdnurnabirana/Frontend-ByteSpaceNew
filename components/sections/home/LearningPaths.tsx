import CategoryCard from "@/components/shared/CategoryCard";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { categories } from "@/constants/categories";

export default function LearningPaths() {
  return (
    <section className="pt-16 pb-20 lg:pt-[72px] lg:pb-[120px]">
      <Container>
        <SectionTitle
          small
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <div className="-mx-1 mt-10 flex flex-wrap justify-center gap-4 sm:gap-10 lg:mt-[68px]">
          {categories.map((category) => (
            <CategoryCard key={category.name} name={category.name} icon={category.icon} />
          ))}
        </div>
      </Container>
    </section>
  );
}
