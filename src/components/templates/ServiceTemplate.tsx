// ServiceTemplate.tsx
import React from "react";
import ServiceProcess from "../organisms/service-details";
import individualServices from "@/data/individual-service.json";

interface ServiceTemplateProps {
  serviceName:
    | "study-and-exchange"
    | "web-development"
    | "family-based"
    | "temporary-employment";
}

export default function ServiceTemplate({ serviceName }: ServiceTemplateProps) {
  const serviceData = individualServices.individual_services[serviceName];

  if (!serviceData) {
    return null;
  }

  return <ServiceProcess serviceData={serviceData} serviceName={serviceName} />;
}
