'use client';

import { useRef, useState, useEffect } from 'react';
import { PROJECTS } from '@/lib/data';

function ProjectCard({ project, visible, delay }: {
  project: typeof PROJECTS[0];
  visible: boolean;
  delay: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `translateY(-12px) rotateX(${y * -8}deg) rotateY(${x * 8}deg) scale(1.01)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = '';
  };

  return (
    <div
      ref={cardRef}
      className={`project-card fade-in ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-shimmer" />

      <div className="proj-status">{project.status}</div>
      <div className="proj-num" style={{ color: `${project.color}12`, WebkitTextStroke: `1px ${project.color}18` }}>
        {project.num}
      </div>
      <h3 className="proj-title">{project.title}</h3>
      <div className="proj-highlight">{project.highlight}</div>
      <p className="proj-desc">{project.desc}</p>
      <div className="proj-tags">
        {project.tags.map(t => (
          <span key={t} className="proj-tag">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef}>
      <div className="section-wrap">
        <div className={`fade-in ${visible ? 'visible' : ''}`}>
          <div className="section-label">04 — Projects</div>
          <h2 className="section-title">Shipped Builds</h2>
          <div className="section-divider" />
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.num} project={p} visible={visible} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
