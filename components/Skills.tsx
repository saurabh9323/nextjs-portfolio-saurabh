'use client';

import { useEffect, useRef, useState } from 'react';
import { SKILLS_BARS, SKILL_TAGS } from '@/lib/data';

function getLevelLabel(pct: number) {
  if (pct >= 90) return 'EXPERT';
  if (pct >= 80) return 'ADV';
  if (pct >= 70) return 'MID';
  return 'JR';
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const sphereRef  = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  // Scroll reveal → animate bars
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // CSS 3D sphere
  useEffect(() => {
    const sphere = sphereRef.current;
    if (!sphere) return;
    const r = 140;
    SKILL_TAGS.forEach((s, i) => {
      const phi   = Math.acos(-1 + (2 * i) / SKILL_TAGS.length);
      const theta = Math.sqrt(SKILL_TAGS.length * Math.PI) * phi;
      const tDeg  = (theta * 180) / Math.PI;
      const pDeg  = (phi   * 180) / Math.PI - 90;
      const el    = document.createElement('span');
      el.className = 'sk-tag';
      el.textContent = s;
      el.style.transform = `rotateY(${tDeg}deg) rotateX(${-pDeg}deg) translateZ(${r}px) translate(-50%,-50%)`;
      sphere.appendChild(el);
    });
  }, []);

  // Mouse drag to rotate sphere
  useEffect(() => {
    const wrap = sphereRef.current;
    if (!wrap) return;
    let dragging = false, startX = 0, startY = 0, rotX = 15, rotY = 0;

    const onDown = (e: MouseEvent) => { dragging = true; startX = e.clientX; startY = e.clientY; };
    const onMove = (e: MouseEvent) => {
      if (!dragging) return;
      rotY += (e.clientX - startX) * 0.4;
      rotX -= (e.clientY - startY) * 0.4;
      startX = e.clientX; startY = e.clientY;
      wrap.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
      wrap.style.animation = 'none';
    };
    const onUp = () => { dragging = false; };

    wrap.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      wrap.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="section-wrap">
       <div className={`fade-in ${animated ? 'visible' : ''}`}>
          <div className="section-label">03 — Skills</div>
          <h2 className="section-title">Skill Tree</h2>
          <div className="section-divider" />
        </div>

        <div className="skills-layout">
          {/* 3D Sphere */}
          <div className="sphere-scene">
            <div className="sphere-ring" style={{ width: 260, height: 260, marginTop: 50, marginLeft: 50 }} />
            <div className="sphere-ring" style={{ width: 200, height: 200, marginTop: 80, marginLeft: 80, borderColor: 'rgba(139,92,246,0.15)' }} />
            <div className="sphere-glow" />
            <div
              className="skill-sphere-wrap"
              ref={sphereRef}
              title="Drag to rotate"
            />
            <div style={{
              position: 'absolute', bottom: '-1.5rem', left: '50%', transform: 'translateX(-50%)',
              fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem',
              letterSpacing: '0.25em', color: 'var(--muted)', whiteSpace: 'nowrap',
            }}>
              DRAG TO ROTATE
            </div>
          </div>

          {/* XP bars */}
          <div className="skills-bars" id="skills-bars-container">
            {SKILLS_BARS.map((skill, i) => (
              <div className="skill-row" key={skill.name} style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span className="skill-level">{getLevelLabel(skill.pct)}</span>
                    <span className="skill-pct">{skill.pct}%</span>
                  </div>
                </div>
                <div className="skill-track">
                  <div
                    className={`skill-fill ${animated ? 'animated' : ''}`}
                    style={{
                      background: skill.gradient,
                      width: animated ? `${skill.pct}%` : '0%',
                      transitionDelay: `${i * 80}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
