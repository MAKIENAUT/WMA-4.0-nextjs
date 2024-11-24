// page.tsx
import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/templates/ServiceTemplate";
import HeroTemplate from "@/components/templates/HeroTemplate";
import { immigrationServices } from "@/components/templates/ServiceTemplate";
import { ServiceData } from "@/types/services";

interface ServicePageProps {
  params: {
    serviceName: string;
  };
}

export default async function ServicePage(props: ServicePageProps) {
  const { serviceName } = await Promise.resolve(props.params);

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

export async function generateStaticParams() {
  return Object.keys(immigrationServices).map((serviceName) => ({
    serviceName,
  }));
}