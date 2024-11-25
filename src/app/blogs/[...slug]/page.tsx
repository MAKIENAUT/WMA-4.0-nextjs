import Image from "next/image";
import { DUMMY_DATAS } from "../dummy-data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const slugs = (await params).slug;
  const data = DUMMY_DATAS.find(
    (datas) => datas.category === slugs[0]
  )?.posts.find((post) => post.url === slugs[1]);

  return (
    <main className="mt-[56px] bg-white sm:mt-[72px] md:mt-[80px]">
      <section className="mx-auto mb-32 max-w-[768px] px-4 pt-4 sm:px-8 lg:px-0">
        <div className="relative flex flex-col gap-4 lg:gap-0">
          <div className="inline-flex size-fit lg:sticky lg:top-[calc(80px+1rem)]">
            <Button
              asChild
              variant="link"
              size="none"
              className="w-fit gap-0 text-sm text-wma-darkTeal lg:absolute lg:right-[calc(100%+2rem)] xl:right-[calc(100%+4rem)]"
            >
              <Link href="/blogs">
                <ChevronLeft /> Go back
              </Link>
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src={data?.image.src}
              width={2000}
              height={2000}
              className={cn(
                "aspect-[16/9] rounded-sm object-cover",
                data?.image.position
              )}
              alt={data?.image.alt}
            />
            <div className="inline-flex flex-col gap-4 lg:gap-8">
              <div className="inline-flex flex-col gap-2">
                <p className="text-sm font-semibold text-wma-teal">
                  {data?.date}
                </p>
                <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
                  {data?.title}
                </h1>
              </div>
              <div className="flex flex-col gap-4">
                {data?.text.map((text, i) => <p key={i}>{text}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
