export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-label">
          <span className="label-line" />
          <span className="font-mono text-primary text-sm">01 — About</span>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">
              Building at the intersection of<br />
              <span className="text-primary">networks, security & web</span>
            </h2>
            <div className="about-paras">
              <p>
                I'm <strong>Janak Raj Joshi</strong>, a Computer Engineering graduate from
                Khowpa Engineering College, Bhaktapur (2021–2025). My technical journey spans
                three pillars: networking infrastructure, cybersecurity, and full-stack web development.
              </p>
              <p>
                I hold hands-on experience from CCNA labs, cybersecurity training at Broadway Infosys,
                multiple Security Blue Team and Cisco Academy certifications. 
              </p>
              <p>
                Based in <span className="text-accent2">Koteshwor, Kathmandu</span>. Currently
                open to roles in network engineering, cybersecurity, or web development.
              </p>
            </div>
            <div className="about-links">
              <a href="https://github.com/Janak-Joshi6789" target="_blank" rel="noreferrer" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                GitHub
              </a>
              <a href="mailto:janakjoshi6789@gmail.com" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Email Me
              </a>
              <a href="tel:9848840530" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15v1.92z"/></svg>
                9848840530
              </a>
            </div>
          </div>
          <div className="about-cards">
            {[
              {
                icon: '💻',
                title: 'Web Development',
                desc: 'Building full-stack web apps with React.js, PHP, and MySQL. Experienced in responsive UI design using Bootstrap, Tailwind CSS, and WordPress.',
                color: 'var(--accent2)',
              },
              {
                icon: '🌐',
                title: 'Networking',
                desc: 'Designing and configuring networks with CCNA-level expertise in routing, switching, VLANs, and NAT/PAT. Skilled in Wireshark, Nmap, and subnetting.',
                color: 'var(--primary)',
              },
              {
                icon: '🛡️',
                title: 'Cybersecurity',
                desc: 'Performing penetration testing and vulnerability assessments using Kali Linux, Metasploit, and Burp Suite. Trained in SIEM monitoring with Wazuh and OSINT techniques.',
                color: 'var(--accent)',
              },
              {
                icon: '🤖',
                title: 'AI / ML',
                desc: 'Developed Nepali Speech-to-Text using wav2vec2 and Text-to-Speech using Tacotron. Working with HuggingFace and PyTorch for NLP model fine-tuning.',
                color: '#fb923c',
              },
            ].map(c => (
              <div key={c.title} className="about-card">
                <div className="card-icon" style={{color: c.color}}>{c.icon}</div>
                <div style={{flex: 1}}>
                  <h3 className="card-title" style={{color: c.color}}>{c.title}</h3>
                  <p className="card-desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .about-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 4rem; align-items: start;
        }
        .about-paras { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem; }
        .about-paras p { color: var(--muted); line-height: 1.8; text-align: justify; }
        .about-paras strong { color: var(--text); }
        .text-primary { color: var(--primary); }
        .text-accent2 { color: var(--accent2); }
        .about-links { display: flex; flex-wrap: wrap; gap: 0.75rem; }
        .social-link {
          display: inline-flex; align-items: center; gap: 0.4rem;
          border: 1px solid var(--border); color: var(--muted);
          padding: 0.5rem 1rem; border-radius: 6px;
          text-decoration: none; font-size: 0.88rem;
          transition: all 0.2s;
        }
        .social-link:hover { border-color: var(--primary); color: var(--primary); }
        .about-cards { display: flex; flex-direction: column; gap: 1rem; }
        .about-card {
          display: flex; align-items: flex-start; gap: 1rem;
          background: var(--card); border: 1px solid var(--border);
          padding: 1.25rem 1.5rem; border-radius: 10px;
          transition: all 0.2s;
        }
        .about-card:hover { border-color: rgba(99,179,237,0.3); transform: translateX(4px); }
        .card-icon { font-size: 1.5rem; flex-shrink: 0; margin-top: 2px; }
        .card-title { font-weight: 600; font-size: 0.95rem; margin-bottom: 0.35rem; }
        .card-desc {
          font-size: 0.83rem; color: var(--muted); line-height: 1.7;
          text-align: justify;
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
        }
      `}</style>
    </section>
  )
}
