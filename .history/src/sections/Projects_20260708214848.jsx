import { useState } from 'react'

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
   github: 'https://github.com/Janak-Joshi6789/evfastenergy.git',
    
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
  desc: 'Official-style website developed for the Cricket Association of Nepal (CAN)featuring player profiles, team information, match schedules and tournament updates.',
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
 
  // {
  //   title: 'Mobile Store',
  //   category: 'Web Development',
  //   color: 'var(--accent2)',
  //   tags: ['JavaScript', 'HTML', 'CSS', 'Frontend'],
  //   desc: 'Frontend mobile store website with product display, filtering, and interactive UI built with vanilla JavaScript and modern CSS layouts.',
  //   icon: '📱',
  //   github: 'https://github.com/Janak-Joshi6789/mobile-store-',
  //   live: null,
  // },
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
  // {
  //   title: 'Cybersecurity Labs',
  //   category: 'Cybersecurity',
  //   color: 'var(--accent)',
  //   tags: ['Penetration Testing', 'Nmap', 'Wireshark', 'Log Analysis', 'Encryption'],
  //   desc: 'Hands-on security labs including network scanning and enumeration, packet capture analysis, basic exploitation techniques, encryption/decryption, and incident log review using Wazuh.',
  //   icon: '🛡️',
  //   github: null,
  //   live: null,
  // },
  {
    title: 'Nepali Speech-to-Text',
    category: 'AI / ML',
    color: '#fb923c',
    tags: ['Python', 'wav2vec2', 'NLP', 'Deep Learning'],
    desc: "AI system that transcribes spoken Nepali language into text using Facebook's wav2vec2 architecture, fine-tuned on Nepali audio datasets for accurate local language recognition.",
    icon: '🎙️',
    github: 'https://github.com/Janak-Joshi6789/Nepali-Speech-to-Text.git',
    live: null,
  },
  {
    title: 'Nepali Text-to-Speech',
    category: 'AI / ML',
    color: '#fb923c',
    tags: ['Python', 'Tacotron', 'TTS', 'Deep Learning'],
    desc: 'Neural text-to-speech synthesis for the Nepali language using Tacotron architecture, generating natural-sounding Nepali audio from written text input.',
    icon: '🔊',
    github: 'https://github.com/Janak-Joshi6789/Nepali-Text-to-Speech-Synthesis.git',
    live: null,
  },
]

const cats = ['All', 'Web Development', 'Networking', 'AI / ML']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)
  const allFiltered = filter === 'All' ? projects : projects.filter(p => p.category === filter)
  const filtered = showAll ? allFiltered : allFiltered.slice(0, 6)
  const hasMore = allFiltered.length > 6

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-label">
          <span className="label-line" />
          <span className="font-mono text-primary text-sm">03 — Projects</span>
        </div>
        <h2 className="section-title">What <span className="text-primary">I've Built</span></h2>
        <p className="section-sub">Projects spanning networking labs, security research, and full-stack web applications</p>

        <div className="filter-tabs">
          {cats.map(c => (
            <button
              key={c}
              className={`filter-tab${filter === c ? ' active' : ''}`}
              onClick={() => { setFilter(c); setShowAll(false) }}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map(p => (
            <div key={p.title} className="project-card">
              <div className="project-top">
                <div className="project-icon">{p.icon}</div>
                <span className="project-cat" style={{color: p.color, borderColor: p.color}}>{p.category}</span>
              </div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>

              {(p.github || p.live) && (
                <div className="project-links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="proj-link live-link" style={{borderColor: p.color, color: p.color}}>
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
          <div className="show-more-wrap">
            <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
              {showAll ? (
                <><span>Show Less</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15"/></svg></>
              ) : (
                <><span>See More ({allFiltered.length - 6} more)</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg></>
              )}
            </button>
          </div>
        )}
      </div>

      <style>{`
        .text-primary { color: var(--primary); }
        .section-sub { color: var(--muted); font-size: 0.9rem; margin-top: 0.4rem; }

        .filter-tabs {
          display: flex; flex-wrap: wrap; gap: 0.5rem;
          margin: 2rem 0 2.5rem;
        }
        .filter-tab {
          background: none; border: 1px solid var(--border);
          color: var(--muted); padding: 0.45rem 1rem;
          border-radius: 100px; cursor: pointer;
          font-size: 0.85rem; transition: all 0.2s;
          font-family: var(--font-body);
        }
        .filter-tab:hover { color: var(--text); border-color: rgba(99,179,237,0.4); }
        .filter-tab.active {
          background: var(--primary); border-color: var(--primary);
          color: var(--bg); font-weight: 600;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .project-card {
          background: var(--card); border: 1px solid var(--border);
          border-radius: 12px; padding: 1.75rem;
          transition: all 0.25s;
          display: flex; flex-direction: column;
        }
        .project-card:hover {
          border-color: rgba(99,179,237,0.3);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.3);
        }

        .project-top {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 1rem;
        }
        .project-icon { font-size: 2rem; }
        .project-cat {
          font-size: 0.72rem; border: 1px solid;
          padding: 0.2rem 0.65rem; border-radius: 100px;
          font-family: var(--font-mono); opacity: 0.8;
        }

        .project-title {
          font-family: var(--font-display);
          font-size: 1.1rem; font-weight: 700;
          margin-bottom: 0.75rem;
        }
        .project-desc {
          color: var(--muted); font-size: 0.87rem;
          line-height: 1.7; flex: 1; margin-bottom: 1.25rem;
          text-align: justify;
        }

        .project-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.25rem; }
        .tag {
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          color: var(--muted); font-size: 0.72rem;
          padding: 0.2rem 0.6rem; border-radius: 4px;
          font-family: var(--font-mono);
        }

        .project-links {
          display: flex; gap: 0.6rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
          margin-top: auto;
        }
        .proj-link {
          display: inline-flex; align-items: center; gap: 0.35rem;
          font-size: 0.8rem; padding: 0.4rem 0.85rem;
          border-radius: 6px; border: 1px solid;
          text-decoration: none; transition: all 0.2s;
          font-weight: 500;
        }
        .github-link {
          border-color: var(--border); color: var(--muted);
        }
        .github-link:hover {
          border-color: var(--text); color: var(--text);
        }
        .live-link:hover {
          opacity: 0.8; transform: translateY(-1px);
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
      `}</style>
    </section>
  )
}
