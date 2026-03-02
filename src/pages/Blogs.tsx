import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import { useNotionArticles, fallbackArticles, formatArticleDate, type Article } from "@/hooks/useNotionArticles";

// Default images for articles without cover images
import blogKathkuni from "@/assets/blog-kathkuni-detail.jpg";
import blogSeasons from "@/assets/blog-seasons.jpg";
import blogFood from "@/assets/blog-food.jpg";
import kathkuniWall from "@/assets/kathkuni-wall.jpg";
import fireStove from "@/assets/fire-stove.jpg";
import villagePath from "@/assets/village-path.jpg";

const defaultImages = [blogKathkuni, blogSeasons, blogFood, kathkuniWall, fireStove, villagePath];

function getArticleImage(article: Article, index: number): string {
  if (article.coverImage) {
    return article.coverImage;
  }
  // Cycle through default images
  return defaultImages[index % defaultImages.length];
}

const Blogs = () => {
  const { data: notionArticles, isLoading, isError } = useNotionArticles();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Use Notion articles if available, otherwise use fallback
  const articles = notionArticles && notionArticles.length > 0 ? notionArticles : fallbackArticles;

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];
    return cats.filter(Boolean);
  }, [articles]);

  // Filter articles by category
  const filteredArticles = useMemo(() => {
    if (selectedCategory === "All") return articles;
    return articles.filter((a) => a.category === selectedCategory);
  }, [articles, selectedCategory]);

  const featuredArticle = filteredArticles[0];
  const otherArticles = filteredArticles.slice(1);

  return (
    <PageTransition>
      <main className="bg-background overflow-x-hidden">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Blogs
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
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-sans text-xs tracking-[0.1em] uppercase px-4 py-2 border transition-colors ${
                  selectedCategory === cat
                    ? "border-foreground text-foreground bg-foreground/5"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Loading state */}
        {isLoading && (
          <section className="px-6 md:px-12 mb-20">
            <div className="max-w-6xl mx-auto">
              <div className="animate-pulse">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="aspect-[16/10] bg-secondary rounded" />
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="h-4 bg-secondary rounded w-1/4" />
                    <div className="h-8 bg-secondary rounded w-3/4" />
                    <div className="h-4 bg-secondary rounded w-full" />
                    <div className="h-4 bg-secondary rounded w-2/3" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Error state - still shows fallback content */}
        {isError && (
          <section className="px-6 md:px-12 mb-8">
            <div className="max-w-4xl mx-auto">
              <p className="font-sans text-sm text-muted-foreground text-center">
                Showing cached articles. Latest content will load shortly.
              </p>
            </div>
          </section>
        )}

        {/* Featured article */}
        {!isLoading && featuredArticle && (
          <section className="px-6 md:px-12 mb-20">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <Link to={`/blogs/${featuredArticle.slug}`} className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={getArticleImage(featuredArticle, 0)}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                      {featuredArticle.category} · {formatArticleDate(featuredArticle.date)}
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl leading-[1.3] mb-4 group-hover:text-primary transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                      {featuredArticle.excerpt}
                    </p>
                    <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">
                      {featuredArticle.readTime}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* Article grid */}
        {!isLoading && otherArticles.length > 0 && (
          <section className="px-6 md:px-12 pb-24">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
              {otherArticles.map((article, i) => (
                <ScrollReveal key={article.id} delay={i * 0.1}>
                  <Link to={`/blogs/${article.slug}`} className="group block">
                    <div className="aspect-[3/2] overflow-hidden mb-4">
                      <img
                        src={getArticleImage(article, i + 1)}
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
        )}

        {/* Empty state */}
        {!isLoading && filteredArticles.length === 0 && (
          <section className="px-6 md:px-12 pb-24">
            <div className="max-w-4xl mx-auto text-center py-16">
              <p className="font-sans text-base text-muted-foreground">
                No articles found in this category.
              </p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-4 font-sans text-xs tracking-[0.2em] uppercase border-b border-foreground/30 pb-1 hover:border-foreground transition-all duration-500"
              >
                View all articles
              </button>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </PageTransition>
  );
};

export default Blogs;
