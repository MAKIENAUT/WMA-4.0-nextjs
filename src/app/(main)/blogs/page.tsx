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
    category: "news",
    posts: [
      {
        url: "fy-2026-h1b-registration",
        title:
          "USCIS Announces FY 2026 H-1B Registration Details: Key Changes and Important Dates",
        image: {
          src: "/h1b.jpg",
          position: "object-[center_center]",
          alt: "H-1B visa registration",
        },
        date: "February 5, 2025",
        text: [
          "USCIS has announced the opening of the FY 2026 H-1B cap initial registration period, running from March 7 to March 24, 2025. This year brings several important updates and enhancements to the registration process that employers and immigration practitioners should know about.",
          "Key updates include a $215 registration fee per beneficiary and an increased daily credit card transaction limit from $24,999.99 to $99,999.99. The selection process will continue to use the beneficiary-centric approach introduced in FY 2025, where registrations are selected by unique beneficiary rather than by registration.",
          "USCIS has implemented several organizational account enhancements for FY 2026, including new features allowing paralegals to work with multiple legal representatives, simplified processes for adding paralegals to company clients, auto-population of certain Form I-129 fields, and new bulk upload capabilities for H-1B beneficiary data.",
          "First-time registrants can create their accounts at any time before the registration period begins. While representatives can add clients to their accounts now, the actual beneficiary information submission and fee payment must wait until the March 7 opening date. For transactions exceeding $99,999.99, employers can use Automated Clearing House (ACH) payments.",
          "At West Migration Agency, we understand the complexity of the H-1B registration process and are ready to assist employers with all aspects of their H-1B petitions. For more information or assistance with your H-1B registrations, please contact us at admin@westmigrationagency.us.",
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
          "USCIS has announced important updates to two key immigration forms: Form G-1055 (Fee Schedule) - New edition released January 6, 2025, and Form G-325A (Biographic Information) - New edition from October 24, 2024.",
          "These updates directly impact anyone planning to file new immigration applications, submit fee waiver requests, apply for travel documents or permanent residence, or complete biographic information forms for deferred action. Most importantly, starting February 5, 2025, USCIS will only accept the new edition of Form G-325A (10/24/24 version).",
          "At West Migration Agency, our experienced team is ready to guide you through these changes. We offer expert review of your forms before submission, verification of correct fee payments, deadline management to avoid rejections, and complete application preparation services.",
          "We encourage you to take action now by contacting us for a consultation, getting your applications reviewed, and ensuring compliance with new requirements. At West Migration Agency, we turn immigration updates into immigration success stories.",
          "For more information or to schedule a consultation, please contact us at admin@westmigrationagency.us. Our team is ready to help you navigate these important changes and ensure your immigration journey stays on track.",
        ],
      },
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
          "The Institute of International Education (IIE) released its annual Open Doors Report showing a record high 1.1 million international students studied in the United States during the 2023-2024 academic year, marking a 7 percent increase from the previous year. These students contributed over $50 billion to the U.S. economy, supporting both academic campuses and their surrounding communities.",
          "In a notable shift, India became the top country of origin for the first time since 2009, with a 35 percent increase in Indian students. While China saw a 4 percent decline, it maintains its position as the second-largest source of international students, particularly at the undergraduate level. The report highlighted significant growth from various regions, with eight of the top 25 countries, including Bangladesh, Colombia, Ghana, and Nepal, achieving record-high numbers. Sub-Saharan Africa demonstrated remarkable growth with a 13 percent increase.",
          "The report revealed several key trends in international education. Graduate student enrollments increased by 8 percent, while undergraduate enrollment showed a slight 1 percent decline. STEM fields continue to dominate, with 56 percent of international students enrolled in science, technology, engineering, and mathematics programs. Computer Science, Engineering, and Data Analytics remain the most popular choices among international students.",
          "Geographic distribution of international students shows concentration in specific states, with California, New York, and Texas hosting the largest international student populations. These concentrations significantly boost local economies through various forms of spending and economic activity. The comprehensive report is based on a survey of approximately 3,000 accredited, Student and Exchange Visitor Program-certified post-secondary institutions in the United States.",
          "West Migration Agency recognizes the significance of this growth in international education and its impact on the U.S. education sector. The increasing diversity in student populations presents both opportunities and challenges for educational institutions. Our agency works to support institutions in managing these demographic shifts and ensuring successful integration of international students.",
          "For educational institutions seeking guidance on international student recruitment and support services, or for more information about our specialized consulting services, please contact us at admin@westmigrationagency.us. Our team of experts is ready to assist in developing strategies that align with these emerging trends in international education.",
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
          "The teacher shortage in the United States has been a significant concern, with various factors contributing to the situation. The U.S. Department of Education is actively working to address this issue through a comprehensive policy agenda aimed at recruiting, preparing, retaining, and supporting a diverse and well-prepared educator workforce.",
          'This initiative, "Raise the Bar: Lead the World," involves collaboration with states, tribes, local educational agencies, and educator preparation programs, including minority-serving institutions, to eliminate educator shortages and diversify the education profession​​. The shortage has been exacerbated by the COVID-19 pandemic, with factors such as low wages, high costs of educator preparation, poor working conditions, and inequitable funding practices contributing to a decline in new educators entering the field and high rates of attrition. Particularly impacted areas include special education, STEM education, career and technical education, and bilingual education programs​​. To combat this, the Department of Education has outlined five key policy levers: increasing compensation, improving working conditions, expanding access to quality and affordable educator preparation, promoting career advancement opportunities, providing high-quality new teacher induction and ongoing professional learning, and increasing educator diversity​​.',
          "The teacher shortage is not only a policy issue but also a matter of growing concern among educators themselves. According to the National Center for Education Statistics, 42% of all school principals in the U.S. expressed heightened concern about educators leaving the profession in the previous academic year​​. Moreover, 45% of U.S. public schools had at least one teacher vacancy by the end of October 2022​​. Factors contributing to these shortages include low salaries, tough working conditions, higher retirement rates, and a declining interest in teaching as a profession​​.",
          'Statistics from "We Are Teachers" highlight the severity of the problem: 44% of teachers reported burnout, 55% indicated they were ready to leave the profession earlier than planned, and 35% stated they were likely to quit within the next two years​​. Furthermore, 78% of educators see low pay as a serious issue, and 84% spend their own money on basic classroom supplies​​. The lack of respect from the public, as perceived by 45% of teachers, adds to the challenges​​. Addressing this crisis requires a multifaceted approach, including competitive compensation, improved working conditions, simplified and enhanced teacher preparation programs, reduced administrative burden, and effective mentorship and support​​. These measures aim not only to fill the current vacancies but also to create a more sustainable and appealing teaching profession for future generations.',
          "In addressing the teacher shortage crisis in the United States, West Migration Agency plays a pivotal role. We work directly with schools that are in urgent need of qualified educators. For those interested in pursuing teaching opportunities in these schools, we provide detailed information about eligibility and qualification requirements on our website. Understanding the challenges faced by schools and educators, our goal is to facilitate the placement of capable and motivated teachers in environments where they are most needed.",
          "If you have any questions or concerns regarding the process, eligibility, or other related matters, please do not hesitate to reach out to us. We are committed to providing support and guidance throughout your journey. For more personalized assistance or to start the application process, contact us at admin@westmigrationagency.us. Our team is dedicated to helping alleviate the teacher shortage by connecting skilled educators with schools where they can make a significant impact.",
        ],
      },
    ],
  },
  {
    category: "posts",
    posts: [
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
          "The teacher shortage in the United States has been a significant concern, with various factors contributing to the situation. The U.S. Department of Education is actively working to address this issue through a comprehensive policy agenda aimed at recruiting, preparing, retaining, and supporting a diverse and well-prepared educator workforce.",
          'This initiative, "Raise the Bar: Lead the World," involves collaboration with states, tribes, local educational agencies, and educator preparation programs, including minority-serving institutions, to eliminate educator shortages and diversify the education profession​​. The shortage has been exacerbated by the COVID-19 pandemic, with factors such as low wages, high costs of educator preparation, poor working conditions, and inequitable funding practices contributing to a decline in new educators entering the field and high rates of attrition. Particularly impacted areas include special education, STEM education, career and technical education, and bilingual education programs​​. To combat this, the Department of Education has outlined five key policy levers: increasing compensation, improving working conditions, expanding access to quality and affordable educator preparation, promoting career advancement opportunities, providing high-quality new teacher induction and ongoing professional learning, and increasing educator diversity​​.',
          "The teacher shortage is not only a policy issue but also a matter of growing concern among educators themselves. According to the National Center for Education Statistics, 42% of all school principals in the U.S. expressed heightened concern about educators leaving the profession in the previous academic year​​. Moreover, 45% of U.S. public schools had at least one teacher vacancy by the end of October 2022​​. Factors contributing to these shortages include low salaries, tough working conditions, higher retirement rates, and a declining interest in teaching as a profession​​.",
          'Statistics from "We Are Teachers" highlight the severity of the problem: 44% of teachers reported burnout, 55% indicated they were ready to leave the profession earlier than planned, and 35% stated they were likely to quit within the next two years​​. Furthermore, 78% of educators see low pay as a serious issue, and 84% spend their own money on basic classroom supplies​​. The lack of respect from the public, as perceived by 45% of teachers, adds to the challenges​​. Addressing this crisis requires a multifaceted approach, including competitive compensation, improved working conditions, simplified and enhanced teacher preparation programs, reduced administrative burden, and effective mentorship and support​​. These measures aim not only to fill the current vacancies but also to create a more sustainable and appealing teaching profession for future generations.',
          "In addressing the teacher shortage crisis in the United States, West Migration Agency plays a pivotal role. We work directly with schools that are in urgent need of qualified educators. For those interested in pursuing teaching opportunities in these schools, we provide detailed information about eligibility and qualification requirements on our website. Understanding the challenges faced by schools and educators, our goal is to facilitate the placement of capable and motivated teachers in environments where they are most needed.",
          "If you have any questions or concerns regarding the process, eligibility, or other related matters, please do not hesitate to reach out to us. We are committed to providing support and guidance throughout your journey. For more personalized assistance or to start the application process, contact us at admin@westmigrationagency.us. Our team is dedicated to helping alleviate the teacher shortage by connecting skilled educators with schools where they can make a significant impact.",
        ],
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "Blogs | WMA",
  description: "",
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

function NewsCard({ category, post }: NewsCardProps) {
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
        <p className="mb-6 line-clamp-4 text-[#4D4D4D]">
          {post.text.slice(0, 1)}
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
