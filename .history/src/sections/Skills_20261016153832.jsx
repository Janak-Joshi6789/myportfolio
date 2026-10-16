import { useEffect, useRef, useState } from 'react'

const dev = n => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/`

const skillGroups = [
  {
    category: 'Networking',
    path: 'networking',
    color: 'var(--primary)',
    skills: [
      { name: 'Wireshark', fallback: '🦈' },
      { name: 'Nmap', fallback: '🔍' },
      { name: 'TCP/IP', fallback: '🌐' },
      { name: 'VLANs', fallback: '📡' },
      { name: 'NAT / PAT', fallback: '🔀' },
      { name: 'DHCP & DNS', fallback: '⚙️' },
      { name: 'Firewall/VPN', fallback: '🛡' },
      { name: 'Subnetting', fallback: '🧮' },
      { name: 'GNS3', fallback: '🖥' },
      { name: 'Packet Tracer', fallback: '📦' },
      { name: 'Linux', svg: dev('linux/linux-original.svg') },
    ],
  },
  {
    category: 'Cybersecurity',
    path: 'cybersecurity',
    color: 'var(--accent)',
    skills: [
      { name: 'Kali Linux', fallback: '💀' },
      { name: 'Metasploit', fallback: '⚔️' },
      { name: 'Burp Suite', fallback: '🕷' },
      { name: 'Nessus', fallback: '🔬' },
      { name: 'Wazuh SIEM', fallback: '📊' },
      { name: 'OSINT', fallback: '🔎' },
      { name: 'Wireshark', fallback: '🦈' },
      { name: 'Nmap', fallback: '🗺' },
      { name: 'OpenVAS', fallback: '🧪' },
      { name: 'Cryptography', fallback: '🔐' },
      { name: 'OWASP', fallback: '🌀' },
      { name: 'Blue Team', fallback: '🔵' },
    ],
  },
  {
    category: 'Web Development',
    path: 'web-dev',
    color: 'var(--accent2)',
    skills: [
      { name: 'HTML5', svg: dev('html5/html5-original.svg') },
      { name: 'CSS3', svg: dev('css3/css3-original.svg') },
      { name: 'JavaScript', svg: dev('javascript/javascript-original.svg') },
      { name: 'React.js', svg: dev('react/react-original.svg') },
      { name: 'Node.js', svg: dev('nodejs/nodejs-original.svg') },
      { name: 'PHP', svg: dev('php/php-original.svg') },
      { name: 'MySQL', svg: dev('mysql/mysql-original.svg') },
      { name: 'PostgreSQL', svg: dev('postgresql/postgresql-original.svg') },
      { name: 'Bootstrap', svg: dev('bootstrap/bootstrap-original.svg') },
      { name: 'Tailwind CSS', svg: dev('tailwindcss/tailwindcss-original.svg') },
      { name: 'WordPress', svg: dev('wordpress/wordpress-plain.svg') },
      { name: 'Git', svg: dev('git/git-original.svg') },
      { name: 'GitHub', svg: dev('github/github-original.svg'), invertInDark: true },
      { name: 'VS Code', svg: dev('vscode/vscode-original.svg') },
      { name: 'Figma', svg: dev('figma/figma-original.svg') },
      { name: 'Python', svg: dev('python/python-original.svg') },
    ],
  },
]

function SkillTile({ name, svg, fallback, invertInDark }) {
  return (
    <div className="skill-tile">
      <div className="tile-icon">
        {svg ? (
          <img
            src={svg}
            alt={name}
            width="36"
            height="36"
            loading="lazy"
            className={invertInDark ? 'invert-dark' : undefined}
            onError={e => {
              e.target.style.display = 'none'
              if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex'
            }}
          />
        ) : null}
        <span className="tile-fallback" style={{ display: svg ? 'none' : 'flex' }}>
          {fallback || '⚡'}
        </span>
      </div>
      <span className="tile-name">{name}</span>
    </div>
  )
}

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

export default function Skills() {
  const [ref, shown] = useReveal()

  return (
    <section id="skills" ref={ref} className={`section skills${shown ? ' in' : ''}`}>
      <div className="container">
        <div className="section-label">
          <span className="label-line" />
          <span className="font-mono text-primary text-sm">&gt; ls ~/skills</span>
        </div>
        <h2 className="section-title">
          Technical <span className="text-primary">Proficiency</span>
        </h2>
        <p className="section-sub">
          Skills developed through coursework, certifications, and hands-on lab work
        </p>

        <div className="skill-groups">
          {skillGroups.map((group, gi) => (
            <div key={group.category} className="skill-group" style={{ '--gi': gi, '--c': group.color }}>
              <div className="group-heading">
                <span className="group-bar" />
                <h3 className="group-name">{group.category}</h3>
                <span className="group-path">~/skills/{group.path}/ [{group.skills.length}]</span>
              </div>
              <div className="tiles-grid">
                {group.skills.map((s, i) => (
                  <div key={s.name + i} className="tile-wrap" style={{ '--ti': i }}>
                    <SkillTile {...s} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ---- Hacker theme, scoped to this section (dark / light follows html[data-theme]) ---- */
        .skills {
          --hx: #00ff9c; --hx-dim: rgba(0,255,156,.25); --hx-bg: #030806; --hx-panel: rgba(3,12,9,.78);
          --hx-text: #d7f5e6; --hx-muted: rgba(215,245,230,.66);
          --primary: var(--hx); --accent: #22d3ee; --accent2: #fbbf24;
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
        :root[data-theme='light'] .skills {
          --hx: #008f5a; --hx-dim: rgba(0,143,90,.22); --hx-bg: #f0faf5; --hx-panel: rgba(255,255,255,.85);
          --hx-text: #0b2a1e; --hx-muted: rgba(11,42,30,.7);
          --accent: #0e7490; --accent2: #b45309;
        }
        .skills::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse at 50% 40%, transparent 20%, var(--hx-bg) 85%);
        }
        .skills .container { position: relative; z-index: 1; }

        .text-primary { color: var(--primary); }
        .section-sub { color: var(--muted); font-size: .88rem; margin-top: .4rem; }

        .skill-groups { display: flex; flex-direction: column; gap: 3.25rem; margin-top: 3rem; }

        .group-heading { display: flex; align-items: center; flex-wrap: wrap; gap: .75rem; margin-bottom: 1.4rem; }
        .group-bar { width: 4px; height: 22px; border-radius: 99px; background: var(--c); box-shadow: 0 0 12px var(--c); }
        .group-name { font-size: 1rem; font-weight: 700; color: var(--c); }
        .group-path { font-size: .72rem; color: var(--muted); }

        .tiles-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(96px, 1fr)); gap: .85rem; }

        /* reveal (once, on scroll into view) */
        .skill-group .group-heading, .tile-wrap { opacity: 0; transform: translateY(14px) scale(.96);
          transition: opacity .45s ease, transform .45s cubic-bezier(.34,1.4,.64,1);
          transition-delay: calc(var(--gi) * 120ms + var(--ti, 0) * 35ms); }
        .skills.in .group-heading, .skills.in .tile-wrap { opacity: 1; transform: none; }

        .skill-tile { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: .5rem;
          background: var(--hx-panel); border: 1px solid var(--hx-dim); border-radius: 10px; padding: 1rem .5rem; cursor: default;
          transition: border-color .2s, transform .2s, box-shadow .2s; }
        .skill-tile:hover { border-color: var(--c); transform: translateY(-4px);
          box-shadow: 0 0 22px color-mix(in srgb, var(--c) 30%, transparent); }

        .tile-icon { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; }
        .tile-icon img { width: 36px; height: 36px; object-fit: contain; }
        /* black icons (GitHub) disappear on a dark background, so invert them in dark mode only */
        :root:not([data-theme='light']) .skills .invert-dark { filter: invert(1); }
        .tile-fallback { font-size: 1.6rem; align-items: center; justify-content: center; }

        .tile-name { font-size: .72rem; color: var(--muted); text-align: center; line-height: 1.3; font-weight: 500; }

        @media (max-width: 600px) {
          .tiles-grid { grid-template-columns: repeat(auto-fill, minmax(78px, 1fr)); gap: .65rem; }
        }
        @media (prefers-reduced-motion: reduce) {
          .skill-group .group-heading, .tile-wrap { opacity: 1; transform: none; transition: none; }
        }
      `}</style>
    </section>
  )
}