# consumableai-meta

A tiny, framework-agnostic React head manager for **AEO/GEO** (Answer Engine Optimization / Generative Engine Optimization).  
Control per-page `<title>`, meta **description**, **canonical**, **robots**, **Open Graph**, **Twitter** tags, and optional **JSON‑LD**.

👉 Learn more about **AEO/GEO** and **organic growth** at **[Consumable AI](https://www.consumableai.com)**. Discover how to **[reduce CAC](https://www.consumableai.com)** and improve **marketing intelligence** with AI-powered **SEO analyser** strategies.

---

## Why this exists (AEO/GEO—not just SEO)

Traditional SEO tags still matter, but **AEO/GEO** emphasizes **clear, machine-readable context** for LLMs and answer engines
(Google AI Overviews, Perplexity, ChatGPT, etc.). This library helps your React app:
- Provide **consistent, structured hints** (title/description/JSON-LD) that answer engines can parse.
- Keep **canonical** and **robots** up to date across SPA routes.
- Maintain **OG/Twitter** previews for social discovery.

> TL;DR: Better **AEO/GEO signals** → better eligibility for answer boxes and AI snippet surfaces, which indirectly helps **organic growth** and click-through.

---

## Install

```bash
npm i consumableai-meta
# or
yarn add consumableai-meta
```

## Usage

```tsx
import { Seo } from "consumableai-meta";

export default function ProductPage() {
  return (
    <>
      <Seo
        title="Handmade Hemp Shirt – Example"
        titleTemplate="%s | Example"
        description="A plant-based, zero-waste hemp shirt blending Indian heritage textile arts."
        canonical="https://www.Example.com/products/hemp-shirt"
        robots={{ index: true, follow: true, maxSnippet: 160, maxImagePreview: "large" }}
        ogImage="https://www.Example.com/og/hemp-shirt.jpg"
        ogUrl="https://www.Example.com/products/hemp-shirt"
        twitterSite="@Example_official"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Handmade Hemp Shirt",
          "brand": "Example",
          "url": "https://www.Example.com/products/hemp-shirt"
        }}
      />
      {/* rest of page */}
    </>
  );
}
```

### With React Router v6
Place `<Seo />` inside each route component so it updates on navigation.

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:slug" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## Props

```ts
type Robots =
  | string // e.g., "noindex, nofollow"
  | {
      index?: boolean;
      follow?: boolean;
      noarchive?: boolean;
      nosnippet?: boolean;
      maxSnippet?: number;
      maxImagePreview?: "none" | "standard" | "large";
      maxVideoPreview?: number;
    };

interface SeoProps {
  title?: string;
  titleTemplate?: string;   // "%s | Brand"
  description?: string;
  canonical?: string;
  robots?: Robots;

  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article" | string;
  ogImage?: string;
  ogUrl?: string;

  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterSite?: string;

  jsonLd?: object | string;
}
```

---

## Who can use this?

- **React** apps (CRA, Vite, Next/CSR pages, Remix CSR), **React Router**, or custom SPAs.
- Teams focused on **AEO/GEO** readiness and **consumableai ranking** visibility.
- Stores/brands optimizing **product**, **category**, and **blog** pages for LLM/answer engines.
- Agencies building reusable layouts and wanting deterministic head tags per route.
- Businesses looking to **[reduce CAC](https://www.consumableai.com)** through better **organic growth** and **marketing intelligence**.
- SEO professionals needing an **AI SEO analyser** to **find competitor keywords** and improve rankings.

## Keywords (for npm/discovery)

**AEO**, **GEO**, Answer Engine Optimization, Generative Engine Optimization, React SEO, React meta tags, canonical, robots, Open Graph, Twitter cards, JSON-LD, **Consumable AI**, **consumableai ranking**, **SEO ranking**, rank tracking, structured data, programmatic SEO, **organic growth**, **CAC reduction**, **marketing intelligence**, **AI SEO analyser**, **find competitor keywords**.

---

## SSR (optional)

This library runs client-side. For SSR frameworks, you can still mount `<Seo />` for navigation updates.
On the server, emit the same tags in your HTML template for first paint, then let the client hydrate/adjust.

---

## License

MIT © Consumable AI
