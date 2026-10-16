import { useEffect, useRef, useState } from 'react'

const certs = [
  {
    title: 'Network Administrator',
    issuer: 'ITech International',
    date: '1 Year Experience',
    icon: '🌐',
    color: 'var(--accent)',
    desc: 'One year of professional experience in network administration, network infrastructure management, troubleshooting, routing and switching, and network security.',
    image: '/certs/experience.png',
    credential: null,
  },
  {
    title: 'Registered Engineer License',
    issuer: 'Nepal Engineering Council',
    date: 'Nov 2025',
    icon: '🏛️',
    color: 'var(--accent2)',
    desc: 'Official registration as a General Registered Engineer (Computer Engineering) under Nepal Engineering Council Act, 2055. Regd. No. 94***.',
    image: '/certs/nec.jpg',
    credential: null,
  },
  {
    title: 'Advanced Cybersecurity',
    issuer: 'Broadway Infosys',
    date: 'Aug–Nov 2025',
    icon: '🎓',
    color: 'var(--primary)',
    desc: 'Comprehensive cybersecurity training covering penetration testing, network security, SIEM tools, and ethical hacking methodologies.',
    image: '/certs/broadway.jpg', // replace with actual image path
    credential: null,
  },
  {
    title: 'Networking Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'Jun–Jul 2025',
    icon: '🌐',
    color: 'var(--accent)',
    desc: 'Cisco-certified coursework on networking fundamentals, TCP/IP, network protocols, and basic configuration skills.',
    image: '/certs/network_basics.png',
    credential: null,
  },
  {
    title: 'Network Addressing & Basic Troubleshooting',
    issuer: 'Cisco Networking Academy',
    date: 'Nov–Dec 2025',
    icon: '🔧',
    color: 'var(--accent)',
    desc: 'Focused training on IP addressing, subnetting, CIDR notation, and systematic network troubleshooting approaches.',
    image: '/certs/network_addressing.png',
    credential: null,
  },
  {
    title: 'Introduction to Network Analysis',
    issuer: 'Security Blue Team',
    date: 'Aug–Dec 2025',
    icon: '📡',
    color: 'var(--primary)',
    desc: 'Hands-on training in network traffic analysis, packet inspection, and identifying suspicious patterns using industry tools.',
    image: '/certs/network_analysis.png',
    credential: null,
  },
  {
    title: 'Introduction to Virtual Machines',
    issuer: 'Security Blue Team',
    date: 'Aug–Dec 2025',
    icon: '💾',
    color: 'var(--primary)',
    desc: 'Practical understanding of virtualization, VM setup, snapshots, and use of virtual environments for security testing.',
    image: '/certs/vm.png',
    credential: null,
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'Dec 2025',
    icon: '🔐',
    color: 'var(--accent)',
    desc: 'Foundational cybersecurity course covering cyber threats, network vulnerabilities, and basic defense strategies offered through the Cisco Networking Academy program.',
    image: '/certs/intro.png',
    credential: null,
  },
  {
    title: 'Introduction to OSINT',
    issuer: 'Security Blue Team',
    date: 'Aug–Dec 2025',
    icon: '🔍',
    color: 'var(--primary)',
    desc: 'Open-source intelligence gathering techniques, reconnaissance methodologies, and passive information collection strategies.',
    image: '/certs/osint.png',
    credential: null,
  },
  {
    title: 'Introduction to Penetration Testing',
    issuer: 'Security Blue Team',
    date: 'Aug–Dec 2025',
    icon: '🛡️',
    color: 'var(--primary)',
    desc: 'Fundamentals of ethical hacking — scanning, enumeration, exploitation phases, and responsible disclosure practices.',
    image: '/certs/pen_test.png',
    credential: null,
  },
  {
    title: 'Mental Health in Cybersecurity',
    issuer: 'Security Blue Team',
    date: 'Aug–Dec 2025',
    icon: '🧠',
    color: 'var(--violet)',
    desc: 'Awareness training on stress management, burnout prevention, and mental wellness strategies for security professionals.',
    image: '/certs/mental_health.png',
    credential: null,
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

export default function Certifications() {
  const [ref, shown] = useReveal()
  const [active, setActive] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? certs : certs.slice(0, 6)

  const toggle = i => setActive(active === i ? null : i)

  return (
    <section id="certifications" ref={ref} className={`section certs${shown ? ' in' : ''}`}>
      <div className="container">
        <div className="section-label rv">
          <span className="label-line" />
          <span className="font-mono text-primary text-sm">&gt; cat credentials.log</span>
        </div>
        <h2 className="section-title rv" style={{ '--i': 1 }}>Experience, Certifications <span className="text-primary">&amp; Training</span></h2>
        <p className="section-sub rv" style={{ '--i': 2 }}>Industry-recognized credentials and professional development</p>

        <div className="certs-grid">
          {visible.map((c, i) => (
            <div
              key={c.title}
              className={`cert-card flip rv${active === i ? ' flipped' : ''}`}
              style={{ '--i': i % 3 + 3, '--c': c.color }}
              role="button"
              tabIndex={0}
              aria-pressed={active === i}
              aria-label={`${c.title}, ${c.issuer}. Press to flip card.`}
              onClick={() => toggle(i)}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(i) } }}
            >
              {/* FRONT */}
              <div className="cert-face cert-front">
                <div className="cert-img-wrap">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="cert-img"
                    onError={e => { e.target.style.display = 'none'; if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex' }}
                  />
                  <div className="cert-img-placeholder">
                    <span className="cert-placeholder-icon">{c.icon}</span>
                    <span className="cert-placeholder-text">Certificate Image</span>
                  </div>
                  <div className="cert-img-overlay">
                    <span className="flip-hint">Click to view details ↩</span>
                  </div>
                </div>
                <div className="cert-front-body">
                  <span className="cert-issuer-badge">{c.issuer}</span>
                  <h3 className="cert-title">{c.title}</h3>
                  <span className="cert-date-chip">{c.date}</span>
                </div>
              </div>

              {/* BACK */}
              <div className="cert-face cert-back">
                <div className="cert-back-top">
                  <div className="cert-back-icon">{c.icon}</div>
                  <div>
                    <span className="cert-issuer-badge">{c.issuer}</span>
                    <p className="cert-back-date">{c.date}</p>
                  </div>
                </div>
                <h3 className="cert-back-title">{c.title}</h3>
                <p className="cert-back-desc">{c.desc}</p>
                {c.credential && (
                  <a href={c.credential} target="_blank" rel="noreferrer" className="cert-verify-btn" onClick={e => e.stopPropagation()}>
                    Verify Credential ↗
                  </a>
                )}
                <span className="flip-back-hint">Click to flip back ↩</span>
              </div>
            </div>
          ))}
        </div>

        {certs.length > 6 && (
          <div className="show-more-wrap rv">
            <button className="show-more-btn" onClick={() => setShowAll(!showAll)} aria-expanded={showAll}>
              {showAll ? '$ show --less' : `$ show --more (+${certs.length - 6})`}
            </button>
          </div>
        )}
      </div>

      <style>{`
        /* ---- Hacker theme, scoped to this section (dark / light follows html[data-theme]) ---- */
        .certs {
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
        :root[data-theme='light'] .certs {
          --hx: #008f5a; --hx-dim: rgba(0,143,90,.22); --hx-bg: #f0faf5; --hx-panel: rgba(255,255,255,.85);
          --hx-text: #0b2a1e; --hx-muted: rgba(11,42,30,.7); --hx-input: #ffffff;
          --accent: #0e7490; --accent2: #b45309; --warn: #c2410c; --violet: #6d28d9;
        }
        .certs::before { content: ''; position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse at 50% 40%, transparent 20%, var(--hx-bg) 85%); }
        .certs .container { position: relative; z-index: 1; }
        .certs .text-primary { color: var(--primary); }
        .certs .section-sub { color: var(--muted); font-size: .88rem; margin-top: .4rem; }

        .certs .rv { opacity: 0; transform: translateY(16px); transition: opacity .55s ease, transform .55s ease; transition-delay: calc(var(--i, 0) * 80ms); }
        .certs.in .rv { opacity: 1; transform: none; }

        .certs .show-more-wrap { display: flex; justify-content: center; margin-top: 2.5rem; }
        .certs .show-more-btn { display: inline-flex; align-items: center; gap: .5rem; background: var(--hx-panel); border: 1px solid var(--hx-dim);
          color: var(--muted); padding: .6rem 1.75rem; border-radius: 6px; cursor: pointer; font-size: .85rem; font-family: inherit; transition: .2s; }
        .certs .show-more-btn:hover { border-color: var(--hx); color: var(--hx); box-shadow: 0 0 18px var(--hx-dim); }
        .certs button:focus-visible, .certs a:focus-visible, .certs input:focus-visible, .certs textarea:focus-visible, .certs .flip:focus-visible { outline: 2px solid var(--hx); outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) { .certs .rv { opacity: 1; transform: none; transition: none; } }

        .certs .certs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 3rem; }

        /* flip container: .rv handles fade-in, so the 3D flip lives on the faces */
        .certs .cert-card { position: relative; height: 360px; perspective: 1000px; cursor: pointer; border-radius: 12px; }
        .certs .cert-face { position: absolute; inset: 0; border-radius: 12px; backface-visibility: hidden; -webkit-backface-visibility: hidden;
          transition: transform .65s cubic-bezier(.4,.2,.2,1), box-shadow .3s, border-color .3s; }
        .certs .cert-front { transform: rotateY(0deg); }
        .certs .cert-back { transform: rotateY(180deg); }
        .certs .cert-card.flipped .cert-front { transform: rotateY(-180deg); }
        .certs .cert-card.flipped .cert-back { transform: rotateY(0deg); }

        .certs .cert-front { background: var(--hx-panel); border: 1px solid var(--hx-dim); border-top: 3px solid var(--c); overflow: hidden; display: flex; flex-direction: column; }
        .certs .cert-card:hover .cert-front { border-color: var(--c); box-shadow: 0 10px 40px color-mix(in srgb, var(--c) 22%, transparent); }

        .certs .cert-img-wrap { position: relative; flex: 1; min-height: 0; overflow: hidden; background: var(--hx-dim); }
        .certs .cert-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .4s ease; }
        .certs .cert-card:hover .cert-img { transform: scale(1.04); }
        .certs .cert-img-placeholder { display: none; width: 100%; height: 100%; flex-direction: column; align-items: center; justify-content: center; gap: .5rem;
          background: linear-gradient(135deg, color-mix(in srgb, var(--c) 6%, transparent), color-mix(in srgb, var(--c) 14%, transparent)); }
        .certs .cert-placeholder-icon { font-size: 2.5rem; filter: drop-shadow(0 0 10px var(--c)); }
        .certs .cert-placeholder-text { font-size: .74rem; color: var(--muted); }

        .certs .cert-img-overlay { position: absolute; inset: 0; background: rgba(0,0,0,.55); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity .3s; }
        .certs .cert-card:hover .cert-img-overlay, .certs .cert-card:focus-visible .cert-img-overlay { opacity: 1; }
        .certs .flip-hint { color: #fff; font-size: .8rem; font-weight: 500; }

        .certs .cert-front-body { padding: 1rem 1.25rem; display: flex; flex-direction: column; gap: .4rem; }
        .certs .cert-issuer-badge { font-size: .7rem; font-weight: 600; color: var(--c); border: 1px solid color-mix(in srgb, var(--c) 45%, transparent);
          background: color-mix(in srgb, var(--c) 10%, transparent); padding: .15rem .55rem; border-radius: 4px; width: fit-content; }
        .certs .cert-title { font-size: .9rem; font-weight: 700; line-height: 1.35; }
        .certs .cert-date-chip { font-size: .72rem; color: var(--muted); }

        .certs .cert-back { background: var(--hx-panel); border: 1px solid var(--c); padding: 1.5rem; display: flex; flex-direction: column; gap: .85rem;
          box-shadow: 0 0 30px color-mix(in srgb, var(--c) 18%, transparent); }
        .certs .cert-back-top { display: flex; align-items: flex-start; gap: .85rem; }
        .certs .cert-back-icon { width: 42px; height: 42px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0;
          background: color-mix(in srgb, var(--c) 14%, transparent); border: 1px solid color-mix(in srgb, var(--c) 35%, transparent); }
        .certs .cert-back-date { font-size: .72rem; color: var(--muted); margin-top: .2rem; }
        .certs .cert-back-title { font-size: .95rem; font-weight: 700; line-height: 1.35; }
        .certs .cert-back-desc { font-size: .8rem; color: var(--muted); line-height: 1.65; flex: 1; overflow: auto; }

        .certs .cert-verify-btn { display: inline-flex; font-size: .78rem; padding: .35rem .85rem; border: 1px solid var(--c); color: var(--c);
          border-radius: 6px; text-decoration: none; width: fit-content; transition: .2s; }
        .certs .cert-verify-btn:hover { background: color-mix(in srgb, var(--c) 14%, transparent); }
        .certs .flip-back-hint { font-size: .7rem; color: var(--muted); text-align: center; margin-top: auto; opacity: .7; }

        @media (max-width: 600px) { .certs .certs-grid { grid-template-columns: 1fr 1fr; } .certs .cert-card { height: 320px; } }
        @media (max-width: 420px) { .certs .certs-grid { grid-template-columns: 1fr; } .certs .cert-card { height: 340px; } }
        @media (prefers-reduced-motion: reduce) { .certs .cert-face { transition: none; } }
      `}</style>
    </section>
  )
}