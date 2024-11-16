import { Button } from "@/components/atoms/ui/button";
import ServicesDescription from "../atoms/services-description";
import ServicesHeading from "../atoms/services-heading";
import ServicesImage from "../atoms/services-image";
import { dm_sans } from "@/lib/fonts";

type ServiceCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  buttonLabel: string;
};

export default function ServiceCard({
  title,
  description,
  imageUrl,
  buttonLabel,
}: ServiceCardProps) {
  return (
    <div className="mb-8 flex flex-col overflow-hidden">
      <ServicesHeading
        text={title}
        level="h2"
        className="mb-2 text-xl text-wma-darkTeal md:text-2xl"
      />
      <div className="flex flex-col rounded-lg bg-wma-darkTeal p-4 md:flex-row">
        <div className="mb-4 w-full md:mb-0 md:mr-4 md:w-1/2">
          <ServicesImage src={imageUrl} alt={title} className="h-full w-full" />
        </div>
        <div className="flex w-full flex-col justify-between p-4 md:w-1/2">
          <ServicesDescription
            text={description}
            className="mb-4 text-sm text-white md:text-base"
          />
          <Button
            variant="default"
            className={`self-start ${dm_sans.className}`}
            onClick={() => {}}
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
