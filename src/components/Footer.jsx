export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span>JJ<span className="logo-bracket">/&gt;</span>
          </div>
          <p className="footer-text">
            Er. Janak Raj Joshi — Computer Engineer · Kathmandu, Nepal
          </p>
          <p className="footer-copy">
            © 2026 Janak Raj Joshi
          </p>
        </div>
      </div>
      <style>{`
        .footer {
          border-top: 1px solid var(--border);
          padding: 2.5rem 1.5rem;
          text-align: center;
        }
        .footer-inner { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
        .footer-logo {
          font-family: var(--font-display);
          font-size: 1.4rem; font-weight: 800;
          color: var(--text); margin-bottom: 0.25rem;
        }
        .logo-bracket { color: var(--primary); }
        .footer-text { font-size: 0.88rem; color: var(--muted); }
        .footer-copy { font-size: 0.78rem; color: rgba(148,163,184,0.5); font-family: var(--font-mono); }
      `}</style>
    </footer>
  )
}
