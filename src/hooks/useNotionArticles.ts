import { useQuery } from "@tanstack/react-query";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string | null;
  published: boolean;
}

// Fallback articles for when Notion is not configured
export const fallbackArticles: Article[] = [
  {
    id: "1",
    slug: "what-is-kathkuni",
    title: "What is Kathkuni? The 1,000-Year-Old Building Technique the Himalayas Are Forgetting",
    excerpt:
      "Alternating layers of deodar cedar and local stone, interlocked without nails or cement. Walls 700mm thick that survived the 1905 Kangra earthquake. The British surveyors couldn't explain it. The villagers could.",
    date: "2026-01-15",
    readTime: "8 min read",
    category: "Architecture",
    coverImage: null,
    published: true,
  },
  {
    id: "2",
    slug: "four-seasons-chachogi",
    title: "Four Seasons in Chachogi: How a Village at 2,300m Tells Time",
    excerpt:
      "Spring arrives when the first rhododendron blooms on the ridge above the house. Summer is when the clouds start walking through the rooms. Autumn is 300 gods descending into the valley. Winter is the fire stove.",
    date: "2025-12-10",
    readTime: "6 min read",
    category: "Village Life",
    coverImage: null,
    published: true,
  },
  {
    id: "3",
    slug: "food-that-walked-here",
    title: "Food That Walked Here: A Menu Built on Footpaths, Not Supply Chains",
    excerpt:
      "Every ingredient on the Art Village menu has a name attached to it — the person who grew it, picked it, or made it. Siddu from Kamla Devi. Trout from the Beas. Honey from the forest above the village.",
    date: "2025-11-20",
    readTime: "5 min read",
    category: "Food",
    coverImage: null,
    published: true,
  },
];

async function fetchArticles(): Promise<Article[]> {
  const apiUrl = import.meta.env.PROD ? "/api/articles" : "http://localhost:3001/api/articles";

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  return response.json();
}

export function useNotionArticles() {
  return useQuery({
    queryKey: ["notion-articles"],
    queryFn: fetchArticles,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
    // Use fallback data if fetch fails
    placeholderData: fallbackArticles,
  });
}

// Format date for display
export function formatArticleDate(dateString: string): string {
  if (!dateString) return "";

  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}
