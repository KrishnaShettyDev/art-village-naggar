import { Client } from "@notionhq/client";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID as string;

export interface NotionArticle {
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

function getPropertyValue(property: any): string {
  if (!property) return "";

  switch (property.type) {
    case "title":
      return property.title?.[0]?.plain_text || "";
    case "rich_text":
      return property.rich_text?.[0]?.plain_text || "";
    case "select":
      return property.select?.name || "";
    case "date":
      return property.date?.start || "";
    case "checkbox":
      return property.checkbox;
    case "url":
      return property.url || "";
    case "files":
      if (property.files?.[0]?.type === "external") {
        return property.files[0].external.url;
      }
      if (property.files?.[0]?.type === "file") {
        return property.files[0].file.url;
      }
      return "";
    default:
      return "";
  }
}

async function getArticles(): Promise<NotionArticle[]> {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  return response.results.map((page: any) => {
    const properties = page.properties;

    return {
      id: page.id,
      slug: getPropertyValue(properties.Slug) || page.id,
      title: getPropertyValue(properties.Title),
      excerpt: getPropertyValue(properties.Excerpt),
      date: getPropertyValue(properties.Date),
      readTime: getPropertyValue(properties.ReadTime) || "5 min read",
      category: getPropertyValue(properties.Category) || "General",
      coverImage: getPropertyValue(properties.CoverImage) || page.cover?.external?.url || page.cover?.file?.url || null,
      published: getPropertyValue(properties.Published),
    };
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS - restricted to our domain
  const allowedOrigins = [
    "https://artvillagenaggar.com",
    "https://www.artvillagenaggar.com",
    "https://art-village-naggar.vercel.app",
  ];
  const origin = req.headers.origin || "";

  if (allowedOrigins.includes(origin) || process.env.NODE_ENV === "development") {
    res.setHeader("Access-Control-Allow-Origin", origin || allowedOrigins[0]);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const articles = await getArticles();

    // Cache for 5 minutes
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");

    return res.status(200).json(articles);
  } catch (error) {
    console.error("Error fetching articles from Notion:", error);
    return res.status(500).json({ error: "Failed to fetch articles" });
  }
}
