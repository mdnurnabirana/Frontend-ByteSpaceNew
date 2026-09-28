import Image from "next/image";
import { partners } from "@/constants/partners";

export default function PartnerLogos() {
  return (
    <section className="bg-gray-50 px-4 py-12 lg:py-20">
      <div className="mx-auto flex max-w-[1132px] flex-wrap items-end justify-center gap-x-10 gap-y-8 lg:justify-between lg:gap-x-[72px]">
        {partners.map((partner) => (
          <Image
            key={partner.name}
            src={partner.logo}
            alt={partner.name}
            width={partner.width}
            height={partner.height}
            className="h-8 w-auto lg:h-auto"
          />
        ))}
      </div>
    </section>
  );
}
