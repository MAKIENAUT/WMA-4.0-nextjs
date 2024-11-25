import Image from "next/image";
import { Button } from "../atoms/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type NewsCardProps = {
  category: string;
  data: {
    url: string;
    title: string;
    image: { src: string; position?: string; alt?: string };
    date: string;
    text: string[];
  };
};

export default function NewsCard({ category, data }: NewsCardProps) {
  return (
    <Link
      className="h-fit rounded-xl bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] ring-offset-white transition-all ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wma-gold focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
      href={`/blogs/${category}/${data.url}`}
    >
      <div className="mb-2 aspect-[16/9] rounded-sm px-2 pt-2">
        <Image
          src={data.image.src}
          alt={data.image?.alt}
          width={2000}
          height={2000}
          className={cn(
            "aspect-[16/9] rounded-sm object-cover",
            data.image.position
          )}
        />
      </div>
      <div className="px-4 pb-4">
        <p className="text-sm font-semibold text-wma-teal">{data.date}</p>
        <h1 className="mb-4 text-2xl font-semibold xl:text-3xl">
          {data.title}
        </h1>
        <p className="mb-6 line-clamp-4 text-[#4D4D4D]">
          {data.text.slice(0, 1)}
        </p>
        <Button
          asChild
          variant="link"
          size="none"
          className="gap-1 font-semibold text-wma-teal hover:text-wma-darkTeal"
        >
          <div>
            Read more
            <ChevronRight width={16} />
          </div>
        </Button>
      </div>
    </Link>
  );
}
