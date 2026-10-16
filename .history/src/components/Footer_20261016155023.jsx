export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <img src="/favicon.png" alt="JJ" className="logo-icon" />
          </div>

          <p className="footer-text">
            Er. Janak Raj Joshi — Computer Engineer · Kathmandu, Nepal
          </p>

          <p className="footer-status">
            <span className="status-dot" />
            system online
          </p>

          <button
            className="footer-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            $ cd ~
          </button>

          <p className="footer-copy">© 2026 Janak Raj Joshi</p>
        </div>
      </div>

      <style>{`
        /* ---- Hacker theme, scoped to the footer (dark / light follows html[data-theme]) ---- */
        .footer {
          --hx: #00ff9c; --hx-dim: rgba(0,255,156,.25); --hx-bg: #030806; --hx-panel: rgba(3,12,9,.78);
          --hx-text: #d7f5e6; --hx-muted: rgba(215,245,230,.66);
          --primary: var(--hx); --text: var(--hx-text); --muted: var(--hx-muted); --border: var(--hx-dim);
          position: relative;
          background: var(--hx-bg);
          color: var(--text);
          font-family: var(--font-mono, 'JetBrains Mono', ui-monospace, monospace);
          border-top: 1px solid var(--hx-dim);
          padding: 2.5rem 1.5rem;
          text-align: center;
        }
        :root[data-theme='light'] .footer {
          --hx: #008f5a; --hx-dim: rgba(0,143,90,.3); --hx-bg: #f0faf5; --hx-panel: rgba(255,255,255,.85);
          --hx-text: #0b2a1e; --hx-muted: rgba(11,42,30,.7);
        }
        /* glowing line along the top edge */
        .footer::before {
          content: ''; position: absolute; top: -1px; left: 50%; transform: translateX(-50%);
          width: min(420px, 70%); height: 1px;
          background: linear-gradient(90deg, transparent, var(--hx), transparent);
          box-shadow: 0 0 14px var(--hx);
        }

        .footer-inner { display: flex; flex-direction: column; align-items: center; gap: .6rem; }

        .footer .logo-icon {
          width: 44px; height: 44px; object-fit: contain; vertical-align: middle;
          filter: drop-shadow(0 0 8px var(--hx));
        }
        .footer-logo { margin-bottom: .25rem; }

        .footer-text { font-size: .86rem; color: var(--muted); }

        .footer-status { display: inline-flex; align-items: center; gap: .5rem; font-size: .75rem; color: var(--hx); }
        .status-dot {
          width: 7px; height: 7px; border-radius: 50%; background: var(--hx);
          box-shadow: 0 0 10px var(--hx); animation: ftPulse 2s infinite;
        }
        @keyframes ftPulse { 50% { opacity: .35; transform: scale(1.4); } }

        .footer-top {
          background: var(--hx-panel); border: 1px solid var(--hx-dim); color: var(--muted);
          font-family: inherit; font-size: .78rem; padding: .45rem 1.1rem; border-radius: 6px;
          cursor: pointer; transition: .2s;
        }
        .footer-top:hover { border-color: var(--hx); color: var(--hx); box-shadow: 0 0 18px var(--hx-dim); }
        .footer-top:focus-visible { outline: 2px solid var(--hx); outline-offset: 3px; }

        .footer-copy { font-size: .76rem; color: var(--muted); opacity: .75; }

        @media (prefers-reduced-motion: reduce) { .status-dot { animation: none; } }
      `}</style>
    </footer>
  )
}