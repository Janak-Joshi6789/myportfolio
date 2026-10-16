import { useEffect, useRef, useState } from 'react'

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    color: 'var(--violet)',
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
    color: 'var(--accent)',
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
    color: 'var(--warn)',
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
    color: 'var(--accent2)',
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

// Reveals the section once when it scrolls into view
function useReveal() {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { setShown(true); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect() }
    }, { threshold: 0.08 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, shown]
}

export default function Services() {
  const [ref, shown] = useReveal()
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? services : services.slice(0, 3)

  return (
    <section id="services" ref={ref} className={`section services${shown ? ' in' : ''}`}>
      <div className="container">
        <div className="section-label rv">
          <span className="label-line" />
          <span className="font-mono text-primary text-sm">&gt; services --list</span>
        </div>
        <h2 className="section-title rv" style={{ '--i': 1 }}>What <span className="text-primary">I Offer</span></h2>
        <p className="section-sub rv" style={{ '--i': 2 }}>Professional services across web development, networking, and cybersecurity</p>

        <div className="services-grid">
          {visible.map((s, i) => (
            <div key={s.title} className="service-card rv" style={{ '--i': i + 2, '--c': s.color }}>
              <div className="service-top">
                <div className="service-icon-wrap"><span className="service-icon">{s.icon}</span></div>
                <span className="service-tagline">{s.tagline}</span>
              </div>

              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>

              <div className="service-divider" />

              <ul className="service-list">
                {s.deliverables.map(d => (
                  <li key={d} className="service-item">
                    <span className="service-bullet">&gt;</span>
                    {d}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="service-cta"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                Get in touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>

              <div className="card-glow" />
            </div>
          ))}
        </div>

        {services.length > 3 && (
          <div className="show-more-wrap rv">
            <button className="show-more-btn" onClick={() => setShowAll(!showAll)} aria-expanded={showAll}>
              {showAll ? '$ show --less' : `$ show --more (+${services.length - 3})`}
            </button>
          </div>
        )}
      </div>

      <style>{`
        /* ---- Hacker theme, scoped to this section (dark / light follows html[data-theme]) ---- */
        .services {
          --hx: #00ff9c; --hx-dim: rgba(0,255,156,.25); --hx-bg: #030806; --hx-panel: rgba(3,12,9,.78);
          --hx-text: #d7f5e6; --hx-muted: rgba(215,245,230,.66); --hx-input: rgba(0,0,0,.4);
          --primary: var(--hx); --accent: #22d3ee; --accent2: #fbbf24; --warn: #ff6b6b; --violet: #a78bfa;
          --text: var(--hx-text); --muted: var(--hx-muted); --card: var(--hx-panel); --border: var(--hx-dim);
          position: relative; color: var(--text);
          background-color: var(--hx-bg);
          background-image: linear-gradient(var(--hx-dim) 1px, transparent 1px), linear-gradient(90deg, var(--hx-dim) 1px, transparent 1px);
          background-size: 60px 60px; background-blend-mode: soft-light;
          font-family: var(--font-mono, 'JetBrains Mono', ui-monospace, monospace);
        }
        :root[data-theme='light'] .services {
          --hx: #008f5a; --hx-dim: rgba(0,143,90,.22); --hx-bg: #f0faf5; --hx-panel: rgba(255,255,255,.85);
          --hx-text: #0b2a1e; --hx-muted: rgba(11,42,30,.7); --hx-input: #ffffff;
          --accent: #0e7490; --accent2: #b45309; --warn: #c2410c; --violet: #6d28d9;
        }
        .services::before { content: ''; position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse at 50% 40%, transparent 20%, var(--hx-bg) 85%); }
        .services .container { position: relative; z-index: 1; }
        .services .text-primary { color: var(--primary); }
        .services .section-sub { color: var(--muted); font-size: .88rem; margin-top: .4rem; }

        .services .rv { opacity: 0; transform: translateY(16px); transition: opacity .55s ease, transform .55s ease; transition-delay: calc(var(--i, 0) * 80ms); }
        .services.in .rv { opacity: 1; transform: none; }

        .services .show-more-wrap { display: flex; justify-content: center; margin-top: 2.5rem; }
        .services .show-more-btn { display: inline-flex; align-items: center; gap: .5rem; background: var(--hx-panel); border: 1px solid var(--hx-dim);
          color: var(--muted); padding: .6rem 1.75rem; border-radius: 6px; cursor: pointer; font-size: .85rem; font-family: inherit; transition: .2s; }
        .services .show-more-btn:hover { border-color: var(--hx); color: var(--hx); box-shadow: 0 0 18px var(--hx-dim); }
        .services button:focus-visible, .services a:focus-visible, .services input:focus-visible, .services textarea:focus-visible, .services .flip:focus-visible { outline: 2px solid var(--hx); outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) { .services .rv { opacity: 1; transform: none; transition: none; } }

        .services .services-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem; margin-top: 3rem; }

        .services .service-card { position: relative; overflow: hidden; display: flex; flex-direction: column;
          background: var(--hx-panel); border: 1px solid var(--hx-dim); border-left: 3px solid var(--c); border-radius: 12px; padding: 1.9rem; }
        .services.in .service-card { transition: opacity .55s ease, transform .3s, border-color .3s, box-shadow .3s; }
        .services.in .service-card:hover { transform: translateY(-5px); border-color: var(--c);
          box-shadow: 0 10px 40px color-mix(in srgb, var(--c) 22%, transparent); }

        .services .card-glow { position: absolute; inset: 0; pointer-events: none; opacity: 0; transition: opacity .35s;
          background: radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--c) 14%, transparent) 0%, transparent 70%); }
        .services .service-card:hover .card-glow { opacity: 1; }

        .services .service-top { display: flex; align-items: center; justify-content: space-between; gap: .75rem; margin-bottom: 1.25rem; }
        .services .service-icon-wrap { width: 52px; height: 52px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          background: color-mix(in srgb, var(--c) 12%, transparent); border: 1px solid color-mix(in srgb, var(--c) 35%, transparent); }
        .services .service-icon { font-size: 1.6rem; }
        .services .service-tagline { font-size: .72rem; font-weight: 600; color: var(--c); text-align: right; max-width: 140px; line-height: 1.4; }

        .services .service-title { font-size: 1.1rem; font-weight: 700; margin-bottom: .65rem; line-height: 1.3; }
        .services .service-desc { font-size: .83rem; color: var(--muted); line-height: 1.75; margin-bottom: 1.25rem; }
        .services .service-divider { height: 1px; margin-bottom: 1.1rem; background: color-mix(in srgb, var(--c) 35%, transparent); }

        .services .service-list { list-style: none; padding: 0; margin: 0 0 1.5rem; display: flex; flex-direction: column; gap: .55rem; flex: 1; }
        .services .service-item { display: flex; align-items: flex-start; gap: .6rem; font-size: .8rem; color: var(--muted); line-height: 1.5; }
        .services .service-bullet { color: var(--c); font-weight: 700; flex-shrink: 0; }

        .services .service-cta { position: relative; z-index: 1; display: inline-flex; align-items: center; gap: .4rem; font-size: .8rem; font-weight: 600;
          color: var(--c); border: 1px solid var(--c); border-radius: 6px; padding: .5rem 1rem; text-decoration: none; width: fit-content; margin-top: auto; transition: .2s; }
        .services .service-cta:hover { background: color-mix(in srgb, var(--c) 14%, transparent); transform: translateX(3px); }
        .services .service-cta svg { transition: transform .2s; }
        .services .service-cta:hover svg { transform: translateX(3px); }

        @media (max-width: 700px) { .services .services-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}