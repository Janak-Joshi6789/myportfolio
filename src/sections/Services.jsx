const services = [
  {
    icon: '💻',
    title: 'Web Development',
    color: 'var(--accent2)',
    colorRaw: '#a78bfa',
    tagline: 'From concept to deployment',
    desc: 'Building fast, responsive, and scalable web applications tailored to your business needs — from simple landing pages to complex full-stack systems.',
    deliverables: [
      'Custom frontend with React.js / HTML / CSS',
      'Backend development with PHP & MySQL',
      'REST API design and integration',
      'Mobile-first responsive design',
      'Git-based version control & deployment',
    ],
  },
  {
    icon: '🎁',
    title: 'WordPress / CMS Development',
    color: '#3b82f6',
    colorRaw: '#3b82f6',
    tagline: 'Powerful sites, easy to manage',
    desc: 'Custom WordPress websites with tailored themes, plugins, and WooCommerce stores — built for non-technical clients who need full control of their content.',
    deliverables: [
      'Custom theme development & customization',
      'WooCommerce e-commerce setup',
      'Plugin configuration & management',
      'SEO-ready page structure',
      'Ongoing maintenance & updates',
    ],
  },
  {
    icon: '🌐',
    title: 'Network Setup & Configuration',
    color: 'var(--primary)',
    colorRaw: '#63b3ed',
    tagline: 'Reliable infrastructure, built right',
    desc: 'Designing and configuring secure, efficient network infrastructure for small businesses and home offices using CCNA-level expertise.',
    deliverables: [
      'Router & switch configuration (Cisco)',
      'VLAN segmentation & inter-VLAN routing',
      'NAT/PAT & IP addressing / subnetting',
      'DHCP, DNS & firewall setup',
      'Network documentation & topology diagrams',
    ],
  },
  {
    icon: '🛡️',
    title: 'Penetration Testing & Security Audit',
    color: 'var(--accent)',
    colorRaw: '#34d399',
    tagline: 'Find weaknesses before attackers do',
    desc: 'Systematic ethical hacking and vulnerability assessments to identify security gaps in your systems, applications, and network infrastructure.',
    deliverables: [
      'Reconnaissance & attack surface mapping',
      'Network & web application vulnerability scanning',
      'Exploitation testing (Metasploit, Burp Suite)',
      'Wazuh SIEM log analysis & alerting',
      'Detailed report with remediation steps',
    ],
  },
  {
    icon: '🔍',
    title: 'OSINT & Vulnerability Assessment',
    color: '#f59e0b',
    colorRaw: '#f59e0b',
    tagline: 'Intelligence-driven security research',
    desc: 'Open-source intelligence gathering and structured vulnerability assessments to expose publicly available threat data and system weaknesses.',
    deliverables: [
      'Passive reconnaissance using OSINT tools',
      'Shodan, Maltego & public data analysis',
      'CVE-based vulnerability scanning (Nessus / OpenVAS)',
      'Social engineering surface assessment',
      'Risk-rated findings report',
    ],
  },
]

import { useState } from 'react'

export default function Services() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? services : services.slice(0, 3)

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-label">
          <span className="label-line" />
          <span className="font-mono text-primary text-sm">05 — Services</span>
        </div>
        <h2 className="section-title">What <span className="text-primary">I Offer</span></h2>
        <p className="section-sub">Professional services across web development, networking, and cybersecurity</p>

        <div className="services-grid">
          {visible.map((s, i) => (
            <div
              key={s.title}
              className="service-card"
              style={{'--i': i, '--clr': s.colorRaw}}
            >
              <div className="service-top">
                <div className="service-icon-wrap" style={{background: `${s.colorRaw}15`, border: `1px solid ${s.colorRaw}30`}}>
                  <span className="service-icon">{s.icon}</span>
                </div>
                <span className="service-tagline" style={{color: s.colorRaw}}>{s.tagline}</span>
              </div>

              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>

              <div className="service-divider" style={{background: `${s.colorRaw}30`}} />

              <ul className="service-list">
                {s.deliverables.map((d, di) => (
                  <li key={di} className="service-item" style={{'--di': di}}>
                    <span className="service-dot" style={{background: s.colorRaw}} />
                    {d}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="service-cta" style={{borderColor: `${s.colorRaw}50`, color: s.colorRaw}}>
                Get in touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>

              <div className="card-glow" style={{background: `radial-gradient(circle at 50% 0%, ${s.colorRaw}10 0%, transparent 70%)`}} />
            </div>
          ))}
        </div>

        {services.length > 3 && (
          <div className="show-more-wrap">
            <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
              {showAll ? (
                <><span>Show Less</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15"/></svg></>
              ) : (
                <><span>See More ({services.length - 3} more)</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg></>
              )}
            </button>
          </div>
        )}
      </div>

      <style>{`
        .text-primary { color: var(--primary); }
        .section-sub { color: var(--muted); font-size: 0.9rem; margin-top: 0.4rem; }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .service-card {
          position: relative;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0;
          overflow: hidden;
          opacity: 0;
          transform: translateY(28px);
          animation: svcFadeUp 0.5s ease forwards;
          animation-delay: calc(var(--i) * 100ms);
          transition: border-color 0.3s, transform 0.3s;
        }
        .service-card:hover {
          border-color: color-mix(in srgb, var(--clr) 40%, transparent);
          transform: translateY(-5px);
        }

        @keyframes svcFadeUp { to { opacity: 1; transform: translateY(0); } }

        .card-glow {
          position: absolute; inset: 0;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.35s;
          border-radius: 16px;
        }
        .service-card:hover .card-glow { opacity: 1; }

        .service-top {
          display: flex; align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .service-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .service-icon { font-size: 1.6rem; }
        .service-tagline {
          font-size: 0.72rem; font-weight: 600;
          font-family: var(--font-mono);
          text-align: right; max-width: 130px; line-height: 1.4;
        }

        .service-title {
          font-size: 1.15rem; font-weight: 700;
          margin-bottom: 0.65rem; line-height: 1.3;
          color: var(--text);
        }
        .service-desc {
          font-size: 0.84rem; color: var(--muted);
          line-height: 1.75; margin-bottom: 1.25rem;
          text-align: justify;
        }

        .service-divider {
          height: 1px; margin-bottom: 1.1rem;
        }

        .service-list {
          list-style: none; padding: 0; margin: 0 0 1.5rem;
          display: flex; flex-direction: column; gap: 0.55rem;
          flex: 1;
        }
        .service-item {
          display: flex; align-items: flex-start; gap: 0.6rem;
          font-size: 0.82rem; color: var(--muted); line-height: 1.5;
          opacity: 0;
          animation: itemIn 0.3s ease forwards;
          animation-delay: calc(var(--i) * 100ms + var(--di) * 60ms + 300ms);
        }
        @keyframes itemIn { to { opacity: 1; } }

        .service-dot {
          width: 6px; height: 6px; border-radius: 50%;
          flex-shrink: 0; margin-top: 5px;
        }

        .service-cta {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-size: 0.82rem; font-weight: 600;
          border: 1px solid; border-radius: 8px;
          padding: 0.5rem 1rem;
          text-decoration: none;
          width: fit-content;
          transition: all 0.2s;
          margin-top: auto;
        }
        .service-cta:hover {
          background: color-mix(in srgb, var(--clr) 10%, transparent);
          transform: translateX(3px);
        }
        .service-cta svg { transition: transform 0.2s; }
        .service-cta:hover svg { transform: translateX(3px); }

        .show-more-wrap {
          display: flex; justify-content: center;
          margin-top: 2.5rem;
        }
        .show-more-btn {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: none; border: 1px solid var(--border);
          color: var(--muted); padding: 0.6rem 1.75rem;
          border-radius: 100px; cursor: pointer;
          font-size: 0.88rem; font-family: var(--font-body);
          transition: all 0.2s;
        }
        .show-more-btn:hover {
          border-color: var(--primary); color: var(--primary);
        }

        @media (max-width: 700px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
