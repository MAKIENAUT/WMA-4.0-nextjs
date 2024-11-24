import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/templates/ServiceTemplate";
import HeroTemplate from "@/components/templates/HeroTemplate";
import { immigrationServices } from "@/components/templates/ServiceTemplate";

// Update the interface to use Partial<> with async params
interface ServicePageProps {
  params: Partial<{
    serviceName: string;
  }>;
}

export default async function ServicePage({
  params: { serviceName = "" },
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
