import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeaderImageProps {
  imageSrc: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

export default function HeaderImage({
  imageSrc,
  alt,
  className = "",
  imageClassName = "",
}: HeaderImageProps) {
  return (
    <div
      className={cn(
        "relative hidden h-full",
        "left-[-5rem] w-96",
        "md:left-[-7rem] md:w-[450px]",
        "lg:left-[-8rem] lg:w-[600px]",
        "xl:left-[-9rem] xl:w-[700px]",
        "min-[1440px]:w-[900px]",
        "sm:block",
        className
      )}
    >
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className={cn("object-cover object-left", imageClassName)}
        sizes="(min-width: 1440px) 900px, (min-width: 1280px) 700px, (min-width: 1024px) 600px, (min-width: 768px) 450px, 384px"
      />
    </div>
  );
}
