import Image from "next/image";
import CourseCard from "@/components/shared/CourseCard";
import ProgressCard from "@/components/shared/ProgressCard";
import Container from "@/components/ui/Container";
import { stats } from "@/constants/stats";

export default function CareerGrowth() {
  return (
    <section className="overflow-hidden bg-snow bg-[url(/images/backgrounds/growth-glow.webp)] bg-[length:max(100%,1440px)_100%] bg-center bg-no-repeat py-20 lg:py-[120px]">
      <Container>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-[63px] lg:pl-px">
          <div className="flex w-full flex-col gap-8 lg:w-[574px] lg:shrink-0 lg:gap-10">
            <h2 className="max-w-[577px] font-poppins text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-gray-950 sm:text-[40px] lg:text-heading-m">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="max-w-[477px] text-body-m leading-[1.6] text-gray-700 sm:text-body-l">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>
            <div className="flex items-end gap-10 sm:gap-14">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-poppins text-[36px] leading-[44px] font-medium tracking-[-0.01em] text-primary">
                    {stat.value}
                  </p>
                  <p className="text-body-l leading-[1.6] text-gray-700">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden h-[552px] w-[621px] shrink-0 md:block">
            <CourseCard title="Learn Figma from Basic" image="/images/courses/figma-basics.jpg" featured />
            <Image
              src="/images/hero/hero-student.png"
              alt="Student learning online"
              width={577}
              height={540}
              className="float-shadow absolute top-3 left-0"
            />
            <div className="absolute top-[213px] left-[345px]">
              <ProgressCard tallLabel />
            </div>
            <Image
              src="/images/ornaments/spring-lime.png"
              alt=""
              width={216}
              height={215}
              className="absolute top-[67px] left-[404px]"
            />
          </div>

          <Image
            src="/images/hero/hero-student.png"
            alt="Student learning online"
            width={577}
            height={540}
            className="h-auto w-full max-w-[420px] md:hidden"
          />
        </div>
      </Container>
    </section>
  );
}
