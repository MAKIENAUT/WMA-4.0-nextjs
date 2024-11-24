import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/templates/ServiceTemplate";
import HeroTemplate from "@/components/templates/HeroTemplate";
import { immigrationServices } from "@/components/templates/ServiceTemplate";
import { Metadata } from "next";

// Define the params type
type ServiceParams = {
  serviceName: string;
};

// Page component with correct Next.js 13+ typing
export default async function ServicePage({
  params,
}: {
  params: ServiceParams;
}) {
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

// Metadata generation with correct typing
export async function generateMetadata({
  params,
}: {
  params: ServiceParams;
}): Promise<Metadata> {
  return {
    title: `${params.serviceName} - Your Site Name`,
    description: `Learn more about our ${params.serviceName} services`,
  };
}
