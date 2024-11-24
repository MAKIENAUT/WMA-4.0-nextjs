import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/templates/ServiceTemplate";
import HeroTemplate from "@/components/templates/HeroTemplate";
import { immigrationServices } from "@/components/templates/ServiceTemplate";
interface ServicePageProps {
  params: {
    serviceName: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function ServicePage({
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

export async function generateStaticParams() {
  return Object.keys(immigrationServices).map((serviceName) => ({
    serviceName,
  }));
}
