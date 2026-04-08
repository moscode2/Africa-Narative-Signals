# Africa Narrative Signals — Website

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
ans-website/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── globals.css         # Global styles + Tailwind
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── insights/
│   │   ├── page.tsx        # Insights list (search + filter)
│   │   └── [slug]/page.tsx # Individual article
│   ├── reports/page.tsx    # Reports/publications
│   ├── contact/page.tsx    # Contact form
│   └── not-found.tsx       # 404 page
│
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile menu
│   ├── Footer.tsx          # Footer with newsletter
│   ├── ArticleCard.tsx     # Reusable article card
│   ├── ReportCard.tsx      # Reusable report card
│   └── SectionLabel.tsx    # Reusable eyebrow label
│
├── lib/
│   └── data.ts             # CMS-ready data layer
│
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

---

## Adding Content

### Articles / Insights
Edit `lib/data.ts` — add objects to the `articles` array:

```ts
{
  slug: "your-article-slug",        // URL: /insights/your-article-slug
  title: "Article Title",
  summary: "Short summary...",
  date: "2024-12-01",               // YYYY-MM-DD
  category: "Elections",            // Must match categories array
  readTime: "8 min read",
  body: `<h2>Heading</h2><p>Content...</p>`, // HTML string
}
```

### Reports
Add to the `reports` array in `lib/data.ts`:

```ts
{
  id: "unique-report-id",
  title: "Report Title",
  description: "Description...",
  date: "2024-12-01",
  category: "Policy Brief",
  pages: 42,
  downloadUrl: "/reports/your-file.pdf", // Place PDFs in /public/reports/
}
```

---

## CMS Integration

The `lib/data.ts` file is designed as a drop-in replacement point. To connect a headless CMS (Contentful, Sanity, Notion API, etc.):

1. Replace the static arrays in `lib/data.ts` with async API calls
2. Add `async`/`await` to the page components that consume the data
3. Use Next.js `fetch()` with appropriate cache settings

---

## Deployment

Deploy to Vercel in one command:

```bash
npx vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--ink` | `#0e0e0e` | Primary background |
| `--sand` | `#f4f1ec` | Primary text |
| `--gold` | `#c49a3c` | Accent / highlights |
| `--muted` | `#8a8880` | Secondary text |
| `EB Garamond` | Display font | Headings, titles |
| `DM Sans` | Body font | Body text, UI |

