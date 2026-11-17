import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Should a Small Business Spend on Instagram Marketing?",
  description:
    "Practical guidance on Instagram marketing budgets for small businesses in India. Organic vs paid strategy, what to prioritise, and how to get value from your spend.",
  alternates: {
    canonical:
      "https://outkast-studio.vercel.app/blog/how-much-spend-instagram-marketing-small-business",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How Much Should a Small Business Spend on Instagram Marketing?",
  description:
    "Practical guidance on Instagram marketing budgets for small businesses in India. Organic vs paid strategy, what to prioritise, and how to get value from your spend.",
  datePublished: "2024-11-01",
  author: {
    "@type": "Organization",
    name: "Outkast Studios",
    url: "https://outkast-studio.vercel.app",
  },
  publisher: {
    "@type": "Organization",
    name: "Outkast Studios",
    url: "https://outkast-studio.vercel.app",
  },
  url: "https://outkast-studio.vercel.app/blog/how-much-spend-instagram-marketing-small-business",
};

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
    {
      "@type": "ListItem",
      position: 3,
      name: "How Much Should a Small Business Spend on Instagram Marketing?",
      item: "https://outkast-studio.vercel.app/blog/how-much-spend-instagram-marketing-small-business",
    },
  ],
};

export default function ArticlePage() {
  return (
    <main className="bg-[#111111] text-[#F8F3EF] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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
        <Link href="/blog" className="hover:text-[#D03412] transition-colors">
          Blog
        </Link>{" "}
        / Instagram Marketing Budget for Small Business
      </nav>

      {/* Article Header */}
      <header className="container mx-auto px-6 pb-12 max-w-3xl">
        <h1 className="font-editorial text-4xl md:text-5xl font-bold mb-6 leading-tight">
          How Much Should a Small Business Spend on Instagram Marketing?
        </h1>
        <p className="text-[#F8F3EF]/70 text-lg">
          Practical guidance on Instagram marketing budgets for small businesses
          in India. Organic vs paid strategy, what to prioritise, and how to
          get value from your spend.
        </p>
        <p className="text-sm text-[#D03412] mt-4 font-sans">
          By Outkast Studios · 6 min read
        </p>
      </header>

      {/* Article Body */}
      <article className="container mx-auto px-6 max-w-3xl pb-24 prose prose-invert prose-headings:font-editorial prose-a:text-[#D03412] prose-a:no-underline hover:prose-a:underline">
        <p className="text-lg leading-relaxed text-[#F8F3EF]/90">
          For most small businesses in India, allocating 5–15% of monthly
          revenue to marketing is a reasonable starting point — but Instagram
          specifically does not always require a large budget to be effective.
          The bigger question is whether your spend goes toward building an
          audience organically, running paid ads, or a combination of both.
        </p>

        <p className="leading-relaxed text-[#F8F3EF]/80">
          The mistake most small business owners make is running Instagram ads
          before they have a credible profile. If someone clicks your ad and
          lands on a feed with three posts from 2022, they will not convert. The
          foundation — a consistent, well-branded presence — matters before the
          spend.
        </p>

        <h2>Organic Instagram vs Paid Instagram — What&#39;s the Difference in Spend?</h2>

        <h3>Organic Instagram management</h3>
        <p className="text-[#F8F3EF]/80 leading-relaxed">
          Organic refers to content you post on your profile — Reels, carousels,
          Stories, and static posts — without paying to boost them. The cost here
          is not ad spend; it is the time and skill of creating good content, or
          the monthly fee of a social media management agency that does it for you.
        </p>
        <p className="text-[#F8F3EF]/80 leading-relaxed">
          Organic growth is slower but builds a genuine audience. If your content
          is genuinely useful or visually compelling, it reaches people without
          paid distribution through shares, saves, and the Reels algorithm.
        </p>

        <h3>Paid Instagram marketing (Meta Ads)</h3>
        <p className="text-[#F8F3EF]/80 leading-relaxed">
          This means putting actual rupees behind content to reach people beyond
          your followers. Meta&#39;s ad platform is sophisticated — you can target
          by location, age, interests, behaviour, and lookalike audiences. For
          local businesses targeting a specific geography (say, Haridwar or
          Rishikesh), paid ads can be a cost-effective way to reach new customers.
        </p>
        <p className="text-[#F8F3EF]/80 leading-relaxed">
          But paid ads amplify what is already there. If the creative is weak or
          the profile looks abandoned, paid spend will not rescue it.
        </p>

        <h2>What Does a Basic Instagram Management Package Include?</h2>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          A professional{" "}
          <Link href="/social-media-management-haridwar/">
            social media management package in Haridwar
          </Link>{" "}
          or{" "}
          <Link href="/social-media-management-rishikesh/">Rishikesh</Link>{" "}
          typically covers:
        </p>

        <ul className="text-[#F8F3EF]/80 space-y-2">
          <li>
            A monthly content calendar with planned post topics and formats
          </li>
          <li>
            Designed graphics and edited Reels, tailored to your brand aesthetic
          </li>
          <li>Captions written in your brand voice, with relevant hashtags</li>
          <li>Scheduled posting at optimal times</li>
          <li>Basic community management — responding to comments and DMs</li>
          <li>A monthly performance review showing what worked</li>
        </ul>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          This is a creative and strategic service, not just a posting service.
          Good agencies charge accordingly.
        </p>

        <h2>How to Allocate Your Budget If You&#39;re Just Starting Out</h2>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          If you are building your Instagram presence from scratch, here is a
          sensible approach for the first three months:
        </p>

        <ul className="text-[#F8F3EF]/80 space-y-2">
          <li>
            <strong className="text-[#F8F3EF]">Month 1–2:</strong> Invest
            entirely in organic content — build a consistent feed, establish your
            brand voice, post Reels regularly. No ad spend yet.
          </li>
          <li>
            <strong className="text-[#F8F3EF]">Month 3:</strong> Once you have
            12–15 posts live and your profile looks credible, consider a small
            Meta Ads test to reach new people in your target area.
          </li>
          <li>
            <strong className="text-[#F8F3EF]">Ongoing:</strong> Review what
            content performs best organically and use those formats as the basis
            for any paid promotions.
          </li>
        </ul>

        <h2>When Does Meta Ads Make Sense for a Small Business?</h2>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          Paid Instagram advertising (through Meta Ads Manager) makes sense when:
        </p>

        <ul className="text-[#F8F3EF]/80 space-y-2">
          <li>
            You have a specific product, service, or offer to promote and want
            to reach people beyond your existing followers
          </li>
          <li>
            You are targeting a defined local geography — a city, a radius, or
            a specific type of visitor
          </li>
          <li>
            You have a clear call-to-action — booking a call, visiting a shop,
            signing up for something
          </li>
          <li>
            Your profile and landing experience (website or WhatsApp) are ready
            to receive traffic
          </li>
        </ul>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          If none of those conditions are in place, Meta Ads spend is likely
          premature. Fix the foundation first.
        </p>

        <h2>Getting Started with Instagram Marketing</h2>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          The most common mistake is overthinking the budget and underthinking
          the content. A consistent, visually clear Instagram presence built
          over six months will outperform sporadic high-spend campaigns every
          time.
        </p>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          If you are ready to build an Instagram presence that actually
          represents your business well, we can help.{" "}
          <a href="/#contact">Talk to us about what you need.</a>
        </p>
      </article>

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
