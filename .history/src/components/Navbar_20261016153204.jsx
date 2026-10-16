import { useState, useEffect } from 'react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Services', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const [theme, setTheme] = useState(() => {
    try {
      return (
        localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
      )
    } catch {
      return 'dark'
    }
  })

  // Apply + remember theme (Hero and other sections read html[data-theme])
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Scroll spy
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      let current = ''
      for (const id of links.map(l => l.toLowerCase())) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) current = id
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = id => {
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}${menuOpen ? ' open' : ''}`}>
      <div className="nav-inner">

        {/* Logo */}
        <a
          className="nav-logo"
          href="#home"
          aria-label="Back to top"
          onClick={e => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <img src="/favicon.png" alt="JJ" className="logo-icon" />
        </a>

        {/* Links */}
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map(l => {
            const isActive = active === l.toLowerCase()
            return (
              <li key={l}>
                <button onClick={() => handleNav(l)} className={`nav-link${isActive ? ' active' : ''}`}>
                  {l}
                  {isActive && <span className="nav-dot" />}
                </button>
              </li>
            )
          })}

          {/* Mobile theme toggle */}
          <li className="mobile-theme-item">
            <button className="theme-toggle-inline" onClick={toggleTheme}>
              {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </li>
        </ul>

        {/* Right controls */}
        <div className="nav-right">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="theme-icon">{theme === 'dark' ? '☀️' : '🌙'}</span>
          </button>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}

      <style>{`
        /* ================= THEME VARIABLES ================= */
        :root[data-theme="light"] {
          --bg: #f0f4ff;
          --bg2: #e8eef9;
          --border: rgba(59,130,246,0.18);
          --primary: #2563eb;
          --text: #0f172a;
          --muted: #475569;
          --card: rgba(0,0,0,0.04);
        }

        /* Navbar accent matches the hacker hero (green) */
        .navbar {
          --nav-accent: #00ff9c;
          --nav-line: rgba(0,255,156,0.22);
          --nav-bg: rgba(3,8,6,0.88);
          --nav-bg-solid: rgba(3,8,6,0.97);
          --nav-panel: #06100c;
        }
        :root[data-theme="light"] .navbar {
          --nav-accent: #008f5a;
          --nav-line: rgba(0,143,90,0.3);
          --nav-bg: rgba(240,250,245,0.9);
          --nav-bg-solid: rgba(240,250,245,0.98);
          --nav-panel: #e6f5ee;
        }

        /* ================= NAVBAR ================= */
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1200;
          transition: background 0.3s ease, padding 0.3s ease, border-color 0.3s ease;
          padding: 1rem 0;
          border-bottom: 1px solid transparent;
        }

        .navbar.scrolled {
          background: var(--nav-bg);
          backdrop-filter: blur(24px);
          border-bottom-color: var(--nav-line);
          box-shadow: 0 1px 24px rgba(0,255,156,0.06);
          padding: 0.65rem 0;
        }

        .navbar.open {
          background: var(--nav-bg-solid);
          backdrop-filter: blur(20px);
        }

        .nav-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* ================= LOGO ================= */
        .nav-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          z-index: 1;
          border-radius: 8px;
        }
        .logo-icon {
          width: 34px;
          height: 34px;
          object-fit: contain;
          filter: drop-shadow(0 0 8px var(--nav-accent));
          transition: transform 0.25s;
        }
        .nav-logo:hover .logo-icon { transform: scale(1.1) rotate(-4deg); }

        /* ================= LINKS ================= */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--muted);
          font-family: var(--font-mono, 'JetBrains Mono', ui-monospace, monospace);
          font-size: 0.82rem;
          padding: 0.5rem 0.9rem;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
        }
        .nav-link:hover { background: var(--card); color: var(--text); }
        .nav-link.active { color: var(--nav-accent); text-shadow: 0 0 12px var(--nav-accent); }

        .nav-dot {
          position: absolute;
          left: 50%;
          bottom: 2px;
          width: 4px; height: 4px;
          margin-left: -2px;
          border-radius: 50%;
          background: var(--nav-accent);
          box-shadow: 0 0 8px var(--nav-accent);
        }

        .nav-link:focus-visible,
        .theme-toggle:focus-visible,
        .hamburger:focus-visible,
        .nav-logo:focus-visible { outline: 2px solid var(--nav-accent); outline-offset: 2px; }

        /* ================= RIGHT ================= */
        .nav-right { display: flex; align-items: center; gap: 0.5rem; }

        .theme-toggle {
          background: var(--card);
          border: 1px solid var(--nav-line);
          padding: 0.4rem 0.8rem;
          border-radius: 999px;
          cursor: pointer;
          color: var(--muted);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .theme-toggle:hover { border-color: var(--nav-accent); box-shadow: 0 0 14px var(--nav-line); }

        .theme-toggle-inline {
          background: var(--card);
          border: 1px solid var(--nav-line);
          color: var(--text);
          padding: 0.6rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          width: 100%;
          text-align: left;
        }

        /* ================= HAMBURGER ================= */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          z-index: 1300;
        }
        .hamburger span {
          width: 22px; height: 2px;
          background: var(--text);
          transition: transform 0.25s, opacity 0.25s;
        }
        .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

        /* ================= OVERLAY ================= */
        .nav-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(0,0,0,0.5);
        }

        /* ================= MOBILE ================= */
        .mobile-theme-item { display: none; }

        @media (max-width: 768px) {
          .hamburger { display: flex; }
          .theme-toggle { display: none; }
          .mobile-theme-item { display: block; width: 100%; }

          .navbar { background: var(--nav-bg-solid); }

          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 55%;
            min-width: 220px;
            height: 100vh;
            background: var(--nav-panel);
            border-left: 1px solid var(--nav-line);
            flex-direction: column;
            align-items: flex-start;
            padding: 5rem 1.5rem;
            transition: right 0.3s ease;
            z-index: 1100;
          }
          .nav-links.open { right: 0; }
          .nav-links li { width: 100%; }
          .nav-link { width: 100%; text-align: left; padding: 1rem; }
          .nav-dot { left: 0.4rem; bottom: 50%; margin: 0 0 -2px 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .navbar, .nav-links, .logo-icon, .hamburger span { transition: none; }
        }
      `}</style>
    </nav>
  )
}