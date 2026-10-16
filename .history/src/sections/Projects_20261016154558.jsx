import { useEffect, useRef, useState } from 'react'

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const LiveIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const projects = [
  {
    title: 'RankUp Nepal',
    category: 'Full Stack Web Development',
    color: 'var(--accent2)',
    tags: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL'],
    desc: 'A full-stack online exam preparation platform for Loksewa and competitive exams. Features practice tests, mock exams, study materials, user authentication, progress tracking, and an admin dashboard for managing questions and content.',
    icon: '📚',
    live: 'https://rankupnepal.com/',
    // github: 'https://github.com/Janak-Joshi6789/rankup-nepal.git',
  },
  {
    title: 'EV Fast Energy Website',
    category: 'Web Development',
    color: 'var(--accent2)',
    tags: ['React.js', 'Tailwind CSS', 'Responsive'],
    desc: "Nepal's leading EV fast charging solutions provider website. Features product listings, solutions, services, and a full responsive layout built with Next.js.",
    icon: '⚡',
    live: 'https://evfastenergy.com/',
    // github: 'https://github.com/Janak-Joshi6789/evfastenergy.git',
  },
  {
    title: 'Tour & Travels Website',
    category: 'Web Development',
    color: 'var(--accent2)',
    tags: ['React.js', 'Tailwind CSS', 'Responsive'],
    desc: 'A modern and responsive tour and travel website featuring destination showcases, tour packages, travel services, booking-oriented pages, and an engaging user experience with a clean, mobile-friendly interface.',
    icon: '✈️',
    live: 'https://tour-travel-project-seven.vercel.app/',
    github: 'https://github.com/Janak-Joshi6789/Tour-and-Travels.git',
  },
  {
    title: 'Mobile E-Commerce Website',
    category: 'Web Development',
    color: 'var(--accent2)',
    tags: ['JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
    desc: 'E-commerce platform with product listing, shopping cart, user authentication, and a PHP/MySQL backend for order and inventory management.',
    icon: '🛒',
    github: 'https://github.com/Janak-Joshi6789/MobileEcommerce',
    live: null,
  },
  {
    title: 'Cricket Association of Nepal Website',
    category: 'Web Development',
    color: 'var(--accent2)',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    desc: 'Official-style website developed for the Cricket Association of Nepal (CAN) featuring player profiles, team information, match schedules and tournament updates.',
    icon: '🏏',
    github: 'https://github.com/Janak-Joshi6789/Cricket-Association-of-Nepal-Website',
    live: null,
  },
  {
    title: 'Hospital Management System',
    category: 'Web Development',
    color: 'var(--accent2)',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'CRUD'],
    desc: 'Full-stack web application to manage patients, doctors, appointments, and medical records. Features complete CRUD operations with relational database integration.',
    icon: '🏥',
    github: 'https://github.com/Janak-Joshi6789/Hospital-website',
    live: null,
  },
  // { title: 'Mobile Store', category: 'Web Development', color: 'var(--accent2)', tags: ['JavaScript', 'HTML', 'CSS', 'Frontend'],
  //   desc: 'Frontend mobile store website with product display, filtering, and interactive UI built with vanilla JavaScript and modern CSS layouts.',
  //   icon: '📱', github: 'https://github.com/Janak-Joshi6789/mobile-store-', live: null },
  {
    title: 'Food Ordering Website',
    category: 'Web Development',
    color: 'var(--accent2)',
    tags: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL', 'Bootstrap'],
    desc: 'Online food ordering system with menu browsing, category filtering, cart management, and order processing — featuring a mobile-first responsive UI built with Bootstrap.',
    icon: '🍔',
    github: 'https://github.com/Janak-Joshi6789/Food-Ordering-Website',
    live: null,
  },
  {
    title: 'WordPress Gift Shop',
    category: 'Web Development',
    color: 'var(--accent2)',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'CMS'],
    desc: 'E-commerce gift shop built on WordPress with customized theme, WooCommerce product management, payment integration, and responsive storefront design.',
    icon: '🎁',
    github: 'https://github.com/Janak-Joshi6789/giftshop-website-using-wordpress',
    live: null,
  },
  {
    title: 'CCNA Networking Labs',
    category: 'Networking',
    color: 'var(--primary)',
    tags: ['Routing', 'Switching', 'VLANs', 'ACLs', 'NAT/PAT', 'Subnetting'],
    desc: 'Comprehensive CCNA-level lab exercises covering complete network topology design, router/switch configuration, inter-VLAN routing, access control lists, and address translation.',
    icon: '🌐',
    github: 'https://github.com/Janak-Joshi6789/CCNA',
    live: null,
  },
  // { title: 'Cybersecurity Labs', category: 'Cybersecurity', color: 'var(--accent)',
  //   tags: ['Penetration Testing', 'Nmap', 'Wireshark', 'Log Analysis', 'Encryption'],
  //   desc: 'Hands-on security labs including network scanning and enumeration, packet capture analysis, basic exploitation techniques, encryption/decryption, and incident log review using Wazuh.',
  //   icon: '🛡️', github: null, live: null },
  {
    title: 'Nepali Speech-to-Text',
    category: 'AI / ML',
    color: 'var(--warn)',
    tags: ['Python', 'wav2vec2', 'NLP', 'Deep Learning'],
    desc: "AI system that transcribes spoken Nepali language into text using Facebook's wav2vec2 architecture, fine-tuned on Nepali audio datasets for accurate local language recognition.",
    icon: '🎙️',
    github: 'https://github.com/Janak-Joshi6789/Nepali-Speech-to-Text.git',
    live: null,
  },
  {
    title: 'Nepali Text-to-Speech',
    category: 'AI / ML',
    color: 'var(--warn)',
    tags: ['Python', 'Tacotron', 'TTS', 'Deep Learning'],
    desc: 'Neural text-to-speech synthesis for the Nepali language using Tacotron architecture, generating natural-sounding Nepali audio from written text input.',
    icon: '🔊',
    github: 'https://github.com/Janak-Joshi6789/Nepali-Text-to-Speech-Synthesis.git',
    live: null,
  },
]

const cats = ['All', 'Web Development', 'Networking', 'AI / ML']

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

export default function Projects() {
  const [ref, shown] = useReveal()
  const [filter, setFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)
  const allFiltered = filter === 'All' ? projects : projects.filter(p => p.category === filter)
  const filtered = showAll ? allFiltered : allFiltered.slice(0, 6)
  const hasMore = allFiltered.length > 6

  return (
    <section id="projects" ref={ref} className={`section projects${shown ? ' in' : ''}`}>
      <div className="container">
        <div className="section-label rv">
          <span className="label-line" />
          <span className="font-mono text-primary text-sm">&gt; ls ~/projects</span>
        </div>
        <h2 className="section-title rv" style={{ '--i': 1 }}>What <span className="text-primary">I've Built</span></h2>
        <p className="section-sub rv" style={{ '--i': 2 }}>Projects spanning networking labs, security research, and full-stack web applications</p>

        <div className="filter-tabs rv" style={{ '--i': 3 }} role="tablist" aria-label="Filter projects">
          {cats.map(c => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              className={`filter-tab${filter === c ? ' active' : ''}`}
              onClick={() => { setFilter(c); setShowAll(false) }}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((p, i) => (
            <div key={p.title} className="project-card rv" style={{ '--c': p.color, '--i': i % 3 + 3 }}>
              <div className="project-top">
                <div className="project-icon">{p.icon}</div>
                <span className="project-cat">{p.category}</span>
              </div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>

              {(p.github || p.live) && (
                <div className="project-links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="proj-link live-link">
                      <LiveIcon /> Live Site
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="proj-link github-link">
                      <GitHubIcon /> GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="show-more-wrap rv">
            <button className="show-more-btn" onClick={() => setShowAll(!showAll)} aria-expanded={showAll}>
              {showAll ? '$ show --less' : `$ show --more (+${allFiltered.length - 6})`}
            </button>
          </div>
        )}
      </div>

      <style>{`
        /* ---- Hacker theme, scoped to this section (dark / light follows html[data-theme]) ---- */
        .projects {
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
        :root[data-theme='light'] .projects {
          --hx: #008f5a; --hx-dim: rgba(0,143,90,.22); --hx-bg: #f0faf5; --hx-panel: rgba(255,255,255,.85);
          --hx-text: #0b2a1e; --hx-muted: rgba(11,42,30,.7); --hx-input: #ffffff;
          --accent: #0e7490; --accent2: #b45309; --warn: #c2410c; --violet: #6d28d9;
        }
        .projects::before { content: ''; position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse at 50% 40%, transparent 20%, var(--hx-bg) 85%); }
        .projects .container { position: relative; z-index: 1; }
        .projects .text-primary { color: var(--primary); }
        .projects .section-sub { color: var(--muted); font-size: .88rem; margin-top: .4rem; }

        .projects .rv { opacity: 0; transform: translateY(16px); transition: opacity .55s ease, transform .55s ease; transition-delay: calc(var(--i, 0) * 80ms); }
        .projects.in .rv { opacity: 1; transform: none; }

        .projects .show-more-wrap { display: flex; justify-content: center; margin-top: 2.5rem; }
        .projects .show-more-btn { display: inline-flex; align-items: center; gap: .5rem; background: var(--hx-panel); border: 1px solid var(--hx-dim);
          color: var(--muted); padding: .6rem 1.75rem; border-radius: 6px; cursor: pointer; font-size: .85rem; font-family: inherit; transition: .2s; }
        .projects .show-more-btn:hover { border-color: var(--hx); color: var(--hx); box-shadow: 0 0 18px var(--hx-dim); }
        .projects button:focus-visible, .projects a:focus-visible, .projects input:focus-visible, .projects textarea:focus-visible, .projects .flip:focus-visible { outline: 2px solid var(--hx); outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) { .projects .rv { opacity: 1; transform: none; transition: none; } }

        .projects .filter-tabs { display: flex; flex-wrap: wrap; gap: .5rem; margin: 2rem 0 2.5rem; }
        .projects .filter-tab { background: var(--hx-panel); border: 1px solid var(--hx-dim); color: var(--muted); padding: .45rem 1rem;
          border-radius: 6px; cursor: pointer; font-size: .82rem; font-weight: 500; font-family: inherit; transition: .2s; }
        .projects .filter-tab:hover { color: var(--text); border-color: var(--hx); }
        .projects .filter-tab.active { background: var(--hx); border-color: var(--hx); color: var(--hx-bg); font-weight: 700; box-shadow: 0 0 18px var(--hx-dim); }

        .projects .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
        .projects .project-card { background: var(--hx-panel); border: 1px solid var(--hx-dim); border-top: 3px solid var(--c);
          border-radius: 10px; padding: 1.6rem; display: flex; flex-direction: column; }
        .projects.in .project-card { transition: opacity .55s ease, transform .25s, border-color .25s, box-shadow .25s; }
        .projects.in .project-card:hover { transform: translateY(-5px); border-color: var(--c);
          box-shadow: 0 10px 40px color-mix(in srgb, var(--c) 22%, transparent); }

        .projects .project-top { display: flex; align-items: center; justify-content: space-between; gap: .5rem; margin-bottom: 1rem; }
        .projects .project-icon { font-size: 2rem; filter: drop-shadow(0 0 8px var(--c)); }
        .projects .project-cat { font-size: .7rem; color: var(--c); border: 1px solid var(--c); padding: .2rem .65rem; border-radius: 4px; text-align: right; }
        .projects .project-title { font-size: 1.05rem; font-weight: 700; margin-bottom: .75rem; }
        .projects .project-desc { color: var(--muted); font-size: .84rem; line-height: 1.7; flex: 1; margin-bottom: 1.25rem; }

        .projects .project-tags { display: flex; flex-wrap: wrap; gap: .4rem; margin-bottom: 1.25rem; }
        .projects .tag { background: color-mix(in srgb, var(--c) 8%, transparent); border: 1px solid var(--hx-dim); color: var(--muted);
          font-size: .7rem; padding: .2rem .6rem; border-radius: 4px; }

        .projects .project-links { display: flex; gap: .6rem; padding-top: 1rem; border-top: 1px solid var(--hx-dim); margin-top: auto; }
        .projects .proj-link { display: inline-flex; align-items: center; gap: .35rem; font-size: .78rem; padding: .4rem .85rem;
          border-radius: 6px; border: 1px solid; text-decoration: none; font-weight: 500; transition: .2s; }
        .projects .live-link { border-color: var(--c); color: var(--c); }
        .projects .live-link:hover { background: color-mix(in srgb, var(--c) 14%, transparent); transform: translateY(-1px); }
        .projects .github-link { border-color: var(--hx-dim); color: var(--muted); }
        .projects .github-link:hover { border-color: var(--text); color: var(--text); }
      `}</style>
    </section>
  )
}