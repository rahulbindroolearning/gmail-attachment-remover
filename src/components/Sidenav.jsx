import Link from 'next/link';
import { articles } from '@/data/articles';
import styles from './Sidenav.module.css';

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

export default function Sidenav({ currentSlug }) {
  return (
    <aside className={styles.sidenav}>
      <div className={styles.sidenavHeader}>
        <div className={styles.sidenavIcon}>📚</div>
        <div>
          <div className={styles.sidenavTitle}>Gmail Guides</div>
          <div className={styles.sidenavSub}>10 expert articles</div>
        </div>
      </div>

      <nav className={styles.sidenavNav}>
        {articles.map((article) => {
          const isActive = article.slug === currentSlug;
          const color = categoryColors[article.category] || 'var(--green)';
          return (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className={`${styles.sidenavItem} ${isActive ? styles.active : ''}`}
            >
              <div className={styles.sidenavItemInner}>
                <div className={styles.sidenavNum} style={{ background: isActive ? color : undefined }}>
                  {String(article.id).padStart(2, '0')}
                </div>
                <div className={styles.sidenavText}>
                  <div className={styles.sidenavItemTitle}>{article.title.split('–')[0].split('2026')[0].trim()}</div>
                  <div className={styles.sidenavCategory} style={{ color }}>
                    {article.category}
                  </div>
                </div>
              </div>
              {isActive && <div className={styles.activeBar} style={{ background: color }} />}
            </Link>
          );
        })}
      </nav>

      <div className={styles.sidenavCta}>
        <a
          href="https://workspace.google.com/marketplace"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.sidenavCtaBtn}
        >
          📎 Install AttachmentRemover — Free
        </a>
      </div>
    </aside>
  );
}
