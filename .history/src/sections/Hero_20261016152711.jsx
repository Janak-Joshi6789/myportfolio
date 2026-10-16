import { useEffect, useRef, useState } from 'react'

const roles = ['Computer Engineer', 'Network Engineer', 'Cybersecurity Enthusiast', 'Penetration Tester']

const terminalScript = [
  { cmd: 'whoami', out: 'janak-joshi // computer engineer' },
  { cmd: 'cat focus.txt', out: 'networks · security · pentesting' },
  { cmd: 'nmap --status', out: 'mind: open | curiosity: 100%' },
  { cmd: 'echo $MESSAGE', out: 'Think like an attacker. Build like a defender.' },
]

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/janak-joshi-088667287/',
    icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Janak-Joshi6789',
    icon: <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/janakjoshi6789?igsh=N2lna2d3aTVsYXl6',
    icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/janak.joshi.6789',
    icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
  },
]

/* ---------- Matrix rain background ---------- */
function MatrixRain() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const chars = '01アイウエオカキクケコサシスセソ{}<>/#$%&ABCDEF'.split('')
    const size = 16
    let cols, drops, raf, last = 0
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      cols = Math.floor(canvas.width / size)
      drops = Array.from({ length: cols }, () => Math.random() * -50)
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = t => {
      raf = requestAnimationFrame(draw)
      if (t - last < 55) return
      last = t
      ctx.fillStyle = 'rgba(3, 8, 6, 0.12)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${size}px monospace`
      for (let i = 0; i < cols; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillStyle = Math.random() > 0.97 ? '#d9ffe9' : '#00ff9c'
        ctx.fillText(ch, i * size, drops[i] * size)
        if (drops[i] * size > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
    }
    if (reduce) {
      ctx.fillStyle = '#030806'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    } else raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])
  return <canvas ref={ref} className="hx-rain" aria-hidden="true" />
}

/* ---------- Glowing cyber visor mask in a hood ---------- */
function HackerMask({ unmasked }) {
  const eyes = useRef(null)
  useEffect(() => {
    const move = e => {
      if (!eyes.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 14
      eyes.current.style.transform = `translateX(${x}px)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <svg viewBox="0 0 300 340" className={`hx-mask ${unmasked ? 'is-off' : ''}`} role="img" aria-label="Glowing cyber visor mask in a hood">
      <defs>
        <linearGradient id="hxHood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1612" />
          <stop offset="100%" stopColor="#020605" />
        </linearGradient>
        <linearGradient id="hxPlate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10261e" />
          <stop offset="100%" stopColor="#030907" />
        </linearGradient>
        <linearGradient id="hxVisor" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00ff9c" stopOpacity=".15" />
          <stop offset="50%" stopColor="#00ff9c" stopOpacity=".55" />
          <stop offset="100%" stopColor="#00ff9c" stopOpacity=".15" />
        </linearGradient>
        <clipPath id="hxVisorClip"><path d="M92 112h116l-8 36H100z" /></clipPath>
      </defs>

      {/* hood + shoulders */}
      <path d="M150 12C80 12 42 62 42 130c0 38 10 62 4 96-6 34-46 40-46 114h300c0-74-40-80-46-114-6-34 4-58 4-96C258 62 220 12 150 12z" fill="url(#hxHood)" stroke="#00ff9c" strokeOpacity=".35" strokeWidth="1.5" />
      <path d="M150 34C96 34 64 72 64 128c0 40 12 70 24 96h124c12-26 24-56 24-96 0-56-32-94-86-94z" fill="#010403" />

      <g className="hx-face">
        {/* angular faceplate */}
        <path d="M112 62h76l36 40-6 92-32 42-38 12-38-12-32-42-6-92z" fill="url(#hxPlate)" stroke="#00ff9c" strokeWidth="2.5" strokeLinejoin="round" />
        {/* forehead chevrons */}
        <path d="M132 80l18-10 18 10M138 92l12-7 12 7" fill="none" stroke="#00ff9c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* visor */}
        <path d="M92 112h116l-8 36H100z" fill="#000" stroke="#00ff9c" strokeWidth="2.5" strokeLinejoin="round" />
        <g clipPath="url(#hxVisorClip)">
          <rect x="92" y="112" width="116" height="36" fill="url(#hxVisor)" />
          <rect className="hx-sweep" x="88" y="112" width="14" height="36" fill="#00ff9c" opacity=".55" />
          <g ref={eyes} className="hx-eyes">
            <rect x="118" y="126" width="22" height="7" rx="2" fill="#eafff4" />
            <rect x="160" y="126" width="22" height="7" rx="2" fill="#eafff4" />
          </g>
        </g>
        {/* cheek lines */}
        <path d="M96 160l22 14M204 160l-22 14M100 176l18 10M200 176l-18 10" stroke="#00ff9c" strokeOpacity=".6" strokeWidth="1.8" strokeLinecap="round" />
        {/* respirator */}
        <path d="M116 190h68l-8 38-26 12-26-12z" fill="#020a07" stroke="#00ff9c" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M130 198v32M140 198v38M150 198v42M160 198v38M170 198v32" stroke="#00ff9c" strokeWidth="2" strokeLinecap="round" className="hx-vents" />
        {/* side filters */}
        <circle cx="96" cy="208" r="10" fill="#020a07" stroke="#00ff9c" strokeWidth="2.2" />
        <circle cx="204" cy="208" r="10" fill="#020a07" stroke="#00ff9c" strokeWidth="2.2" />
        <circle cx="96" cy="208" r="3" fill="#00ff9c" />
        <circle cx="204" cy="208" r="3" fill="#00ff9c" />
      </g>

      {/* circuit traces on hood */}
      <g className="hx-traces" fill="none" stroke="#00ff9c" strokeWidth="1.2" strokeLinecap="round">
        <path d="M60 262h40l12 12h30" />
        <path d="M240 262h-40l-12 12h-30" />
        <path d="M70 300h50l10 10" />
        <path d="M230 300h-50l-10 10" />
        <path d="M86 208H56V150" />
        <path d="M214 208h30V150" />
        <circle cx="60" cy="262" r="2.5" fill="#00ff9c" />
        <circle cx="240" cy="262" r="2.5" fill="#00ff9c" />
      </g>
    </svg>
  )
}

/* ---------- Terminal that types a script ---------- */
function Terminal() {
  const [lines, setLines] = useState([])
  const [typing, setTyping] = useState('')

  useEffect(() => {
    let dead = false
    const wait = ms => new Promise(r => setTimeout(r, ms))
    ;(async () => {
      while (!dead) {
        setLines([])
        for (const step of terminalScript) {
          for (let i = 1; i <= step.cmd.length; i++) {
            if (dead) return
            setTyping(step.cmd.slice(0, i))
            await wait(55)
          }
          await wait(250)
          if (dead) return
          setTyping('')
          setLines(l => [...l, step])
          await wait(700)
        }
        await wait(4000)
      }
    })()
    return () => { dead = true }
  }, [])

  return (
    <div className="hx-term" aria-label="Terminal intro">
      <div className="hx-term-bar">
        <i /><i /><i />
        <span>janak@kali:~</span>
      </div>
      <div className="hx-term-body">
        {lines.map((l, i) => (
          <div key={i}>
            <div><b>$</b> {l.cmd}</div>
            <div className="hx-out">{l.out}</div>
          </div>
        ))}
        <div><b>$</b> {typing}<span className="hx-caret" /></div>
      </div>
    </div>
  )
}

export default function Hero() {
  const roleRef = useRef(null)
  const [unmasked, setUnmasked] = useState(false)

  useEffect(() => {
    let idx = 0, charIdx = 0, deleting = false, timer
    const type = () => {
      const current = roles[idx]
      if (!deleting) {
        if (charIdx <= current.length) {
          if (roleRef.current) roleRef.current.textContent = current.slice(0, charIdx++)
          timer = setTimeout(type, 60)
        } else {
          deleting = true
          timer = setTimeout(type, 1800)
        }
      } else if (charIdx > 0) {
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charIdx--)
        timer = setTimeout(type, 30)
      } else {
        deleting = false
        idx = (idx + 1) % roles.length
        timer = setTimeout(type, 300)
      }
    }
    type()
    return () => clearTimeout(timer)
  }, [])

  const go = id => e => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hx">
      <MatrixRain />
      <div className="hx-vignette" />
      <div className="hx-scan" />

      <div className="hx-inner">
        {/* LEFT */}
        <div className="hx-left">
          <p className="hx-tag">&gt; access granted</p>

          <h1 className="hx-name glitch" data-text="Er. Janak Joshi">Er. Janak Joshi</h1>

          <div className="hx-role">
            <span ref={roleRef} />
            <span className="hx-cursor">_</span>
          </div>

          <Terminal />

          <div className="hx-actions">
            <a href="#projects" onClick={go('projects')} className="hx-btn hx-btn-solid">View My Work</a>
            <a href="#contact" onClick={go('contact')} className="hx-btn hx-btn-ghost">Get In Touch</a>
          </div>

          <div className="hx-socials">
            <span>Find me on</span>
            {socials.map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" title={s.name} aria-label={s.name} className="hx-social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">{s.icon}</svg>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="hx-right">
          <div className="hx-halo" />
          <button
            className="hx-stage"
            onClick={() => setUnmasked(u => !u)}
            aria-pressed={unmasked}
            aria-label={unmasked ? 'Put the mask back on' : 'Take off the mask'}
          >
            <HackerMask unmasked={unmasked} />
            <img src="/photo.png" alt="Janak Raj Joshi" className={`hx-photo ${unmasked ? 'show' : ''}`} onError={e => { e.target.style.display = 'none' }} />
          </button>
          <p className="hx-hint">{unmasked ? '[ click to re-mask ]' : '[ click to unmask ]'}</p>

          <div className="hx-chip c1">Network Engineering</div>
          <div className="hx-chip c2">Cybersecurity</div>
          <div className="hx-chip c3">Penetration Testing</div>
          <div className="hx-chip c4">Network Security</div>
        </div>
      </div>

      <div className="hx-stats">
        {[['BE Computer', 'Khwopa Engineering College'], ['15+', 'Projects Built'], ['10+', 'Certifications']].map(([n, l]) => (
          <div key={l} className="hx-stat">
            <strong>{n}</strong>
            <span>{l}</span>
          </div>
        ))}
      </div>

      <style>{`
        .hx {
          --g: #00ff9c; --g-dim: rgba(0,255,156,.25); --ink: #030806; --panel: rgba(3,12,9,.78);
          --mono: var(--font-mono, 'JetBrains Mono', 'Fira Code', ui-monospace, monospace);
          position: relative; overflow: hidden; min-height: 100vh;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          padding: 6rem 2rem 4rem; background: var(--ink); color: #d7f5e6; font-family: var(--mono);
        }
        .hx-rain { position: absolute; inset: 0; width: 100%; height: 100%; opacity: .22; }
        .hx-vignette { position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse at 70% 45%, transparent 0%, var(--ink) 75%); }
        .hx-scan { position: absolute; inset: 0; pointer-events: none; opacity: .35;
          background: repeating-linear-gradient(0deg, rgba(0,0,0,.35) 0 1px, transparent 1px 3px); }
        .hx-scan::after { content: ''; position: absolute; left: 0; right: 0; height: 120px;
          background: linear-gradient(transparent, rgba(0,255,156,.07), transparent);
          animation: hxSweep 7s linear infinite; }
        @keyframes hxSweep { from { top: -120px } to { top: 100% } }

        .hx-inner { position: relative; z-index: 1; width: 100%; max-width: 1150px;
          display: grid; grid-template-columns: 1fr 380px; gap: 3rem; align-items: center; }

        .hx-tag { color: var(--g); font-size: .85rem; margin: 0 0 1rem; opacity: .85; }

        /* glitch name */
        .hx-name { font-size: clamp(2.6rem, 6vw, 4.8rem); font-weight: 800; line-height: 1.05;
          letter-spacing: -.02em; margin: 0 0 .75rem; color: #eafff4; position: relative; width: fit-content;
          text-shadow: 0 0 18px rgba(0,255,156,.35); }
        .glitch::before, .glitch::after { content: attr(data-text); position: absolute; inset: 0; overflow: hidden; }
        .glitch::before { color: #ff2e63; transform: translate(2px, 0); clip-path: inset(0 0 60% 0);
          animation: hxGlitchA 4s steps(1) infinite; mix-blend-mode: screen; }
        .glitch::after { color: #08f7fe; transform: translate(-2px, 0); clip-path: inset(60% 0 0 0);
          animation: hxGlitchB 4s steps(1) infinite; mix-blend-mode: screen; }
        @keyframes hxGlitchA { 0%,90%,100% { opacity: 0 } 91% { opacity: 1; clip-path: inset(10% 0 55% 0); transform: translate(-4px,0) }
          94% { opacity: 1; clip-path: inset(40% 0 30% 0); transform: translate(3px,0) } 97% { opacity: 0 } }
        @keyframes hxGlitchB { 0%,91%,100% { opacity: 0 } 92% { opacity: 1; clip-path: inset(55% 0 10% 0); transform: translate(4px,0) }
          95% { opacity: 1; clip-path: inset(20% 0 60% 0); transform: translate(-3px,0) } 98% { opacity: 0 } }

        .hx-role { color: var(--g); font-size: clamp(.95rem, 2vw, 1.25rem); min-height: 1.8rem; margin-bottom: 1.5rem; }
        .hx-cursor { animation: hxBlink 1s steps(1) infinite; }
        @keyframes hxBlink { 50% { opacity: 0 } }

        /* terminal */
        .hx-term { max-width: 500px; background: var(--panel); border: 1px solid var(--g-dim); border-radius: 10px;
          box-shadow: 0 0 40px rgba(0,255,156,.08), inset 0 0 30px rgba(0,255,156,.04); backdrop-filter: blur(4px); margin-bottom: 1.75rem; }
        .hx-term-bar { display: flex; align-items: center; gap: 6px; padding: .55rem .8rem; border-bottom: 1px solid var(--g-dim); }
        .hx-term-bar i { width: 9px; height: 9px; border-radius: 50%; background: #ff5f56; }
        .hx-term-bar i:nth-child(2) { background: #ffbd2e; }
        .hx-term-bar i:nth-child(3) { background: #27c93f; }
        .hx-term-bar span { margin-left: .6rem; font-size: .72rem; color: rgba(215,245,230,.55); }
        .hx-term-body { padding: .9rem 1rem; font-size: .82rem; line-height: 1.65; min-height: 168px; }
        .hx-term-body b { color: var(--g); font-weight: 700; margin-right: .4rem; }
        .hx-out { color: rgba(215,245,230,.7); padding-left: 1.1rem; }
        .hx-caret { display: inline-block; width: 8px; height: 1em; background: var(--g); vertical-align: -2px; margin-left: 2px; animation: hxBlink 1s steps(1) infinite; }

        /* buttons */
        .hx-actions { display: flex; gap: .75rem; flex-wrap: wrap; margin-bottom: 1.75rem; }
        .hx-btn { padding: .8rem 1.5rem; border-radius: 6px; font: 600 .88rem var(--mono); text-decoration: none; transition: .2s; }
        .hx-btn-solid { background: var(--g); color: var(--ink); box-shadow: 0 0 22px rgba(0,255,156,.4); }
        .hx-btn-solid:hover { transform: translateY(-2px); box-shadow: 0 0 36px rgba(0,255,156,.65); }
        .hx-btn-ghost { border: 1px solid var(--g); color: var(--g); }
        .hx-btn-ghost:hover { background: rgba(0,255,156,.1); }
        .hx-btn:focus-visible, .hx-social:focus-visible, .hx-stage:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }

        .hx-socials { display: flex; align-items: center; gap: .6rem; font-size: .75rem; color: rgba(215,245,230,.55); }
        .hx-socials span { margin-right: .4rem; }
        .hx-social { width: 40px; height: 40px; display: grid; place-items: center; border-radius: 8px; color: rgba(215,245,230,.7);
          border: 1px solid var(--g-dim); background: var(--panel); transition: .2s; }
        .hx-social:hover { color: var(--g); border-color: var(--g); box-shadow: 0 0 18px rgba(0,255,156,.35); transform: translateY(-3px); }

        /* right: mask */
        .hx-right { position: relative; display: flex; flex-direction: column; align-items: center; }
        .hx-halo { position: absolute; width: 340px; height: 340px; top: 10px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,255,156,.28), transparent 65%); filter: blur(30px);
          animation: hxPulse 3.5s ease-in-out infinite; }
        @keyframes hxPulse { 50% { opacity: .5; transform: scale(1.12) } }
        .hx-stage { position: relative; width: 320px; height: 360px; background: none; border: 0; padding: 0; cursor: pointer;
          animation: hxHover 5s ease-in-out infinite; }
        @keyframes hxHover { 50% { transform: translateY(-12px) } }
        .hx-mask { width: 100%; height: 100%; overflow: visible; filter: drop-shadow(0 0 10px rgba(0,255,156,.7)) drop-shadow(0 0 28px rgba(0,255,156,.35));
          transition: opacity .5s, transform .5s; }
        .hx-mask.is-off { opacity: 0; transform: scale(.92); }
        .hx-face { animation: hxFlicker 6s infinite; }
        @keyframes hxFlicker { 0%,100% { opacity: 1 } 46% { opacity: 1 } 47% { opacity: .55 } 48% { opacity: 1 } 49% { opacity: .7 } 50% { opacity: 1 } }
        .hx-eyes { transition: transform .15s ease-out; }
        .hx-eyes rect { filter: drop-shadow(0 0 6px #00ff9c); }
        .hx-sweep { animation: hxScan 2.6s ease-in-out infinite alternate; }
        @keyframes hxScan { from { transform: translateX(0) } to { transform: translateX(104px) } }
        .hx-vents { animation: hxVent 2s ease-in-out infinite; }
        @keyframes hxVent { 50% { opacity: .35 } }
        .hx-traces path { stroke-dasharray: 6 8; animation: hxFlow 2.4s linear infinite; }
        @keyframes hxFlow { to { stroke-dashoffset: -28 } }

        .hx-photo { position: absolute; left: 50%; top: 46%; width: 280px; height: 280px; border-radius: 50%; object-fit: cover; object-position: center top;
          transform: translate(-50%, -50%) scale(.85); opacity: 0; transition: .5s; border: 2px solid var(--g); box-shadow: 0 0 40px rgba(0,255,156,.5); }
        .hx-photo.show { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        .hx-hint { margin: .75rem 0 0; font-size: .72rem; color: var(--g); opacity: .7; }

        .hx-chip { position: absolute; padding: .35rem .8rem; border-radius: 4px; font-size: .72rem; white-space: nowrap;
          background: var(--panel); border: 1px solid var(--g-dim); color: var(--g); animation: hxBob 4s ease-in-out infinite; }
        .hx-chip::before { content: '['; margin-right: .3rem; opacity: .6; }
        .hx-chip::after { content: ']'; margin-left: .3rem; opacity: .6; }
        .c1 { top: 18px; left: -50px; } .c2 { top: 50px; right: -50px; animation-delay: .8s; }
        .c3 { bottom: 90px; left: -60px; animation-delay: 1.6s; } .c4 { bottom: 60px; right: -50px; animation-delay: 2.4s; }
        @keyframes hxBob { 50% { transform: translateY(-7px) } }

        /* stats */
        .hx-stats { position: relative; z-index: 1; display: flex; flex-wrap: wrap; width: 100%; max-width: 1150px; margin-top: 3.5rem;
          border: 1px solid var(--g-dim); border-radius: 10px; background: var(--panel); overflow: hidden; }
        .hx-stat { flex: 1; min-width: 140px; padding: 1.1rem 1rem; text-align: center; border-right: 1px solid var(--g-dim); }
        .hx-stat:last-child { border-right: 0; }
        .hx-stat strong { display: block; color: var(--g); font-size: 1.5rem; text-shadow: 0 0 14px rgba(0,255,156,.5); }
        .hx-stat span { font-size: .72rem; color: rgba(215,245,230,.55); }

        @media (max-width: 960px) {
          .hx-inner { grid-template-columns: 1fr; gap: 2.5rem; }
          .hx-right { order: -1; }
          .hx-left { align-items: center; text-align: center; display: flex; flex-direction: column; }
          .hx-actions, .hx-socials { justify-content: center; }
          .hx-chip { display: none; }
          .hx-stage { width: 240px; height: 270px; }
          .hx-halo { width: 260px; height: 260px; }
          .hx-photo { width: 190px; height: 190px; }
        }
        @media (max-width: 500px) {
          .hx-stats { flex-direction: column; }
          .hx-stat { border-right: 0; border-bottom: 1px solid var(--g-dim); }
          .hx-stat:last-child { border-bottom: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hx *, .hx *::before, .hx *::after { animation: none !important; }
        }
      `}</style>
    </section>
  )
}