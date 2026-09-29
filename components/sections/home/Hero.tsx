import Image from "next/image";
import Ornaments from "@/components/shared/Ornaments";
import ProgressCard from "@/components/shared/ProgressCard";
import StudentsCard from "@/components/shared/StudentsCard";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { heroOrnaments } from "@/constants/ornaments";

function CategoryBadge() {
  return (
    <div className="w-[208px] rounded-2xl bg-white p-4 backdrop-blur-[20px]">
      <p className="text-body-m leading-[1.2] font-medium text-gray-950">UI/UX Design</p>
      <div className="flex items-center gap-2 text-body-xs leading-[1.6] text-gray-400">
        <span>200 Courses</span>
        <span className="text-[10px]">•</span>
        <span>1000+ Students</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary lg:h-[1024px]">
      <div className="grid-lines absolute inset-0" />

      <div className="absolute top-0 left-1/2 hidden h-[1024px] w-[1440px] -translate-x-1/2 lg:block">
        <div className="absolute top-[582px] left-[145px] h-[1149px] w-[1149px] rounded-full border-[320px] border-lime-bright" />
        <Image
          src="/images/hero/hero-student.png"
          alt="Student holding a laptop"
          width={578}
          height={541}
          loading="eager"
          className="float-shadow absolute top-[512px] left-[431px]"
        />
        <div className="absolute top-[651px] left-[842px]">
          <ProgressCard />
        </div>
        <div className="absolute top-[837px] left-[328px]">
          <StudentsCard />
        </div>
        <Ornaments items={heroOrnaments} />
        <div className="absolute top-[639px] left-[404px]">
          <CategoryBadge />
        </div>
      </div>

      <Container className="relative pt-[130px] text-center lg:pt-[169px]">
        <h1 className="mx-auto max-w-[935px] font-poppins text-[40px] leading-[1.2] font-semibold tracking-[-0.01em] text-white sm:text-[56px] lg:text-heading-l">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mx-auto mt-6 max-w-[819px] text-body-m leading-[1.6] text-gray-100 sm:text-body-l lg:mt-8">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide
          range of courses.
        </p>

        <form className="mx-auto mt-10 flex max-w-[581px] flex-col items-stretch gap-4 sm:flex-row sm:items-start lg:mt-[60px]">
          <label className="flex h-[52px] w-full items-center gap-2 rounded-3xl bg-white px-6 sm:flex-1">
            <Image src="/icons/search.svg" alt="" width={24} height={24} />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-body-l leading-[1.6] text-gray-950 outline-none placeholder:text-gray-400"
            />
          </label>
          <Button type="submit">Search</Button>
        </form>
      </Container>

      <div className="relative mx-auto mt-12 w-full max-w-[520px] px-4 lg:hidden">
        <div className="absolute top-[18%] left-1/2 flex aspect-square w-[190%] -translate-x-1/2 items-center justify-center rounded-full bg-lime-bright">
          <div className="aspect-square w-[44%] rounded-full bg-primary" />
        </div>
        <Image
          src="/images/hero/hero-student.png"
          alt="Student holding a laptop"
          width={578}
          height={541}
          className="relative h-auto w-full"
        />
      </div>
    </section>
  );
}
