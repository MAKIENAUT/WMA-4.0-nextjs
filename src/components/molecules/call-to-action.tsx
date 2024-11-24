import React from "react";
import { Button } from "@/components/atoms/ui/button";

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export default function CallToAction({
  title,
  description,
  buttonText,
  onButtonClick,
}: CallToActionProps) {
  return (
    <footer className="mt-12 border-t border-gray-200 pt-8">
      <div className="flex flex-col items-center space-y-6">
        <div className="text-center">
          <h4 className="text-xl font-semibold text-teal-800">{title}</h4>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
        <Button variant="service" onClick={onButtonClick} className="w-2/5">
          {buttonText}
        </Button>
      </div>
    </footer>
  );
}
