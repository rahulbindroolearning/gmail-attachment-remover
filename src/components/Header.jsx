import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.navLogo}>
          <div className={styles.navLogoIcon}>
            <Image
              src="/assets/images/app_logo.png"
              alt="AttachmentRemover logo"
              width={34}
              height={34}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <span>Attachment Remover</span>
        </Link>

        <ul className={styles.navLinks}>
          <li><Link href="/#how-it-works">How it works</Link></li>
          <li><Link href="/#features">Features</Link></li>
          <li><Link href="/#faq">FAQ</Link></li>
          <li><Link href="/articles/enable-gemini-personal-intelligence-gmail">Blog</Link></li>
        </ul>

        <a
          href="https://workspace.google.com/marketplace"
          className={styles.navCta}
          target="_blank"
          rel="noopener noreferrer"
        >
          Install Free →
        </a>
      </div>
    </nav>
  );
}
