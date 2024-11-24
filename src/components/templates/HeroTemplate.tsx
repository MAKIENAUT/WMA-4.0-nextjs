import { orelega_one } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import HeaderGroup from "../molecules/header-group";
import HeaderImage from "../molecules/header-image";
import HeaderText from "../molecules/header-text";

export interface HeroConfig {
  title: string;
  highlightedText: string;
  imageSrc: string;
  imageAlt: string;
  titleFont?: string;
}

const heroConfigs: Record<string, HeroConfig> = {
  home: {
    title: "Venture West:",
    highlightedText: "Where Dreams Take Flight",
    imageSrc: "/san-fran-bridge.jpeg",
    imageAlt: "San Francisco bridge",
    titleFont: orelega_one.className,
  },
  "study-and-exchange": {
    title: "Study Abroad:",
    highlightedText: "Unlock Your Potential",
    imageSrc: "/student-services.jpg",
    imageAlt: "University campus scene",
    titleFont: orelega_one.className,
  },
  "family-based": {
    title: "Family Visas:",
    highlightedText: "Hearts Across Borders",
    imageSrc: "/family-services.jpg",
    imageAlt: "Family reunion moment",
    titleFont: orelega_one.className,
  },
  "temporary-employment": {
    title: "Work in the USA:",
    highlightedText: "Your Path to Success",
    imageSrc: "/forklift-services.jpg",
    imageAlt: "Professional office environment",
    titleFont: orelega_one.className,
  },
  "web-development": {
    title: "Orb-Weaver:",
    highlightedText: "Your Digital Silk Road",
    imageSrc: "/web-development.jpg",
    imageAlt: "Modern web development workspace",
    titleFont: orelega_one.className,
  },
};

interface HeroTemplateProps {
  route?: keyof typeof heroConfigs;
  className?: string;
  customConfig?: HeroConfig;
}

export default function HeroTemplate({
  route = "home",
  className = "",
  customConfig,
}: HeroTemplateProps) {
  const config = customConfig || heroConfigs[route] || heroConfigs.home;

  return (
    <header
      className={cn(
        "relative mb-8 overflow-hidden bg-gradient-to-r from-wma-darkTeal to-wma-teal",
        "px-4",
        "h-[200px] sm:h-[250px] md:h-[300px] lg:h-[380px] xl:h-[480px]",
        "sm:mb-10 md:mb-12 lg:mb-16",
        className
      )}
    >
      <HeaderGroup>
        <HeaderText
          title={config.title}
          highlightedText={config.highlightedText}
          fontFamily={config.titleFont}
        />
        <HeaderImage imageSrc={config.imageSrc} alt={config.imageAlt} />
      </HeaderGroup>
    </header>
  );
}
