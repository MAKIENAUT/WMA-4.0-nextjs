import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/templates/ServiceTemplate";
import HeroTemplate from "@/components/templates/HeroTemplate";
import { immigrationServices } from "@/components/templates/ServiceTemplate";

interface ServicePageProps {
  params: Awaited<{
    serviceName: string;
  }>;
}

export default function ServicePage({ params }: ServicePageProps) {
  const { serviceName } = params;

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

export async function generateStaticParams(): Promise<
  { params: { serviceName: string } }[]
> {
  return Object.keys(immigrationServices).map((serviceName) => ({
    params: { serviceName },
  }));
}
