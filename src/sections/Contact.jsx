import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
  'service_eye3wwq',
  'template_5mxri7i',
  {
    from_name: form.name,
    from_email: form.email,
    subject: form.subject || 'Portfolio Inquiry',
    message: form.message
  },
  'znpsrqDmCoV9htqe5'
)

      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => setSent(false), 4000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      alert('Failed to send message. Please try again.')
    }

    setLoading(false)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">

        <div className="section-label">
          <span className="label-line" />
          <span className="font-mono text-primary text-sm">06 — Contact</span>
        </div>

        <h2 className="section-title">
          Let's <span className="text-primary">Work Together</span>
        </h2>

        <p className="section-sub">
          Whether you have a project, a question, or just want to connect — I'd love to hear from you.
        </p>

        <div className="contact-grid">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <div className="info-card">
              <div className="info-header">
                <div className="info-dot" />
                <span>Currently Open To</span>
              </div>

              <ul className="open-to">
                {[
                  'Junior Web Developer roles',
                  'Network Engineer roles',
                  'SOC Analyst / Cybersecurity positions',
                  'Freelance projects'
                ].map(t => (
                  <li key={t}>
                    <span className="check">→</span> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact-links">
              {[
                {
                  label: 'Email',
                  val: 'janakjoshi6789@gmail.com',
                  href: 'mailto:janakjoshi6789@gmail.com',
                  icon: '✉️'
                },
                {
                  label: 'Phone',
                  val: '+977 9848840530',
                  href: 'tel:9848840530',
                  icon: '📞'
                },
                {
                  label: 'Location',
                  val: 'Koteshwor, Kathmandu, Nepal',
                  href: null,
                  icon: '📍'
                },
                {
                  label: 'GitHub',
                  val: 'Janak-Joshi6789',
                  href: 'https://github.com/Janak-Joshi6789',
                  icon: '💻'
                }
              ].map(c => (
                <div key={c.label} className="contact-row">
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

          {/* RIGHT SIDE FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ram Bahadur"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Job opportunity / Project collaboration"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me what you have in mind..."
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              {loading
                ? 'Sending...'
                : sent
                ? '✓ Message Sent!'
                : 'Send Message →'}
            </button>

          </form>
        </div>
      </div>

      {/* Styles (unchanged) */}
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 3rem;
          margin-top: 3rem;
          align-items: start;
        }

        .info-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .info-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          color: var(--accent2);
        }

        .info-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent2);
          animation: pulse 2s infinite;
        }

        .open-to {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .open-to li {
          font-size: 0.88rem;
          color: var(--muted);
          display: flex;
          gap: 0.5rem;
        }

        .check { color: var(--accent2); }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .contact-row {
          display: flex;
          gap: 1rem;
        }

        .cr-icon { font-size: 1.1rem; }

        .cr-label {
          font-size: 0.72rem;
          color: var(--muted);
          text-transform: uppercase;
        }

        .cr-val { font-size: 0.88rem; }

        .cr-val.link {
          color: var(--primary);
        }

        .contact-form {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        input, textarea {
          background: var(--bg);
          border: 1px solid var(--border);
          color: var(--text);
          border-radius: 8px;
          padding: 0.7rem 1rem;
        }

        .submit-btn {
          background: var(--primary);
          color: var(--bg);
          border: none;
          padding: 0.9rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}