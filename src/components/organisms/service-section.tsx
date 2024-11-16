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
    <section
      className={`mx-auto box-border max-w-6xl rounded-xl bg-white px-4 py-8 md:px-24 md:py-12 ${orelega_one.className}`}
    >
      <h2 className="mb-6 text-3xl tracking-wide text-black md:mb-8 md:text-6xl">
        Our Services
      </h2>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          imageUrl={service.imageUrl}
          buttonLabel={service.buttonLabel}
        />
      ))}
    </section>
  );
}
