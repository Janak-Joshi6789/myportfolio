import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const openTo = ['Network Engineer roles', 'SOC Analyst / Cybersecurity positions', 'Freelance projects']

const contactLinks = [
  { label: 'Email', val: 'janakjoshi6789@gmail.com', href: 'mailto:janakjoshi6789@gmail.com', icon: '✉️' },
  { label: 'Phone', val: '+977 9848840530', href: 'tel:9848840530', icon: '📞' },
  { label: 'Location', val: 'Koteshwor, Kathmandu, Nepal', href: null, icon: '📍' },
  { label: 'GitHub', val: 'Janak-Joshi6789', href: 'https://github.com/Janak-Joshi6789', icon: '💻' },
]

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

export default function Contact() {
  const [ref, shown] = useReveal()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await emailjs.send(
        'service_eye3wwq',
        'template_5mxri7i',
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || 'Portfolio Inquiry',
          message: form.message,
        },
        'znpsrqDmCoV9htqe5'
      )
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    } catch (err) {
      console.error('EmailJS Error:', err)
      setError('Message failed to send. Check your connection and try again, or email me directly.')
    }

    setLoading(false)
  }

  return (
    <section id="contact" ref={ref} className={`section contact${shown ? ' in' : ''}`}>
      <div className="container">
        <div className="section-label rv">
          <span className="label-line" />
          <span className="font-mono text-primary text-sm">&gt; ./contact.sh</span>
        </div>

        <h2 className="section-title rv" style={{ '--i': 1 }}>
          Let's <span className="text-primary">Work Together</span>
        </h2>

        <p className="section-sub rv" style={{ '--i': 2 }}>
          Whether you have a project, a question, or just want to connect — I'd love to hear from you.
        </p>

        <div className="contact-grid">
          {/* LEFT */}
          <div className="contact-info">
            <div className="info-card rv" style={{ '--i': 3 }}>
              <div className="info-header">
                <span className="info-dot" />
                <span>Currently Open To</span>
              </div>
              <ul className="open-to">
                {openTo.map(t => (
                  <li key={t}><span className="check">&gt;</span> {t}</li>
                ))}
              </ul>
            </div>

            <div className="contact-links">
              {contactLinks.map((c, i) => (
                <div key={c.label} className="contact-row rv" style={{ '--i': i + 4 }}>
                  <span className="cr-icon">{c.icon}</span>
                  <div>
                    <span className="cr-label">{c.label}</span>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="cr-val link"
                      >
                        {c.val}
                      </a>
                    ) : (
                      <span className="cr-val">{c.val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: form as a terminal window */}
          <form className="contact-form rv" style={{ '--i': 3 }} onSubmit={handleSubmit}>
            <div className="form-bar">
              <i /><i /><i />
              <span>new-message.sh</span>
            </div>

            <div className="form-body">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="c-name">name</label>
                  <input id="c-name" name="name" value={form.name} onChange={handleChange} placeholder="Ram Bahadur" required />
                </div>
                <div className="form-group">
                  <label htmlFor="c-email">email</label>
                  <input id="c-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="c-subject">subject</label>
                <input id="c-subject" name="subject" value={form.subject} onChange={handleChange} placeholder="Job opportunity / Project collaboration" />
              </div>

              <div className="form-group">
                <label htmlFor="c-message">message</label>
                <textarea id="c-message" name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell me what you have in mind..." required />
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Sending...' : sent ? '✓ Message Sent!' : '$ send --message'}
              </button>

              <p className={`form-status${error ? ' err' : ''}`} role="status" aria-live="polite">
                {error || (sent ? 'Delivered. I will get back to you soon.' : '')}
              </p>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        /* ---- Hacker theme, scoped to this section (dark / light follows html[data-theme]) ---- */
        .contact {
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
        :root[data-theme='light'] .contact {
          --hx: #008f5a; --hx-dim: rgba(0,143,90,.22); --hx-bg: #f0faf5; --hx-panel: rgba(255,255,255,.85);
          --hx-text: #0b2a1e; --hx-muted: rgba(11,42,30,.7); --hx-input: #ffffff;
          --accent: #0e7490; --accent2: #b45309; --warn: #c2410c; --violet: #6d28d9;
        }
        .contact::before { content: ''; position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse at 50% 40%, transparent 20%, var(--hx-bg) 85%); }
        .contact .container { position: relative; z-index: 1; }
        .contact .text-primary { color: var(--primary); }
        .contact .section-sub { color: var(--muted); font-size: .88rem; margin-top: .4rem; }

        .contact .rv { opacity: 0; transform: translateY(16px); transition: opacity .55s ease, transform .55s ease; transition-delay: calc(var(--i, 0) * 80ms); }
        .contact.in .rv { opacity: 1; transform: none; }

        .contact .show-more-wrap { display: flex; justify-content: center; margin-top: 2.5rem; }
        .contact .show-more-btn { display: inline-flex; align-items: center; gap: .5rem; background: var(--hx-panel); border: 1px solid var(--hx-dim);
          color: var(--muted); padding: .6rem 1.75rem; border-radius: 6px; cursor: pointer; font-size: .85rem; font-family: inherit; transition: .2s; }
        .contact .show-more-btn:hover { border-color: var(--hx); color: var(--hx); box-shadow: 0 0 18px var(--hx-dim); }
        .contact button:focus-visible, .contact a:focus-visible, .contact input:focus-visible, .contact textarea:focus-visible, .contact .flip:focus-visible { outline: 2px solid var(--hx); outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) { .contact .rv { opacity: 1; transform: none; transition: none; } }

        .contact .contact-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 3rem; margin-top: 3rem; align-items: start; }

        .contact .info-card { background: var(--hx-panel); border: 1px solid var(--hx-dim); border-radius: 10px; padding: 1.5rem; margin-bottom: 1.5rem; }
        .contact .info-header { display: flex; align-items: center; gap: .6rem; font-weight: 700; font-size: .9rem; margin-bottom: 1rem; color: var(--primary); }
        .contact .info-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--primary); box-shadow: 0 0 10px var(--primary); animation: ctPulse 2s infinite; }
        @keyframes ctPulse { 50% { opacity: .4; transform: scale(1.4); } }
        .contact .open-to { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: .6rem; }
        .contact .open-to li { font-size: .86rem; color: var(--muted); display: flex; gap: .5rem; }
        .contact .check { color: var(--primary); font-weight: 700; }

        .contact .contact-links { display: flex; flex-direction: column; gap: 1rem; }
        .contact .contact-row { display: flex; gap: 1rem; align-items: flex-start; }
        .contact .cr-icon { font-size: 1.1rem; }
        .contact .cr-label { display: block; font-size: .7rem; color: var(--muted); }
        .contact .cr-val { font-size: .86rem; word-break: break-word; }
        .contact .cr-val.link { color: var(--primary); text-decoration: none; }
        .contact .cr-val.link:hover { text-shadow: 0 0 12px var(--primary); text-decoration: underline; }

        .contact .contact-form { background: var(--hx-panel); border: 1px solid var(--hx-dim); border-radius: 10px; overflow: hidden;
          box-shadow: 0 0 40px rgba(0,255,156,.06); }
        .contact .form-bar { display: flex; align-items: center; gap: 6px; padding: .55rem .8rem; border-bottom: 1px solid var(--hx-dim); }
        .contact .form-bar i { width: 9px; height: 9px; border-radius: 50%; background: #ff5f56; }
        .contact .form-bar i:nth-child(2) { background: #ffbd2e; }
        .contact .form-bar i:nth-child(3) { background: #27c93f; }
        .contact .form-bar span { margin-left: .6rem; font-size: .72rem; color: var(--muted); }
        .contact .form-body { padding: 1.75rem; display: flex; flex-direction: column; gap: 1.25rem; }

        .contact .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .contact .form-group { display: flex; flex-direction: column; gap: .4rem; }
        .contact label { font-size: .75rem; color: var(--primary); }
        .contact label::before { content: '> '; }
        .contact input, .contact textarea { background: var(--hx-input); border: 1px solid var(--hx-dim); color: var(--text); border-radius: 6px;
          padding: .7rem 1rem; font-family: inherit; font-size: .86rem; transition: border-color .2s, box-shadow .2s; resize: vertical; }
        .contact input::placeholder, .contact textarea::placeholder { color: var(--muted); opacity: .6; }
        .contact input:focus, .contact textarea:focus { outline: none; border-color: var(--hx); box-shadow: 0 0 0 3px var(--hx-dim); }

        .contact .submit-btn { background: var(--hx); color: var(--hx-bg); border: none; padding: .9rem; border-radius: 6px; font-weight: 700;
          font-family: inherit; font-size: .88rem; cursor: pointer; box-shadow: 0 0 22px var(--hx-dim); transition: .2s; }
        .contact .submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 0 34px var(--hx); }
        .contact .submit-btn:disabled { opacity: .6; cursor: progress; }
        .contact .form-status { min-height: 1.2em; margin: 0; font-size: .78rem; color: var(--primary); }
        .contact .form-status.err { color: var(--warn); }

        @media (max-width: 768px) {
          .contact .contact-grid { grid-template-columns: 1fr; }
          .contact .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}