const BLUE = '#0166BE';
const BLACK = '#111111';
const GRAY = '#4a4a4a';
const BORDER = '#e5e7eb';

export const metadata = {
  title: 'Privacy Policy — Alpha 1 Energy Group',
  description: 'How Alpha 1 Energy Group collects, uses, and protects your information.',
};

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#F0F0F0', fontFamily: "'Inter', -apple-system, sans-serif", color: BLACK }}>
      {/* Header */}
      <header className="site-header" style={{ background: '#F0F0F0', borderBottom: `1px solid ${BORDER}`, height: '148px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '0 40px' }}>
        <a href="/" style={{ display: 'inline-block' }}>
          <img src="/alpha1logo.png" alt="Alpha 1 Energy Group" style={{ width: '200px' }} />
        </a>
        <a href="/" style={{ position: 'absolute', left: '40px', color: GRAY, fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>← Back to home</a>
      </header>

      {/* Content */}
      <main style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 24px 96px' }}>
        <p style={{ color: BLUE, fontWeight: '700', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>Legal</p>
        <h1 style={{ color: BLACK, fontSize: '40px', fontWeight: '900', letterSpacing: '-1px', margin: '0 0 8px' }}>Privacy Policy</h1>
        <p style={{ color: GRAY, fontSize: '14px', margin: '0 0 40px' }}>Last updated: May 22, 2026</p>

        <div style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '14px', padding: '40px 36px', color: GRAY, fontSize: '15px', lineHeight: '1.8' }}>
          <p style={{ margin: '0 0 24px' }}>
            Alpha 1 Energy Group ("we," "us," or "our") respects your privacy. This Privacy Policy explains what
            information we collect when you request a free electric bill review, how we use it, and the choices
            you have.
          </p>

          <h2 style={{ color: BLACK, fontSize: '20px', fontWeight: '800', margin: '32px 0 12px' }}>1. Information we collect</h2>
          <p style={{ margin: '0 0 12px' }}>When you submit our review form, we collect:</p>
          <ul style={{ margin: '0 0 16px', paddingLeft: '22px' }}>
            <li>Business name and contact name</li>
            <li>Phone number and email address</li>
            <li>Utility company name and service type (electric, gas, or both)</li>
            <li>Any notes you choose to share</li>
            <li>Copies of utility bills or supporting documents you upload</li>
          </ul>
          <p style={{ margin: '0 0 24px' }}>We do not collect Social Security numbers, banking information, or payment details.</p>

          <h2 style={{ color: BLACK, fontSize: '20px', fontWeight: '800', margin: '32px 0 12px' }}>2. How we use your information</h2>
          <p style={{ margin: '0 0 12px' }}>We use the information you provide solely to:</p>
          <ul style={{ margin: '0 0 24px', paddingLeft: '22px' }}>
            <li>Review your current electric or gas supply contract and rates</li>
            <li>Contact you with our analysis and any available options</li>
            <li>Respond to your questions and follow up about your review</li>
          </ul>
          <p style={{ margin: '0 0 24px' }}>We do not sell your information. We do not share it with marketers.</p>

          <h2 style={{ color: BLACK, fontSize: '20px', fontWeight: '800', margin: '32px 0 12px' }}>3. Sharing with energy suppliers</h2>
          <p style={{ margin: '0 0 24px' }}>
            If you choose to enroll with a new supplier through us, we will share the information necessary to
            complete that enrollment (typically your business name, service address, and utility account
            number) with the supplier you select. We will never share your information with a supplier without
            your explicit consent.
          </p>

          <h2 style={{ color: BLACK, fontSize: '20px', fontWeight: '800', margin: '32px 0 12px' }}>4. How we store your information</h2>
          <p style={{ margin: '0 0 24px' }}>
            Form submissions are stored in our customer relationship system (Notion). Uploaded utility bills
            are stored in private cloud storage (Supabase) and accessed via expiring signed links. We use
            industry-standard security practices to protect this data.
          </p>

          <h2 style={{ color: BLACK, fontSize: '20px', fontWeight: '800', margin: '32px 0 12px' }}>5. How long we keep your information</h2>
          <p style={{ margin: '0 0 24px' }}>
            We retain your information for as long as needed to provide our services and for legitimate
            business records (typically up to seven years for documents tied to a contract enrollment). You can
            request deletion at any time using the contact info below.
          </p>

          <h2 style={{ color: BLACK, fontSize: '20px', fontWeight: '800', margin: '32px 0 12px' }}>6. Your rights</h2>
          <p style={{ margin: '0 0 24px' }}>
            You can request a copy of the information we hold about you, ask us to correct it, or ask us to
            delete it. To do so, email or call us using the contact details below.
          </p>

          <h2 style={{ color: BLACK, fontSize: '20px', fontWeight: '800', margin: '32px 0 12px' }}>7. Cookies</h2>
          <p style={{ margin: '0 0 24px' }}>
            Our website does not use tracking cookies or third-party advertising tools. We may use minimal
            functional cookies required for the site to work.
          </p>

          <h2 style={{ color: BLACK, fontSize: '20px', fontWeight: '800', margin: '32px 0 12px' }}>8. Contact us</h2>
          <p style={{ margin: '0 0 8px' }}>Questions about this policy or your information?</p>
          <p style={{ margin: 0 }}>
            Alpha 1 Energy Group<br />
            Phone: <a href="tel:9293943873" style={{ color: BLUE, textDecoration: 'none' }}>(929) 394-3873</a><br />
            Web: <a href="https://alpha1energy.com" style={{ color: BLUE, textDecoration: 'none' }}>alpha1energy.com</a>
          </p>
        </div>
      </main>

      <footer style={{ borderTop: `1px solid ${BORDER}`, padding: '32px 24px', textAlign: 'center' }}>
        <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0 }}>
          © 2026 Alpha 1 Energy Group. All rights reserved. &nbsp;·&nbsp;{' '}
          <a href="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Home</a> &nbsp;·&nbsp;{' '}
          <a href="/terms" style={{ color: '#9ca3af', textDecoration: 'none' }}>Terms of Service</a>
        </p>
      </footer>
    </div>
  );
}
