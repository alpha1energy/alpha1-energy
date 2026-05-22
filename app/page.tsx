'use client';
import { useState } from 'react';

const IconPhone = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.49 6.49l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const IconInstagram = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const IconGlobe = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const IconBolt = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const IconDollar = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const IconShield = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const IconSearch = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const IconTrendUp = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);

const IconFileUp = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="12" y1="18" x2="12" y2="12"/>
    <polyline points="9 15 12 12 15 15"/>
  </svg>
);

const IconFileCheck = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <polyline points="9 15 11 17 15 13"/>
  </svg>
);

const IconLock = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const IconMapPin = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconCheck = ({ size = 38 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const IconClock = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const IconArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const BLUE = '#0166BE';
const BLACK = '#111111';
const GRAY = '#4a4a4a';
const BORDER = '#e5e7eb';
const LIGHT = '#F0F0F0';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '', businessName: '', phone: '', email: '',
    utilityCompany: '', serviceType: '', notes: '',
  });
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    Object.entries(formData).forEach(([k, v]) => data.append(k, v));
    files.forEach((f) => data.append('file', f));
    const res = await fetch('/api/submit', { method: 'POST', body: data });
    if (res.ok) setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', background: LIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: "'Inter', -apple-system, sans-serif" }}>
        <div style={{ textAlign: 'center', maxWidth: '500px', width: '100%' }}>
          <div style={{ width: '84px', height: '84px', background: BLUE, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', color: 'white' }}>
            <IconCheck size={38} />
          </div>
          <h2 style={{ color: BLACK, fontSize: '32px', fontWeight: '800', marginBottom: '14px', letterSpacing: '-0.5px' }}>You're All Set!</h2>
          <p style={{ color: GRAY, fontSize: '17px', lineHeight: '1.75', marginBottom: '32px' }}>
            Our energy experts will review your bill and reach out within{' '}
            <strong style={{ color: BLUE }}>24-48 hours</strong> with your potential savings.
          </p>
          <div style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '20px 28px', marginBottom: '20px' }}>
            <p style={{ color: BLACK, fontWeight: '700', fontSize: '15px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span style={{ color: BLUE }}><IconPhone size={16} /></span>
              Questions? Call or text (929) 394-3873
            </p>
          </div>
          <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0 }}>© 2025 Alpha 1 Energy Group · alpha1energy.com</p>
        </div>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '11px 14px',
    background: 'white', border: `1.5px solid ${BORDER}`,
    borderRadius: '8px', fontSize: '14px', color: BLACK,
    outline: 'none', boxSizing: 'border-box',
    fontFamily: "'Inter', -apple-system, sans-serif",
    transition: 'border-color 0.15s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block', color: '#6b7280',
    fontWeight: '600', fontSize: '11px',
    marginBottom: '6px', letterSpacing: '0.7px',
    textTransform: 'uppercase' as const,
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F0F0F0', fontFamily: "'Inter', -apple-system, sans-serif", color: BLACK }}>

      {/* Announcement Bar */}
      <div className="announcement-bar" style={{ background: BLUE, padding: '9px 20px', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: 'white', letterSpacing: '0.2px' }}>
          Free Energy Bill Review — No Obligation &nbsp;·&nbsp; Serving NYC, NJ, PA & CT
        </p>
      </div>

      {/* Header */}
      <header className="site-header" style={{ background: '#F0F0F0', borderBottom: `1px solid ${BORDER}`, height: '148px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '0 40px' }}>
        <img src="/alpha1logo.png" alt="Alpha 1 Energy Group" style={{ width: '200px' }} />
        <a href="tel:9293943873" className="phone-btn" style={{ position: 'absolute', right: '40px', display: 'inline-flex', alignItems: 'center', gap: '8px', background: BLUE, color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px', fontWeight: '700', letterSpacing: '0.1px' }}>
          <IconPhone size={16} /> (929) 394-3873
        </a>
      </header>

      {/* Hero */}
      <section className="hero-section" style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '700px' }}>

        {/* Left — dark skyline panel */}
        <div className="hero-left" style={{ position: 'relative', backgroundImage: 'url(https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200)', backgroundSize: 'cover', backgroundPosition: 'center bottom', overflow: 'hidden' }}>
          {/* Gradient overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(5,18,40,0.96) 0%, rgba(1,60,130,0.82) 60%, rgba(1,102,190,0.70) 100%)' }} />
          {/* Content */}
          <div style={{ position: 'relative', zIndex: 1, padding: '72px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', boxSizing: 'border-box' }}>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '100px', padding: '6px 14px', marginBottom: '32px', width: 'fit-content' }}>
              <span style={{ width: '7px', height: '7px', background: '#22c55e', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 6px #22c55e' }} />
              <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '12px', fontWeight: '600', letterSpacing: '0.5px' }}>Free Review · No Obligation</span>
            </div>

            <h1 style={{ fontSize: 'clamp(32px, 3.2vw, 50px)', fontWeight: '900', lineHeight: '1.1', marginBottom: '16px', letterSpacing: '-1.5px', color: 'white' }}>
              Rising Energy Costs<br />
              Impact Your <span style={{ color: '#5ab4ff' }}>Bottom Line.</span>
            </h1>

            <p className="subheadline" style={{ color: '#5ab4ff', fontSize: '17px', fontWeight: '700', marginBottom: '24px', letterSpacing: '-0.2px' }}>
              We Analyze. You Save. Let's Optimize Your Energy.
            </p>

            <p className="description" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px', lineHeight: '1.8', marginBottom: '40px', maxWidth: '400px' }}>
              We help <strong style={{ color: 'white', fontWeight: '700' }}>businesses</strong> and{' '}
              <strong style={{ color: 'white', fontWeight: '700' }}>commercial properties</strong> review their
              electric & gas supply contracts to ensure they're getting <strong style={{ color: '#5ab4ff', fontWeight: '700' }}>competitive rates.</strong>
            </p>

            {/* Stats */}
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px' }}>
              {[
                { number: '100%', label: 'Free' },
                { number: '24-48hr', label: 'Turnaround' },
                { number: '0', label: 'Obligation' },
              ].map((s) => (
                <div key={s.label} className="stat-cell" style={{ background: 'rgba(255,255,255,0.07)', padding: '18px 12px', textAlign: 'center' }}>
                  <div className="stat-number" style={{ fontSize: '22px', fontWeight: '900', color: '#5ab4ff', marginBottom: '3px', letterSpacing: '-0.5px' }}>{s.number}</div>
                  <div className="stat-label" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.55)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Feature list */}
            <div className="feature-list" style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
              {[
                { icon: <IconDollar size={15} />, text: 'Identify potential savings on your utility bills' },
                { icon: <IconSearch size={15} />, text: 'Expert contract & usage analysis' },
                { icon: <IconShield size={15} />, text: 'Backed by real-world energy infrastructure experience. We understand energy from the ground up.' },
                { icon: <IconBolt size={15} />, text: 'Avoid auto-renewals and rate spikes' },
              ].map((item) => (
                <div key={item.text} className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '11px', color: 'rgba(255,255,255,0.78)', fontSize: '14px', lineHeight: '1.5' }}>
                  <span style={{ color: '#5ab4ff', flexShrink: 0, display: 'flex', marginTop: '2px' }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — form panel */}
        <div className="hero-right" style={{ background: '#F0F0F0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 40px' }}>
        <div className="hero-form-card" style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '16px', padding: '40px 36px', boxShadow: '0 8px 40px rgba(0,0,0,0.10)', position: 'relative', overflow: 'hidden', width: '100%', maxWidth: '480px' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: BLUE }} />

          <div style={{ marginBottom: '28px' }}>
            <h2 style={{ color: BLACK, fontSize: '20px', fontWeight: '800', marginBottom: '6px', letterSpacing: '-0.3px' }}>Get Your Free Bill Review</h2>
            <p style={{ color: GRAY, fontSize: '14px', margin: 0 }}>Upload your bill and we'll identify your savings.</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div className="form-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[
                { name: 'name', label: 'Full Name', placeholder: 'John Smith' },
                { name: 'businessName', label: 'Business Name', placeholder: 'ABC Restaurant' },
              ].map((f) => (
                <div key={f.name}>
                  <label style={labelStyle}>{f.label}</label>
                  <input name={f.name} required onChange={handleChange} placeholder={f.placeholder} style={inputStyle}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = BLUE}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = BORDER} />
                </div>
              ))}
            </div>

            <div className="form-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[
                { name: 'phone', label: 'Phone Number', placeholder: '(917) 555-1234', type: 'tel' },
                { name: 'email', label: 'Email Address', placeholder: 'john@business.com', type: 'email' },
              ].map((f) => (
                <div key={f.name}>
                  <label style={labelStyle}>{f.label}</label>
                  <input name={f.name} type={f.type} required onChange={handleChange} placeholder={f.placeholder} style={inputStyle}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = BLUE}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = BORDER} />
                </div>
              ))}
            </div>

            <div>
              <label style={labelStyle}>Utility Company</label>
              <input name="utilityCompany" required onChange={handleChange} placeholder="e.g. ConEdison, PSE&G, PECO" style={inputStyle}
                onFocus={e => (e.target as HTMLInputElement).style.borderColor = BLUE}
                onBlur={e => (e.target as HTMLInputElement).style.borderColor = BORDER} />
            </div>

            <div>
              <label style={labelStyle}>Service Type</label>
              <select name="serviceType" required onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer', background: 'white' }}>
                <option value="">Select service type...</option>
                <option value="Electric">Electric</option>
                <option value="Gas">Gas</option>
                <option value="Both">Both Electric & Gas</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Notes (Optional)</label>
              <textarea name="notes" onChange={handleChange} placeholder="Any additional details..." rows={2}
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = BLUE}
                onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = BORDER} />
            </div>

            {/* Upload */}
            <div
              className="upload-zone"
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => { e.preventDefault(); setDragOver(false); setFiles(Array.from(e.dataTransfer.files)); }}
              style={{ border: `2px dashed ${dragOver ? BLUE : BORDER}`, borderRadius: '10px', padding: '22px', textAlign: 'center', background: dragOver ? 'rgba(1,102,190,0.06)' : LIGHT, cursor: 'pointer', transition: 'all 0.15s', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px', color: files.length ? '#16a34a' : BLUE }}>
                {files.length ? <IconFileCheck size={26} /> : <IconFileUp size={26} />}
              </div>
              <p style={{ color: files.length ? '#16a34a' : BLUE, fontWeight: '600', fontSize: '13px', marginBottom: '3px' }}>
                {files.length === 0 && 'Upload Your Utility Bills'}
                {files.length === 1 && files[0].name}
                {files.length > 1 && `${files.length} files selected`}
              </p>
              {files.length > 1 && (
                <p style={{ color: GRAY, fontSize: '11px', margin: '4px 0 6px', lineHeight: '1.4' }}>
                  {files.map((f) => f.name).join(' · ')}
                </p>
              )}
              <p style={{ color: '#9ca3af', fontSize: '12px', margin: 0 }}>Drag & drop or click · PDF, JPG, PNG · Multiple files OK</p>
              <input type="file" accept=".pdf,.jpg,.jpeg,.png" multiple onChange={(e) => setFiles(Array.from(e.target.files || []))}
                style={{ position: 'absolute', opacity: 0, inset: 0, cursor: 'pointer' }} />
            </div>

            <button type="submit" disabled={loading} className="submit-btn"
              style={{ width: '100%', padding: '13px', background: loading ? '#9ca3af' : BLUE, color: 'white', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '2px', transition: 'background 0.15s' }}>
              {loading ? <><IconClock size={17} /> Submitting...</> : <>Get My Free Bill Review <IconArrowRight size={16} /></>}
            </button>

            <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: '12px', margin: '2px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
              <IconLock size={12} /> Secure & confidential. Never shared.
            </p>
          </form>
        </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, background: LIGHT, padding: '60px 24px' }}>
        <div className="trust-grid" style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          {[
            { icon: <IconDollar size={22} />, title: 'Lower Costs', desc: 'Identify potential savings and better rates on your supply contracts.' },
            { icon: <IconShield size={22} />, title: 'No Obligation', desc: 'Free, no-pressure bill review. Zero commitment required.' },
            { icon: <IconSearch size={22} />, title: 'Expert Analysis', desc: 'We analyze your contract and usage in full detail.' },
            { icon: <IconBolt size={22} />, title: 'Stay Ahead', desc: 'Avoid auto-renewals and unexpected rate spikes.' },
          ].map((item) => (
            <div key={item.title}>
              <div style={{ width: '48px', height: '48px', border: `1.5px solid ${BORDER}`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: BLUE, background: 'white' }}>
                {item.icon}
              </div>
              <div style={{ color: BLACK, fontWeight: '700', fontSize: '15px', marginBottom: '8px' }}>{item.title}</div>
              <div style={{ color: GRAY, fontSize: '13px', lineHeight: '1.65' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section" style={{ padding: '88px 24px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{ color: BLUE, fontWeight: '700', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>How It Works</p>
          <h2 className="how-heading" style={{ fontSize: '38px', fontWeight: '900', letterSpacing: '-1px', color: BLACK, margin: 0 }}>Energy. Expertise. Results.</h2>
        </div>
        <div className="how-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {[
            { num: '01', icon: <IconFileUp size={22} />, title: 'Submit Your Bill', desc: 'Fill out the form and upload your utility bill. Takes less than 60 seconds.' },
            { num: '02', icon: <IconSearch size={22} />, title: 'We Analyze', desc: 'Our energy experts review your contract, usage, and current market rates.' },
            { num: '03', icon: <IconTrendUp size={22} />, title: 'You Save', desc: 'We present your options and potential savings. No pressure, ever.' },
          ].map((item) => (
            <div key={item.num} style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '14px', padding: '36px 28px', position: 'relative' }}>
              <div style={{ fontSize: '72px', fontWeight: '900', color: LIGHT, position: 'absolute', top: '12px', right: '20px', lineHeight: 1, userSelect: 'none', letterSpacing: '-3px' }}>{item.num}</div>
              <div style={{ width: '48px', height: '48px', background: BLUE, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'white' }}>
                {item.icon}
              </div>
              <h3 style={{ color: BLACK, fontWeight: '800', fontSize: '17px', marginBottom: '10px' }}>{item.title}</h3>
              <p style={{ color: GRAY, fontSize: '14px', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-section" style={{ background: BLUE, padding: '72px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontWeight: '700', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>Proudly Serving</p>
          <h3 className="service-heading" style={{ color: 'white', fontSize: '30px', fontWeight: '800', marginBottom: '28px', letterSpacing: '-0.5px' }}>
            New York City & Surrounding Markets
          </h3>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '22px' }}>
            {['New York', 'New Jersey', 'Pennsylvania', 'Connecticut'].map((area) => (
              <div key={area} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '100px', padding: '9px 20px', color: 'white', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '7px' }}>
                <IconMapPin size={13} /> {area}
              </div>
            ))}
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', margin: 0 }}>Expanding across deregulated energy markets nationwide.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer" style={{ borderTop: `1px solid ${BORDER}`, padding: '48px 48px 32px' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <div className="footer-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', paddingBottom: '28px', borderBottom: `1px solid ${BORDER}` }}>
            <img src="/alpha1logo.png" alt="Alpha 1 Energy Group" style={{ height: '36px', width: 'auto' }} />
            <div className="footer-links" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              {[
                { href: 'tel:9293943873', icon: <IconPhone size={14} />, label: '(929) 394-3873' },
                { href: 'https://instagram.com/alpha1energygroup', icon: <IconInstagram size={14} />, label: 'Instagram', target: '_blank' },
                { href: 'https://alpha1energy.com', icon: <IconGlobe size={14} />, label: 'alpha1energy.com' },
              ].map((link) => (
                <a key={link.label} href={link.href} target={(link as any).target} style={{ color: GRAY, textDecoration: 'none', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {link.icon} {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', paddingTop: '22px' }}>
            <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0 }}>© 2025 Alpha 1 Energy Group. All rights reserved.</p>
            <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0 }}>Transparent. Reliable. Focused on Your Savings. &nbsp;|&nbsp; Independent Advice. Competitive Options. Real Results.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
