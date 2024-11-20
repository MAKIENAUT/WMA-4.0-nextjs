import ServiceCard from "../molecules/service-card";
import { orelega_one } from "@/lib/fonts";

type Service = {
  title: string;
  description: string;
  imageUrl: string;
  buttonLabel: string;
};

type ServiceSectionProps = {
  services: Service[];
};

export default function ServiceSection({ services }: ServiceSectionProps) {
  return (
    <section className="mb-32 px-4 sm:px-8 xl:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 rounded-xl bg-white px-4 py-8 sm:px-8 md:gap-8 lg:px-14 lg:py-10 xl:px-16 xl:py-12">
        <h2
          className={`${orelega_one.className} text-4xl text-black md:text-5xl xl:text-6xl`}
        >
          Our Services
        </h2>
        <div className="flex flex-col gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              buttonLabel={service.buttonLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
