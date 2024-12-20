import { ServiceProps } from "@/types/service-type";
import ServiceSection from "../organisms/service-section";
import { services } from "@/data/service";

export default function ServiceOverviewTemplate({
  type,
}: {
  type: ServiceProps;
}) {
  return <ServiceSection services={services} type={type} />;
}
