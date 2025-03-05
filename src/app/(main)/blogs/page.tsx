import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms/ui/button";
import {
  Carousel,
  CarouselContent,
  BlogsCarouselDots,
  CarouselItem,
} from "@/components/organisms/carousel";
import { Metadata } from "next";

export const blogs = [
  {
    category: "all",
    posts: [], // Will be populated with all posts
  },
  {
    category: "updates",
    posts: [
      {
        url: "navigating-i-485-supplement-j",
        title:
          "Navigating I-485 Supplement J: What Every Immigrant Worker Needs to Know",
        image: {
          src: "/i-485.png",
          position: "object-[center_center]",
          alt: "USCIS immigration forms",
        },
        date: "February 05, 2025",
        text: [
          "<h3>Critical Update: New USCIS Form Edition</h3>",
          "<p>As of <strong>March 3, 2025</strong>, USCIS is strictly enforcing the <strong>01/20/25 edition</strong> of Form I-485 Supplement J. Submitting an outdated form could derail your entire immigration process.</p>",
        ],
      },
      {
        url: "uscis-form-editions-2025",
        title: "USCIS New Form Editions – Form G-325A & Form I-134",
        image: {
          src: "/uscis-form-editions-2025.png",
          position: "object-[center_center]",
          alt: "USCIS forms",
        },
        date: "February 05, 2025",
        text: [
          "<h3>The <strong>USCIS</strong> has released updated editions of two important forms, effective <strong>March 3, 2025</strong>:</h3>",
          "<ul><li><strong>Form G-325A (Biographic Information)</strong> – Required for certain deferred action requests, including military and non-military cases.</li><li><strong>Form I-134 (Declaration of Financial Support)</strong> – Used to sponsor a beneficiary financially during their temporary stay in the U.S.</li></ul>",
        ],
      },
      {
        url: "fy-2026-h1b-registration",
        title: "USCIS Announces FY 2026 H-1B Registration Details",
        image: {
          src: "/h1b.jpg",
          position: "object-[center_center]",
          alt: "H-1B visa registration",
        },
        date: "February 5, 2025",
        text: [
          "<h3>USCIS has announced the opening of the FY 2026 H-1B cap initial registration period, running from March 7 to March 24, 2025.</h3>",
          "<p>This year brings several important updates and enhancements to the registration process that employers and immigration practitioners should know about.</p>",
        ],
      },
      {
        url: "uscis-waives-COVID-19-vaccination-requirement-for-adjustment-of-status-applicants",
        title: "USCIS Waives COVID-19 Vaccination Requirement",
        image: {
          src: "/uscis-covid-19-vaccination.png",
          position: "object-center",
          alt: "USCIS news update",
        },
        date: "January 26, 2025",
        text: [
          "<h3>As your trusted immigration partner, West Migration Agency wants to keep you informed about the latest USCIS changes:</h3>",
          "<p>Effective Jan. 22, 2025, USCIS is waiving any and all requirements that applicants for adjustment of status to that of a lawful permanent resident present documentation on their Form I-693, Report of Immigration Medical Examination and Vaccination Record, that they received the COVID-19 vaccination.</p>",
        ],
      },
      {
        url: "uscis-form-updates-2025",
        title: "USCIS Form Updates 2025: What You Need to Know",
        image: {
          src: "/forms.png",
          position: "object-[center_center]",
          alt: "USCIS forms",
        },
        date: "January 8, 2025",
        text: [
          "<h3>USCIS has announced important updates to two key immigration forms:</h3>",
          "<p>Form G-1055 (Fee Schedule) - New edition released January 6, 2025, and Form G-325A (Biographic Information) - New edition from October 24, 2024.</p>",
        ],
      },
    ],
  },
  {
    category: "news",
    posts: [
      // Will include some USCIS updates as well
      {
        url: "fy-2026-h1b-registration-full",
        title: "Full Details: USCIS FY 2026 H-1B Registration Process Unveiled",
        image: {
          src: "/h1b.jpg",
          position: "object-[center_center]",
          alt: "H-1B visa registration",
        },
        date: "February 5, 2025",
        text: [
          "<h3>USCIS has announced the comprehensive details for the FY 2026 H-1B cap initial registration period.</h3>",
          "<p>Key updates include a $215 registration fee per beneficiary and an increased daily credit card transaction limit from $24,999.99 to $99,999.99.</p>",
        ],
      },
    ],
  },
  {
    category: "posts",
    posts: [
      {
        url: "record-high-international-students",
        title:
          "Open Doors Report: A Record High Number of International Students",
        image: {
          src: "/students.jpg",
          position: "object-[center_center]",
          alt: "international students",
        },
        date: "December 15, 2023",
        text: [
          "<h3>The Institute of International Education (IIE) released its annual Open Doors Report showing a record high 1.1 million international students studied in the United States during the 2023-2024 academic year, marking a 7 percent increase from the previous year.</h3>",
          "<p>These students contributed over $50 billion to the U.S. economy, supporting both academic campuses and their surrounding communities.</p>",
        ],
      },
      {
        url: "addressing-us-teacher-shortage",
        title: "Addressing US Teacher Shortage: A Call to Action",
        image: {
          src: "/teacher.jpg",
          position: "object-[center_-3.5rem]",
          alt: "teacher",
        },
        date: "November 11, 2023",
        text: [
          "<h3>The teacher shortage in the United States has been a significant concern, with various factors contributing to the situation.</h3>",
          "<p>The U.S. Department of Education is actively working to address this issue through a comprehensive policy agenda aimed at recruiting, preparing, retaining, and supporting a diverse and well-prepared educator workforce.</p>",
        ],
      },
    ],
  },
];

// Prepare the 'all' category
blogs[0].posts = [
  ...blogs[1].posts, // Add updates
  ...blogs[2].posts, // Add news
  ...blogs[3].posts, // Add posts
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const metadata: Metadata = {
  title: "Blogs | WMA",
  description:
    "West Migration Agency Blog - Immigration Updates, News, and Insights",
};

type NewsCardProps = {
  category: string;
  post: {
    url: string;
    title: string;
    image: { src: string; position?: string; alt: string };
    date: string;
    text: string[];
  };
};

const stripHtmlTags = (html: string) => {
  return html.replace(/<[^>]*>?/gm, "");
};

function NewsCard({ category, post }: NewsCardProps) {
  const cleanText = stripHtmlTags(post.text[0]);

  return (
    <Link
      className="h-fit rounded-xl bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] ring-offset-white transition-all ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wma-gold focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
      href={`/blogs/${category}/${post.url}`}
    >
      <div className="mb-2 px-2 pt-2">
        <div className="relative aspect-[16/9]">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            className={cn("rounded-sm object-cover", post.image.position)}
          />
        </div>
      </div>
      <div className="px-4 pb-4">
        <p className="text-sm font-semibold text-wma-teal">{post.date}</p>
        <h1 className="mb-4 text-2xl font-semibold xl:text-3xl">
          {post.title}
        </h1>
        <p className="mb-6 line-clamp-4 text-[#4D4D4D]">{cleanText}</p>
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

export default function BlogsPage() {
  return (
    <section className="bg-white">
      <div className="mb-2 border-b border-wma-darkTeal">
        <h1 className="mx-auto max-w-[1280px] px-4 py-6 text-4xl font-bold sm:py-10 sm:text-5xl md:px-8 md:py-14 md:text-6xl lg:py-20 lg:text-7xl xl:px-20 xl:text-8xl">
          WMA Blogs
        </h1>
      </div>
      <Carousel>
        <BlogsCarouselDots items={blogs} />
        <CarouselContent>
          {blogs.map((blog, i) => (
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
