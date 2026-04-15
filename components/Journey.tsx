'use client';

import { useEffect, useRef } from 'react';
import { JOURNEY } from '@/lib/data';

export default function Journey() {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll('.journey-item');
    if (!items) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.2 }
    );
    items.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="journey">
      <div className="section-wrap">
        <div className="fade-in">
          <div className="section-label">02 — Journey</div>
          <h2 className="section-title">Quest Log</h2>
          <div className="section-divider" />
        </div>

        <div className="journey-wrap">
          <div className="journey-spine" />
          <ul className="journey-items" ref={listRef}>
            {JOURNEY.map((item, i) => (
              <li key={i} className="journey-item">
                <div className="j-card" style={{
                  '--card-color': item.color,
                } as React.CSSProperties}>
                  {/* colored top bar matching this entry */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                    background: `linear-gradient(to right, ${item.color}, #8b5cf6)`,
                  }} />
                  <div className="j-icon" style={{ filter: `drop-shadow(0 0 8px ${item.color}40)` }}>
                    {item.icon}
                  </div>
                  <div className="j-year" style={{ color: item.color }}>{item.year}</div>
                  <div className="j-title">{item.title}</div>
                  <div className="j-org">{item.org}</div>
                  <p className="j-desc">{item.desc}</p>
                  <div className="j-tags">
                    {item.tags.map(t => (
                      <span key={t} className="j-tag" style={{ borderColor: `${item.color}33`, color: item.color }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="j-spacer">
                  <div className="j-dot" style={{
                    borderColor: item.color,
                    boxShadow: `0 0 0 4px ${item.color}20, 0 0 20px ${item.color}60`,
                  }} />
                </div>

                {/* empty space for alternating side */}
                <div style={{ width: 'calc(50% - 40px)' }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
