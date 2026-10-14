import { useState } from 'react'

const certs = [
   {
    title: 'Registered Engineer License',
    issuer: 'Nepal Engineering Council',
    date: 'Nov 2025',
    icon: '🏛️',
    color: '#f59e0b',
    colorRaw: '#f59e0b',
    desc: 'Official registration as a General Registered Engineer (Computer Engineering) under Nepal Engineering Council Act, 2055. Regd. No. 94***.',
    image: '/certs/nec.jpg',
    credential: null,
  },
  {
    title: 'Advanced Cybersecurity',
    issuer: 'Broadway Infosys',
    date: 'Aug–Nov 2025',
    icon: '🎓',
    color: 'var(--accent)',
    colorRaw: '#34d399',
    desc: 'Comprehensive cybersecurity training covering penetration testing, network security, SIEM tools, and ethical hacking methodologies.',
    image: '/certs/broadway.jpg', // replace with actual image path
    credential: null,
  },
  {
    title: 'Networking Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'Jun–Jul 2025',
    icon: '🌐',
    color: 'var(--primary)',
    colorRaw: '#63b3ed',
    desc: 'Cisco-certified coursework on networking fundamentals, TCP/IP, network protocols, and basic configuration skills.',
    image: '/certs/network_basics.png',
    credential: null,
  },
  {
    title: 'Network Addressing & Basic Troubleshooting',
    issuer: 'Cisco Networking Academy',
    date: 'Nov–Dec 2025',
    icon: '🔧',
    color: 'var(--primary)',
    colorRaw: '#63b3ed',
    desc: 'Focused training on IP addressing, subnetting, CIDR notation, and systematic network troubleshooting approaches.',
    image: '/certs/network_addressing.png',
    credential: null,
  },
  {
    title: 'Introduction to Network Analysis',
    issuer: 'Security Blue Team',
    date: 'Aug–Dec 2025',
    icon: '📡',
    color: 'var(--accent)',
    colorRaw: '#34d399',
    desc: 'Hands-on training in network traffic analysis, packet inspection, and identifying suspicious patterns using industry tools.',
    image: '/certs/network_analysis.png',
    credential: null,
  },
  {
    title: 'Introduction to Virtual Machines',
    issuer: 'Security Blue Team',
    date: 'Aug–Dec 2025',
    icon: '💾',
    color: 'var(--accent)',
    colorRaw: '#34d399',
    desc: 'Practical understanding of virtualization, VM setup, snapshots, and use of virtual environments for security testing.',
    image: '/certs/vm.png',
    credential: null,
  },
   {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'Dec 2025',
    icon: '🔐',
    color: 'var(--primary)',
    colorRaw: '#63b3ed',
    desc: 'Foundational cybersecurity course covering cyber threats, network vulnerabilities, and basic defense strategies offered through the Cisco Networking Academy program.',
    image: '/certs/intro.png',
    credential: null,
  },
  {
    title: 'Introduction to OSINT',
    issuer: 'Security Blue Team',
    date: 'Aug–Dec 2025',
    icon: '🔍',
    color: 'var(--accent)',
    colorRaw: '#34d399',
    desc: 'Open-source intelligence gathering techniques, reconnaissance methodologies, and passive information collection strategies.',
    image: '/certs/osint.png',
    credential: null,
  },
  {
    title: 'Introduction to Penetration Testing',
    issuer: 'Security Blue Team',
    date: 'Aug–Dec 2025',
    icon: '🛡️',
    color: 'var(--accent)',
    colorRaw: '#34d399',
    desc: 'Fundamentals of ethical hacking — scanning, enumeration, exploitation phases, and responsible disclosure practices.',
    image: '/certs/pen_test.png',
    credential: null,
  },
  {
    title: 'Mental Health in Cybersecurity',
    issuer: 'Security Blue Team',
    date: 'Aug–Dec 2025',
    icon: '🧠',
    color: 'var(--accent2)',
    colorRaw: '#a78bfa',
    desc: 'Awareness training on stress management, burnout prevention, and mental wellness strategies for security professionals.',
    image: '/certs/mental_health.png',
    credential: null,
  },
]

export default function Certifications() {
  const [active, setActive] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? certs : certs.slice(0, 6)

  return (
    <section id="certifications" className="section certs">
      <div className="container">
        <div className="section-label">
          <span className="label-line" />
          <span className="font-mono text-primary text-sm">04 — Certifications</span>
        </div>
        <h2 className="section-title">Certifications <span className="text-primary">& Training</span></h2>
        <p className="section-sub">Industry-recognized credentials and professional development</p>

        <div className="certs-grid">
          {visible.map((c, i) => (
            <div
              key={c.title}
              className={`cert-card${active === i ? ' flipped' : ''}`}
              style={{'--i': i, '--clr': c.colorRaw}}
              onClick={() => setActive(active === i ? null : i)}
            >
              {/* FRONT */}
              <div className="cert-face cert-front">
                <div className="cert-img-wrap">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="cert-img"
                    onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
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
                  <span className="cert-issuer-badge" style={{color: c.colorRaw, borderColor: `${c.colorRaw}44`, background: `${c.colorRaw}12`}}>
                    {c.issuer}
                  </span>
                  <h3 className="cert-title">{c.title}</h3>
                  <span className="cert-date-chip">{c.date}</span>
                </div>
              </div>

              {/* BACK */}
              <div className="cert-face cert-back" style={{borderColor: `${c.colorRaw}44`}}>
                <div className="cert-back-top">
                  <div className="cert-back-icon" style={{background: `${c.colorRaw}18`, border: `1px solid ${c.colorRaw}33`}}>
                    {c.icon}
                  </div>
                  <div>
                    <span className="cert-issuer-badge" style={{color: c.colorRaw, borderColor: `${c.colorRaw}44`, background: `${c.colorRaw}12`}}>
                      {c.issuer}
                    </span>
                    <p className="cert-back-date">{c.date}</p>
                  </div>
                </div>
                <h3 className="cert-back-title">{c.title}</h3>
                <p className="cert-back-desc">{c.desc}</p>
                {c.credential && (
                  <a href={c.credential} target="_blank" rel="noreferrer" className="cert-verify-btn" style={{borderColor: c.colorRaw, color: c.colorRaw}}>
                    Verify Credential ↗
                  </a>
                )}
                <span className="flip-back-hint">Click to flip back ↩</span>
              </div>
            </div>
          ))}
        </div>

        {certs.length > 6 && (
          <div className="show-more-wrap">
            <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
              {showAll ? (
                <><span>Show Less</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15"/></svg></>
              ) : (
                <><span>See More ({certs.length - 6} more)</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg></>
              )}
            </button>
          </div>
        )}
      </div>

      <style>{`
        .text-primary { color: var(--primary); }
        .section-sub { color: var(--muted); font-size: 0.9rem; margin-top: 0.4rem; }

        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }

        /* Card flip container */
        .cert-card {
          height: 360px;
          perspective: 1000px;
          cursor: pointer;
          opacity: 0;
          transform: translateY(24px);
          animation: certFadeUp 0.5s ease forwards;
          animation-delay: calc(var(--i) * 80ms);
        }
        @keyframes certFadeUp { to { opacity: 1; transform: translateY(0); } }

        /* Inner wrapper that flips */
        .cert-card::before { display: none; }
        .cert-face {
          position: absolute; inset: 0;
          border-radius: 14px;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1);
        }

        /* Make the card itself a flip container */
        .cert-card {
          position: relative;
          transform-style: preserve-3d;
        }
        .cert-card .cert-front  { transform: rotateY(0deg); }
        .cert-card .cert-back   { transform: rotateY(180deg); }
        .cert-card.flipped .cert-front { transform: rotateY(-180deg); }
        .cert-card.flipped .cert-back  { transform: rotateY(0deg); }

        /* FRONT */
        .cert-front {
          background: var(--card);
          border: 1px solid var(--border);
          overflow: hidden;
          display: flex; flex-direction: column;
        }
        .cert-front:hover { border-color: rgba(var(--clr), 0.3); }

        .cert-img-wrap {
          position: relative; flex: 1; overflow: hidden;
          background: var(--border);
          min-height: 0;
        }
        .cert-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
          display: block;
        }
        .cert-card:hover .cert-img { transform: scale(1.04); }

        .cert-img-placeholder {
          display: none;
          width: 100%; height: 100%;
          flex-direction: column;
          align-items: center; justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.06) 100%);
          border-bottom: 1px solid var(--border);
        }
        .cert-placeholder-icon { font-size: 2.5rem; }
        .cert-placeholder-text { font-size: 0.75rem; color: var(--muted); }

        .cert-img-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.45);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.3s;
        }
        .cert-card:hover .cert-img-overlay { opacity: 1; }
        .flip-hint {
          color: #fff; font-size: 0.8rem; font-weight: 500;
          letter-spacing: 0.03em;
        }

        .cert-front-body {
          padding: 1rem 1.25rem;
          display: flex; flex-direction: column; gap: 0.4rem;
        }
        .cert-issuer-badge {
          font-size: 0.72rem; font-weight: 600;
          font-family: var(--font-mono);
          border: 1px solid; padding: 0.15rem 0.55rem;
          border-radius: 99px; width: fit-content;
        }
        .cert-title {
          font-size: 0.9rem; font-weight: 700; line-height: 1.35;
          color: var(--text);
        }
        .cert-date-chip {
          font-size: 0.72rem; color: var(--muted);
          font-family: var(--font-mono);
        }

        /* BACK */
        .cert-back {
          background: var(--card);
          border: 1px solid;
          padding: 1.5rem;
          display: flex; flex-direction: column; gap: 0.85rem;
        }
        .cert-back-top {
          display: flex; align-items: flex-start; gap: 0.85rem;
        }
        .cert-back-icon {
          width: 42px; height: 42px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.3rem; flex-shrink: 0;
        }
        .cert-back-date { font-size: 0.72rem; color: var(--muted); font-family: var(--font-mono); margin-top: 0.2rem; }
        .cert-back-title { font-size: 0.95rem; font-weight: 700; line-height: 1.35; color: var(--text); }
        .cert-back-desc { font-size: 0.8rem; color: var(--muted); line-height: 1.65; flex: 1; text-align: justify; }

        .cert-verify-btn {
          display: inline-flex; align-items: center;
          font-size: 0.78rem; padding: 0.35rem 0.85rem;
          border: 1px solid; border-radius: 6px;
          text-decoration: none; width: fit-content;
          transition: opacity 0.2s;
        }
        .cert-verify-btn:hover { opacity: 0.75; }

        .flip-back-hint {
          font-size: 0.7rem; color: var(--muted);
          text-align: center; margin-top: auto;
          opacity: 0.6;
        }

        @media (max-width: 600px) {
          .certs-grid { grid-template-columns: 1fr 1fr; }
          .cert-card { height: 320px; }
        }
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

        @media (max-width: 420px) {
          .certs-grid { grid-template-columns: 1fr; }
          .cert-card { height: 340px; }
        }
      `}</style>
    </section>
  )
}
