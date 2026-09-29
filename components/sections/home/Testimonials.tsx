import TestimonialCard from "@/components/shared/TestimonialCard";
import Container from "@/components/ui/Container";
import { testimonials } from "@/constants/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-snow bg-[url(/images/backgrounds/testimonials-glow.webp)] bg-[length:max(100%,1440px)_100%] bg-center bg-no-repeat py-20 lg:pt-[74px] lg:pb-[57px]">
      <Container>
        <div className="flex flex-col gap-12 lg:-mx-0.5 lg:gap-[72px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-[43px]">
            <h2 className="max-w-[577px] font-poppins text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-black sm:text-[40px] lg:w-[577px] lg:shrink-0 lg:text-heading-m">
              Discover What Our Community Is Saying
            </h2>
            <p className="text-body-m leading-[1.6] text-graphite sm:text-body-l lg:w-[580px]">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what
              we do. Hear directly from those who have experienced the transformative journey of
              learning and creating on our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>

          <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[41px]">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                role={testimonial.role}
                avatar={testimonial.avatar}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
