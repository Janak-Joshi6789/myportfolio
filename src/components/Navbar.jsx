import { useState, useEffect } from 'react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Services', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const [theme, setTheme] = useState('dark')

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  // Scroll spy
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
    <nav className={`navbar${scrolled ? ' scrolled' : ''}${menuOpen ? ' open' : ''}`}>
      <div className="nav-inner">

        {/* Logo */}
        <a
          className="nav-logo"
          href="www.joshijanak.com.np"
          onClick={(e) => {
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

          {/* Mobile theme toggle */}
          <li className="mobile-theme-item">
            <button className="theme-toggle-inline" onClick={toggleTheme}>
              {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </li>
        </ul>

        {/* Right controls */}
        <div className="nav-right">

          {/* Desktop theme */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
          >
            <span className="theme-icon">{theme === 'dark' ? '☀️' : '🌙'}</span>
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

      {/* Overlay */}
      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
      )}

      <style>{`
        /* ================= ROOT ================= */
        :root[data-theme="light"] {
          --bg: #f0f4ff;
          --bg2: #e8eef9;
          --border: rgba(59,130,246,0.18);
          --primary: #2563eb;
          --text: #0f172a;
          --muted: #475569;
          --card: rgba(0,0,0,0.04);
        }
          .logo-icon {
  width: 34px;
  height: 34px;
  object-fit: contain;
  vertical-align: middle;
}

        /* ================= NAVBAR ================= */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1200;
          transition: all 0.3s ease;
          padding: 1rem 0;
        }

        .navbar.scrolled {
          background: rgba(6,10,20,0.9);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid var(--border);
          padding: 0.65rem 0;
        }

        :root[data-theme="light"] .navbar.scrolled {
          background: rgba(240,244,255,0.9);
        }

        /* Fix when menu open */
        .navbar.open {
          background: rgba(6,10,20,0.95);
          backdrop-filter: blur(20px);
        }

        :root[data-theme="light"] .navbar.open {
          background: rgba(240,244,255,0.98);
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
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text);
          text-decoration: none;
          z-index: 1;
        }

        .logo-bracket {
          color: var(--primary);
        }

        /* ================= LINKS ================= */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          list-style: none;
          
        }

        .nav-link {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--muted);
          padding: 0.5rem 0.9rem;
          border-radius: 8px;
        }

        .nav-link:hover {
          background: var(--card);
          color: var(--text);
        }

        .nav-link.active {
          color: var(--primary);
        }

        /* ================= RIGHT ================= */
        .nav-right {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* ================= THEME ================= */
        .theme-toggle {
          background: var(--card);
          border: 1px solid var(--border);
          padding: 0.4rem 0.8rem;
          border-radius: 999px;
          cursor: pointer;
          color: var(--muted);
        }
          .theme-toggle-inline {
  background: var(--card);
  border: 1px solid var(--border);
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
          z-index: 1300;
        }

        .hamburger span {
          width: 22px;
          height: 2px;
          background: var(--text);
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* ================= OVERLAY ================= */
        .nav-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(0,0,0,0.5);
        }

        /* ================= MOBILE ================= */
        .mobile-theme-item {
          display: none;
        }

        @media (max-width: 768px) {

          .hamburger {
            display: flex;
          }

          .theme-toggle {
            display: none;
          }

          .mobile-theme-item {
            display: block;
          }

          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 45%;
            height: 100vh;
            background: var(--bg2);
            flex-direction: column;
            align-items: flex-start;
            padding: 5rem 1.5rem;
            transition: right 0.3s ease;
            z-index: 1100;
          }

          .nav-links.open {
            right: 0;
          }

          .nav-link {
            width: 100%;
            padding: 1rem;
          }

          .navbar {
            background: rgba(6,10,20,0.95);
          }

          :root[data-theme="light"] .navbar {
            background: rgba(240,244,255,0.98);
          }
        }
      `}</style>
    </nav>
  )
}