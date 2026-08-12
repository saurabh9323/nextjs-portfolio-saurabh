'use client';

import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
    setActive(href);
    setOpen(false);
  };

  return (
    <nav className={scrolled ? 'nav-scrolled' : ''} aria-label="Main navigation">
      <a href="#hero" className="nav-logo" onClick={e => handleNav(e, '#hero')}>
        SP//
      </a>
      <button className="nav-toggle" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label="Toggle navigation"><span /><span /></button>
      <ul className={`nav-links ${open ? 'nav-open' : ''}`}>
        {NAV_LINKS.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={e => handleNav(e, link.href)}
              style={{ color: active === link.href ? 'var(--cyan)' : undefined }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="/saurabh-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="nav-resume"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          padding: '0.35rem 0.9rem',
          border: '1px solid var(--cyan)',
          color: 'var(--cyan)',
          textDecoration: 'none',
          marginLeft: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.currentTarget.style.background = 'rgba(0,229,255,0.1)';
          e.currentTarget.style.boxShadow = '0 0 10px rgba(0,229,255,0.4)';
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
       ⬇ GET MY RESUME
      </a>
      {/* HUD status indicator */}
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.65rem',
        letterSpacing: '0.2em',
        color: 'var(--muted)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: '50%',
          background: 'var(--green)',
          display: 'inline-block',
          boxShadow: '0 0 8px var(--green)',
          animation: 'blink 2s step-end infinite',
        }} />
        AVAILABLE
      </div>
    </nav>
  );
}
