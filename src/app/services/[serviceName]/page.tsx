// app/services/[serviceName]/page.tsx
import { Metadata } from "next";
import HeroTemplate, { heroConfigs } from "@/components/templates/HeroTemplate";
import ServiceTemplate, {
  immigrationServices,
} from "@/components/templates/ServiceTemplate";
import { notFound } from "next/navigation";

interface Props {
  params: {
    serviceName: string;
  };
}

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

export default async function ServicePage({ params }: Props) {
  const { serviceName } = params;

  // Check if service exists
  if (!immigrationServices[serviceName]) {
    notFound();
  }

  // Fixed type guard with correct typing
  // Fixed type guard with correct typing
  const isValidHeroRoute = (
    route: string
  ): route is keyof typeof heroConfigs => {
    return route in heroConfigs;
  };

  // Set the hero route, defaulting to 'home' if not found
  const heroRoute = isValidHeroRoute(serviceName) ? serviceName : "home";

  return (
    <main className="min-h-screen">
      <HeroTemplate route={heroRoute} />

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
