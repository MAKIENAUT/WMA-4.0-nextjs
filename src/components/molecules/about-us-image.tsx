import Image from "next/image";

export default function AboutUsImage() {
  return (
    <div className="flex w-full justify-center">
      <div className="relative aspect-[16/9] w-[90%] sm:w-[80%] xl:w-[70%]">
        <div className="absolute left-0 top-0 ml-2 mt-2 aspect-[16/9] size-full rounded-sm bg-gradient-to-r from-wma-darkTeal to-wma-teal" />
        <Image
          src="/about-us-image.jpg"
          alt="Woman"
          width={2000}
          height={2000}
          className="relative z-10 aspect-[16/9] rounded-sm object-cover object-center"
        />
      </div>
    </div>
  );
}
