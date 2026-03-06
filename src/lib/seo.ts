// SEO Configuration for Art Village Naggar
// Site-wide constants
export const SITE_NAME = "Art Village Naggar";
export const SITE_URL = "https://artvillagenaggar.com";
export const DEFAULT_OG_IMAGE = "/og-image.jpg";
export const TWITTER_HANDLE = "@artvillagenaggar";

// Route metadata configuration
export interface PageMeta {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
}

export const routeMetadata: Record<string, PageMeta> = {
  "/": {
    title: "Art Village Naggar — Stay Inside the Story",
    description:
      "A restored Kathkuni house in Chachogi village, 2,300m. 1,000-year-old earthquake-proof architecture, now hosting. Heritage stay in Kullu Valley, Himachal Pradesh.",
  },
  "/stays": {
    title: "Accommodation | Art Village Naggar",
    description:
      "Heritage rooms in a 100-year-old Kathkuni house. Duplex suites with hot tubs, cozy attic rooms, and full villa rental. Book your Himalayan stay.",
  },
  "/stays/the-house": {
    title: "The House | Art Village Naggar",
    description:
      "Experience the complete heritage villa with 6 bedrooms, traditional dining hall, and exclusive outdoor spaces. Dedicated chef and staff service.",
  },
  "/stays/shepherd-hostel": {
    title: "Shepherd Hostel | Art Village Naggar",
    description:
      "Budget-friendly dorm accommodation in the Himalayas. Shared spaces, community vibes, and authentic village experience at Chachogi.",
  },
  "/slow-life": {
    title: "Slow Life Staycation | Art Village Naggar",
    description:
      "Embrace a responsible way of traveling at a slow, leisurely pace. Conscious travel, therapeutic relaxation, and contextual lifestyle in the Himalayas.",
  },
  "/dining": {
    title: "Shepherd Cafe & Dining | Art Village Naggar",
    description:
      "Farm-to-table dining in the Himalayas. Local Himachali, Mediterranean, and Asian cuisine. Wood-fired cooking with fresh mountain ingredients.",
  },
  "/dining/cafe": {
    title: "The Cafe | Art Village Naggar",
    description:
      "Seasonal menu at Shepherd Cafe. Fresh trout, wood-fired pizzas, traditional siddu, and locally foraged ingredients at 2,300 metres.",
  },
  "/story": {
    title: "Our Story | Art Village Naggar",
    description:
      "How a 1,000-year-old building technique found new life. The story of Kathkuni architecture, Chachogi village, and Art Village Naggar.",
  },
  "/gallery": {
    title: "Gallery | Art Village Naggar",
    description:
      "Visual journey through Art Village Naggar. Wood grain, stone texture, forest light. Photos of Kathkuni architecture and Himalayan village life.",
  },
  "/experiences": {
    title: "Experiences | Art Village Naggar",
    description:
      "Village tours, farm-to-table cooking, snowline hikes, stargazing, forest walks, and traditional crafts. Immersive experiences at 2,300 metres.",
  },
  "/blogs": {
    title: "Blogs | Art Village Naggar",
    description:
      "Observations from 2,300 metres. Stories about Kathkuni architecture, village life, seasonal food, and Himalayan traditions.",
    ogType: "website",
  },
  "/collaborate": {
    title: "Collaborate | Art Village Naggar",
    description:
      "Join us as a volunteer, artist, or creative collaborator. Work exchange programs and creative residencies in the Himalayas.",
  },
  "/contact": {
    title: "Contact & Directions | Art Village Naggar",
    description:
      "How to reach Chachogi village, 4 km above Naggar. Contact details, directions by air and road, and booking inquiries.",
  },
  "/terms": {
    title: "Terms & Conditions | Art Village Naggar",
    description:
      "Booking terms, cancellation policy, and house rules for Art Village Naggar stays.",
    noIndex: true,
  },
};

// Helper to get page metadata
export function getPageMeta(pathname: string): PageMeta {
  return (
    routeMetadata[pathname] || {
      title: `${SITE_NAME}`,
      description: routeMetadata["/"].description,
    }
  );
}

// Helper to build full title
export function buildTitle(pageTitle: string): string {
  if (pageTitle.includes(SITE_NAME)) {
    return pageTitle;
  }
  return `${pageTitle} | ${SITE_NAME}`;
}

// Helper to build canonical URL
export function buildCanonicalUrl(pathname: string): string {
  const cleanPath = pathname.endsWith("/") && pathname !== "/"
    ? pathname.slice(0, -1)
    : pathname;
  return `${SITE_URL}${cleanPath}`;
}

// Helper to build OG image URL
export function buildOgImageUrl(ogImage?: string): string {
  if (!ogImage) return `${SITE_URL}${DEFAULT_OG_IMAGE}`;
  if (ogImage.startsWith("http")) return ogImage;
  return `${SITE_URL}${ogImage}`;
}
