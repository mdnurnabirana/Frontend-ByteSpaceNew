import Image from "next/image";
import AvatarGroup from "@/components/shared/AvatarGroup";
import { studentAvatars } from "@/constants/avatars";

type StudentsCardProps = {
  lime?: boolean;
};

export default function StudentsCard({ lime = false }: StudentsCardProps) {
  return (
    <div
      className={`flex w-[258px] flex-col gap-2 rounded-2xl p-4 backdrop-blur-[20px] ${lime ? "bg-lime" : "bg-white"}`}
    >
      <div>
        <p
          className={`text-body-m font-medium text-gray-950 ${lime ? "leading-6" : "leading-[1.2]"}`}
        >
          Happy Students
        </p>
        <div className="flex items-center">
          {lime ? (
            <p className="text-[10px] leading-[1.5] text-gray-950">
              <span className="font-bold">4.5</span> <span className="text-gray-400">(240)</span>
            </p>
          ) : (
            <p className="text-body-xs leading-[1.6] text-gray-950">
              4.5 <span className="text-gray-400">(240)</span>
            </p>
          )}
          <Image
            src={lime ? "/icons/star-blue.svg" : "/icons/star-small.svg"}
            alt=""
            width={16}
            height={16}
            className="p-px"
          />
        </div>
      </div>
      <AvatarGroup
        images={studentAvatars}
        size={43}
        overlap={16}
        countLabel="2K+"
        countClassName={`text-xs leading-[1.5] font-bold ${lime ? "bg-gray-950 text-gray-50" : "bg-lime text-gray-950"}`}
      />
    </div>
  );
}
