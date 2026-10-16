import { useEffect, useRef, useState } from 'react'

const cards = [
  {
    icon: '🌐',
    title: 'Network Administration',
    desc: '1 year of professional experience at ITech International, with a focus on network administration, infrastructure management, troubleshooting, routing, switching, VLANs, and NAT/PAT.',
    color: 'var(--primary)',
  },
  {
    icon: '🛡️',
    title: 'Cybersecurity',
    desc: 'Developing practical skills in security monitoring, vulnerability assessment, and penetration testing using Kali Linux, Nmap, Metasploit, and Burp Suite.',
    color: 'var(--accent)',
  },
  {
    icon: '📡',
    title: 'Network Security',
    desc: 'Knowledge of TCP/IP, subnetting, firewalls, ACLs, VPNs, network traffic analysis, and secure network configuration using tools such as Wireshark.',
    color: 'var(--accent2)',
  },
  {
    icon: '🔍',
    title: 'Security Monitoring & Analysis',
    desc: 'Building hands-on experience with Wazuh SIEM, log analysis, threat detection fundamentals, OSINT, and defensive security practices.',
    color: 'var(--warn)',
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
    }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, shown]
}

export default function About() {
  const [ref, shown] = useReveal()

  return (
    <section id="about" ref={ref} className={`section about${shown ? ' in' : ''}`}>
      <div className="container">
        <div className="section-label rv">
          <span className="label-line" />
          <span className="font-mono text-primary text-sm">&gt; whoami</span>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title rv" style={{ '--i': 1 }}>
              Building at the intersection of
              <br />
              <span className="text-primary">networks &amp; cybersecurity</span>
            </h2>

            <div className="term rv" style={{ '--i': 2 }}>
              <div className="term-bar">
                <i /><i /><i />
                <span>about.md</span>
              </div>
              <div className="about-paras">
                <p>
                  I'm <strong>Janak Raj Joshi</strong> (Er. Janak Joshi), a Computer Engineering
                  graduate from Khwopa Engineering College, Bhaktapur. My professional focus is on
                  network administration, network infrastructure, and cybersecurity.
                </p>
                <p>
                  I have <strong>1 year of experience as a Network Administrator at ITech
                  International</strong>, working in network administration and infrastructure
                  management.
                </p>
                <p>
                  I have also pursued hands-on cybersecurity training through Broadway Infosys and
                  developed practical skills with networking and security tools. I am continuously
                  strengthening my expertise in network security, penetration testing, and defensive
                  security.
                </p>
                <p>
                  Based in <span className="text-accent2">Kathmandu, Nepal</span>. Focused on
                  opportunities in network engineering, network administration, and cybersecurity.
                </p>
              </div>
            </div>

            <div className="about-links rv" style={{ '--i': 3 }}>
              <a href="https://github.com/Janak-Joshi6789" target="_blank" rel="noreferrer" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a href="mailto:janakjoshi6789@gmail.com" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Email Me
              </a>
              <a href="tel:9848840530" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15v1.92z" />
                </svg>
                9848840530
              </a>
            </div>
          </div>

          <div className="about-cards">
            {cards.map((c, i) => (
              <div key={c.title} className="about-card rv" style={{ '--i': i + 2, '--c': c.color }}>
                <div className="card-icon">{c.icon}</div>
                <div style={{ flex: 1 }}>
                  <h3 className="card-title">{c.title}</h3>
                  <p className="card-desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ---- Hacker theme, scoped to this section (dark / light follows html[data-theme]) ---- */
        .about {
          --hx: #00ff9c; --hx-dim: rgba(0,255,156,.25); --hx-bg: #030806; --hx-panel: rgba(3,12,9,.78);
          --hx-text: #d7f5e6; --hx-muted: rgba(215,245,230,.66);
          --primary: var(--hx); --accent: #22d3ee; --accent2: #fbbf24; --warn: #ff6b6b;
          --text: var(--hx-text); --muted: var(--hx-muted); --card: var(--hx-panel); --border: var(--hx-dim);
          position: relative;
          background-color: var(--hx-bg);
          background-image:
            linear-gradient(var(--hx-dim) 1px, transparent 1px),
            linear-gradient(90deg, var(--hx-dim) 1px, transparent 1px);
          background-size: 60px 60px;
          background-blend-mode: soft-light;
          color: var(--text);
          font-family: var(--font-mono, 'JetBrains Mono', ui-monospace, monospace);
        }
        :root[data-theme='light'] .about {
          --hx: #008f5a; --hx-dim: rgba(0,143,90,.22); --hx-bg: #f0faf5; --hx-panel: rgba(255,255,255,.85);
          --hx-text: #0b2a1e; --hx-muted: rgba(11,42,30,.7);
          --accent: #0e7490; --accent2: #b45309; --warn: #c2410c;
        }
        .about::before { /* fade the grid out toward the edges */
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse at 50% 40%, transparent 20%, var(--hx-bg) 85%);
        }
        .about .container { position: relative; z-index: 1; }

        /* reveal (once, on scroll into view) */
        .about .rv { opacity: 0; transform: translateY(16px);
          transition: opacity .55s ease, transform .55s ease; transition-delay: calc(var(--i, 0) * 90ms); }
        .about.in .rv { opacity: 1; transform: none; }

        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3.5rem; align-items: start; }

        /* terminal window around the paragraphs */
        .term { background: var(--hx-panel); border: 1px solid var(--hx-dim); border-radius: 10px; margin-bottom: 1.75rem;
          box-shadow: 0 0 40px rgba(0,255,156,.06); overflow: hidden; }
        .term-bar { display: flex; align-items: center; gap: 6px; padding: .55rem .8rem; border-bottom: 1px solid var(--hx-dim); }
        .term-bar i { width: 9px; height: 9px; border-radius: 50%; background: #ff5f56; }
        .term-bar i:nth-child(2) { background: #ffbd2e; }
        .term-bar i:nth-child(3) { background: #27c93f; }
        .term-bar span { margin-left: .6rem; font-size: .72rem; color: var(--muted); }

        .about-paras { display: flex; flex-direction: column; gap: 1rem; padding: 1.25rem 1.4rem; }
        .about-paras p { color: var(--muted); line-height: 1.8; font-size: .9rem; }
        .about-paras strong { color: var(--text); }

        .text-primary { color: var(--primary); }
        .text-accent2 { color: var(--accent2); }

        .about-links { display: flex; flex-wrap: wrap; gap: .75rem; }
        .social-link { display: inline-flex; align-items: center; gap: .4rem; border: 1px solid var(--hx-dim); background: var(--hx-panel);
          color: var(--muted); padding: .55rem 1rem; border-radius: 6px; text-decoration: none; font-size: .85rem;
          transition: color .2s, border-color .2s, box-shadow .2s; }
        .social-link:hover { border-color: var(--hx); color: var(--hx); box-shadow: 0 0 18px var(--hx-dim); }
        .social-link:focus-visible { outline: 2px solid var(--hx); outline-offset: 3px; }

        .about-cards { display: flex; flex-direction: column; gap: 1rem; }
        .about-card { display: flex; align-items: flex-start; gap: 1rem; background: var(--hx-panel);
          border: 1px solid var(--hx-dim); border-left: 3px solid var(--c); padding: 1.25rem 1.5rem; border-radius: 10px; }
        .about.in .about-card { transition: transform .2s, border-color .2s, box-shadow .2s, opacity .55s ease; }
        .about.in .about-card:hover { transform: translateX(6px); border-color: var(--c); box-shadow: 0 0 24px color-mix(in srgb, var(--c) 28%, transparent); }
        .card-icon { font-size: 1.5rem; flex-shrink: 0; margin-top: 2px; filter: drop-shadow(0 0 8px var(--c)); }
        .card-title { font-weight: 700; font-size: .95rem; margin-bottom: .35rem; color: var(--c); }
        .card-desc { font-size: .82rem; color: var(--muted); line-height: 1.7; }

        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; gap: 2.5rem; } }
        @media (prefers-reduced-motion: reduce) {
          .about .rv { opacity: 1; transform: none; transition: none; }
          .about .about-card { transition: none; }
        }
      `}</style>
    </section>
  )
}