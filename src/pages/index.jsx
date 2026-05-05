import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { articles } from '@/data/articles';
import styles from './index.module.css';

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

export default function Home() {
  return (
    <>
      <Head>
        <title>AttachmentRemover — Keep Emails, Ditch the Files</title>
        <meta
          name="description"
          content="Remove heavy attachments from Gmail without losing the email. Keep the same thread, same sender, same timestamp. Free for the first 10 removals."
        />
      </Head>

      <Header />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <div className={styles.heroBadge}>
              <div className={styles.heroBadgeDot}></div>
              Available on Google Workspace Marketplace
            </div>
            <h1>Keep the email.<br /><span className={styles.green}>Ditch the files.</span></h1>
            <p>Remove heavy attachments from Gmail without losing a thing — same thread, same sender, same timestamp. Your inbox, lighter.</p>
            <div className={styles.heroActions}>
              <a
                href="https://workspace.google.com/marketplace"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                Install for Gmail — it&apos;s free
              </a>
              <a href="#how-it-works" className={styles.btnSecondary}>
                See how it works
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className={styles.heroStars}>
              <div className={styles.stars}>★★★★★</div>
              <small>Free for your first 10 removals · No credit card needed</small>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.gmailCard}>
              <div className={styles.gmailCardHeader}>
                <div className={styles.gmailCardHeaderIcon}>📎</div>
                <div>
                  <div className={styles.gmailCardHeaderText}>Attachment Remover</div>
                  <div className={styles.gmailCardHeaderSub}>Select attachments to remove</div>
                </div>
              </div>
              <div className={styles.gmailCardBody}>
                <div className={styles.gmailEmailMeta}>
                  <strong>Q3 Financial Report</strong><br />
                  From: finance@acme.com · 3 attachments · 48 MB
                </div>
                <div className={`${styles.attachmentRow} ${styles.checked}`}>
                  <div className={styles.attLeft}>
                    <div className={styles.attIcon}>📊</div>
                    <div>
                      <div className={styles.attName}>Q3_Report_Final.xlsx</div>
                      <div className={styles.attSize}>32.4 MB</div>
                    </div>
                  </div>
                  <div className={`${styles.attCheck} ${styles.on}`}>✓</div>
                </div>
                <div className={`${styles.attachmentRow} ${styles.checked}`}>
                  <div className={styles.attLeft}>
                    <div className={styles.attIcon}>📄</div>
                    <div>
                      <div className={styles.attName}>Appendix_Data.pdf</div>
                      <div className={styles.attSize}>14.1 MB</div>
                    </div>
                  </div>
                  <div className={`${styles.attCheck} ${styles.on}`}>✓</div>
                </div>
                <div className={styles.attachmentRow}>
                  <div className={styles.attLeft}>
                    <div className={styles.attIcon}>🖼️</div>
                    <div>
                      <div className={styles.attName}>logo_banner.png</div>
                      <div className={styles.attSize}>1.6 MB</div>
                    </div>
                  </div>
                  <div className={styles.attCheck}></div>
                </div>
                <button className={styles.gmailBtn}>✂️ Remove Selected (2)</button>
                <div className={styles.gmailFreeBadge}>
                  🆓 Free tier: <span>3 / 10</span> removals used
                </div>
              </div>
            </div>
            <div className={styles.heroFloatBadge}>
              <div className={styles.heroFloatIcon}>✅</div>
              <div className={styles.heroFloatText}>
                <strong>46.5 MB freed</strong>
                Same thread · Original trashed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Logos strip ───────────────────────────────────────────── */}
      <div className={styles.logosStrip}>
        <div className="container">
          <p className={styles.logosLabel}>Works inside the tools you already use</p>
          <div className={styles.logosRow}>
            {[['📧', 'Gmail'], ['🗂️', 'Google Workspace'], ['☁️', 'Google Drive'], ['🔒', 'Bank-Level Security'], ['🛡️', 'No data stored']].map(([icon, label]) => (
              <div key={label} className={styles.logoPill}>
                <span className={styles.logoPillIcon}>{icon}</span> {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── How it works ─────────────────────────────────────────── */}
      <section className={styles.how} id="how-it-works">
        <div className="container">
          <div className={styles.howHeader}>
            <span className="label">How it works</span>
            <h2>Three steps to a lighter inbox</h2>
            <p>Open any email with attachments — the add-on sidebar appears automatically.</p>
          </div>
          <div className={styles.steps}>
            {[
              { num: 1, title: 'Open an email', body: 'Click any Gmail email with attachments. The Attachment Remover sidebar loads automatically alongside it.' },
              { num: 2, title: 'Select & set options', body: 'Tick individual attachments or hit "Remove ALL". Choose whether to trash the original and set a custom label — all in the sidebar.' },
              { num: 3, title: 'Done — same thread', body: 'A cleaned copy is inserted into the exact same thread with the original sender, timestamp, and body intact.' },
            ].map((step, i) => (
              <div key={step.num} className={styles.stepCard}>
                <div className={styles.stepNum}>{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                {i < 2 && <div className={styles.stepConnector}></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features grid ────────────────────────────────────────── */}
      <section className={styles.features} id="features">
        <div className="container">
          <div className={styles.featuresHeader}>
            <span className="label">Features</span>
            <h2>Everything you&apos;d expect, nothing you don&apos;t</h2>
            <p>Built securely on Google&apos;s official platform for rock-solid reliability.</p>
          </div>
          <div className={styles.featureGrid}>
            {[
              { icon: '🧵', title: 'Stays in the same thread', body: "The cleaned copy drops right back into your original conversation perfectly—not as a new email, and not as a draft." },
              { icon: '👤', title: 'Original sender preserved', body: "From address, To, Cc, Bcc, and original timestamp are all retained exactly — the cleaned copy is indistinguishable from the original." },
              { icon: '🚫', title: 'No re-sending to anyone', body: "We insert the cleaned email directly into your inbox. Nobody in the To, Cc, or Bcc lines receives a new message or notification." },
              { icon: '🗑️', title: 'Trash original — your choice', body: "A checkbox in the sidebar lets you decide: move the original to Trash automatically, or keep it in your inbox alongside the cleaned copy." },
              { icon: '🏷️', title: 'Custom labels per removal', body: 'Enter any label name before removing. Leave blank for the default "Attachments Removed" label, or type none to skip labelling entirely.' },
              { icon: '✂️', title: 'Remove selected or all', body: 'Tick individual attachments to remove only what you want, or hit "Remove ALL" to strip every file in one click. Sizes shown per file.' },
            ].map((feat) => (
              <div key={feat.title} className={styles.featCard}>
                <div className={styles.featIcon}>{feat.icon}</div>
                <h3>{feat.title}</h3>
                <p>{feat.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Articles section ─────────────────────────────────────── */}
      <section className={styles.articlesSection} id="articles">
        <div className="container">
          <div className={styles.articlesHeader}>
            <span className="label">Gmail Guides</span>
            <h2>Master your inbox with expert guides</h2>
            <p>10 in-depth articles to help you get the most out of Gmail in 2026.</p>
          </div>
          <div className={styles.articlesGrid}>
            {articles.map((article) => {
              const color = categoryColors[article.category] || 'var(--green)';
              return (
                <Link key={article.slug} href={`/articles/${article.slug}`} className={styles.articleCard}>
                  <div className={styles.articleCardTop}>
                    <span className={styles.articleNum} style={{ color }}>
                      {String(article.id).padStart(2, '0')}
                    </span>
                    <span className={styles.articleCategory} style={{ color, background: `${color}15` }}>
                      {article.category}
                    </span>
                  </div>
                  <h3 className={styles.articleTitle}>{article.title.split('–')[0].split('2026')[0].trim()}</h3>
                  <p className={styles.articleExcerpt}>{article.excerpt}</p>
                  <div className={styles.articleMeta}>
                    <span className={styles.articleReadTime}>⏱ {article.readTime}</span>
                    <span className={styles.articleArrow}>Read →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className={styles.faq} id="faq">
        <div className="container">
          <div className={styles.faqHeader}>
            <span className="label">FAQ</span>
            <h2>Questions we get a lot</h2>
          </div>
          <div className={styles.faqGrid}>
            {[
              { q: 'Does it actually send the email to anyone?', a: "No. We update your mailbox directly—it's like copying a file into a folder. Nobody in To, Cc, or Bcc receives anything or gets notified." },
              { q: 'What happens to the original email?', a: "That's up to you. A checkbox in the sidebar—checked by default—moves the original to Trash after the cleaned copy is created. Uncheck it to keep both in your inbox." },
              { q: 'Can I remove just some attachments, not all?', a: "Yes. Use the checkboxes to select only the heavy files you want removed. Remaining attachments stay on the cleaned copy exactly as they were." },
              { q: 'Can I use a custom label instead of the default one?', a: 'Yes. Leave blank for the default "Attachments Removed" label, type any name to create a custom label, or type none to skip labelling entirely.' },
              { q: 'Does uninstalling reset my free quota?', a: "No. Your usage is linked directly to your Google account securely. Reinstalling does not reset the counter." },
              { q: 'Is my email data stored anywhere?', a: "Never. The add-on runs entirely within your Google account. No email content, metadata, or attachments are sent to or stored on our servers." },
              { q: 'What Gmail permissions does it need and why?', a: "We only request permissions necessary to do the job: managing your labels, moving emails to trash, and securely updating your inbox with clean copies." },
              { q: 'Will inline images be removed?', a: "No. Inline images embedded directly in the email body are never touched — only true file attachments listed in the sidebar are removable." },
            ].map((item) => (
              <div key={item.q} className={styles.faqItem}>
                <div className={styles.faqQ}>{item.q}</div>
                <div className={styles.faqA}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ───────────────────────────────────────────── */}
      <div className={styles.ctaBanner}>
        <div className="container">
          <h2>Your inbox is waiting to breathe.</h2>
          <p>Free to install. No credit card needed.</p>
          <a
            href="https://workspace.google.com/marketplace"
            className="btn-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/assets/images/app_logo.png" alt="AttachmentRemover logo" width={25} height={25} style={{ objectFit: 'contain' }} />
            Install for Gmail — Free
          </a>
          <div className={styles.ctaSub}>Works with Gmail and Google Workspace accounts</div>
        </div>
      </div>

      <Footer />
    </>
  );
}
