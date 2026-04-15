'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const dotRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring   = ringRef.current;
    const dot    = dotRef.current;
    if (!cursor || !ring || !dot) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    // Trail dots
    const TRAIL_COUNT = 8;
    const trails: HTMLDivElement[] = [];
    const trailPositions: {x:number; y:number}[] = [];
    for (let i = 0; i < TRAIL_COUNT; i++) {
      const t = document.createElement('div');
      t.id = `trail-${i}`;
      t.style.cssText = `
        width: ${8 - i * 0.6}px;
        height: ${8 - i * 0.6}px;
        border-radius: 50%;
        background: var(--cyan);
        position: fixed; pointer-events: none;
        z-index: 9990;
        transform: translate(-50%,-50%);
        opacity: ${0.5 - i * 0.05};
        transition: none;
      `;
      document.body.appendChild(t);
      trails.push(t);
      trailPositions.push({ x: 0, y: 0 });
    }

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top  = my + 'px';
      dot.style.left    = mx + 'px';
      dot.style.top     = my + 'px';
    };
    document.addEventListener('mousemove', onMove);

    let rafId: number;
    function animate() {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }

      // Shift trail
      for (let i = TRAIL_COUNT - 1; i > 0; i--) {
        trailPositions[i].x += (trailPositions[i-1].x - trailPositions[i].x) * 0.35;
        trailPositions[i].y += (trailPositions[i-1].y - trailPositions[i].y) * 0.35;
      }
      trailPositions[0].x += (mx - trailPositions[0].x) * 0.5;
      trailPositions[0].y += (my - trailPositions[0].y) * 0.5;
      trails.forEach((t, i) => {
        t.style.left = trailPositions[i].x + 'px';
        t.style.top  = trailPositions[i].y + 'px';
      });

      rafId = requestAnimationFrame(animate);
    }
    animate();

    const interactive = document.querySelectorAll('a,button');
    interactive.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width  = '20px';
        cursor.style.height = '20px';
        if (ring) { ring.style.width = '56px'; ring.style.height = '56px'; ring.style.borderColor = 'rgba(139,92,246,0.6)'; }
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width  = '12px';
        cursor.style.height = '12px';
        if (ring) { ring.style.width = '36px'; ring.style.height = '36px'; ring.style.borderColor = 'rgba(0,229,255,0.5)'; }
      });
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      trails.forEach(t => t.parentNode?.removeChild(t));
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
      <div id="cursor-dot" ref={dotRef} />
    </>
  );
}
