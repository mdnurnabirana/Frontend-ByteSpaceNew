import Image from "next/image";
import AvatarGroup from "@/components/shared/AvatarGroup";
import { studentAvatars } from "@/constants/avatars";

export default function StudentsCard() {
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
