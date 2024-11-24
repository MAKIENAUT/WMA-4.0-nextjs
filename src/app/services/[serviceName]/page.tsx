import { Metadata } from "next";
import HeroTemplate, { heroConfigs } from "@/components/templates/HeroTemplate";
import ServiceTemplate, {
  immigrationServices,
} from "@/components/templates/ServiceTemplate";
import { notFound } from "next/navigation";

interface Params {
  serviceName: string;
}

type SearchParams = { [key: string]: string | string[] | undefined };

// Adjusting the Params and SearchParams to be Promises
type Props = {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = immigrationServices[resolvedParams.serviceName];

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
  if (!immigrationServices[serviceName]) {
    notFound();
  }

  // Type guard for valid hero route
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
