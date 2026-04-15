'use client';

import { useEffect, useRef, useState } from 'react';
import { STATS } from '@/lib/data';

function useIntersection(ref: React.RefObject<Element>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const visible    = useIntersection(sectionRef as React.RefObject<Element>);

  return (
    <section id="about" ref={sectionRef}>
      <div className="section-wrap">
        <div className={`fade-in ${visible ? 'visible' : ''}`}>
          <div className="section-label">01 — About</div>
          <h2 className="section-title">Profile</h2>
          <div className="section-divider" />
        </div>

        <div className="about-grid">
          <div className={`about-text fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>

            {/* Terminal prompt header */}
            {/* <div className="terminal-prompt">
              <span>root@saurabh:~$</span> cat profile.json
            </div> */}

            <p>
              I&apos;m <strong>Saurabh Pathak</strong>, a Full-Stack Engineer based in Mumbai
              with <strong>2+ years</strong> of production experience building scalable,
              user-centric web applications.
            </p>
            <p>
              Specializing in the <strong>React ecosystem</strong> — from architecting global
              state with Redux Toolkit to building metadata-driven dynamic forms with RJSF.
              I bridge the gap between design and engineering with clean, maintainable code.
            </p>
            <p>
              Currently at <strong>Nivotime Technologies</strong> building the BimaMandi
              insurance platform. Previously reduced 1M+ daily API requests to under 100
              using strategic RTK Query caching.
            </p>

            <div className="about-badges">
              {['React', 'Next.js', 'TypeScript', 'Redux', 'Node.js', 'AWS', 'MongoDB', 'Figma'].map(b => (
                <span key={b} className="badge">{b}</span>
              ))}
            </div>
          </div>

          {/* STAT CARDS — game character sheet style */}
          <div className={`stats-grid fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.25s' }}>
            {STATS.map((s, i) => (
              <StatCard key={i} num={s.num} label={s.label} visible={visible} delay={i * 80} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ num, label, visible, delay }: { num: string; label: string; visible: boolean; delay: number }) {
  return (
    <div className="stat-card" style={{ transitionDelay: `${delay}ms` }}>
      <span className="stat-num" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s' }}>
        {num}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
