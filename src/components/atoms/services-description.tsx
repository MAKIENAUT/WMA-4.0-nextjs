import { dm_sans } from "@/lib/fonts";

type ServicesDescriptionProps = {
  text: string;
  className?: string;
};

export default function ServicesDescription({
  text,
  className,
}: ServicesDescriptionProps) {
  return (
    <p className={`${dm_sans.className} text-foreground ${className}`}>
      {text}
    </p>
  );
}
