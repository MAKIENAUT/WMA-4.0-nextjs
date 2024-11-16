import { ReactNode } from "react";

export default function HeaderGroup({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[1440px] grid-cols-[70%_auto] sm:grid lg:grid-cols-[65%_auto] min-[1440px]:grid-cols-[60%_auto]">
      {children}
    </div>
  );
}
