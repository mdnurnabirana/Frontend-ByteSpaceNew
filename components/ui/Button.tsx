import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "lime" | "blue" | "outline";
  type?: "button" | "submit";
  className?: string;
};

const variantStyles = {
  lime: "bg-lime text-gray-950 hover:bg-lime-bright",
  blue: "bg-primary text-gray-50 hover:bg-primary/90",
  outline: "border border-gray-200 bg-white text-gray-950 hover:bg-gray-50",
};

export default function Button({
  children,
  href,
  variant = "lime",
  type = "button",
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-3xl px-6 py-3 text-lg leading-[1.2] font-medium transition-colors ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
