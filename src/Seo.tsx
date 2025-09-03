import { useEffect } from "react";
import { HeadManager } from "./HeadManager";
import type { SeoProps } from "./types";

/**
 * consumableai-meta
 * A tiny head manager for AEO/GEO: per-route title, description, canonical, robots, and social tags.
 */
export function Seo(props: SeoProps) {
  const {
    title,
    titleTemplate,
    description,
    canonical,
    robots,
    ogTitle,
    ogDescription,
    ogType,
    ogImage,
    ogUrl,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    twitterSite,
    jsonLd
  } = props;

  useEffect(() => {
    HeadManager.setTitle(title, titleTemplate);
    HeadManager.setDescription(description);
    HeadManager.setCanonical(canonical);
    HeadManager.setRobots(robots);

    HeadManager.setOpenGraph({
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      type: ogType ?? "website",
      image: ogImage,
      url: ogUrl ?? canonical
    });

    HeadManager.setTwitter({
      card: twitterCard ?? (ogImage ? "summary_large_image" : "summary"),
      title: twitterTitle ?? ogTitle ?? title,
      description: twitterDescription ?? ogDescription ?? description,
      image: twitterImage ?? ogImage,
      site: twitterSite
    });

    HeadManager.setJsonLd(jsonLd);
  }, [
    title,
    titleTemplate,
    description,
    canonical,
    robots,
    ogTitle,
    ogDescription,
    ogType,
    ogImage,
    ogUrl,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    twitterSite,
    jsonLd
  ]);

  return null;
}
