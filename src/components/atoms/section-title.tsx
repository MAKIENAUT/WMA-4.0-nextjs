import React from "react";
import { orelega_one } from "@/lib/fonts";

interface SectionTitleProps {
  prefix?: string;
  title: string;
  className?: string;
}

export default function SectionTitle({
  prefix,
  title,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-8 ${className}`}>
      {prefix && (
        <h1 className={`text-4xl font-bold ${orelega_one.className}`}>
          {prefix}
        </h1>
      )}
      <h2
        className={`text-4xl font-bold text-teal-800 ${orelega_one.className}`}
      >
        {title}
      </h2>
    </div>
  );
}
