import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Outkast Studios — Creative Growth Insights",
  description:
    "Practical articles on website development, social media management, Meta Ads, and AI advertising for businesses in Haridwar, Rishikesh, and across India.",
  alternates: {
    canonical: "https://outkast-studio.vercel.app/blog",
  },
};

const articles = [
  {
    slug: "how-much-does-a-website-cost-in-haridwar",
    title: "How Much Does a Website Cost in Haridwar? (2024 Guide)",
    description:
      "A practical guide to website development costs in Haridwar. Understand pricing factors, what to expect, and how to choose the right agency for your business.",
    readTime: 7,
    category: "Website Development",
  },
  {
    slug: "how-to-choose-social-media-agency-rishikesh",
    title: "How to Choose a Social Media Management Agency in Rishikesh",
    description:
      "What to look for when hiring a social media agency in Rishikesh. Questions to ask, red flags to avoid, and how to find an agency that understands your wellness or tourism brand.",
    readTime: 6,
    category: "Social Media",
  },
  {
    slug: "how-much-spend-instagram-marketing-small-business",
    title: "How Much Should a Small Business Spend on Instagram Marketing?",
    description:
      "Practical guidance on Instagram marketing budgets for small businesses in India. Organic vs paid strategy, what to prioritise, and how to get value from your spend.",
    readTime: 6,
    category: "Instagram Marketing",
  },
  {
    slug: "how-local-businesses-use-ai-video-advertising",
    title: "How Local Businesses Can Use AI Video Advertising",
    description:
      "AI video advertising explained for small and local businesses in India. What AI UGC ads are, how they work, when to use them, and what results to expect.",
    readTime: 7,
    category: "AI Advertising",
  },
  {
    slug: "what-should-social-media-management-package-include",
    title: "What Should a Social Media Management Package Include?",
    description:
      "A complete breakdown of what a good social media management package should include — content calendar, Reels production, account management, analytics and reporting.",
    readTime: 6,
    category: "Social Media",
  },
  {
    slug: "how-to-generate-leads-meta-ads",
    title: "How to Generate Leads Through Meta Ads for a Small Business",
    description:
      "A practical guide to using Facebook and Instagram ads (Meta Ads) for lead generation. Campaign structure, targeting, creative, and what to expect from your first campaigns.",
    readTime: 7,
    category: "Meta Ads",
  },
  {
    slug: "is-professional-website-necessary-small-business",
    title: "Is a Professional Website Necessary for a Small Business in India?",
    description:
      "Do small businesses in India need a professional website if they already use Instagram or WhatsApp? A realistic look at when a website is essential and when it isn't.",
    readTime: 6,
    category: "Website Development",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://outkast-studio.vercel.app/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://outkast-studio.vercel.app/blog",
    },
  ],
};

export default function BlogPage() {
  return (
    <main className="bg-[#111111] text-[#F8F3EF] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="container mx-auto px-6 pt-32 pb-4 text-sm text-[#F8F3EF]/60">
        <Link href="/" className="hover:text-[#D03412] transition-colors">
          Home
        </Link>{" "}
        /{" "}
        <span className="text-[#F8F3EF]">Blog</span>
      </nav>

      {/* Header */}
      <header className="container mx-auto px-6 pb-16 max-w-4xl">
        <p className="text-[#D03412] text-sm font-bold uppercase tracking-widest mb-4 font-sans">
          Creative Growth Insights
        </p>
        <h1 className="font-editorial text-5xl md:text-6xl font-bold mb-6 leading-tight">
          The Outkast Blog
        </h1>
        <p className="text-[#F8F3EF]/70 text-lg max-w-2xl">
          Practical articles on websites, social media, digital advertising, and
          brand building — written for businesses across Uttarakhand and India.
        </p>
      </header>

      {/* Article Grid */}
      <section className="container mx-auto px-6 pb-24 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block bg-[#8D161D]/30 border border-[#7C1117] rounded-sm p-6 hover:bg-[#8D161D]/60 hover:border-[#D03412] transition-all duration-300"
            >
              <span className="inline-block text-[#D03412] text-xs font-bold uppercase tracking-widest font-sans mb-3">
                {article.category}
              </span>
              <h2 className="font-editorial text-xl font-bold text-[#F8F3EF] mb-3 leading-snug group-hover:text-white transition-colors">
                {article.title}
              </h2>
              <p className="text-[#F8F3EF]/60 text-sm leading-relaxed mb-4">
                {article.description}
              </p>
              <span className="text-xs text-[#F8F3EF]/40 font-sans">
                {article.readTime} min read →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#7C1117] py-16 px-6 text-center">
        <h2 className="font-editorial text-3xl font-bold mb-4 text-[#F8F3EF]">
          Ready to Grow Your Brand?
        </h2>
        <p className="text-[#F8F3EF]/80 mb-8">
          Outkast Studios works with businesses across Uttarakhand and India.
        </p>
        <a
          href="/#contact"
          className="bg-[#D03412] text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#B02B10] transition inline-block"
        >
          Start Your Project
        </a>
      </section>
    </main>
  );
}
