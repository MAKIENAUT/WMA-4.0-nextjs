import { cn } from "@/lib/utils";
import Image from "next/image";

type ServicesImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function ServicesImage({
  src,
  alt,
  className,
}: ServicesImageProps) {
  return (
    <div
      className={cn(
        "aspect-[16/9] size-full max-h-[200px] rounded-sm p-2 pb-0 sm:aspect-[2/3] sm:max-h-[344px] sm:pb-2 sm:pr-0 md:max-h-[368px] lg:aspect-[4/3] lg:max-h-[288px] lg:w-10/12 xl:max-h-full xl:w-9/12",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={2000}
        height={2000}
        className="size-full rounded-sm object-cover object-center"
      />
    </div>
  );
}
