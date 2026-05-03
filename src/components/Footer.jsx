import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <div className={styles.footerBrandName}>
            <div className={styles.footerBrandIcon}>
              <Image
                src="/assets/images/app_logo.png"
                alt="AttachmentRemover logo"
                width={35}
                height={35}
                style={{ objectFit: 'contain' }}
              />
            </div>
            AttachmentRemover
          </div>
          <p className={styles.footerDesc}>
            Remove attachments from Gmail without losing the email. Same thread, same sender,
            same timestamp. Built for people who care about their inbox.
          </p>
        </div>

        <div className={styles.footerCol}>
          <h4>Product</h4>
          <ul>
            <li><Link href="/#how-it-works">How it works</Link></li>
            <li><Link href="/#features">Features</Link></li>
            <li>
              <a href="https://workspace.google.com/marketplace" target="_blank" rel="noopener noreferrer">
                Install
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Support</h4>
          <ul>
            <li><Link href="/#faq">FAQ</Link></li>
            <li><a href="mailto:support@attachmentremover.com">Contact</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Legal</h4>
          <ul>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>© 2025 AttachmentRemover. All rights reserved.</span>
        <div className={styles.footerLinks}>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="mailto:support@attachmentremover.com">Contact</a>
        </div>
      </div>
    </footer>
  );
}
