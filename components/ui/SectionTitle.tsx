type SectionTitleProps = {
  title: string;
  description: string;
  small?: boolean;
  titleClassName?: string;
};

export default function SectionTitle({
  title,
  description,
  small = false,
  titleClassName = "",
}: SectionTitleProps) {
  const titleSize = small
    ? "text-[28px] sm:text-[32px] lg:text-heading-s"
    : "text-[32px] sm:text-[40px] lg:text-heading-m";

  return (
    <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
      <h2
        className={`font-poppins leading-[1.2] font-semibold tracking-[-0.01em] text-night ${titleSize} ${titleClassName}`}
      >
        {title}
      </h2>
      <p className="text-body-m leading-[1.6] text-gray-400 sm:text-body-l">{description}</p>
    </div>
  );
}
