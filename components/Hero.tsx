'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let frame = 0;
    let disposed = false;
    let cleanup = () => {};

    import('three').then((THREE) => {
      if (disposed) return;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.set(0, 0, 8);
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));

      const group = new THREE.Group();
      scene.add(group);
      const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(2.15, 2),
        new THREE.MeshBasicMaterial({ color: 0x9ef01a, wireframe: true, transparent: true, opacity: 0.34 })
      );
      const shell = new THREE.Mesh(
        new THREE.IcosahedronGeometry(2.85, 1),
        new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true, transparent: true, opacity: 0.14 })
      );
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(3.25, 0.018, 8, 160),
        new THREE.MeshBasicMaterial({ color: 0xe7f9a9, transparent: true, opacity: 0.5 })
      );
      ring.rotation.x = 1.1;
      group.add(core, shell, ring);

      const pointsGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(450 * 3);
      for (let i = 0; i < positions.length; i += 3) {
        const radius = 4 + Math.random() * 4;
        const angle = Math.random() * Math.PI * 2;
        positions[i] = Math.cos(angle) * radius;
        positions[i + 1] = (Math.random() - 0.5) * 9;
        positions[i + 2] = Math.sin(angle) * radius;
      }
      pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const points = new THREE.Points(pointsGeometry, new THREE.PointsMaterial({ color: 0xffffff, size: 0.025, transparent: true, opacity: 0.45 }));
      scene.add(points);

      let pointerX = 0, pointerY = 0;
      const onPointer = (event: PointerEvent) => {
        pointerX = (event.clientX / window.innerWidth - 0.5) * 0.65;
        pointerY = (event.clientY / window.innerHeight - 0.5) * 0.4;
      };
      const resize = () => {
        const { clientWidth: width, clientHeight: height } = canvas;
        renderer.setSize(width, height, false);
        camera.aspect = width / Math.max(height, 1);
        camera.updateProjectionMatrix();
      };
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const animate = () => {
        group.rotation.y += reduceMotion ? 0 : 0.0028;
        group.rotation.x += (pointerY - group.rotation.x) * 0.025;
        group.position.x += (pointerX - group.position.x) * 0.025;
        shell.rotation.z -= reduceMotion ? 0 : 0.0015;
        points.rotation.y += reduceMotion ? 0 : 0.00035;
        renderer.render(scene, camera);
        frame = requestAnimationFrame(animate);
      };
      window.addEventListener('pointermove', onPointer, { passive: true });
      window.addEventListener('resize', resize);
      resize();
      animate();
      cleanup = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener('pointermove', onPointer);
        window.removeEventListener('resize', resize);
        pointsGeometry.dispose();
        renderer.dispose();
      };
    });

    return () => { disposed = true; cleanup(); };
  }, []);

  return (
    <section id="hero">
      <canvas ref={canvasRef} id="hero-canvas" aria-hidden="true" />
      <div className="hero-noise" />
      <div className="hero-content">
        <div className="hero-kicker"><span /> Available for select opportunities</div>
        <p className="hero-eyebrow">Full-stack engineer · Mumbai, India</p>
        <h1 className="hero-name">I build digital products<br /><em>people remember.</em></h1>
        <p className="hero-desc">I’m Saurabh Pathak—an engineer focused on turning complex product ideas into fast, scalable, beautifully considered experiences.</p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">Explore my work <span>↘</span></a>
          <a href="mailto:saurabhpathak52@gmail.com" className="btn-ghost">Let’s talk <span>↗</span></a>
        </div>
        <button className="hero-recruiter-link" onClick={() => document.querySelector<HTMLButtonElement>('.recruiter-trigger')?.click()}>
          Hiring? Open my 30-second candidate brief <span>→</span>
        </button>
        <div className="hero-proof">
          <div><strong>2+</strong><span>Years building</span></div>
          <div><strong>10+</strong><span>Products shipped</span></div>
          <div><strong>10,000×</strong><span>API reduction</span></div>
        </div>
      </div>
      <div className="hero-orbit-label">Interactive WebGL / move your cursor</div>
      <a className="scroll-indicator" href="#about" aria-label="Scroll to about"><span>Scroll</span><i /></a>
    </section>
  );
}
