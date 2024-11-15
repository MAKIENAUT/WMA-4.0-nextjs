import { orelega_one } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function HeaderText() {
  return (
    <div className="z-10 bg-gradient-to-r from-wma-darkTeal to-wma-teal px-2 py-16 sm:px-8 sm:[clip-path:polygon(0_0,100%_0,86%_100%,0%_100%)] min-[876px]:py-20 min-[1170px]:py-28 xl:px-20">
      <h1
        className={cn(
          orelega_one.className,
          "text-5xl text-white sm:max-w-[330px] md:max-w-[420px] md:text-6xl min-[876px]:max-w-[500px] min-[876px]:text-7xl min-[1170px]:max-w-[640px] min-[1170px]:text-[5.5rem]"
        )}
      >
        Venture West:{" "}
        <span className="text-wma-gold">Where Dreams Take Flight</span>
      </h1>
    </div>
  );
}
