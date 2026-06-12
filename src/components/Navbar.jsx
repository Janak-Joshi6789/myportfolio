import { useState, useEffect } from 'react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Services', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const [theme, setTheme] = useState('dark')

  // Apply theme to root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Scroll spy — detect which section is in view
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sectionIds = links.map(l => l.toLowerCase())
      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id
          }
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        {/* Logo */}
        <a className="nav-logo" href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <span className="logo-bracket">&lt;</span>JJ<span className="logo-bracket">/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map(l => {
            const isActive = active === l.toLowerCase()
            return (
              <li key={l}>
                <button
                  onClick={() => handleNav(l)}
                  className={`nav-link${isActive ? ' active' : ''}`}
                >
                  {l}
                  {isActive && <span className="nav-dot" />}
                </button>
              </li>
            )
          })}

          {/* Theme toggle — inside drawer on mobile */}
          <li className="mobile-theme-item">
            <button className="theme-toggle-inline" onClick={toggleTheme}>
              {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </li>

         
        </ul>

        <div className="nav-right">
          {/* Theme toggle — desktop */}
          <button className="theme-toggle" onClick={toggleTheme} title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            <span className="theme-icon">{theme === 'dark' ? '☀️' : '🌙'}</span>
            <span className="theme-label">{theme === 'dark' ? '' : ''}</span>
          </button>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}

      <style>{`
        /* ── Light theme overrides ── */
        :root[data-theme="light"] {
          --bg: #f0f4ff;
          --bg2: #e8eef9;
          --bg3: #dde5f5;
          --border: rgba(59,130,246,0.18);
          --primary: #2563eb;
          --primary-glow: rgba(37,99,235,0.2);
          --accent: #7c3aed;
          --accent2: #059669;
          --text: #0f172a;
          --muted: #475569;
          --card: rgba(0,0,0,0.04);
        }

        /* ── Navbar base ── */
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          transition: all 0.3s ease;
          padding: 1rem 0;
        }
        .navbar.scrolled {
          background: var(--nav-bg, rgba(6,10,20,0.9));
          backdrop-filter: blur(24px) saturate(150%);
          -webkit-backdrop-filter: blur(24px) saturate(150%);
          border-bottom: 1px solid var(--border);
          padding: 0.65rem 0;
          box-shadow: 0 4px 30px rgba(0,0,0,0.15);
        }
        :root[data-theme="light"] .navbar.scrolled {
          background: rgba(240,244,255,0.9);
        }

        .nav-inner {
          max-width: 1100px; margin: 0 auto;
          padding: 0 1.5rem;
          display: flex; align-items: center; justify-content: space-between;
        }

        /* ── Logo ── */
        .nav-logo {
          font-family: var(--font-display);
          font-size: 1.35rem; font-weight: 800;
          color: var(--text); text-decoration: none;
          letter-spacing: -0.02em; z-index: 1;
          transition: opacity 0.2s;
        }
        .nav-logo:hover { opacity: 0.75; }
        .logo-bracket { color: var(--primary); }

        /* ── Nav links list ── */
        .nav-links {
          display: flex; align-items: center; gap: 0.15rem;
          list-style: none;
        }

        /* ── Individual nav link ── */
        .nav-link {
          position: relative;
          background: none; border: none; cursor: pointer;
          color: var(--muted); font-family: var(--font-body);
          font-size: 0.88rem; padding: 0.5rem 0.9rem;
          border-radius: 8px; transition: all 0.2s;
          display: flex; align-items: center; gap: 0.35rem;
        }
        .nav-link:hover {
          color: var(--text);
          background: var(--card);
        }

        /* Active state */
        .nav-link.active {
          color: var(--primary);
          background: color-mix(in srgb, var(--primary) 10%, transparent);
          font-weight: 600;
        }

       
        /* ── Hire Me CTA ── */
        .nav-cta {
          background: var(--primary); color: #fff;
          padding: 0.48rem 1.15rem; border-radius: 7px;
          text-decoration: none; font-size: 0.88rem;
          font-weight: 600; transition: all 0.2s;
          margin-left: 0.6rem; white-space: nowrap;
        }
        .nav-cta:hover {
          opacity: 0.88; transform: translateY(-1px);
          box-shadow: 0 4px 14px var(--primary-glow);
        }

        /* ── Right group (theme + hamburger) ── */
        .nav-right {
          display: flex; align-items: center; gap: 0.5rem;
        }

        /* ── Theme toggle (desktop pill) ── */
        .theme-toggle {
          display: flex; align-items: center; gap: 0.4rem;
          background: var(--card); border: 1px solid var(--border);
          color: var(--muted); cursor: pointer;
          padding: 0.42rem 0.85rem; border-radius: 100px;
          font-size: 0.8rem; font-family: var(--font-body);
          transition: all 0.2s;
        }
        .theme-toggle:hover {
          border-color: var(--primary); color: var(--primary);
          background: color-mix(in srgb, var(--primary) 8%, transparent);
        }
        .theme-icon { font-size: 0.9rem; }
        .theme-label { font-weight: 500; }

        /* ── Hamburger ── */
        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer;
          padding: 5px; border-radius: 6px;
          transition: background 0.2s;
        }
        .hamburger:hover { background: var(--card); }
        .hamburger span {
          display: block; width: 22px; height: 2px;
          background: var(--text); border-radius: 2px;
          transition: all 0.3s;
        }
        .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

        /* ── Mobile overlay ── */
        .nav-overlay {
          position: fixed; inset: 0; z-index: 98;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(2px);
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

        /* ── Mobile theme toggle (inside drawer) ── */
        .mobile-theme-item { display: none; }
        .theme-toggle-inline {
          background: var(--card); border: 1px solid var(--border);
          color: var(--muted); cursor: pointer;
          padding: 0.65rem 1rem; border-radius: 8px;
          font-size: 0.92rem; font-family: var(--font-body);
          width: 100%; text-align: left; transition: all 0.2s;
        }
        .theme-toggle-inline:hover { color: var(--primary); border-color: var(--primary); }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .hamburger { display: flex; }
          .theme-toggle { display: none; }
          .mobile-theme-item { display: block; }

          .nav-links {
            position: fixed; top: 0; right: -100%; bottom: 0;
            width: 72%; max-width: 290px;
            background: var(--bg2);
            flex-direction: column; align-items: flex-start;
            padding: 5.5rem 1.5rem 2rem;
            gap: 0.25rem;
            transition: right 0.3s cubic-bezier(0.4,0,0.2,1);
            border-left: 1px solid var(--border);
            z-index: 99;
            box-shadow: -10px 0 40px rgba(0,0,0,0.25);
          }
          .nav-links.open { right: 0; }
          .nav-link {
            font-size: 1rem; width: 100%;
            padding: 0.8rem 1rem; border-radius: 8px;
          }
          .nav-link.active::after { display: none; }
          .nav-cta { margin-left: 0; margin-top: 0.75rem; width: 100%; text-align: center; padding: 0.7rem; }
        }
      `}</style>
    </nav>
  )
}
