const ensureMetaTagByName = (name: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  return tag;
};

const ensureMetaTagByProperty = (property: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  return tag;
};

const ensureLinkTag = (rel: string) => {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  return tag;
};

const ensureScriptTag = (id: string, type: string) => {
  let tag = document.head.querySelector<HTMLScriptElement>(`script#${id}`);
  if (!tag) {
    tag = document.createElement("script");
    tag.id = id;
    tag.type = type;
    document.head.appendChild(tag);
  }
  return tag;
};

const robotsObjectToString = (robots: import("./types").Robots): string => {
  if (typeof robots === "string") return robots;
  const parts: string[] = [];
  const index = robots.index === false ? "noindex" : "index";
  const follow = robots.follow === false ? "nofollow" : "follow";
  parts.push(index, follow);
  if (robots.noarchive) parts.push("noarchive");
  if (robots.nosnippet) parts.push("nosnippet");
  if (robots.maxSnippet !== undefined) parts.push(`max-snippet:${robots.maxSnippet}`);
  if (robots.maxImagePreview) parts.push(`max-image-preview:${robots.maxImagePreview}`);
  if (robots.maxVideoPreview !== undefined) parts.push(`max-video-preview:${robots.maxVideoPreview}`);
  return parts.join(", ");
};

export const HeadManager = {
  setTitle(title?: string, template?: string) {
    if (!title) return;
    document.title = template ? template.replace("%s", title) : title;
  },

  setDescription(desc?: string) {
    if (!desc) return;
    const tag = ensureMetaTagByName("description");
    tag.setAttribute("content", desc);
  },

  setCanonical(url?: string) {
    if (!url) return;
    const link = ensureLinkTag("canonical");
    link.setAttribute("href", url);
  },

  setRobots(robots?: import("./types").Robots) {
    if (robots === undefined) return;
    const tag = ensureMetaTagByName("robots");
    tag.setAttribute("content", robotsObjectToString(robots));
  },

  setOpenGraph({
    title,
    description,
    type,
    image,
    url
  }: { title?: string; description?: string; type?: string; image?: string; url?: string; }) {
    if (title) ensureMetaTagByProperty("og:title").setAttribute("content", title);
    if (description) ensureMetaTagByProperty("og:description").setAttribute("content", description);
    if (type) ensureMetaTagByProperty("og:type").setAttribute("content", type);
    if (image) ensureMetaTagByProperty("og:image").setAttribute("content", image);
    if (url) ensureMetaTagByProperty("og:url").setAttribute("content", url);
  },

  setTwitter({
    card,
    title,
    description,
    image,
    site
  }: { card?: string; title?: string; description?: string; image?: string; site?: string; }) {
    if (card) ensureMetaTagByName("twitter:card").setAttribute("content", card);
    if (title) ensureMetaTagByName("twitter:title").setAttribute("content", title);
    if (description) ensureMetaTagByName("twitter:description").setAttribute("content", description);
    if (image) ensureMetaTagByName("twitter:image").setAttribute("content", image);
    if (site) ensureMetaTagByName("twitter:site").setAttribute("content", site);
  },

  setJsonLd(json?: object | string) {
    if (!json) return;
    const tag = ensureScriptTag("__consumableai_meta_jsonld__", "application/ld+json");
    const payload = typeof json === "string" ? json : JSON.stringify(json);
    if (tag.textContent !== payload) tag.textContent = payload;
  }
};
