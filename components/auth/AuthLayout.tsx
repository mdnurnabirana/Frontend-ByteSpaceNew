import Image from "next/image";
import Link from "next/link";
import CourseCard from "@/components/shared/CourseCard";
import Ornaments from "@/components/shared/Ornaments";
import StudentsCard from "@/components/shared/StudentsCard";
import Container from "@/components/ui/Container";
import { authOrnaments } from "@/constants/ornaments";

type AuthLayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function AuthLayout({ title, description, children }: AuthLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-primary lg:min-h-[1024px]">
      <div className="grid-lines absolute inset-0" />

      <div className="absolute top-0 left-1/2 hidden h-[1024px] w-[1440px] -translate-x-1/2 lg:block">
        <div className="absolute top-[394px] left-[122px]">
          <CourseCard title="Build Digital Asset" image="/images/courses/digital-asset.jpg" featured />
        </div>
        <div className="absolute top-[305px] left-[233px]">
          <CourseCard title="the Power of Big Data" image="/images/courses/big-data.jpg" featured />
        </div>
        <div className="absolute top-[740px] left-[348px]">
          <StudentsCard lime />
        </div>
        <Ornaments items={authOrnaments} />
      </div>

      <Container className="relative pt-[100px] pb-16 lg:pt-[120px] lg:pb-[120px]">
        <Link
          href="/"
          aria-label="ByteSpace home"
          className="absolute top-[35px] left-4 sm:left-6 lg:left-[26px]"
        >
          <Image src="/logos/logo-mark.svg" alt="ByteSpace" width={29} height={32} />
        </Link>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-[475px] flex-col gap-4 text-gray-50 lg:ml-[2px]">
            <h2 className="font-poppins text-heading-xs leading-[1.2] font-semibold tracking-[-0.01em]">
              {title}
            </h2>
            <p className="text-body-m leading-[1.6] sm:text-body-l">{description}</p>
          </div>

          <div className="w-full rounded-3xl bg-white px-6 py-8 sm:p-10 lg:h-[784px] lg:w-[579px] lg:shrink-0 lg:px-[63px] lg:pt-[61px] lg:pb-10">
            {children}
          </div>
        </div>
      </Container>
    </main>
  );
}
