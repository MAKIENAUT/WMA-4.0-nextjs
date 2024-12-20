import { Metadata } from "next";
import HeroTemplate from "@/components/templates/hero-template";
import ServiceTemplate from "@/components/templates/ServiceTemplate";
import { notFound } from "next/navigation";
import heroConfigs from "@/data/hero-config.json";
import individualServices from "@/data/individual-service.json";

// Adjusting the Params and SearchParams to be Promises
type Props = {
  params: Promise<{
    serviceName:
      | "study-and-exchange"
      | "web-development"
      | "family-based"
      | "temporary-employment";
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service =
    individualServices.individual_services[resolvedParams.serviceName];

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
  const resolvedParams = await params;
  const { serviceName } = resolvedParams;

  // Check if service exists
  if (!individualServices.individual_services[serviceName]) {
    notFound();
  }

  // Type guard for valid hero route
  const isValidHeroRoute = (
    route: string
  ): route is keyof typeof heroConfigs.hero_config => {
    return route in heroConfigs.hero_config;
  };

  // Set the hero route, defaulting to 'home' if not found
  const heroRoute = isValidHeroRoute(serviceName) ? serviceName : "home";

  return (
    <>
      <HeroTemplate route={heroRoute} />
      <ServiceTemplate serviceName={serviceName} />
    </>
  );
}

// Generate static paths for all known services
export async function generateStaticParams() {
  return Object.keys(individualServices.individual_services).map((service) => ({
    serviceName: service,
  }));
}
