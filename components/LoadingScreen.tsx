'use client';

import { useEffect, useState } from 'react';

const CHECKS = [
  'Initializing render engine...',
  'Loading Three.js scene...',
  'Compiling skill matrix...',
  'Fetching project data...',
  'Calibrating cursor...',
  'System ready.',
];

export default function LoadingScreen() {
  const [progress, setProgress]   = useState(0);
  const [checks, setChecks]       = useState<number[]>([]);
  const [visible, setVisible]     = useState(true);
  const [fadeOut, setFadeOut]     = useState(false);

  useEffect(() => {
    let prog = 0;
    let checkIdx = 0;

    const interval = setInterval(() => {
      prog += Math.random() * 6 + 2;
      if (prog >= 100) {
        prog = 100;
        clearInterval(interval);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => setVisible(false), 700);
        }, 500);
      }
      setProgress(Math.min(prog, 100));

      const newCheck = Math.floor((prog / 100) * CHECKS.length);
      if (newCheck > checkIdx) {
        checkIdx = newCheck;
        setChecks(c => [...c, checkIdx - 1]);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="loading-screen"
      style={{
        transition: 'opacity 0.7s ease',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      <div className="loading-logo">SP.EXE</div>

      <div className="loading-bar-wrap">
        <div className="loading-bar-label">
          <span>BOOTING</span>
          <span>{Math.floor(progress)}%</span>
        </div>
        <div className="loading-bar-track">
          <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="loading-checks">
        {CHECKS.map((c, i) => (
          <div key={i} className={`loading-check ${checks.includes(i) ? 'done' : ''}`}>
            {c}
          </div>
        ))}
      </div>

      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.6rem',
        letterSpacing: '0.3em',
        color: 'var(--muted)',
        marginTop: '1rem',
        animation: 'blink 1s step-end infinite',
      }}>
        SAURABH PATHAK — FULL STACK ENGINEER v3.0
      </div>
    </div>
  );
}
