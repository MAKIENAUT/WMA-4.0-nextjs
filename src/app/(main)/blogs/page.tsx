import NewsCard from "@/components/organisms/news-card";
import {
  Carousel,
  CarouselContent,
  BlogsCarouselDots,
  CarouselItem,
} from "@/components/organisms/carousel";
import blog from "@/data/blogs.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | WMA",
  description: "",
};

export default function page() {
  return (
    <section className="bg-white">
      <div className="mb-2 border-b border-wma-darkTeal">
        <h1 className="mx-auto max-w-[1280px] px-4 py-6 text-4xl font-bold sm:py-10 sm:text-5xl md:px-8 md:py-14 md:text-6xl lg:py-20 lg:text-7xl xl:px-20 xl:text-8xl">
          WMA Blogs
        </h1>
      </div>
      <Carousel>
        <BlogsCarouselDots data={blog.blogs} />
        <CarouselContent>
          {blog.blogs.map((blog, i) => (
            <CarouselItem key={i}>
              {blog.posts.map((post, i) => (
                <NewsCard key={i} post={post} category={blog.category} />
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
