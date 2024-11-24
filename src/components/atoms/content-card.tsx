import React from "react";

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentCard({
  children,
  className = "",
}: ContentCardProps) {
  return (
    <div className={`rounded-lg bg-teal-800 p-4 text-white ${className}`}>
      {children}
    </div>
  );
}
