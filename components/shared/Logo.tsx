import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  dark?: boolean;
};

export default function Logo({ dark = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-start gap-2">
      <Image src="/logos/logo-mark.svg" alt="" width={29} height={32} />
      <span
        className={`mt-[7px] font-clash text-2xl leading-[30px] font-bold ${dark ? "text-gray-950" : "text-gray-50"}`}
      >
        ByteSpace
      </span>
    </Link>
  );
}
