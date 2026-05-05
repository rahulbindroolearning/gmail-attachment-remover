import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidenav from '@/components/Sidenav';
import { articles, getArticleBySlug, getAllSlugs } from '@/data/articles';
import styles from './[slug].module.css';

// Convert markdown-like content to HTML
function parseContent(content) {
  return content
    .trim()
    // Code blocks
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Bold
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    // H3
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    // H2
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    // H1
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    // Tables (simple)
    .replace(/^\|(.+)\|$/gm, (match) => {
      const cells = match.split('|').filter(c => c.trim() !== '');
      if (cells.every(c => /^[-:\s]+$/.test(c))) return '<tr class="thead-separator"></tr>';
      return '<tr>' + cells.map(c => `<td>${c.trim()}</td>`).join('') + '</tr>';
    })
    // Wrap table rows in table
    .replace(/(<tr>.*?<\/tr>\n?)+/gs, (match) => {
      const rows = match.split('\n').filter(r => r.trim() && !r.includes('thead-separator'));
      if (rows.length === 0) return match;
      const [header, ...body] = rows;
      const headerCells = header.replace(/<tr>|<\/tr>/g, '').split(/<td>|<\/td>/).filter(c => c.trim());
      const headerRow = '<tr>' + headerCells.map(c => `<th>${c}</th>`).join('') + '</tr>';
      const bodyRows = body.join('\n');
      return `<table><thead>${headerRow}</thead><tbody>${bodyRows}</tbody></table>`;
    })
    // Unordered lists
    .replace(/(^- .+$\n?)+/gm, (match) => {
      const items = match.trim().split('\n').map(line => `<li>${line.replace(/^- /, '')}</li>`).join('');
      return `<ul>${items}</ul>`;
    })
    // Ordered lists
    .replace(/(^\d+\. .+$\n?)+/gm, (match) => {
      const items = match.trim().split('\n').map(line => `<li>${line.replace(/^\d+\. /, '')}</li>`).join('');
      return `<ol>${items}</ol>`;
    })
    // Blockquotes / callouts starting with *
    .replace(/^\*"(.+)"\*$/gm, '<blockquote>$1</blockquote>')
    // Paragraphs (lines not starting with tags)
    .replace(/^(?!<[a-zA-Z]|$)(.+)$/gm, '<p>$1</p>')
    // Clean up empty lines
    .replace(/\n{3,}/g, '\n\n');
}

const categoryColors = {
  'AI & Productivity': '#7c3aed',
  'Search & Filtering': '#0ea5e9',
  'Inbox Organization': '#f59e0b',
  'Automation': '#10b981',
  'Security': '#ef4444',
  'Mobile Productivity': '#8b5cf6',
  'Task Management': '#06b6d4',
  'Email Control': '#f97316',
  'Identity Management': '#ec4899',
  'Storage & Maintenance': '#84cc16',
};

export default function ArticlePage({ article, prevArticle, nextArticle }) {
  const color = categoryColors[article.category] || 'var(--green)';
  const html = parseContent(article.content);

  return (
    <>
      <Head>
        <title>{article.title} — AttachmentRemover</title>
        <meta name="description" content={article.excerpt} />
      </Head>

      <Header />

      <div className={styles.layout}>
        <Sidenav currentSlug={article.slug} />

        <main className={styles.main}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/#articles">Articles</Link>
            <span>›</span>
            <span>{article.category}</span>
          </div>

          {/* Article header */}
          <div className={styles.articleHeader}>
            <div className={styles.articleMeta}>
              <span className={styles.articleNum} style={{ color }}>
                Article {String(article.id).padStart(2, '0')}
              </span>
              <span className={styles.articleCategory} style={{ color, background: `${color}18` }}>
                {article.category}
              </span>
              <span className={styles.articleReadTime}>⏱ {article.readTime}</span>
            </div>
            <h1 className={styles.articleTitle}>{article.title}</h1>
            <p className={styles.articleExcerpt}>{article.excerpt}</p>
          </div>

          {/* Article body */}
          <article
            className={styles.articleBody}
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* Install CTA */}
          <div className={styles.inlineCta}>
            <div className={styles.inlineCtaLeft}>
              <div className={styles.inlineCtaIcon}>📎</div>
              <div>
                <strong>Stop fighting email storage</strong>
                <p>AttachmentRemover removes Gmail attachments without losing the thread. Free for first 10 removals.</p>
              </div>
            </div>
            <a
              href="https://workspace.google.com/marketplace"
              className={styles.inlineCtaBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Install Free →
            </a>
          </div>

          {/* Prev / Next navigation */}
          <div className={styles.articleNav}>
            {prevArticle ? (
              <Link href={`/articles/${prevArticle.slug}`} className={styles.articleNavItem}>
                <span className={styles.articleNavLabel}>← Previous</span>
                <span className={styles.articleNavTitle}>{prevArticle.title.split('–')[0].split('2026')[0].trim()}</span>
              </Link>
            ) : <div />}

            {nextArticle ? (
              <Link href={`/articles/${nextArticle.slug}`} className={`${styles.articleNavItem} ${styles.articleNavNext}`}>
                <span className={styles.articleNavLabel}>Next →</span>
                <span className={styles.articleNavTitle}>{nextArticle.title.split('–')[0].split('2026')[0].trim()}</span>
              </Link>
            ) : <div />}
          </div>

          {/* All articles grid (mobile-friendly) */}
          <div className={styles.allArticles}>
            <h2 className={styles.allArticlesTitle}>All Gmail Guides</h2>
            <div className={styles.allArticlesGrid}>
              {articles.map((a) => {
                const c = categoryColors[a.category] || 'var(--green)';
                return (
                  <Link
                    key={a.slug}
                    href={`/articles/${a.slug}`}
                    className={`${styles.allArticleItem} ${a.slug === article.slug ? styles.allArticleItemActive : ''}`}
                  >
                    <span className={styles.allArticleNum} style={{ color: c }}>
                      {String(a.id).padStart(2, '0')}
                    </span>
                    <span className={styles.allArticleItemTitle}>
                      {a.title.split('–')[0].split('2026')[0].trim()}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: getAllSlugs(),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = getArticleBySlug(params.slug);
  const idx = articles.findIndex((a) => a.slug === params.slug);
  const prevArticle = idx > 0 ? articles[idx - 1] : null;
  const nextArticle = idx < articles.length - 1 ? articles[idx + 1] : null;

  return {
    props: {
      article,
      prevArticle: prevArticle ? { slug: prevArticle.slug, title: prevArticle.title } : null,
      nextArticle: nextArticle ? { slug: nextArticle.slug, title: nextArticle.title } : null,
    },
  };
}
