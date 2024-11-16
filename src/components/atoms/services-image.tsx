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
    <div className={`relative ${className}`}>
      <div className="aspect-h-3 aspect-w-4 flex w-full items-center justify-center">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-lg object-cover"
          priority
        />
      </div>
    </div>
  );
}
