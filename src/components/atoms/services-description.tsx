import { dm_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type ServicesDescriptionProps = {
  text: string;
  className?: string;
};

export default function ServicesDescription({
  text,
  className,
}: ServicesDescriptionProps) {
  return (
    <p
      className={cn(
        `${dm_sans.className} text-sm font-medium text-white md:text-base`,
        className
      )}
    >
      {text}
    </p>
  );
}
