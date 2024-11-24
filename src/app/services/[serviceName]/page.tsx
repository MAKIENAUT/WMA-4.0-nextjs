import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/templates/ServiceTemplate";
import HeroTemplate from "@/components/templates/HeroTemplate";
import { immigrationServices } from "@/components/templates/ServiceTemplate";

// Define the params type
type ServiceParams = {
  serviceName: string;
};

// Use the proper Next.js page props type
interface ServicePageProps {
  params: ServiceParams;
  searchParams: { [key: string]: string | string[] | undefined };
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

// Optionally, you can add generateMetadata for better SEO
export async function generateMetadata({ params }: { params: ServiceParams }) {
  return {
    title: `${params.serviceName} - Your Site Name`,
    description: `Learn more about our ${params.serviceName} services`,
  };
}
