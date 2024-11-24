import React from "react";
import ContentCard from "@/components/atoms/content-card";

interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
}

export default function ProcessStep({
  stepNumber,
  title,
  description,
}: ProcessStepProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-medium text-teal-800">
        {stepNumber}. {title}
      </h3>
      <ContentCard>
        <p>{description}</p>
      </ContentCard>
    </div>
  );
}
