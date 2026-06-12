const skillGroups = [
  {
    category: 'Web Development',
    color: 'var(--accent2)',
    skills: [
      { name: 'HTML5',        svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3',         svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript',   svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React.js',     svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js',      svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'PHP',          svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'MySQL',        svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB',      svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Bootstrap',    svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'Tailwind CSS', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'WordPress',    svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
      { name: 'Git',          svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub',       svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code',      svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Figma',        svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Python',       svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ]
  },
  {
    category: 'Networking',
    color: 'var(--primary)',
    skills: [
{
  name: 'Cisco', svg: '/images/skills/cisco.svg',fallback: '🖧'},
      { name: 'Wireshark',    svg: null, fallback: '🦈' },
      { name: 'Nmap',         svg: null, fallback: '🔍' },
      { name: 'TCP/IP',       svg: null, fallback: '🌐' },
      { name: 'VLANs',        svg: null, fallback: '📡' },
      { name: 'NAT / PAT',    svg: null, fallback: '🔀' },
      { name: 'DHCP & DNS',   svg: null, fallback: '⚙️' },
      { name: 'Firewall/VPN', svg: null, fallback: '🛡' },
      { name: 'Subnetting',   svg: null, fallback: '🧮' },
      { name: 'GNS3',         svg: null, fallback: '🖥' },
      { name: 'Packet Tracer',svg: null, fallback: '📦' },
      { name: 'Linux',        svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    ]
  },
  {
    category: 'Cybersecurity',
    color: 'var(--accent)',
    skills: [
      { name: 'Kali Linux',   svg: null, fallback: '💀' },
      { name: 'Metasploit',   svg: null, fallback: '⚔️' },
      { name: 'Burp Suite',   svg: null, fallback: '🕷' },
      { name: 'Nessus',       svg: null, fallback: '🔬' },
      { name: 'Wazuh SIEM',   svg: null, fallback: '📊' },
      { name: 'OSINT',        svg: null, fallback: '🔎' },
      { name: 'Wireshark',    svg: null, fallback: '🦈' },
      { name: 'Nmap',         svg: null, fallback: '🗺' },
      { name: 'OpenVAS',      svg: null, fallback: '🧪' },
      { name: 'Cryptography', svg: null, fallback: '🔐' },
      { name: 'OWASP',        svg: null, fallback: '🌀' },
      { name: 'Blue Team',    svg: null, fallback: '🔵' },
    ]
  }
]

function SkillTile({ name, svg, fallback, accentColor }) {
  return (
    <div className="skill-tile">
      <div className="tile-icon">
        {svg
          ? <img src={svg} alt={name} width="36" height="36" loading="lazy"
              onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
            />
          : null
        }
        <span className="tile-fallback" style={svg ? {display:'none'} : {display:'flex'}}>{fallback}</span>
      </div>
      <span className="tile-name">{name}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-label">
          <span className="label-line" />
          <span className="font-mono text-primary text-sm">02 — Skills</span>
        </div>
        <h2 className="section-title">Technical <span className="text-primary">Proficiency</span></h2>
        <p className="section-sub">Skills developed through coursework, certifications, and hands-on lab work</p>

        <div className="skill-groups">
          {skillGroups.map((group, gi) => (
            <div key={group.category} className="skill-group" style={{'--gi': gi}}>
              <div className="group-heading">
                <span className="group-bar" style={{background: group.color}} />
                <h3 className="group-name" style={{color: group.color}}>{group.category}</h3>
              </div>
              <div className="tiles-grid">
                {group.skills.map((s, i) => (
                  <div key={s.name + i} className="tile-wrap" style={{'--ti': i}}>
                    <SkillTile {...s} accentColor={group.color} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .text-primary { color: var(--primary); }
        .section-sub { color: var(--muted); font-size: 0.9rem; margin-top: 0.4rem; }

        .skill-groups { display: flex; flex-direction: column; gap: 3.5rem; margin-top: 3rem; }

        .skill-group {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.5s ease forwards;
          animation-delay: calc(var(--gi) * 150ms);
        }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }

        .group-heading {
          display: flex; align-items: center; gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .group-bar { width: 4px; height: 22px; border-radius: 99px; flex-shrink: 0; }
        .group-name { font-size: 1rem; font-weight: 700; }

        .tiles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
          gap: 0.85rem;
        }

        .tile-wrap {
          opacity: 0;
          transform: scale(0.85);
          animation: popIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards;
          animation-delay: calc(var(--gi) * 150ms + var(--ti) * 45ms);
        }
        @keyframes popIn { to { opacity: 1; transform: scale(1); } }

        .skill-tile {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 0.5rem;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1rem 0.5rem;
          cursor: default;
          transition: border-color 0.2s, transform 0.2s;
        }
        .skill-tile:hover {
          border-color: rgba(99,179,237,0.4);
          transform: translateY(-4px);
        }

        .tile-icon {
          width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
        }
        .tile-icon img { width: 36px; height: 36px; object-fit: contain; }
        .tile-fallback {
          font-size: 1.6rem;
          align-items: center; justify-content: center;
        }

        .tile-name {
          font-size: 0.72rem;
          color: var(--muted);
          text-align: center;
          line-height: 1.3;
          font-weight: 500;
        }

        @media (max-width: 600px) {
          .tiles-grid { grid-template-columns: repeat(auto-fill, minmax(75px, 1fr)); gap: 0.65rem; }
        }
      `}</style>
    </section>
  )
}
