import Image from "next/image";

type Ornament = {
  src: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

type OrnamentsProps = {
  items: Ornament[];
};

export default function Ornaments({ items }: OrnamentsProps) {
  return (
    <>
      {items.map((item) => (
        <Image
          key={item.src}
          src={item.src}
          alt=""
          width={item.width}
          height={item.height}
          className="absolute"
          style={{ left: item.left, top: item.top }}
        />
      ))}
    </>
  );
}
