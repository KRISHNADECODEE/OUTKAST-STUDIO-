import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Should a Social Media Management Package Include?",
  description:
    "A complete breakdown of what a good social media management package should include — content calendar, Reels production, account management, analytics and reporting.",
  alternates: {
    canonical:
      "https://outkast-studio.vercel.app/blog/what-should-social-media-management-package-include",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Should a Social Media Management Package Include?",
  description:
    "A complete breakdown of what a good social media management package should include — content calendar, Reels production, account management, analytics and reporting.",
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
  url: "https://outkast-studio.vercel.app/blog/what-should-social-media-management-package-include",
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
      name: "What Should a Social Media Management Package Include?",
      item: "https://outkast-studio.vercel.app/blog/what-should-social-media-management-package-include",
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
        / What Should a Social Media Management Package Include?
      </nav>

      {/* Article Header */}
      <header className="container mx-auto px-6 pb-12 max-w-3xl">
        <h1 className="font-editorial text-4xl md:text-5xl font-bold mb-6 leading-tight">
          What Should a Social Media Management Package Include?
        </h1>
        <p className="text-[#F8F3EF]/70 text-lg">
          A complete breakdown of what a good social media management package
          should include — content calendar, Reels production, account
          management, analytics and reporting.
        </p>
        <p className="text-sm text-[#D03412] mt-4 font-sans">
          By Outkast Studios · 6 min read
        </p>
      </header>

      {/* Article Body */}
      <article className="container mx-auto px-6 max-w-3xl pb-24 prose prose-invert prose-headings:font-editorial prose-a:text-[#D03412] prose-a:no-underline hover:prose-a:underline">
        <p className="text-lg leading-relaxed text-[#F8F3EF]/90">
          A professional social media management package should deliver three
          core things: a consistent, on-brand presence; content that actually
          reaches and engages the right people; and a clear view of what is
          working each month. If the package you are being sold does not cover
          all three, you are probably getting a posting service — not management.
        </p>

        <p className="leading-relaxed text-[#F8F3EF]/80">
          Here is a complete breakdown of what should be included, and what
          warning signs to watch for in cheaper packages.
        </p>

        <h2>Content Calendar and Planning</h2>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          Every professional social media package should begin with a monthly
          content plan. This is not just a list of post dates — it is a
          structured document that maps out what topics will be covered, what
          formats will be used (Reels, carousels, Stories, static posts), and
          how the month of content tells a coherent story about your brand.
        </p>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          A good content calendar is built around your business goals for the
          month: a product launch, a seasonal promotion, an event, an educational
          series. It should be shared with you in advance for review and
          approval — you should never be surprised by what gets posted on your
          behalf.
        </p>

        <h2>Content Creation — Graphics, Reels, Captions</h2>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          This is where most of the production work happens. A proper package
          should include:
        </p>

        <h3>Designed graphics</h3>
        <p className="text-[#F8F3EF]/80 leading-relaxed">
          Branded static images for feed posts and Stories. These should use
          your brand colours, fonts, and visual language consistently — not
          generic templates from a stock library with your logo slapped on.
        </p>

        <h3>Reels production</h3>
        <p className="text-[#F8F3EF]/80 leading-relaxed">
          Reels are currently the highest-reach format on Instagram. A good
          package should include at least 2–4 Reels per month, edited and
          captioned. Some agencies require you to supply the raw footage; others
          handle filming themselves. Know which model you are paying for.
        </p>

        <h3>Captions and hashtags</h3>
        <p className="text-[#F8F3EF]/80 leading-relaxed">
          Captions should sound like your brand — not generic filler text.
          Good captions either educate, entertain, or invite action. Hashtags
          should be researched and relevant to your niche, not just the most
          popular tags on Instagram.
        </p>

        <h2>Account Management and Community Engagement</h2>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          Posting content is half the job. Responding to it is the other half.
          A proper package should include regular monitoring and engagement:
        </p>

        <ul className="text-[#F8F3EF]/80 space-y-2">
          <li>
            Responding to comments on posts in a timely, on-brand way
          </li>
          <li>
            Handling DMs — inquiries, questions, and feedback — with consistent
            tone and professionalism
          </li>
          <li>
            Flagging anything urgent that requires your direct involvement (a
            complaint, a media inquiry, an unexpected viral moment)
          </li>
        </ul>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          Brands that post but never engage look abandoned. Community management
          is what makes an Instagram account feel alive.
        </p>

        <h2>Reporting and Performance Review</h2>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          Every month you should receive a report that covers, at minimum:
        </p>

        <ul className="text-[#F8F3EF]/80 space-y-2">
          <li>Reach and impressions — how many people saw your content</li>
          <li>
            Engagement rate — what percentage of people who saw your content
            interacted with it
          </li>
          <li>Follower growth or change</li>
          <li>Top-performing posts and why they worked</li>
          <li>Suggested adjustments for the following month</li>
        </ul>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          Reporting is not just paperwork — it is the feedback loop that
          improves performance over time. An agency that does not report cannot
          prove value, and probably does not track it seriously.
        </p>

        <h2>What You Should NOT See in a Cheap Social Media Package</h2>

        <ul className="text-[#F8F3EF]/80 space-y-2">
          <li>
            <strong className="text-[#F8F3EF]">Stock imagery or AI-generated filler images</strong> — these make
            your brand look inauthentic
          </li>
          <li>
            <strong className="text-[#F8F3EF]">Recycled captions</strong> posted across multiple different clients
            with just the name changed
          </li>
          <li>
            <strong className="text-[#F8F3EF]">No approval process</strong> — content going live without your
            sign-off is a liability
          </li>
          <li>
            <strong className="text-[#F8F3EF]">Bought followers or engagement pods</strong> — these inflate
            vanity numbers while destroying your algorithmic reach
          </li>
          <li>
            <strong className="text-[#F8F3EF]">No reporting</strong> — if you are paying monthly and receiving
            no data, you have no way to evaluate whether you are getting value
          </li>
        </ul>

        <h2>How Outkast Studios Approaches Social Media Management</h2>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          Our{" "}
          <Link href="/social-media-management-haridwar">
            social media management packages in Haridwar
          </Link>{" "}
          and{" "}
          <Link href="/social-media-management-rishikesh">Rishikesh</Link>{" "}
          are built around brand-first content strategy, not content volume.
          We plan monthly, approve with you before anything is published, produce
          Reels and graphics that actually fit your visual identity, and report
          clearly each month on what moved.
        </p>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          If your current social media management feels like it is running on
          autopilot and producing no results,{" "}
          <a href="/#contact">let&#39;s talk about what a better approach
          looks like for your business.</a>
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
