'use client';

import { useRef, useState, useEffect } from 'react';
import { PROJECTS } from '@/lib/data';

function ProjectCard({ project, visible, delay }: {
  project: typeof PROJECTS[0];
  visible: boolean;
  delay: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card || flipped) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-12px) rotateX(${y * -7}deg) rotateY(${x * 7}deg) scale(1.01)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = '';
    setFlipped(false);
  };

  return (
    <div
      ref={cardRef}
      className={`project-card fade-in ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms`, perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-shimmer" />

      {/* Status badge */}
      <div className="proj-status">{project.status}</div>

      {/* Big ghost number */}
      <div className="proj-num"
        style={{ color: `${project.color}12`, WebkitTextStroke: `1px ${project.color}18` }}>
        {project.num}
      </div>

      <h3 className="proj-title">{project.title}</h3>
      <div className="proj-highlight">{project.highlight}</div>
      <p className="proj-desc">{project.desc}</p>

      {/* Highlights list */}
      {project.highlights && (
        <ul style={{
          margin: '0 0 1.2rem 0', padding: 0, listStyle: 'none',
          display: 'flex', flexDirection: 'column', gap: '0.3rem',
        }}>
          {project.highlights.map((h: string) => (
            <li key={h} style={{
              fontSize: '0.78rem', color: 'var(--muted)',
              paddingLeft: '1rem', position: 'relative',
            }}>
              <span style={{
                position: 'absolute', left: 0,
                color: project.color, fontWeight: 700,
              }}>›</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="proj-tags">
        {project.tags.map((t: string) => (
          <span key={t} className="proj-tag">{t}</span>
        ))}
      </div>

      {/* CTA row */}
      <div style={{
        marginTop: '1.5rem', display: 'flex',
        justifyContent: 'space-between', alignItems: 'center',
      }}>
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              color: project.color,
              textDecoration: 'none',
              border: `1px solid ${project.color}44`,
              padding: '0.35rem 0.9rem',
              background: `${project.color}08`,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'background 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.background = `${project.color}18`;
              e.currentTarget.style.boxShadow = `0 0 12px ${project.color}40`;
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.background = `${project.color}08`;
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span>↗</span> LIVE PROJECT
          </a>
        ) : (
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.65rem', letterSpacing: '0.15em',
            color: 'var(--muted)', opacity: 0.5,
          }}>
            INTERNAL / PRIVATE
          </span>
        )}

        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.1em',
        }}>
          {project.num} / {String(PROJECTS.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState<'ALL' | 'PRODUCTION' | 'LIVE' | 'SHIPPED' | 'IN DEV'>('ALL');

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const filters = ['ALL', 'PRODUCTION', 'LIVE', 'SHIPPED', 'IN DEV'] as const;

  const filtered = filter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter(p => p.status === filter);

  return (
    <section id="projects" ref={sectionRef}>
      <div className="section-wrap">
        <div className={`fade-in ${visible ? 'visible' : ''}`}>
          <div className="section-label">04 — Projects</div>
          <h2 className="section-title">Shipped Builds</h2>
          <div className="section-divider" />
        </div>

        {/* Filter bar */}
        <div style={{
          display: 'flex', gap: '0.5rem', marginBottom: '2.5rem',
          flexWrap: 'wrap',
        }}>
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem', letterSpacing: '0.2em',
                padding: '0.35rem 0.9rem',
                border: `1px solid ${filter === f ? 'var(--cyan)' : 'var(--border)'}`,
                background: filter === f ? 'rgba(0,229,255,0.1)' : 'transparent',
                color: filter === f ? 'var(--cyan)' : 'var(--muted)',
                cursor: 'none',
                transition: 'all 0.2s',
                textTransform: 'uppercase',
              }}
            >
              {f}
              <span style={{
                marginLeft: '0.4rem', opacity: 0.6,
                fontSize: '0.55rem',
              }}>
                [{f === 'ALL' ? PROJECTS.length : PROJECTS.filter(p => p.status === f).length}]
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {filtered.map((p, i) => (
            <ProjectCard key={p.num} project={p} visible={visible} delay={i * 100} />
          ))}
        </div>

        {/* Total counter */}
        <div style={{
          marginTop: '3rem', textAlign: 'center',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.65rem', letterSpacing: '0.3em',
          color: 'var(--muted)',
        }}>
          {filtered.length} PROJECT{filtered.length !== 1 ? 'S' : ''} LOADED
          &nbsp;·&nbsp;
          <span style={{ color: 'var(--cyan)' }}>
            {PROJECTS.filter(p => p.href).length} WITH LIVE LINK
          </span>
        </div>
      </div>
    </section>
  );
}