import Image from "next/image";
import AvatarGroup from "@/components/shared/AvatarGroup";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { studentAvatars } from "@/constants/avatars";

const ornaments = [
  { src: "/images/ornaments/zigzag-lime.png", left: -122, top: 221, size: 389 },
  { src: "/images/ornaments/zigzag-gray.png", left: 183, top: 477, size: 177 },
  { src: "/images/ornaments/torus-gray.png", left: 14, top: 681, size: 346 },
  { src: "/images/ornaments/cylinder-lime.png", left: 1227, top: 220, size: 374 },
  { src: "/images/ornaments/pyramid-gray.png", left: 1104, top: 464, size: 190 },
  { src: "/images/ornaments/spring-gray.png", left: 1124, top: 672, size: 334 },
];

function ProgressCard() {
  return (
    <div className="flex w-[232px] flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[20px]">
      <p className="text-body-s leading-[1.2] font-medium text-gray-950">Learning Progress</p>
      <p className="font-poppins text-5xl leading-[1.2] font-semibold tracking-[-0.01em] text-gray-950">
        55%
      </p>
      <div className="h-2 w-[200px] rounded-3xl bg-smoke">
        <div className="h-2 w-[112px] rounded-3xl bg-lime" />
      </div>
    </div>
  );
}

function StudentsCard() {
  return (
    <div className="flex w-[258px] flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[20px]">
      <div>
        <p className="text-body-m leading-[1.2] font-medium text-gray-950">Happy Students</p>
        <div className="flex items-center">
          <p className="text-body-xs leading-[1.6] text-gray-950">
            4.5 <span className="text-gray-400">(240)</span>
          </p>
          <Image src="/icons/star-small.svg" alt="" width={16} height={16} className="p-px" />
        </div>
      </div>
      <AvatarGroup
        images={studentAvatars}
        size={43}
        overlap={16}
        countLabel="2K+"
        countClassName="bg-lime text-xs leading-[1.5] font-bold text-gray-950"
      />
    </div>
  );
}

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
        {ornaments.map((ornament) => (
          <Image
            key={ornament.src}
            src={ornament.src}
            alt=""
            width={ornament.size}
            height={ornament.size}
            className="absolute"
            style={{ left: ornament.left, top: ornament.top }}
          />
        ))}
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
