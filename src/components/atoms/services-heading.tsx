import { dm_sans } from "@/lib/fonts";

type ServicesHeadingProps = {
  text: string;
  level?: "h1" | "h2" | "h3";
  className?: string;
};

export default function ServicesHeading({
  text,
  level = "h2",
  className,
}: ServicesHeadingProps) {
  const Tag = level;
  return (
    <Tag
      className={`font-bold text-wma-teal ${dm_sans.className} ${className}`}
    >
      {text}
    </Tag>
  );
}
