import Image from "next/image";
import AvatarGroup from "@/components/shared/AvatarGroup";
import { courseAvatars } from "@/constants/avatars";

type CourseCardProps = {
  title: string;
  image: string;
  featured?: boolean;
};

const details = ["17 Lessons", "2 hours 16 mins", "59 Comments"];

export default function CourseCard({ title, image, featured = false }: CourseCardProps) {
  return (
    <div className="w-full max-w-[373px] rounded-3xl border border-gray-200 bg-white p-[15px] pb-5">
      <div className="relative h-[195px] overflow-hidden rounded-xl bg-[#443131]">
        <Image src={image} alt={title} fill sizes="341px" className="object-cover" />
        <div className="absolute right-3 bottom-[19px] left-3 flex gap-3">
          {details.map((detail) => (
            <span
              key={detail}
              className={`rounded-3xl bg-smoke/60 px-3 py-1.5 text-body-xs font-medium whitespace-nowrap text-graphite backdrop-blur-[8px] ${featured ? "leading-5" : "leading-[1.2]"}`}
            >
              {detail}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-[21px] flex justify-between gap-2">
        <div className="flex min-w-0 flex-col gap-4">
          <div>
            <h3
              className={`max-w-[280px] truncate font-poppins text-heading-xs font-semibold tracking-[-0.01em] text-black ${featured ? "leading-7" : "leading-[1.2]"}`}
            >
              {title}
            </h3>
            <p className={`text-body-xs text-graphite ${featured ? "leading-5" : "leading-[1.6]"}`}>
              by <span className="text-primary">purepearl studio</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 rounded-3xl bg-gray-50 px-3 py-1.5 text-body-xs leading-[1.2] font-medium text-gray-700">
              <Image src="/icons/signal.svg" alt="" width={20} height={20} />
              Beginner
            </span>
            <AvatarGroup
              images={courseAvatars}
              size={32}
              overlap={8}
              countLabel="26+"
              countClassName={`text-body-xs leading-5 font-medium ${featured ? "bg-black text-white" : "bg-lime text-gray-950"}`}
            />
          </div>

          <p className="flex items-end">
            <span className="font-poppins text-heading-xs leading-[1.2] font-semibold tracking-[-0.01em] text-primary">
              $25
            </span>
            <span className="text-body-xs leading-[1.6] text-graphite">/lifetime</span>
          </p>
        </div>

        <div className="flex shrink-0 items-center self-start">
          <span
            className={`text-body-l text-graphite ${featured ? "leading-7 font-medium" : "leading-[1.6]"}`}
          >
            4.5{" "}
          </span>
          <Image
            src={featured ? "/icons/star-filled.svg" : "/icons/star-outline.svg"}
            alt=""
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}
