// app/[serviceName]/page.tsx
import { Metadata } from "next";
import HeroTemplate from "@/components/templates/HeroTemplate";
import ServiceTemplate, {
  immigrationServices,
} from "@/components/templates/ServiceTemplate";
import { notFound } from "next/navigation";

type Props = {
  params: {
    serviceName: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = immigrationServices[params.serviceName];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServicePage({ params }: Props) {
  const { serviceName } = params;

  // Check if service exists
  if (!immigrationServices[serviceName]) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroTemplate route={serviceName} />

      {/* Service Details Section */}
      <div className="container mx-auto px-4 py-8">
        <ServiceTemplate serviceName={serviceName} />
      </div>
    </main>
  );
}

// Generate static paths for all known services
export async function generateStaticParams() {
  return Object.keys(immigrationServices).map((service) => ({
    serviceName: service,
  }));
}
