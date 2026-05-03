import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './legal.module.css';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service — AttachmentRemover</title>
        <meta name="description" content="AttachmentRemover terms of service." />
      </Head>
      <Header />
      <div className={styles.legalPage}>
        <div className={styles.legalContainer}>
          <nav className={styles.back}>
            <Link href="/">← Back to AttachmentRemover</Link>
          </nav>
          <h1>Terms of Service</h1>
          <p className={styles.updated}>Last updated: January 2025</p>

          <h2>1. Acceptance</h2>
          <p>By installing or using AttachmentRemover, you agree to these terms. If you do not agree, do not install or use the add-on.</p>

          <h2>2. Description of service</h2>
          <p>AttachmentRemover is a Gmail add-on that removes attachments from emails and inserts a cleaned copy into the same Gmail thread. The free tier allows 10 attachment removals. Additional removals require a paid Pro licence.</p>

          <h2>3. Free tier and paid plans</h2>
          <p>The free tier provides 10 attachment removals at no cost. The Pro plan provides unlimited removals for $2.99/month or $24.99/year. Pricing may change with 30 days notice. Refunds are handled on a case-by-case basis — contact support within 7 days of purchase.</p>

          <h2>4. Acceptable use</h2>
          <p>You may not use this add-on to:</p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Attempt to reverse-engineer, resell, or redistribute the add-on</li>
            <li>Circumvent the free tier quota through account manipulation</li>
          </ul>

          <h2>5. Disclaimer of warranties</h2>
          <p>The add-on is provided "as is" without warranties of any kind. We do not guarantee that the add-on will be error-free or uninterrupted. You are responsible for maintaining backups of important emails before using this tool.</p>

          <h2>6. Limitation of liability</h2>
          <p>To the maximum extent permitted by law, we are not liable for any loss of data, emails, or attachments resulting from use of this add-on. Always verify that your cleaned email appears correctly in Gmail before permanently deleting the original from Trash.</p>

          <h2>7. Changes to the service</h2>
          <p>We reserve the right to modify or discontinue the add-on at any time. We will provide reasonable notice for material changes.</p>

          <h2>8. Governing law</h2>
          <p>These terms are governed by the laws of your country of residence, without regard to conflict of law provisions.</p>

          <h2>9. Contact</h2>
          <p>For questions about these terms, contact <a href="mailto:support@attachmentremover.com">support@attachmentremover.com</a>.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
