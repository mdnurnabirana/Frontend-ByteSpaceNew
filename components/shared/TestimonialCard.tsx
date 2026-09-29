import Image from "next/image";

type TestimonialCardProps = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

export default function TestimonialCard({ name, role, avatar, quote }: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl bg-white p-6">
      <Image src={avatar} alt={name} width={80} height={80} className="rounded-full object-cover" />
      <div>
        <h3 className="font-poppins text-heading-xs leading-7 font-semibold tracking-[-0.01em] text-black">
          {name}
        </h3>
        <p className="text-body-l leading-[1.6] text-primary">{role}</p>
      </div>
      <p className="text-body-l leading-[1.6] text-graphite">&quot;{quote}&quot;</p>
    </div>
  );
}
