'use client';

import { useEffect, useState } from 'react';

const strengths = [
  ['Frontend architecture', 'React, Next.js, TypeScript'],
  ['Product engineering', 'Complex workflows and design systems'],
  ['Performance', 'Caching, APIs and scalable state'],
];

export default function RecruiterBrief() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen(value => !value);
      }
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button className="recruiter-trigger" onClick={() => setOpen(true)} aria-haspopup="dialog">
        <span className="recruiter-trigger-icon">SP</span>
        <span><strong>Recruiter brief</strong><small>My profile in 30 seconds</small></span>
        <kbd>⌘ K</kbd>
      </button>

      <div className={`recruiter-overlay ${open ? 'recruiter-open' : ''}`} onMouseDown={event => event.target === event.currentTarget && setOpen(false)}>
        <section className="recruiter-panel" role="dialog" aria-modal="true" aria-labelledby="brief-title">
          <button className="recruiter-close" onClick={() => setOpen(false)} aria-label="Close recruiter brief">×</button>
          <div className="recruiter-topline"><i /> Open to full-time opportunities <span>Mumbai · Remote</span></div>

          <header className="recruiter-header">
            <div className="recruiter-avatar"><span>SP</span><i /></div>
            <div>
              <span>30-second candidate brief</span>
              <h2 id="brief-title">Saurabh Pathak</h2>
              <p>Full-Stack Engineer focused on React, Next.js, TypeScript, and product performance.</p>
            </div>
          </header>

          <div className="recruiter-fit">
            <span>Best fit</span>
            <strong>Frontend Engineer</strong><i>·</i><strong>Full-Stack Engineer</strong><i>·</i><strong>Product Engineer</strong>
          </div>

          <div className="recruiter-grid">
            <article className="recruiter-highlight">
              <span>Signature impact</span>
              <strong>10,000×</strong>
              <p>Reduced more than one million daily API requests to fewer than one hundred through strategic RTK Query caching.</p>
              <div><i style={{ width: '99.8%' }} /><i style={{ width: '7%' }} /></div>
            </article>
            <div className="recruiter-stats">
              <article><strong>2+</strong><span>years in production</span></article>
              <article><strong>10+</strong><span>products built</span></article>
              <article><strong>7</strong><span>featured projects</span></article>
              <article><strong>&lt;24h</strong><span>response time</span></article>
            </div>
          </div>

          <div className="recruiter-strengths">
            {strengths.map(([title, detail], index) => (
              <div key={title}><i>0{index + 1}</i><span><strong>{title}</strong><small>{detail}</small></span><b>✓</b></div>
            ))}
          </div>

          <blockquote>“I bridge the gap between polished interfaces and reliable engineering—turning complex requirements into products people can actually use.”</blockquote>

          <footer className="recruiter-actions">
            <a href="/saurabh-resume.pdf" download>Download résumé <span>↓</span></a>
            <a href="mailto:saurabhpathak52@gmail.com">Start a conversation <span>↗</span></a>
            <a href="https://linkedin.com/in/saurabh-pathak" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">in</a>
          </footer>
        </section>
      </div>
    </>
  );
}
