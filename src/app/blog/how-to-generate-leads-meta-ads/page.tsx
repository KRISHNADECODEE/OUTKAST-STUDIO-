import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Generate Leads Through Meta Ads for a Small Business",
  description:
    "A practical guide to using Facebook and Instagram ads (Meta Ads) for lead generation. Campaign structure, targeting, creative, and what to expect from your first campaigns.",
  alternates: {
    canonical:
      "https://outkast-studio.vercel.app/blog/how-to-generate-leads-meta-ads",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How to Generate Leads Through Meta Ads for a Small Business",
  description:
    "A practical guide to using Facebook and Instagram ads (Meta Ads) for lead generation. Campaign structure, targeting, creative, and what to expect from your first campaigns.",
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
  url: "https://outkast-studio.vercel.app/blog/how-to-generate-leads-meta-ads",
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
      name: "How to Generate Leads Through Meta Ads for a Small Business",
      item: "https://outkast-studio.vercel.app/blog/how-to-generate-leads-meta-ads",
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
        / How to Generate Leads Through Meta Ads
      </nav>

      {/* Article Header */}
      <header className="container mx-auto px-6 pb-12 max-w-3xl">
        <h1 className="font-editorial text-4xl md:text-5xl font-bold mb-6 leading-tight">
          How to Generate Leads Through Meta Ads for a Small Business
        </h1>
        <p className="text-[#F8F3EF]/70 text-lg">
          A practical guide to using Facebook and Instagram ads (Meta Ads) for
          lead generation. Campaign structure, targeting, creative, and what to
          expect from your first campaigns.
        </p>
        <p className="text-sm text-[#D03412] mt-4 font-sans">
          By Outkast Studios · 7 min read
        </p>
      </header>

      {/* Article Body */}
      <article className="container mx-auto px-6 max-w-3xl pb-24 prose prose-invert prose-headings:font-editorial prose-a:text-[#D03412] prose-a:no-underline hover:prose-a:underline">
        <p className="text-lg leading-relaxed text-[#F8F3EF]/90">
          Meta Ads can generate consistent inbound leads when campaigns are
          structured correctly with the right targeting, creative, and landing
          experience. The issue most small businesses face is not that Meta Ads
          do not work — it is that they set up campaigns without understanding
          the mechanics, and the spend disappears without results.
        </p>

        <p className="leading-relaxed text-[#F8F3EF]/80">
          This guide covers the core elements of a lead generation campaign on
          Facebook and Instagram, what actually influences results, and how to
          avoid the most common mistakes businesses make when they start running
          ads themselves.
        </p>

        <h2>What Are Meta Ads and How Do They Work?</h2>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          Meta Ads is the advertising platform that covers both Facebook and
          Instagram. When you run a campaign, you define a target audience, set a
          budget, create ad creative, and Meta&#39;s algorithm distributes your ads
          to the people most likely to take the action you specify — whether that
          is clicking to your website, submitting a lead form, or messaging you
          on WhatsApp.
        </p>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          The platform works on an auction system: you compete against other
          advertisers to show your ad to the same audiences. Your cost per result
          depends on how competitive that audience is, how relevant Meta&#39;s
          algorithm finds your creative, and how well your landing experience
          converts people once they click.
        </p>

        <h2>Setting Up a Lead Generation Campaign on Meta</h2>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          A lead generation campaign has a specific structure. Getting this
          right matters more than the daily budget:
        </p>

        <h3>Campaign objective</h3>
        <p className="text-[#F8F3EF]/80 leading-relaxed">
          Choose the &quot;Leads&quot; objective in Meta Ads Manager. This tells
          the algorithm what you are optimising for — it will show your ad to
          people in your target audience who are most likely to submit a form or
          take a contact action.
        </p>

        <h3>Ad set: audience and placement</h3>
        <p className="text-[#F8F3EF]/80 leading-relaxed">
          Define where your ads show (Instagram feed, Facebook feed, Reels,
          Stories) and who sees them. For local businesses, geographic targeting
          is often the most important variable — you want your ads seen by people
          in the specific cities or regions where you can actually serve them.
        </p>

        <h3>Ad: creative and format</h3>
        <p className="text-[#F8F3EF]/80 leading-relaxed">
          The actual video or image, headline, and description. This is what
          stops people from scrolling and makes them consider your offer.
        </p>

        <h2>Who Should You Target?</h2>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          Targeting options on Meta are extensive. For local businesses, the
          most reliable starting approach is:
        </p>

        <ul className="text-[#F8F3EF]/80 space-y-2">
          <li>
            <strong className="text-[#F8F3EF]">Geographic targeting:</strong>{" "}
            Start with the specific cities you serve — for businesses in
            <Link href="/haridwar"> Haridwar</Link> or{" "}
            <Link href="/rishikesh">Rishikesh</Link>, targeting a 20–50km
            radius around your location is usually a sensible starting point
          </li>
          <li>
            <strong className="text-[#F8F3EF]">Interest targeting:</strong>{" "}
            Layer on interests relevant to your audience — yoga, travel, home
            renovation, fitness, local services, depending on your industry
          </li>
          <li>
            <strong className="text-[#F8F3EF]">Broad targeting:</strong> For
            campaigns with enough budget, letting Meta&#39;s algorithm optimise
            broadly (without heavy interest restrictions) often outperforms
            narrow targeting over time
          </li>
        </ul>

        <h2>What Makes Good Ad Creative?</h2>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          The creative — the image or video — is what stops someone from
          scrolling. Here is what performs well for lead generation:
        </p>

        <h3>A clear hook in the first two seconds</h3>
        <p className="text-[#F8F3EF]/80 leading-relaxed">
          If you are running a video ad, the first frame or two seconds must
          immediately communicate what this is for. Generic intros lose people
          before they even register your brand.
        </p>

        <h3>A specific, single offer</h3>
        <p className="text-[#F8F3EF]/80 leading-relaxed">
          Ads that try to communicate everything about a business convert poorly.
          Lead-generation ads should lead with one specific offer: a free
          consultation, a quote, a callback, an inquiry for a specific service.
        </p>

        <h3>Social proof where genuine</h3>
        <p className="text-[#F8F3EF]/80 leading-relaxed">
          Real project images, before/after scenarios, or descriptions of
          outcomes your clients have experienced build credibility. Never invent
          testimonials or fake metrics — experienced buyers will spot it and your
          credibility collapses.
        </p>

        <h2>How Much Should You Spend on Meta Ads?</h2>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          There is no magic number, but here is a realistic framing for small
          businesses in India:
        </p>

        <ul className="text-[#F8F3EF]/80 space-y-2">
          <li>
            Below a certain daily budget, the algorithm does not have enough
            data to optimise. Running with ₹100/day or less will not give the
            platform enough signal to learn effectively.
          </li>
          <li>
            A test campaign at ₹300–500/day for 2–4 weeks gives the algorithm
            enough data to begin optimising and gives you a realistic read on
            cost per lead for your specific offer.
          </li>
          <li>
            Scaling spend is a decision you make after the test — not before you
            know what your cost per lead actually is.
          </li>
        </ul>

        <h2>Common Mistakes to Avoid</h2>

        <ul className="text-[#F8F3EF]/80 space-y-2">
          <li>
            <strong className="text-[#F8F3EF]">Changing the campaign too early:</strong>{" "}
            Meta&#39;s algorithm needs 7–14 days of data before it has learned who
            to show your ad to. Tweaking campaigns in the first week resets the
            learning phase.
          </li>
          <li>
            <strong className="text-[#F8F3EF]">Sending traffic to a poor landing experience:</strong>{" "}
            If your website or lead form is confusing or slow, clicks do not
            convert. Fix the landing page before scaling spend.
          </li>
          <li>
            <strong className="text-[#F8F3EF]">Running only one creative:</strong>{" "}
            Test at least 2–3 different headlines or creative approaches within
            the same ad set so you learn what resonates.
          </li>
          <li>
            <strong className="text-[#F8F3EF]">No follow-up process:</strong>{" "}
            Leads from Meta Ads go cold quickly. If you are not following up
            within hours, conversion rates drop significantly.
          </li>
        </ul>

        <p className="text-[#F8F3EF]/80 leading-relaxed">
          If you want Meta Ads managed properly for your business,{" "}
          <a href="/#contact">get in touch</a> and we will assess whether paid
          campaigns make sense for your current situation and goals.
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
