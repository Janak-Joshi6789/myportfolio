import { useEffect, useRef } from 'react'

const roles = ['Computer Engineer',  'Web Developer', 'Network Engineer', 'Cybersecurity Enthusiast']

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/janak-joshi-088667287/',
    color: '#0A66C2',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Janak-Joshi6789',
    color: '#f0f6fc',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/janakjoshi6789?igsh=N2lna2d3aTVsYXl6',
    color: '#E1306C',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/janak.joshi.6789',
    color: '#1877F2',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
]

export default function Hero() {
  const roleRef = useRef(null)

  useEffect(() => {
    let idx = 0, charIdx = 0, deleting = false
    const type = () => {
      const current = roles[idx]
      if (!deleting) {
        if (charIdx <= current.length) {
          if (roleRef.current) roleRef.current.textContent = current.slice(0, charIdx++)
          setTimeout(type, 60)
        } else {
          deleting = true
          setTimeout(type, 1800)
        }
      } else {
        if (charIdx > 0) {
          if (roleRef.current) roleRef.current.textContent = current.slice(0, charIdx--)
          setTimeout(type, 30)
        } else {
          deleting = false
          idx = (idx + 1) % roles.length
          setTimeout(type, 300)
        }
      }
    }
    type()
  }, [])

  return (
    <section id="home" className="hero">
      {/* Background */}
      <div className="hero-bg">
        <div className="hero-orb orb1" />
        <div className="hero-orb orb2" />
        <div className="hero-orb orb3" />
        <div className="hero-grid" />
      </div>

      <div className="hero-inner">
        {/* LEFT — Text content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-name">
            Er. Janak
            <span className="name-highlight">Joshi</span>
          </h1>

          <div className="hero-role">
            <span className="role-prefix"> </span>
            <span ref={roleRef} className="role-typed" />
            <span className="cursor">|</span>
          </div>

          {/* <p className="hero-bio">
            Computer Engineering graduate from Khowpa Engineering College, Bhaktapur.
            I bridge networks, security, and the web building systems that are fast,
            secure, and resilient.
          </p> */}

          {/* CTA buttons */}
          <div className="hero-actions">
            <a
              href="#projects"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary"
            >
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-ghost"
            >
              Get In Touch
            </a>
            
          </div>

          {/* Social links */}
          <div className="hero-socials">
            <span className="socials-label">Find me on</span>
            <div className="social-icons">
              {socials.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  title={s.name}
                  style={{ '--social-color': s.color }}
                >
                  {s.icon}
                  <span className="social-tooltip">{s.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Photo */}
        <div className="hero-photo-wrap">
          <div className="photo-ring ring-outer" />
          <div className="photo-ring ring-inner" />
          <div className="photo-frame">
            <div className="photo-placeholder">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span>Add your photo</span>
              <code>public/photo.jpg</code>
            </div>
            <img src="/photo.jpeg" alt="Janak Raj Joshi" className="photo-img" onError={e => { e.target.style.display = 'none' }} />
          </div>
          {/* Floating skill badges */}
          <div className="float-badge badge-net">
            <span>🌐</span> Networking
          </div>
          <div className="float-badge badge-sec">
            <span>🛡️</span> CyberSecurity
          </div>
          <div className="float-badge badge-web">
            <span>💻</span> Web Development
          </div>
          <div className="float-badge badge-ai">
            <span>🤖</span> AI / ML
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero-stats-bar">
        {[['BE Computer', 'Khwopa Enggineering College'], ['3', 'Core Domains'], ['15+', 'Projects Built'], ['10+', 'Certifications']].map(([n, l]) => (
          <div key={l} className="stat">
            <span className="stat-num">{n}</span>
            <span className="stat-label">{l}</span>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
        {/* <span>scroll</span> */}
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          position: relative; overflow: hidden;
          padding: 6rem 2rem 5rem;
        }
        .hero-bg { position: absolute; inset: 0; pointer-events: none; }
        .hero-orb {
          position: absolute; border-radius: 50%;
          filter: blur(90px); opacity: 0.12;
        }
        .orb1 { width: 700px; height: 700px; background: var(--primary); top: -250px; right: -150px; animation: float 9s ease-in-out infinite; }
        .orb2 { width: 450px; height: 450px; background: var(--accent); bottom: -100px; left: -100px; animation: float 11s ease-in-out infinite reverse; }
        .orb3 { width: 300px; height: 300px; background: var(--accent2); top: 40%; left: 40%; opacity: 0.07; animation: float 7s ease-in-out infinite 2s; }
        .hero-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 40%, black 20%, transparent 100%);
        }
        @keyframes float { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-30px) scale(1.05); } }

        /* Two-column layout */
        .hero-inner {
          max-width: 1100px; width: 100%;
          display: grid; grid-template-columns: 1fr auto;
          gap: 4rem; align-items: center;
          position: relative; z-index: 1;
        }

        /* LEFT */
        .hero-content { display: flex; flex-direction: column; gap: 0; }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: rgba(52,211,153,0.08); border: 1px solid rgba(52,211,153,0.22);
          color: var(--accent2); padding: 0.4rem 1rem; border-radius: 100px;
          font-size: 0.8rem; font-weight: 500; margin-bottom: 1.5rem;
          font-family: var(--font-mono); width: fit-content;
        }
        .badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--accent2); animation: pulse 2s infinite;
        }
        @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(1.4); } }

        .hero-name {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 6vw, 5.5rem);
          font-weight: 800; line-height: 1.0;
          letter-spacing: -0.03em; margin-bottom: 1rem;
        }
        .name-highlight { color: transparent; -webkit-text-stroke: 2px var(--primary); }

        .hero-role {
          font-family: var(--font-mono);
          font-size: clamp(0.9rem, 2vw, 1.2rem);
          color: var(--primary); margin-bottom: 1.25rem;
          min-height: 1.8rem; display: flex; align-items: center; gap: 0;
        }
        .role-prefix { color: var(--accent); margin-right: 0.3rem; }
        .cursor { animation: blink 1s infinite; color: var(--primary); }
        @keyframes blink { 0%,50% {opacity:1} 51%,100% {opacity:0} }

        .hero-bio {
          font-size: 1rem; color: var(--muted);
          max-width: 520px; line-height: 1.8; margin-bottom: 2rem;
        }

        /* Buttons */
        .hero-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 2rem; }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: var(--primary); color: var(--bg);
          padding: 0.8rem 1.5rem; border-radius: 8px;
          text-decoration: none; font-weight: 600; font-size: 0.9rem;
          transition: all 0.2s;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px var(--primary-glow); }
        .btn-ghost {
          display: inline-flex; align-items: center;
          border: 1px solid var(--border); color: var(--text);
          padding: 0.8rem 1.5rem; border-radius: 8px;
          text-decoration: none; font-weight: 500; font-size: 0.9rem;
          transition: all 0.2s;
        }
        .btn-ghost:hover { border-color: var(--primary); color: var(--primary); }
        .btn-outline {
          display: inline-flex; align-items: center; gap: 0.4rem;
          border: 1px solid rgba(167,139,250,0.4); color: var(--accent);
          padding: 0.8rem 1.5rem; border-radius: 8px;
          text-decoration: none; font-weight: 500; font-size: 0.9rem;
          transition: all 0.2s;
        }
        .btn-outline:hover { border-color: var(--accent); background: rgba(167,139,250,0.08); }

        /* Socials */
        .hero-socials { display: flex; align-items: center; gap: 1rem; }
        .socials-label { font-size: 0.78rem; color: var(--muted); font-family: var(--font-mono); white-space: nowrap; }
        .social-icons { display: flex; gap: 0.5rem; }
        .social-icon {
          position: relative;
          display: flex; align-items: center; justify-content: center;
          width: 40px; height: 40px; border-radius: 10px;
          border: 1px solid var(--border); color: var(--muted);
          text-decoration: none; transition: all 0.22s;
          background: var(--card);
        }
        .social-icon:hover {
          color: var(--social-color);
          border-color: var(--social-color);
          background: color-mix(in srgb, var(--social-color) 10%, transparent);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px color-mix(in srgb, var(--social-color) 25%, transparent);
        }
        .social-tooltip {
          position: absolute; bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%);
          background: var(--bg3); border: 1px solid var(--border);
          color: var(--text); font-size: 0.72rem; padding: 0.3rem 0.65rem;
          border-radius: 5px; white-space: nowrap; pointer-events: none;
          opacity: 0; transition: opacity 0.15s;
        }
        .social-icon:hover .social-tooltip { opacity: 1; }

        /* RIGHT — Photo */
        .hero-photo-wrap {
          position: relative; width: 320px; height: 320px;
          flex-shrink: 0;
        }
        .photo-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid var(--border);
          animation: spin 20s linear infinite;
        }
        .ring-outer {
          inset: -20px;
          border-color: rgba(99,179,237,0.15);
          border-top-color: var(--primary);
          animation-duration: 18s;
        }
        .ring-inner {
          inset: -8px;
          border-color: rgba(167,139,250,0.1);
          border-right-color: var(--accent);
          animation-direction: reverse;
          animation-duration: 12s;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .photo-frame {
          position: absolute; inset: 0;
          border-radius: 50%; overflow: hidden;
          background: var(--bg2);
          border: 2px solid var(--border);
          display: flex; align-items: center; justify-content: center;
        }
        .photo-placeholder {
          display: flex; flex-direction: column; align-items: center;
          gap: 0.4rem; color: var(--muted); text-align: center; padding: 1rem;
        }
        .photo-placeholder span { font-size: 0.75rem; }
        .photo-placeholder code {
          font-family: var(--font-mono); font-size: 0.65rem;
          background: var(--bg3); padding: 0.2rem 0.5rem; border-radius: 4px;
          color: var(--primary);
        }
        .photo-img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; object-position: center top;
          border-radius: 50%;
        }

        /* Floating badges */
        .float-badge {
          position: absolute; display: flex; align-items: center; gap: 0.35rem;
          background: var(--bg2); border: 1px solid var(--border);
          padding: 0.35rem 0.75rem; border-radius: 100px;
          font-size: 0.75rem; font-weight: 500; color: var(--text);
          white-space: nowrap; animation: floatBadge 4s ease-in-out infinite;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        .badge-net { top: 5px; left: -60px; animation-delay: 0s; }
        .badge-sec { top: 5px; right: -60px; animation-delay: 1s; }
        .badge-web { bottom: 30px; left: -50px; animation-delay: 2s; }
        .badge-ai  { bottom: 30px; right: -50px; animation-delay: 3s; }
        @keyframes floatBadge { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }

        /* Stats bar */
        .hero-stats-bar {
          display: flex; justify-content: center; gap: 0; flex-wrap: wrap;
          position: relative; z-index: 1;
          width: 100%; max-width: 1100px;
          margin-top: 4rem;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: var(--card);
          overflow: hidden;
        }
        .stat {
          flex: 1; min-width: 120px;
          text-align: center; padding: 1.25rem 1rem;
          border-right: 1px solid var(--border);
        }
        .stat:last-child { border-right: none; }
        .stat-num {
          display: block; font-family: var(--font-display);
          font-size: 2rem; font-weight: 700; color: var(--primary);
        }
        .stat-label {
          font-size: 0.75rem; color: var(--muted);
          text-transform: uppercase; letter-spacing: 0.1em;
        }

        /* Scroll hint */
        .scroll-indicator {
          position: absolute; bottom: 1.5rem; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
          color: var(--muted); font-size: 0.65rem;
          text-transform: uppercase; letter-spacing: 0.18em;
          font-family: var(--font-mono);
        }
        .scroll-line {
          width: 1px; height: 36px;
          background: linear-gradient(to bottom, var(--primary), transparent);
          animation: scrollAnim 2s ease-in-out infinite;
        }
        @keyframes scrollAnim {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }

        /* Responsive */
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr; gap: 3rem; }
          .hero-photo-wrap { width: 240px; height: 240px; margin: 0 auto; }
          .badge-net, .badge-sec, .badge-web, .badge-ai { display: none; }
          .hero-content { align-items: center; text-align: center; }
          .hero-bio { max-width: 100%; }
          .hero-actions { justify-content: center; }
          .hero-socials { justify-content: center; }
          .hero-name { font-size: clamp(2.5rem, 10vw, 4rem); }
        }
        @media (max-width: 500px) {
          .hero-stats-bar { flex-direction: column; }
          .stat { border-right: none; border-bottom: 1px solid var(--border); }
          .stat:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  )
}
