import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/templates/ServiceTemplate";
import HeroTemplate from "@/components/templates/HeroTemplate";
import { immigrationServices } from "@/components/templates/ServiceTemplate";

interface ServicePageProps {
  params: {
    serviceName: string;
  };
  searchParams?: Record<string, string | string[] | undefined>;
}

export default function ServicePage({
  params: { serviceName },
}: ServicePageProps) {
  if (!immigrationServices[serviceName]) {
    notFound();
  }

  return (
    <>
      <HeroTemplate route={serviceName} />
      <ServiceTemplate serviceName={serviceName} />
    </>
  );
}
