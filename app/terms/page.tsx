const BLUE = '#0166BE';
const BLACK = '#111111';
const GRAY = '#4a4a4a';
const BORDER = '#e5e7eb';

export const metadata = {
  title: 'Terms of Service — Alpha 1 Energy Group',
  description: 'Terms and conditions for using Alpha 1 Energy Group services.',
};

export default function TermsPage() {
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
        <h1 style={{ color: BLACK, fontSize: '40px', fontWeight: '900', letterSpacing: '-1px', margin: '0 0 8px' }}>Terms of Service</h1>
        <p style={{ color: GRAY, fontSize: '14px', margin: '0 0 40px' }}>Last updated: May 22, 2026</p>

        <div style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '14px', padding: '40px 36px', color: GRAY, fontSize: '15px', lineHeight: '1.8' }}>
          <p style={{ margin: '0 0 24px' }}>
            These Terms of Service ("Terms") govern your use of the alpha1energy.com website and the free
            electric bill review services provided by Alpha 1 Energy Group ("Alpha 1," "we," "us," or "our"). By
            using our site or submitting a review request, you agree to these Terms.
          </p>

          <h2 style={{ color: BLACK, fontSize: '20px', fontWeight: '800', margin: '32px 0 12px' }}>1. Our service</h2>
          <p style={{ margin: '0 0 24px' }}>
            Alpha 1 Energy Group is an independent energy consultant. We review your current commercial
            electric or gas supply contract and compare it to available market rates from licensed suppliers
            in deregulated states (New York, New Jersey, Pennsylvania, and Connecticut). The review is
            provided free of charge with no obligation to switch suppliers.
          </p>

          <h2 style={{ color: BLACK, fontSize: '20px', fontWeight: '800', margin: '32px 0 12px' }}>2. We are not your utility</h2>
          <p style={{ margin: '0 0 24px' }}>
            Alpha 1 Energy Group is not a utility company. Your local utility continues to deliver electricity
            and gas to your business and remains responsible for maintenance, outages, and emergencies. We
            help you compare the supply portion of your bill — the rate you pay for the energy itself.
          </p>

          <h2 style={{ color: BLACK, fontSize: '20px', fontWeight: '800', margin: '32px 0 12px' }}>3. No guarantees of savings</h2>
          <p style={{ margin: '0 0 24px' }}>
            We work hard to identify the best available supply options for your business, but market rates
            change frequently and your specific usage profile, contract terms, and utility zone all affect
            pricing. We do not guarantee any specific dollar amount of savings. If we don't see a better
            option than what you have today, we will tell you that.
          </p>

          <h2 style={{ color: BLACK, fontSize: '20px', fontWeight: '800', margin: '32px 0 12px' }}>4. How we are paid</h2>
          <p style={{ margin: '0 0 24px' }}>
            If you choose to enroll with a new supplier through us, Alpha 1 Energy Group receives a commission
            from that supplier. You pay nothing to us, and your supply rate is the same whether you enroll
            through us or directly with the supplier. If you do not switch, we are not paid for the review.
          </p>

          <h2 style={{ color: BLACK, fontSize: '20px', fontWeight: '800', margin: '32px 0 12px' }}>5. Information you provide</h2>
          <p style={{ margin: '0 0 24px' }}>
            You agree that the contact information, utility account details, and any documents you upload are
            accurate and that you are authorized to share them on behalf of the business. You retain ownership
            of any documents you upload. Our handling of your information is described in our{' '}
            <a href="/privacy" style={{ color: BLUE, textDecoration: 'none' }}>Privacy Policy</a>.
          </p>

          <h2 style={{ color: BLACK, fontSize: '20px', fontWeight: '800', margin: '32px 0 12px' }}>6. Communications</h2>
          <p style={{ margin: '0 0 24px' }}>
            By submitting our form you consent to receive a follow-up by phone, text, or email from Alpha 1
            Energy Group regarding your review. You can ask us to stop contacting you at any time by replying
            STOP to a text or by calling the number below.
          </p>

          <h2 style={{ color: BLACK, fontSize: '20px', fontWeight: '800', margin: '32px 0 12px' }}>7. No professional advice</h2>
          <p style={{ margin: '0 0 24px' }}>
            Our reviews provide market and contract comparisons. They are not legal, tax, accounting, or
            investment advice. You should consult a licensed professional for advice specific to your
            business.
          </p>

          <h2 style={{ color: BLACK, fontSize: '20px', fontWeight: '800', margin: '32px 0 12px' }}>8. Limitation of liability</h2>
          <p style={{ margin: '0 0 24px' }}>
            To the maximum extent permitted by law, Alpha 1 Energy Group, its owners, and its staff are not
            liable for indirect, incidental, or consequential damages arising from your use of our services.
            Our total liability for any claim related to our services is limited to the amount you paid us
            for those services — which, for a free review, is zero.
          </p>

          <h2 style={{ color: BLACK, fontSize: '20px', fontWeight: '800', margin: '32px 0 12px' }}>9. Changes to these Terms</h2>
          <p style={{ margin: '0 0 24px' }}>
            We may update these Terms occasionally. Material changes will be reflected by an updated "Last
            updated" date at the top of this page. Continued use of the site after changes are posted
            constitutes acceptance of the updated Terms.
          </p>

          <h2 style={{ color: BLACK, fontSize: '20px', fontWeight: '800', margin: '32px 0 12px' }}>10. Contact us</h2>
          <p style={{ margin: '0 0 8px' }}>Questions about these Terms?</p>
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
          <a href="/privacy" style={{ color: '#9ca3af', textDecoration: 'none' }}>Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
}
