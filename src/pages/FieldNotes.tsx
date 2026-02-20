import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import blogKathkuni from "@/assets/blog-kathkuni-detail.jpg";
import blogSeasons from "@/assets/blog-seasons.jpg";
import blogFood from "@/assets/blog-food.jpg";
import kathkuniWall from "@/assets/kathkuni-wall.jpg";
import fireStove from "@/assets/fire-stove.jpg";
import villagePath from "@/assets/village-path.jpg";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const articles: Article[] = [
  {
    slug: "what-is-kathkuni",
    title: "What is Kathkuni? The 1,000-Year-Old Building Technique the Himalayas Are Forgetting",
    excerpt:
      "Alternating layers of deodar cedar and local stone, interlocked without nails or cement. Walls 700mm thick that survived the 1905 Kangra earthquake. The British surveyors couldn't explain it. The villagers could.",
    date: "January 2026",
    readTime: "8 min read",
    category: "Architecture",
    image: blogKathkuni,
  },
  {
    slug: "four-seasons-chachogi",
    title: "Four Seasons in Chachogi: How a Village at 2,300m Tells Time",
    excerpt:
      "Spring arrives when the first rhododendron blooms on the ridge above the house. Summer is when the clouds start walking through the rooms. Autumn is 300 gods descending into the valley. Winter is the fire stove.",
    date: "December 2025",
    readTime: "6 min read",
    category: "Village Life",
    image: blogSeasons,
  },
  {
    slug: "food-that-walked-here",
    title: "Food That Walked Here: A Menu Built on Footpaths, Not Supply Chains",
    excerpt:
      "Every ingredient on the Art Village menu has a name attached to it — the person who grew it, picked it, or made it. Siddu from Kamla Devi. Trout from the Beas. Honey from the forest above the village.",
    date: "November 2025",
    readTime: "5 min read",
    category: "Food",
    image: blogFood,
  },
  {
    slug: "earthquake-proof-walls",
    title: "Why These Walls Survived When Everything Else Fell",
    excerpt:
      "The 1905 Kangra earthquake measured 7.8 on the Richter scale. It destroyed 100,000 buildings across the region. Kathkuni structures absorbed the shock through their interlocking joints. This is engineering that predates engineering.",
    date: "October 2025",
    readTime: "7 min read",
    category: "Architecture",
    image: kathkuniWall,
  },
  {
    slug: "fire-stove-centre",
    title: "The Fire Stove: Centre of Winter, Centre of Life",
    excerpt:
      "In Chachogi, winter isn't something to escape. It's something to sit inside. The fire stove — the tandoor — is where food is cooked, stories are told, hands are warmed, and the day begins and ends.",
    date: "September 2025",
    readTime: "4 min read",
    category: "Village Life",
    image: fireStove,
  },
  {
    slug: "devta-system-kullu",
    title: "The Devta System: 300 Gods, One Valley, and a Democracy Older Than Parliament",
    excerpt:
      "Each village in the Kullu Valley has its own devta — a local deity with its own temple, its own oracle, its own land holdings. The devta system is governance, culture, and identity. It is alive.",
    date: "August 2025",
    readTime: "9 min read",
    category: "Culture",
    image: villagePath,
  },
];

const categories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

const FieldNotes = () => {
  return (
    <PageTransition>
    <main className="bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Field Notes
            </p>
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.15] mb-6">
              Observations from<br />2,300 metres.
            </h1>
            <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-xl">
              Stories about Kathkuni architecture, the people of Chachogi, the food that grows here,
              and the seasons that shape everything.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category pills */}
      <section className="px-6 md:px-12 mb-12">
        <div className="max-w-4xl mx-auto flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <span
              key={cat}
              className="font-sans text-xs tracking-[0.1em] uppercase px-4 py-2 border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors cursor-pointer"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Featured article */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <Link to={`/field-notes/${articles[0].slug}`} className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                  {articles[0].category} · {articles[0].date}
                </p>
                <h2 className="font-serif text-2xl md:text-3xl leading-[1.3] mb-4 group-hover:text-primary transition-colors">
                  {articles[0].title}
                </h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                  {articles[0].excerpt}
                </p>
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">
                  {articles[0].readTime}
                </p>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Article grid */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.slice(1).map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 0.1}>
              <Link to={`/field-notes/${article.slug}`} className="group block">
                <div className="aspect-[3/2] overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  {article.category} · {article.readTime}
                </p>
                <h3 className="font-serif text-lg leading-[1.3] mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
    </PageTransition>
  );
};

export default FieldNotes;
