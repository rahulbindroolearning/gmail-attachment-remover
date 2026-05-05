# AttachmentRemover — Next.js Web Project

A modern, production-ready Next.js application for **AttachmentRemover**, a Gmail add-on that removes attachments without losing the email thread.

---

## 🗂 Project Structure

```
attachmentremover/
├── public/
│   └── assets/
│       └── images/
│           ├── app_logo.png
│           └── Attachment_Remover_Logo.png
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Shared sticky navigation bar
│   │   ├── Header.module.css
│   │   ├── Footer.jsx           # Shared footer with links
│   │   ├── Footer.module.css
│   │   ├── Sidenav.jsx          # Article sidebar navigation (all 10 articles)
│   │   └── Sidenav.module.css
│   ├── data/
│   │   └── articles.js          # All 10 article data (title, slug, content, etc.)
│   ├── pages/
│   │   ├── _app.jsx             # Global app wrapper
│   │   ├── index.jsx            # Homepage (hero, features, FAQ, article grid)
│   │   ├── index.module.css
│   │   ├── privacy.jsx          # Privacy Policy page
│   │   ├── terms.jsx            # Terms of Service page
│   │   ├── legal.module.css     # Shared CSS for legal pages
│   │   └── articles/
│   │       ├── [slug].jsx       # Dynamic route for all 10 article pages
│   │       └── [slug].module.css
│   └── styles/
│       └── globals.css          # CSS variables, reset, global styles
├── jsconfig.json                # Path alias: @/* → src/*
├── next.config.js
├── package.json
└── .gitignore
```

---

## 📄 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, how it works, features, article grid, FAQ, CTA |
| `/articles/enable-gemini-personal-intelligence-gmail` | Article 1 |
| `/articles/gmail-search-operators-guide` | Article 2 |
| `/articles/gmail-multiple-inboxes-vs-priority-inbox` | Article 3 |
| `/articles/gmail-automation-filters-templates` | Article 4 |
| `/articles/gmail-confidential-mode` | Article 5 |
| `/articles/gmail-mobile-optimization` | Article 6 |
| `/articles/gmail-google-tasks-integration` | Article 7 |
| `/articles/gmail-undo-send-schedule-send` | Article 8 |
| `/articles/gmail-aliases-multiple-email-identities` | Article 9 |
| `/articles/gmail-cleanup-tips-storage-optimization` | Article 10 |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (required for Next.js 14)
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## ☁️ Deploy to Vercel

### Option A: Vercel CLI (recommended)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js and configures everything.

### Option B: GitHub Integration

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the GitHub repository
4. Leave all settings as default (Vercel auto-detects Next.js)
5. Click **Deploy**

That's it. Vercel handles build, CDN, and SSL automatically.

---

## 🧩 Architecture Decisions

### Why Next.js over Express?

| Factor | Express | Next.js ✅ |
|--------|---------|-----------|
| Routing | Manual setup | File-based, automatic |
| SEO | Extra work | Built-in Head, SSG/SSR |
| Image optimization | Manual | next/image built-in |
| Vercel deployment | Works | Native — zero config |
| Static generation | Manual | getStaticProps/Paths |
| CSS Modules | Extra setup | Built-in support |

Next.js was chosen because:
1. **Native Vercel support** — zero-config deployment
2. **Static Site Generation (SSG)** — article pages are pre-rendered at build time for maximum performance and SEO
3. **File-based routing** — clean, maintainable URL structure
4. **CSS Modules** — scoped styles with zero runtime overhead
5. **next/image** — automatic image optimization

### Shared Components

- **Header** — sticky navbar with logo, nav links, and install CTA
- **Footer** — brand description + 4-column link grid
- **Sidenav** — lists all 10 articles with active state, color-coded by category

### Article Architecture

All article content lives in `src/data/articles.js` as a structured array. The dynamic route `pages/articles/[slug].jsx` uses `getStaticPaths` + `getStaticProps` to generate all 10 pages at build time — no server required.

To add a new article: simply add an entry to the `articles` array and it's automatically routed, linked in the sidenav, and shown on the homepage grid.

---

## 🎨 Design System

CSS custom properties (variables) defined in `globals.css`:

```css
--green:       #1a9e5c   /* Primary brand color */
--green-light: #e6f7ef   /* Light green background */
--green-dark:  #116e3f   /* Dark green for hover states */
--ink:         #0d1f14   /* Primary text */
--ink-3:       #52685c   /* Secondary/muted text */
--border:      #d8e8df   /* Border color */
--font:        'Plus Jakarta Sans', sans-serif
--mono:        'DM Mono', monospace
```

---

## 📦 Adding or Editing Articles

Edit `src/data/articles.js`:

```js
{
  id: 11,
  slug: "your-article-slug",       // URL: /articles/your-article-slug
  title: "Your Article Title",
  category: "Category Name",
  readTime: "5 min read",
  excerpt: "Short description shown in cards and meta tags.",
  content: `
## Your heading

Your markdown-like content here.

- List item
- Another item
  `,
}
```

The article is automatically:
- Routed at `/articles/your-article-slug`
- Listed in the homepage article grid
- Added to the sidenav on all article pages
- Linked in prev/next navigation
