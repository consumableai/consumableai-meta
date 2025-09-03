export type Robots =
  | string
  | {
      index?: boolean;          // true -> index, false -> noindex
      follow?: boolean;         // true -> follow, false -> nofollow
      noarchive?: boolean;
      nosnippet?: boolean;
      maxSnippet?: number;      // e.g., 160
      maxImagePreview?: "none" | "standard" | "large";
      maxVideoPreview?: number;
    };

export interface SeoProps {
  title?: string;
  titleTemplate?: string;       // e.g., "%s | MySite"
  description?: string;
  canonical?: string;
  robots?: Robots;
  // Open Graph
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article" | string;
  ogImage?: string;
  ogUrl?: string;
  // Twitter
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterSite?: string;         // @handle
  // Structured data
  jsonLd?: object | string;     // string or object; rendered as application/ld+json
}
