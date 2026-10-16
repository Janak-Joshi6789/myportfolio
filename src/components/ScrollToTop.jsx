import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setVisible(window.scrollY > 300)
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`stt${visible ? ' show' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      tabIndex={visible ? 0 : -1}
      style={{ '--p': `${progress}%` }}
    >
      <span className="stt-inner">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </span>

      <style>{`
        .stt {
          --hx: #00ff9c; --hx-dim: rgba(0,255,156,.25); --hx-bg: #030806;
          position: fixed; bottom: 30px; right: 30px; z-index: 99;
          width: 50px; height: 50px; padding: 3px; border: 0; border-radius: 50%; cursor: pointer;
          /* progress ring: fills as you scroll down the page */
          background: conic-gradient(var(--hx) var(--p), var(--hx-dim) 0);
          box-shadow: 0 0 18px var(--hx-dim);
          opacity: 0; visibility: hidden; transform: translateY(20px);
          transition: opacity .3s ease, transform .3s ease, visibility .3s, box-shadow .2s;
        }
        :root[data-theme='light'] .stt { --hx: #008f5a; --hx-dim: rgba(0,143,90,.28); --hx-bg: #f0faf5; }
        .stt.show { opacity: 1; visibility: visible; transform: translateY(0); }
        .stt-inner {
          width: 100%; height: 100%; border-radius: 50%; display: grid; place-items: center;
          background: var(--hx-bg); color: var(--hx); transition: background .2s, color .2s;
        }
        .stt:hover { transform: translateY(-3px); box-shadow: 0 0 28px var(--hx); }
        .stt:hover .stt-inner { background: var(--hx); color: var(--hx-bg); }
        .stt:focus-visible { outline: 2px solid var(--hx); outline-offset: 3px; }
        @media (max-width: 600px) { .stt { bottom: 20px; right: 20px; } }
        @media (prefers-reduced-motion: reduce) { .stt { transition: none; } }
      `}</style>
    </button>
  )
}