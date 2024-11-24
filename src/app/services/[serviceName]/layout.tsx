import React from "react";

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mt-[56px] sm:mt-[72px] md:mt-[80px]">{children}</main>
  );
}
