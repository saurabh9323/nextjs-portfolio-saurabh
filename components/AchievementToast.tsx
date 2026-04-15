'use client';

import { useEffect, useState } from 'react';
import { ACHIEVEMENTS } from '@/lib/data';

interface Achievement {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export default function AchievementToast() {
  const [current, setCurrent] = useState<Achievement | null>(null);
  const [show, setShow] = useState(false);
  const [shown, setShown] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const achievement = ACHIEVEMENTS.find(a => a.id === id);
            if (achievement && !shown.has(id)) {
              setShown(prev => { const next = new Set(Array.from(prev)); next.add(id); return next; });
              setCurrent(achievement);
              setShow(true);
              setTimeout(() => setShow(false), 3200);
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    ACHIEVEMENTS.forEach(a => {
      const el = document.getElementById(a.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [shown]);

  if (!current) return null;

  return (
    <div className={`achievement-toast ${show ? 'show' : ''}`}>
      <div className="ach-icon">{current.icon}</div>
      <div className="ach-body">
        <div className="ach-title">Achievement Unlocked</div>
        <div className="ach-title-main">{current.title}</div>
        <div className="ach-desc">{current.desc}</div>
      </div>
    </div>
  );
}
