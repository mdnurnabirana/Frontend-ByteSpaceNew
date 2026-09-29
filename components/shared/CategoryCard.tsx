import Image from "next/image";

type CategoryCardProps = {
  name: string;
  icon: string;
};

export default function CategoryCard({ name, icon }: CategoryCardProps) {
  return (
    <div className="flex h-[150px] w-[150px] flex-col items-center justify-center gap-3 rounded-3xl border border-gray-200 transition-colors hover:border-lime sm:h-[167px] sm:w-[167px]">
      <span className="flex h-[60px] w-[60px] items-center justify-center rounded-[40px] bg-lime">
        <Image src={icon} alt="" width={36} height={36} />
      </span>
      <p className="text-[20px] leading-[1.2] font-medium text-gray-950">{name}</p>
    </div>
  );
}
