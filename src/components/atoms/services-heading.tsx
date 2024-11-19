import { dm_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

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
      className={cn(
        `text-2xl font-bold text-wma-darkTeal ${dm_sans.className} md:text-3xl`,
        className
      )}
    >
      {text}
    </Tag>
  );
}
