import { useEffect, useRef, useState } from 'react'

const roles = [
  'Computer Engineer',
  'Network Engineer',
  'Cybersecurity Enthusiast',
  'Penetration Tester',
]

const terminalScript = [
  { cmd: 'whoami', out: 'janak-joshi // computer engineer' },
  { cmd: 'cat focus.txt', out: 'networks · security · pentesting' },
  { cmd: 'nmap --status', out: 'mind: open | curiosity: 100%' },
  {
    cmd: 'echo $MESSAGE',
    out: 'Think like an attacker. Build like a defender.',
  },
]

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/er-janak-joshi-088667287/',
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Janak-Joshi6789',
    icon: (
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/janakjoshi6789',
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/janak.joshi.6789',
    icon: (
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    ),
  },
]

/* =========================================================
   MATRIX RAIN BACKGROUND
   ========================================================= */

function MatrixRain({ light }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current

    if (!canvas) return

    const ctx = canvas.getContext('2d')

    const chars =
      '01アイウエオカキクケコサシスセソ{}<>/#$%&ABCDEF'.split('')

    const size = 16

    let cols
    let drops
    let raf
    let last = 0

    const reduce = window
      .matchMedia('(prefers-reduced-motion: reduce)')
      .matches

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight

      cols = Math.floor(canvas.width / size)

      drops = Array.from(
        { length: cols },
        () => Math.random() * -50
      )
    }

    resize()

    window.addEventListener('resize', resize)

    const draw = t => {
      raf = requestAnimationFrame(draw)

      if (t - last < 55) return

      last = t

      ctx.fillStyle = light
        ? 'rgba(240, 250, 245, 0.14)'
        : 'rgba(3, 8, 6, 0.12)'

      ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
      )

      ctx.font = `${size}px monospace`

      for (let i = 0; i < cols; i++) {
        const ch =
          chars[Math.floor(Math.random() * chars.length)]

        ctx.fillStyle = light
          ? Math.random() > 0.97
            ? '#06583a'
            : '#00a86b'
          : Math.random() > 0.97
            ? '#d9ffe9'
            : '#00ff9c'

        ctx.fillText(
          ch,
          i * size,
          drops[i] * size
        )

        if (
          drops[i] * size > canvas.height &&
          Math.random() > 0.975
        ) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    if (reduce) {
      ctx.fillStyle = light
        ? '#f0faf5'
        : '#030806'

      ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
      )
    } else {
      raf = requestAnimationFrame(draw)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [light])

  return (
    <canvas
      ref={ref}
      className="hx-rain"
      aria-hidden="true"
    />
  )
}

/* =========================================================
   MODERN CYBERPUNK HACKER MASK
   ========================================================= */

function HackerMask({ unmasked }) {
  const eyes = useRef(null)

  useEffect(() => {
    const move = e => {
      if (!eyes.current) return

      const x =
        (e.clientX / window.innerWidth - 0.5) * 7

      const y =
        (e.clientY / window.innerHeight - 0.5) * 4

      eyes.current.style.transform =
        `translate(${x}px, ${y}px)`
    }

    window.addEventListener('mousemove', move)

    return () =>
      window.removeEventListener('mousemove', move)
  }, [])

  return (
    <svg
      viewBox="0 0 320 360"
      className={`hx-mask ${
        unmasked ? 'is-off' : ''
      }`}
      role="img"
      aria-label="Cyberpunk hacker mask"
    >
      <defs>

        {/* Edge gradient */}
        <linearGradient
          id="cyberEdge"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop
            offset="0%"
            stopColor="#00ff9c"
          />

          <stop
            offset="50%"
            stopColor="#22d3ee"
          />

          <stop
            offset="100%"
            stopColor="#00ff9c"
          />
        </linearGradient>

        {/* Hood */}
        <linearGradient
          id="cyberHood"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop
            offset="0%"
            stopColor="#10251e"
          />

          <stop
            offset="45%"
            stopColor="#06110d"
          />

          <stop
            offset="100%"
            stopColor="#010403"
          />
        </linearGradient>

        {/* Face */}
        <linearGradient
          id="cyberFace"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop
            offset="0%"
            stopColor="#163c2f"
          />

          <stop
            offset="45%"
            stopColor="#071912"
          />

          <stop
            offset="100%"
            stopColor="#020806"
          />
        </linearGradient>

        {/* Eye */}
        <linearGradient
          id="cyberEye"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
        >
          <stop
            offset="0%"
            stopColor="#22d3ee"
          />

          <stop
            offset="50%"
            stopColor="#00ff9c"
          />

          <stop
            offset="100%"
            stopColor="#22d3ee"
          />
        </linearGradient>

        {/* Glow */}
        <filter id="cyberGlow">
          <feGaussianBlur
            stdDeviation="3"
            result="blur"
          />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="softGlow">
          <feGaussianBlur stdDeviation="8" />
        </filter>

        {/* Eye clip */}
        <clipPath id="eyeClip">
          <path d="M78 142 Q160 110 242 142 L229 174 Q160 153 91 174 Z" />
        </clipPath>

      </defs>

      {/* =====================================================
          OUTER ORBITS
         ===================================================== */}

      <circle
        className="hx-ring r1"
        cx="160"
        cy="178"
        r="150"
        fill="none"
        stroke="url(#cyberEdge)"
        strokeWidth="1"
        strokeDasharray="2 10"
        opacity=".65"
      />

      <circle
        className="hx-ring r2"
        cx="160"
        cy="178"
        r="132"
        fill="none"
        stroke="url(#cyberEdge)"
        strokeWidth="1"
        strokeDasharray="50 18 8 20"
        opacity=".35"
      />

      {/* Digital nodes */}
      <g
        className="hx-nodes"
        fill="#00ff9c"
      >
        <circle cx="40" cy="110" r="2" />
        <circle cx="280" cy="120" r="2" />
        <circle cx="48" cy="265" r="2" />
        <circle cx="270" cy="280" r="2" />
      </g>

      {/* =====================================================
          HOOD
         ===================================================== */}

      <path
        d="
          M160 12
          C91 12 42 61 42 135
          C42 182 28 220 12 254
          C2 275 0 304 0 340
          H320
          C320 304 318 275 308 254
          C292 220 278 182 278 135
          C278 61 229 12 160 12Z
        "
        fill="url(#cyberHood)"
        stroke="url(#cyberEdge)"
        strokeWidth="1.5"
        strokeOpacity=".55"
      />

      {/* Inner hood */}

      <path
        d="
          M160 34
          C107 34 70 72 70 132
          C70 183 88 223 103 250
          H217
          C232 223 250 183 250 132
          C250 72 213 34 160 34Z
        "
        fill="#010604"
      />

      {/* =====================================================
          FACE
         ===================================================== */}

      <g className="hx-face">

        {/* Face glow */}

        <path
          d="
            M160 54
            L214 74
            L244 126
            L231 194
            L199 242
            L160 270
            L121 242
            L89 194
            L76 126
            L106 74Z
          "
          fill="rgba(0,255,156,.08)"
          filter="url(#softGlow)"
        />

        {/* Angular face */}

        <path
          d="
            M160 54
            L211 72
            L241 125
            L228 190
            L198 239
            L160 263
            L122 239
            L92 190
            L79 125
            L109 72Z
          "
          fill="url(#cyberFace)"
          stroke="url(#cyberEdge)"
          strokeWidth="2"
        />

        {/* Forehead center */}

        <path
          d="M160 55 L160 111"
          stroke="#00ff9c"
          strokeWidth="1"
          opacity=".5"
        />

        {/* Forehead symbol */}

        <path
          className="hx-gem"
          d="M160 73 L171 87 L160 101 L149 87 Z"
          fill="none"
          stroke="#00ff9c"
          strokeWidth="1.5"
        />

        <circle
          cx="160"
          cy="87"
          r="2.5"
          fill="#00ff9c"
          filter="url(#cyberGlow)"
        />

        {/* =================================================
            EYE VISOR
           ================================================= */}

        <path
          d="
            M78 142
            Q160 110 242 142
            L229 174
            Q160 153 91 174Z
          "
          fill="#010403"
          stroke="url(#cyberEdge)"
          strokeWidth="2.2"
        />

        <g clipPath="url(#eyeClip)">

          {/* Scanning beam */}

          <rect
            className="hx-sweep"
            x="75"
            y="105"
            width="14"
            height="80"
            fill="#00ff9c"
            opacity=".3"
          />

          {/* Eyes */}

          <g
            ref={eyes}
            className="hx-eyes"
          >
            <path
              d="M95 150 L143 143 L140 157 L99 165 Z"
              fill="url(#cyberEye)"
              filter="url(#cyberGlow)"
            />

            <path
              d="M225 150 L177 143 L180 157 L221 165 Z"
              fill="url(#cyberEye)"
              filter="url(#cyberGlow)"
            />
          </g>

        </g>

        {/* =================================================
            FACE CIRCUITS
           ================================================= */}

        <g
          className="hx-face-lines"
          fill="none"
          stroke="#00ff9c"
          strokeWidth="1"
          opacity=".65"
        >

          {/* Left */}

          <path d="M91 185 L112 203 L112 225" />
          <path d="M112 203 H132" />
          <path d="M101 194 H88" />

          {/* Right */}

          <path d="M229 185 L208 203 L208 225" />
          <path d="M208 203 H188" />
          <path d="M219 194 H232" />

          {/* Center */}

          <path d="M160 174 V212" />
          <path d="M145 221 H175" />

        </g>

        {/* Circuit nodes */}

        <g
          fill="#00ff9c"
          filter="url(#cyberGlow)"
        >
          <circle
            cx="112"
            cy="203"
            r="2"
          />

          <circle
            cx="208"
            cy="203"
            r="2"
          />

          <circle
            cx="160"
            cy="212"
            r="2"
          />
        </g>

        {/* =================================================
            LOWER MASK
           ================================================= */}

        <path
          d="M122 230 Q160 250 198 230"
          fill="none"
          stroke="url(#cyberEdge)"
          strokeWidth="1.5"
        />

        {/* Lower vents */}

        <g
          className="hx-vents"
          stroke="url(#cyberEdge)"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <path d="M137 239 H183" />
          <path d="M142 247 H178" />
          <path d="M148 255 H172" />
        </g>

      </g>

      {/* =====================================================
          HOOD CIRCUITS
         ===================================================== */}

      <g
        className="hx-traces"
        fill="none"
        stroke="#00ff9c"
        strokeWidth="1.2"
        strokeLinecap="round"
      >

        <path d="M51 254 H92 L108 270 H132" />

        <path d="M269 254 H228 L212 270 H188" />

        <path d="M67 287 H110 L123 300" />

        <path d="M253 287 H210 L197 300" />

        <path d="M48 254 H42" />

        <path d="M272 254 H278" />

      </g>

      {/* Circuit dots */}

      <g
        fill="#00ff9c"
        filter="url(#cyberGlow)"
      >
        <circle
          cx="48"
          cy="254"
          r="2.5"
        />

        <circle
          cx="272"
          cy="254"
          r="2.5"
        />

        <circle
          cx="67"
          cy="287"
          r="2"
        />

        <circle
          cx="253"
          cy="287"
          r="2"
        />
      </g>

      {/* Floating particles */}

      <g fill="#00ff9c">
        <rect
          className="hx-p p1"
          x="34"
          y="90"
          width="4"
          height="4"
        />

        <rect
          className="hx-p p2"
          x="282"
          y="105"
          width="4"
          height="4"
        />

        <rect
          className="hx-p p3"
          x="55"
          y="220"
          width="4"
          height="4"
        />

        <rect
          className="hx-p p4"
          x="265"
          y="230"
          width="4"
          height="4"
        />
      </g>

    </svg>
  )
}

/* =========================================================
   TERMINAL
   ========================================================= */

function Terminal() {
  const [lines, setLines] = useState([])
  const [typing, setTyping] = useState('')

  useEffect(() => {
    let dead = false

    const wait = ms =>
      new Promise(resolve =>
        setTimeout(resolve, ms)
      )

    ;(async () => {
      while (!dead) {
        setLines([])

        for (const step of terminalScript) {
          for (
            let i = 1;
            i <= step.cmd.length;
            i++
          ) {
            if (dead) return

            setTyping(
              step.cmd.slice(0, i)
            )

            await wait(55)
          }

          await wait(250)

          if (dead) return

          setTyping('')

          setLines(current => [
            ...current,
            step,
          ])

          await wait(700)
        }

        await wait(4000)
      }
    })()

    return () => {
      dead = true
    }
  }, [])

  return (
    <div
      className="hx-term"
      aria-label="Terminal intro"
    >
      <div className="hx-term-bar">
        <i />
        <i />
        <i />

        <span>
          janak@kali:~
        </span>
      </div>

      <div className="hx-term-body">

        {lines.map((line, index) => (
          <div key={index}>

            <div>
              <b>$</b> {line.cmd}
            </div>

            <div className="hx-out">
              {line.out}
            </div>

          </div>
        ))}

        <div>
          <b>$</b> {typing}
          <span className="hx-caret" />
        </div>

      </div>
    </div>
  )
}

/* =========================================================
   HERO
   ========================================================= */

export default function Hero() {
  const roleRef = useRef(null)

  const [unmasked, setUnmasked] =
    useState(false)

  /* Theme is controlled by Navbar */
  const [theme, setTheme] =
    useState(() =>
      typeof document !== 'undefined'
        ? document.documentElement.getAttribute(
            'data-theme'
          ) || 'dark'
        : 'dark'
    )

  /* =====================================================
     THEME SYNC
     ===================================================== */

  useEffect(() => {
    const root =
      document.documentElement

    const sync = () => {
      setTheme(
        root.getAttribute('data-theme') ===
          'light'
          ? 'light'
          : 'dark'
      )
    }

    sync()

    const observer =
      new MutationObserver(sync)

    observer.observe(root, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () =>
      observer.disconnect()
  }, [])

  /* =====================================================
     TYPING ROLE
     ===================================================== */

  useEffect(() => {
    let index = 0
    let charIndex = 0
    let deleting = false
    let timer

    const type = () => {
      const current = roles[index]

      if (!deleting) {
        if (charIndex <= current.length) {

          if (roleRef.current) {
            roleRef.current.textContent =
              current.slice(0, charIndex++)
          }

          timer = setTimeout(
            type,
            60
          )

        } else {

          deleting = true

          timer = setTimeout(
            type,
            1800
          )
        }

      } else if (charIndex > 0) {

        if (roleRef.current) {
          roleRef.current.textContent =
            current.slice(
              0,
              charIndex--
            )
        }

        timer = setTimeout(
          type,
          30
        )

      } else {

        deleting = false

        index =
          (index + 1) %
          roles.length

        timer = setTimeout(
          type,
          300
        )
      }
    }

    type()

    return () =>
      clearTimeout(timer)
  }, [])

  /* =====================================================
     SMOOTH SCROLL
     ===================================================== */

  const go = id => event => {
    event.preventDefault()

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: 'smooth',
      })
  }

  return (
    <section
      id="home"
      className="hx"
      data-theme={theme}
    >

      {/* Matrix background */}

      <MatrixRain
        light={theme === 'light'}
      />

      <div className="hx-vignette" />

      <div className="hx-scan" />

      {/* =================================================
          MAIN CONTENT
         ================================================= */}

      <div className="hx-inner">

        {/* ================= LEFT ================= */}

        <div className="hx-left">

          <p className="hx-tag">
            &gt; access granted
          </p>

          <h1
            className="hx-name glitch"
            data-text="Er. Janak Joshi"
          >
            Er. Janak Joshi
          </h1>

          <div className="hx-role">

            <span ref={roleRef} />

            <span className="hx-cursor">
              _
            </span>

          </div>

          <Terminal />

          {/* Buttons */}

          <div className="hx-actions">

            <a
              href="#projects"
              onClick={go('projects')}
              className="hx-btn hx-btn-solid"
            >
              View My Work
            </a>

            <a
              href="#contact"
              onClick={go('contact')}
              className="hx-btn hx-btn-ghost"
            >
              Get In Touch
            </a>

          </div>

          {/* Socials */}

          <div className="hx-socials">

            <span>
              Find me on
            </span>

            {socials.map(social => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                title={social.name}
                aria-label={social.name}
                className="hx-social"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  {social.icon}
                </svg>
              </a>
            ))}

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="hx-right">

          <div className="hx-halo" />

          <button
            className="hx-stage"
            onClick={() =>
              setUnmasked(value => !value)
            }
            aria-pressed={unmasked}
            aria-label={
              unmasked
                ? 'Put the mask back on'
                : 'Take off the mask'
            }
          >

            <HackerMask
              unmasked={unmasked}
            />

            <img
              src="/photo.png"
              alt="Janak Raj Joshi"
              className={`hx-photo ${
                unmasked ? 'show' : ''
              }`}
              onError={event => {
                event.currentTarget.style.display =
                  'none'
              }}
            />

          </button>

        </div>

      </div>

      {/* =================================================
          STATS
         ================================================= */}

      <div className="hx-stats">

        {[
          [
            'BE Computer',
            'Khwopa Engineering College',
          ],
          [
            '15+',
            'Projects Built',
          ],
          [
            '10+',
            'Certifications',
          ],
        ].map(([number, label]) => (

          <div
            key={label}
            className="hx-stat"
          >

            <strong>
              {number}
            </strong>

            <span>
              {label}
            </span>

          </div>

        ))}

      </div>

      {/* =================================================
          STYLES
         ================================================= */}

      <style>{`

        /* =================================================
           ROOT
           ================================================= */

        .hx {
          --g: #00ff9c;
          --g-dim: rgba(0, 255, 156, .25);

          --ink: #030806;

          --panel: rgba(3, 12, 9, .78);

          --text: #d7f5e6;

          --text-strong: #eafff4;

          --muted: rgba(215, 245, 230, .6);

          --on-g: #030806;

          --mono:
            var(
              --font-mono,
              'JetBrains Mono',
              'Fira Code',
              ui-monospace,
              monospace
            );

          position: relative;

          overflow: hidden;

          min-height: 100vh;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          padding:
            6rem
            2rem
            4rem;

          background: var(--ink);

          color: var(--text);

          font-family: var(--mono);

          transition:
            background .4s,
            color .4s;
        }

        /* =================================================
           LIGHT THEME
           ================================================= */

        .hx[data-theme='light'] {

          --g: #008f5a;

          --g-dim:
            rgba(0, 143, 90, .3);

          --ink: #f0faf5;

          --panel:
            rgba(255, 255, 255, .82);

          --text: #0b2a1e;

          --text-strong: #04160f;

          --muted:
            rgba(11, 42, 30, .65);

          --on-g: #ffffff;
        }

        .hx[data-theme='light']
        .hx-scan {
          opacity: .06;
        }

        .hx[data-theme='light']
        .hx-rain {
          opacity: .3;
        }

        .hx[data-theme='light']
        .hx-name {
          text-shadow: none;
        }

        .hx[data-theme='light']
        .hx-halo {
          background:
            radial-gradient(
              circle,
              rgba(0, 168, 107, .3),
              transparent 65%
            );
        }

        .hx[data-theme='light']
        .hx-mask {
          filter:
            drop-shadow(
              0 6px 14px
              rgba(0, 60, 40, .35)
            )
            drop-shadow(
              0 0 16px
              rgba(0, 168, 107, .45)
            );
        }

        .hx[data-theme='light']
        .hx-term {
          box-shadow:
            0 10px 30px
            rgba(0, 60, 40, .12);
        }

        .hx[data-theme='light']
        .hx-stat strong {
          text-shadow: none;
        }

        /* =================================================
           MATRIX
           ================================================= */

        .hx-rain {
          position: absolute;

          inset: 0;

          width: 100%;

          height: 100%;

          opacity: .22;
        }

        .hx-vignette {
          position: absolute;

          inset: 0;

          pointer-events: none;

          background:
            radial-gradient(
              ellipse at 70% 45%,
              transparent 0%,
              var(--ink) 75%
            );
        }

        .hx-scan {
          position: absolute;

          inset: 0;

          pointer-events: none;

          opacity: .35;

          background:
            repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, .35) 0 1px,
              transparent 1px 3px
            );
        }

        .hx-scan::after {
          content: '';

          position: absolute;

          left: 0;
          right: 0;

          height: 120px;

          background:
            linear-gradient(
              transparent,
              rgba(0, 255, 156, .07),
              transparent
            );

          animation:
            hxSweep 7s linear infinite;
        }

        @keyframes hxSweep {
          from {
            top: -120px;
          }

          to {
            top: 100%;
          }
        }

        /* =================================================
           MAIN GRID
           ================================================= */

        .hx-inner {
          position: relative;

          z-index: 1;

          width: 100%;

          max-width: 1150px;

          display: grid;

          grid-template-columns:
            1fr 380px;

          gap: 3rem;

          align-items: center;
        }

        /* =================================================
           LEFT SIDE
           ================================================= */

        .hx-tag {
          color: var(--g);

          font-size: .85rem;

          margin:
            0 0 1rem;

          opacity: .85;
        }

        .hx-name {
          font-size:
            clamp(
              2.6rem,
              6vw,
              4.8rem
            );

          font-weight: 800;

          line-height: 1.05;

          letter-spacing: -.02em;

          margin:
            0 0 .75rem;

          color:
            var(--text-strong);

          position: relative;

          width: fit-content;

          text-shadow:
            0 0 18px
            rgba(0, 255, 156, .35);
        }

        /* =================================================
           GLITCH
           ================================================= */

        .glitch::before,
        .glitch::after {
          content:
            attr(data-text);

          position: absolute;

          inset: 0;

          overflow: hidden;
        }

        .glitch::before {
          color: #ff2e63;

          transform:
            translate(2px, 0);

          clip-path:
            inset(
              0 0 60% 0
            );

          animation:
            hxGlitchA
            4s
            steps(1)
            infinite;

          mix-blend-mode: screen;
        }

        .glitch::after {
          color: #08f7fe;

          transform:
            translate(-2px, 0);

          clip-path:
            inset(
              60% 0 0 0
            );

          animation:
            hxGlitchB
            4s
            steps(1)
            infinite;

          mix-blend-mode: screen;
        }

        @keyframes hxGlitchA {

          0%,
          90%,
          100% {
            opacity: 0;
          }

          91% {
            opacity: 1;

            clip-path:
              inset(
                10% 0 55% 0
              );

            transform:
              translate(-4px, 0);
          }

          94% {
            opacity: 1;

            clip-path:
              inset(
                40% 0 30% 0
              );

            transform:
              translate(3px, 0);
          }

          97% {
            opacity: 0;
          }
        }

        @keyframes hxGlitchB {

          0%,
          91%,
          100% {
            opacity: 0;
          }

          92% {
            opacity: 1;

            clip-path:
              inset(
                55% 0 10% 0
              );

            transform:
              translate(4px, 0);
          }

          95% {
            opacity: 1;

            clip-path:
              inset(
                20% 0 60% 0
              );

            transform:
              translate(-3px, 0);
          }

          98% {
            opacity: 0;
          }
        }

        /* =================================================
           ROLE
           ================================================= */

        .hx-role {
          color: var(--g);

          font-size:
            clamp(
              .95rem,
              2vw,
              1.25rem
            );

          min-height: 1.8rem;

          margin-bottom: 1.5rem;
        }

        .hx-cursor {
          animation:
            hxBlink
            1s
            steps(1)
            infinite;
        }

        @keyframes hxBlink {
          50% {
            opacity: 0;
          }
        }

        /* =================================================
           TERMINAL
           ================================================= */

        .hx-term {
          max-width: 500px;

          background:
            var(--panel);

          border:
            1px solid
            var(--g-dim);

          border-radius: 10px;

          box-shadow:
            0 0 40px
            rgba(0, 255, 156, .08),

            inset 0 0 30px
            rgba(0, 255, 156, .04);

          backdrop-filter:
            blur(4px);

          margin-bottom:
            1.75rem;
        }

        .hx-term-bar {
          display: flex;

          align-items: center;

          gap: 6px;

          padding:
            .55rem
            .8rem;

          border-bottom:
            1px solid
            var(--g-dim);
        }

        .hx-term-bar i {
          width: 9px;

          height: 9px;

          border-radius: 50%;

          background:
            #ff5f56;
        }

        .hx-term-bar i:nth-child(2) {
          background:
            #ffbd2e;
        }

        .hx-term-bar i:nth-child(3) {
          background:
            #27c93f;
        }

        .hx-term-bar span {
          margin-left: .6rem;

          font-size: .72rem;

          color:
            var(--muted);
        }

        .hx-term-body {
          padding:
            .9rem
            1rem;

          font-size: .82rem;

          line-height: 1.65;

          min-height: 168px;
        }

        .hx-term-body b {
          color: var(--g);

          font-weight: 700;

          margin-right: .4rem;
        }

        .hx-out {
          color:
            var(--muted);

          padding-left:
            1.1rem;
        }

        .hx-caret {
          display: inline-block;

          width: 8px;

          height: 1em;

          background:
            var(--g);

          vertical-align: -2px;

          margin-left: 2px;

          animation:
            hxBlink
            1s
            steps(1)
            infinite;
        }

        /* =================================================
           BUTTONS
           ================================================= */

        .hx-actions {
          display: flex;

          gap: .75rem;

          flex-wrap: wrap;

          margin-bottom:
            1.75rem;
        }

        .hx-btn {
          padding:
            .8rem
            1.5rem;

          border-radius: 6px;

          font:
            600
            .88rem
            var(--mono);

          text-decoration: none;

          transition: .2s;
        }

        .hx-btn-solid {
          background:
            var(--g);

          color:
            var(--on-g);

          box-shadow:
            0 0 22px
            rgba(0, 255, 156, .4);
        }

        .hx-btn-solid:hover {
          transform:
            translateY(-2px);

          box-shadow:
            0 0 36px
            rgba(0, 255, 156, .65);
        }

        .hx-btn-ghost {
          border:
            1px solid
            var(--g);

          color:
            var(--g);
        }

        .hx-btn-ghost:hover {
          background:
            rgba(0, 255, 156, .1);
        }

        /* =================================================
           SOCIALS
           ================================================= */

        .hx-socials {
          display: flex;

          align-items: center;

          gap: .6rem;

          font-size: .75rem;

          color:
            var(--muted);
        }

        .hx-socials span {
          margin-right: .4rem;
        }

        .hx-social {
          width: 40px;

          height: 40px;

          display: grid;

          place-items: center;

          border-radius: 8px;

          color:
            var(--muted);

          border:
            1px solid
            var(--g-dim);

          background:
            var(--panel);

          transition: .2s;
        }

        .hx-social:hover {
          color:
            var(--g);

          border-color:
            var(--g);

          box-shadow:
            0 0 18px
            rgba(0, 255, 156, .35);

          transform:
            translateY(-3px);
        }

        /* =================================================
           CYBER MASK AREA
           ================================================= */

        .hx-right {
          position: relative;

          display: flex;

          flex-direction: column;

          align-items: center;
        }

        .hx-halo {
          position: absolute;

          width: 360px;

          height: 360px;

          top: 5px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(0, 255, 156, .24),
              rgba(34, 211, 238, .08) 35%,
              transparent 70%
            );

          filter:
            blur(28px);

          animation:
            hxPulse
            4s
            ease-in-out
            infinite;
        }

        @keyframes hxPulse {
          50% {
            opacity: .55;

            transform:
              scale(1.08);
          }
        }

        /* =================================================
           MASK STAGE
           ================================================= */

        .hx-stage {
          position: relative;

          width: 330px;

          height: 370px;

          background:
            transparent;

          border: 0;

          padding: 0;

          cursor: pointer;

          animation:
            hxHover
            6s
            ease-in-out
            infinite;
        }

        @keyframes hxHover {
          50% {
            transform:
              translateY(-10px);
          }
        }

        /* =================================================
           MASK
           ================================================= */

        .hx-mask {
          width: 100%;

          height: 100%;

          overflow: visible;

          filter:
            drop-shadow(
              0 0 8px
              rgba(0, 255, 156, .8)
            )

            drop-shadow(
              0 0 22px
              rgba(0, 255, 156, .35)
            )

            drop-shadow(
              0 0 45px
              rgba(34, 211, 238, .15)
            );

          transition:
            opacity .5s ease,
            transform .5s ease;
        }

        .hx-mask.is-off {
          opacity: 0;

          transform:
            scale(.88);
        }

        /* =================================================
           FACE FLICKER
           ================================================= */

        .hx-face {
          animation:
            hxFlicker
            7s
            infinite;
        }

        @keyframes hxFlicker {

          0%,
          92%,
          100% {
            opacity: 1;
          }

          93% {
            opacity: .65;
          }

          94% {
            opacity: 1;
          }

          96% {
            opacity: .75;
          }

          97% {
            opacity: 1;
          }
        }

        /* =================================================
           EYES
           ================================================= */

        .hx-eyes {
          transition:
            transform .12s ease-out;
        }

        .hx-eyes path {
          filter:
            drop-shadow(
              0 0 4px
              #00ff9c
            )

            drop-shadow(
              0 0 10px
              rgba(34, 211, 238, .8)
            );
        }

        /* =================================================
           SCAN BEAM
           ================================================= */

        .hx-sweep {
          animation:
            hxScan
            2.8s
            ease-in-out
            infinite
            alternate;
        }

        @keyframes hxScan {
          from {
            transform:
              translateX(0);
          }

          to {
            transform:
              translateX(150px);
          }
        }

        /* =================================================
           FOREHEAD SYMBOL
           ================================================= */

        .hx-gem {
          animation:
            hxGem
            3s
            ease-in-out
            infinite;
        }

        @keyframes hxGem {
          50% {
            opacity: .35;
          }
        }

        /* =================================================
           VENTS
           ================================================= */

        .hx-vents {
          animation:
            hxVent
            2.4s
            ease-in-out
            infinite;
        }

        @keyframes hxVent {
          50% {
            opacity: .35;
          }
        }

        /* =================================================
           CIRCUITS
           ================================================= */

        .hx-traces path {
          stroke-dasharray:
            5 8;

          animation:
            hxFlow
            2.5s
            linear
            infinite;
        }

        @keyframes hxFlow {
          to {
            stroke-dashoffset:
              -30;
          }
        }

        .hx-face-lines {
          animation:
            hxCircuit
            3s
            ease-in-out
            infinite;
        }

        @keyframes hxCircuit {
          50% {
            opacity: .35;
          }
        }

        /* =================================================
           ORBIT RINGS
           ================================================= */

        .hx-ring {
          transform-box:
            fill-box;

          transform-origin:
            center;

          animation:
            hxSpin
            42s
            linear
            infinite;
        }

        .hx-ring.r2 {
          animation-duration:
            27s;

          animation-direction:
            reverse;
        }

        @keyframes hxSpin {
          to {
            transform:
              rotate(360deg);
          }
        }

        /* =================================================
           FLOATING PARTICLES
           ================================================= */

        .hx-p {
          opacity: 0;

          animation:
            hxDrift
            5s
            ease-in-out
            infinite;
        }

        .hx-p.p2 {
          animation-delay: 1s;
        }

        .hx-p.p3 {
          animation-delay: 2s;
        }

        .hx-p.p4 {
          animation-delay: 3s;
        }

        @keyframes hxDrift {

          0% {
            opacity: 0;

            transform:
              translateY(8px);
          }

          40% {
            opacity: .9;
          }

          100% {
            opacity: 0;

            transform:
              translateY(-25px);
          }
        }

        /* =================================================
           PHOTO REVEAL
           ================================================= */

        .hx-photo {
          position: absolute;

          left: 50%;

          top: 46%;

          width: 280px;

          height: 280px;

          border-radius: 50%;

          object-fit: cover;

          object-position:
            center top;

          transform:
            translate(-50%, -50%)
            scale(.82);

          opacity: 0;

          transition:
            opacity .5s ease,
            transform .5s ease;

          border:
            2px solid
            var(--g);

          box-shadow:
            0 0 25px
            rgba(0, 255, 156, .4),

            0 0 60px
            rgba(0, 255, 156, .15);
        }

        .hx-photo.show {
          opacity: 1;

          transform:
            translate(-50%, -50%)
            scale(1);
        }

        /* =================================================
           STATS
           ================================================= */

        .hx-stats {
          position: relative;

          z-index: 1;

          display: flex;

          flex-wrap: wrap;

          width: 100%;

          max-width: 1150px;

          margin-top:
            3.5rem;

          border:
            1px solid
            var(--g-dim);

          border-radius: 10px;

          background:
            var(--panel);

          overflow: hidden;
        }

        .hx-stat {
          flex: 1;

          min-width: 140px;

          padding:
            1.1rem
            1rem;

          text-align: center;

          border-right:
            1px solid
            var(--g-dim);
        }

        .hx-stat:last-child {
          border-right: 0;
        }

        .hx-stat strong {
          display: block;

          color:
            var(--g);

          font-size:
            1.5rem;

          text-shadow:
            0 0 14px
            rgba(0, 255, 156, .5);
        }

        .hx-stat span {
          font-size: .72rem;

          color:
            var(--muted);
        }

        /* =================================================
           FOCUS STATES
           ================================================= */

        .hx-btn:focus-visible,
        .hx-social:focus-visible,
        .hx-stage:focus-visible {
          outline:
            2px solid #fff;

          outline-offset: 3px;
        }

        /* =================================================
           TABLET
           ================================================= */

        @media (max-width: 960px) {

          .hx-inner {
            grid-template-columns: 1fr;

            gap: 2.5rem;
          }

          .hx-right {
            order: -1;
          }

          .hx-left {
            align-items: center;

            text-align: center;

            display: flex;

            flex-direction: column;
          }

          .hx-actions,
          .hx-socials {
            justify-content: center;
          }

          .hx-stage {
            width: 250px;

            height: 285px;
          }

          .hx-halo {
            width: 280px;

            height: 280px;
          }

          .hx-photo {
            width: 190px;

            height: 190px;
          }

        }

        /* =================================================
           MOBILE
           ================================================= */

        @media (max-width: 500px) {

          .hx {
            padding:
              5rem
              1rem
              3rem;
          }

          .hx-name {
            font-size:
              clamp(
                2.1rem,
                12vw,
                3.2rem
              );
          }

          .hx-term {
            width: 100%;
          }

          .hx-term-body {
            font-size: .72rem;
          }

          .hx-stage {
            width: 220px;

            height: 255px;
          }

          .hx-halo {
            width: 240px;

            height: 240px;
          }

          .hx-photo {
            width: 165px;

            height: 165px;
          }

          .hx-stats {
            flex-direction: column;
          }

          .hx-stat {
            border-right: 0;

            border-bottom:
              1px solid
              var(--g-dim);
          }

          .hx-stat:last-child {
            border-bottom: 0;
          }

        }

        /* =================================================
           REDUCED MOTION
           ================================================= */

        @media (prefers-reduced-motion: reduce) {

          .hx *,
          .hx *::before,
          .hx *::after {
            animation: none !important;

            transition: none !important;
          }

        }

      `}</style>

    </section>
  )
}