import Image from "next/image";

export default function HeaderImage() {
  return (
    <div className="relative left-[-5rem] hidden h-full w-96 sm:block md:left-[-7rem] md:w-[450px] lg:left-[-8rem] lg:w-[600px] xl:left-[-9rem] xl:w-[700px] min-[1440px]:w-[900px]">
      <Image
        src="/san-fran-bridge.jpeg"
        alt="San Francisco bridge"
        fill
        className="object-cover object-left"
      />
    </div>
  );
}
