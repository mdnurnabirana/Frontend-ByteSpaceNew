import Image from "next/image";

type AvatarGroupProps = {
  images: string[];
  size: number;
  overlap: number;
  countLabel: string;
  countClassName: string;
};

export default function AvatarGroup({
  images,
  size,
  overlap,
  countLabel,
  countClassName,
}: AvatarGroupProps) {
  return (
    <div className="flex">
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt="Student"
          width={size}
          height={size}
          className="rounded-full object-cover"
          style={{ marginLeft: index === 0 ? 0 : -overlap }}
        />
      ))}
      <span
        className={`flex shrink-0 items-center justify-center rounded-full ${countClassName}`}
        style={{ width: size, height: size, marginLeft: -overlap }}
      >
        {countLabel}
      </span>
    </div>
  );
}
