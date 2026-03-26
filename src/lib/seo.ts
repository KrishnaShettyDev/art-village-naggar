// SEO Configuration for ART - Adaptive Rural Tourism
// Site-wide constants
export const SITE_NAME = "ART - Adaptive Rural Tourism";
export const SITE_NAME_SHORT = "ART";
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
    title: "ART - Adaptive Rural Tourism | Rethinking Rural Living",
    description:
      "A community organization rethinking and redesigning village spaces. Volunteer programs, creative collaborations, and authentic Himalayan experiences in Chachogi village, Kullu Valley.",
  },
  "/stays": {
    title: "Accommodation | ART - Adaptive Rural Tourism",
    description:
      "Heritage rooms in a 100-year-old Kathkuni house. Duplex suites with hot tubs, cozy attic rooms, and full villa rental. Book your Himalayan stay.",
  },
  "/stays/the-house": {
    title: "The House | ART - Adaptive Rural Tourism",
    description:
      "Experience the complete heritage villa with 6 bedrooms, traditional dining hall, and exclusive outdoor spaces. Dedicated chef and staff service.",
  },
  "/stays/shepherd-hostel": {
    title: "Shepherd Hostel | ART - Adaptive Rural Tourism",
    description:
      "Budget-friendly dorm accommodation in the Himalayas. Shared spaces, community vibes, and authentic village experience at Chachogi.",
  },
  "/slow-life": {
    title: "Slow Life Staycation | ART - Adaptive Rural Tourism",
    description:
      "Embrace a responsible way of traveling at a slow, leisurely pace. Conscious travel, therapeutic relaxation, and contextual lifestyle in the Himalayas.",
  },
  "/dining": {
    title: "Shepherd Cafe & Dining | ART - Adaptive Rural Tourism",
    description:
      "Farm-to-table dining in the Himalayas. Local Himachali, Mediterranean, and Asian cuisine. Wood-fired cooking with fresh mountain ingredients.",
  },
  "/dining/cafe": {
    title: "The Cafe | ART - Adaptive Rural Tourism",
    description:
      "Seasonal menu at Shepherd Cafe. Fresh trout, wood-fired pizzas, traditional siddu, and locally foraged ingredients at 2,300 metres.",
  },
  "/story": {
    title: "Our Story | ART - Adaptive Rural Tourism",
    description:
      "How a 1,000-year-old building technique found new life. The story of Kathkuni architecture, Chachogi village, and our community initiatives.",
  },
  "/gallery": {
    title: "Gallery | ART - Adaptive Rural Tourism",
    description:
      "Visual journey through our community. Wood grain, stone texture, forest light. Photos of Kathkuni architecture and Himalayan village life.",
  },
  "/experiences": {
    title: "Experiences | ART - Adaptive Rural Tourism",
    description:
      "Village tours, farm-to-table cooking, snowline hikes, stargazing, forest walks, and traditional crafts. Immersive experiences at 2,300 metres.",
  },
  "/shepherd-magazine": {
    title: "Shepherd Magazine | ART - Adaptive Rural Tourism",
    description:
      "Observations from 2,300 metres. Stories about Kathkuni architecture, village life, seasonal food, and Himalayan traditions.",
    ogType: "website",
  },
  "/collaborate": {
    title: "Collaborate & Volunteer | ART - Adaptive Rural Tourism",
    description:
      "Join us as a volunteer, artist, or creative collaborator. Work exchange programs, community initiatives, and creative residencies in the Himalayas.",
  },
  "/contact": {
    title: "Contact & Directions | ART - Adaptive Rural Tourism",
    description:
      "How to reach Chachogi village, 4 km above Naggar. Contact details, directions by air and road, and collaboration inquiries.",
  },
  "/terms": {
    title: "Terms & Conditions | ART - Adaptive Rural Tourism",
    description:
      "Booking terms, cancellation policy, and guidelines for ART programs and stays.",
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
