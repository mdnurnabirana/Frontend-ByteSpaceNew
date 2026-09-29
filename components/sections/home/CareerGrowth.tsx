import Image from "next/image";
import CourseCard from "@/components/shared/CourseCard";
import ProgressCard from "@/components/shared/ProgressCard";
import StudentsCard from "@/components/shared/StudentsCard";
import Container from "@/components/ui/Container";
import { creatorFeatures } from "@/constants/features";
import { stats } from "@/constants/stats";

type RevenueCardProps = {
  title: string;
  period: string;
  amount: string;
  showBar?: boolean;
};

function RevenueCard({ title, period, amount, showBar = false }: RevenueCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-primary p-4 text-gray-50 backdrop-blur-[20px]">
      <div className="leading-[1.2]">
        <p className="text-body-m font-medium">{title}</p>
        <p className="text-[10px]">{period}</p>
      </div>
      <div className={`flex gap-2 ${showBar ? "items-center justify-between" : "flex-col items-start"}`}>
        <p className="font-poppins text-2xl leading-8 font-semibold tracking-[-0.01em]">{amount}</p>
        <span className="rounded-3xl bg-lime-bright px-2 py-0.5 text-[10px] leading-5 font-medium text-gray-950">
          +12$
        </span>
      </div>
      {showBar && (
        <div className="h-2 w-[200px] rounded-3xl bg-white">
          <div className="h-2 w-[112px] rounded-3xl bg-lime" />
        </div>
      )}
    </div>
  );
}

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

        <div className="mt-20 flex flex-col-reverse items-center gap-12 lg:mt-[72px] lg:flex-row lg:gap-[79px] lg:pl-px">
          <div className="relative hidden h-[596px] w-[541px] shrink-0 md:block">
            <div className="absolute top-11 left-0 w-[232px]">
              <RevenueCard title="Total Revenue" period="July 1-28" amount="$120.29" showBar />
            </div>
            <div className="absolute top-[194px] left-0 w-[134px]">
              <RevenueCard title="Year to Date" period="2023" amount="$1,200.38" />
            </div>
            <div className="float-shadow absolute top-0 left-7 h-[596px] w-[435px] overflow-hidden">
              <Image
                src="/images/growth/creator-woman.png"
                alt="Course creator holding a tablet"
                width={683}
                height={683}
                className="absolute top-0 left-[-124px] max-w-none"
              />
            </div>
            <div className="absolute top-[413px] left-[283px]">
              <StudentsCard />
            </div>
            <Image
              src="/images/ornaments/zigzag-lime.png"
              alt=""
              width={216}
              height={215}
              className="absolute top-[114px] left-[303px]"
            />
          </div>

          <Image
            src="/images/growth/creator-woman.png"
            alt="Course creator holding a tablet"
            width={500}
            height={500}
            className="h-auto w-full max-w-[420px] md:hidden"
          />

          <div className="flex w-full flex-col gap-8 lg:w-[580px] lg:gap-10">
            <h2 className="max-w-[391px] font-poppins text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-gray-950 sm:text-[40px] lg:text-heading-m">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="max-w-[574px] text-body-m leading-[1.6] text-gray-700 sm:text-body-l">
              <strong className="font-bold text-gray-950">ByteSpace</strong> supports individuals or
              entities in the creation, publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {creatorFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Image src="/icons/check.svg" alt="" width={24} height={24} />
                  <span className="text-lg leading-[1.2] font-medium text-gray-950">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
