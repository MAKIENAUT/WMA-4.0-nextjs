import NewsCard from "@/components/organisms/news-card";
import {
  NewsCarousel,
  NewsCarouselContent,
  NewsCarouselDots,
  NewsCarouselItem,
} from "@/components/organisms/news-carousel";
import { DUMMY_DATAS } from "./dummy-data";

export default function page() {
  return (
    <section className="bg-white">
      <div className="mb-2 border-b border-wma-darkTeal">
        <h1 className="mx-auto max-w-[1280px] px-4 py-6 text-4xl font-bold sm:py-10 sm:text-5xl md:px-8 md:py-14 md:text-6xl lg:py-20 lg:text-7xl xl:px-20 xl:text-8xl">
          WMA Blogs
        </h1>
      </div>
      <NewsCarousel>
        <NewsCarouselDots data={DUMMY_DATAS} />
        <NewsCarouselContent>
          {DUMMY_DATAS.map((datas, i) => (
            <NewsCarouselItem key={i}>
              {datas.posts.map((data, i) => (
                <NewsCard key={i} data={data} category={datas.category} />
              ))}
            </NewsCarouselItem>
          ))}
        </NewsCarouselContent>
      </NewsCarousel>
    </section>
  );
}
