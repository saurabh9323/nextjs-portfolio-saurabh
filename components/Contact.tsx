'use client';

import { useEffect, useRef, useState } from 'react';
import { CONTACT_LINKS } from '@/lib/data';

export default function Contact() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === 'undefined') return;
    let animId: number;
    import('three').then((THREE) => {
      const W = 320, H = 320;
      canvas.width = W; canvas.height = H;
      const scene    = new THREE.Scene();
      const camera   = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
      camera.position.z = 5;
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const cube = new THREE.Mesh(
        new THREE.BoxGeometry(3, 3, 3),
        new THREE.MeshBasicMaterial({ color: 0x00e5ff, wireframe: true, transparent: true, opacity: 0.35 })
      );
      scene.add(cube);

      const cube2 = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 1.5, 1.5),
        new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true, transparent: true, opacity: 0.55 })
      );
      scene.add(cube2);

      const tor = new THREE.Mesh(
        new THREE.TorusGeometry(2.2, 0.022, 8, 80),
        new THREE.MeshBasicMaterial({ color: 0x00ff9d, transparent: true, opacity: 0.6 })
      );
      tor.rotation.x = Math.PI / 3;
      scene.add(tor);

      const pGeo = new THREE.BufferGeometry();
      const pP   = new Float32Array(60 * 3);
      for (let i = 0; i < pP.length; i++) pP[i] = (Math.random() - 0.5) * 9;
      pGeo.setAttribute('position', new THREE.BufferAttribute(pP, 3));
      scene.add(new THREE.Points(pGeo,
        new THREE.PointsMaterial({ color: 0x00e5ff, size: 0.06, transparent: true, opacity: 0.5 })
      ));

      const orbiters: import('three').Mesh[] = [];
      for (let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI * 2;
        const m = new THREE.Mesh(
          new THREE.IcosahedronGeometry(0.12),
          new THREE.MeshBasicMaterial({ color: [0x00e5ff, 0x8b5cf6, 0x00ff9d, 0xff6b35][i], wireframe: true })
        );
        m.position.set(Math.cos(angle) * 2.5, Math.sin(angle) * 2.5, 0);
        scene.add(m);
        orbiters.push(m);
      }

      let t = 0;
      function animate() {
        animId = requestAnimationFrame(animate);
        t += 0.012;
        cube.rotation.x  += 0.005; cube.rotation.y  += 0.008;
        cube2.rotation.x -= 0.007; cube2.rotation.y -= 0.01;
        tor.rotation.z   += 0.012;
        orbiters.forEach((o, i) => {
          const a = t + (i / 4) * Math.PI * 2;
          o.position.x = Math.cos(a) * 2.5;
          o.position.y = Math.sin(a) * 2.5;
          o.rotation.x += 0.02;
        });
        renderer.render(scene, camera);
      }
      animate();
    });
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section id="contact" ref={sectionRef}>
      <div className="section-wrap">
        <div className={`fade-in ${visible ? 'visible' : ''}`}>
          <div className="section-label">05 — Contact</div>
          <h2 className="section-title">{"Let's Build"}<br />Something Great</h2>
          <div className="section-divider" />
        </div>

        <div className="contact-layout">
          <div className={`fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            {/* <div className="terminal-prompt">
              <span>root@saurabh:~$</span> ./open-comms.sh
            </div> */}
            <p className="contact-intro">
              Always open to exciting opportunities, collaborations, and challenging problems.
              Whether you have a product to build, a team to join, or just want to talk tech — reach out!
            </p>
            <div className="contact-links">
              {CONTACT_LINKS.map((link, i) => (
                link.href ? (
                  <a
                    key={i}
                    href={link.href}
                    className="contact-link"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="cl-icon">{link.icon}</div>
                    <div className="cl-body">
                      <span className="cl-label">{link.label}</span>
                      <span className="cl-value">{link.value}</span>
                    </div>
                  </a>
                ) : (
                  <div key={i} className="contact-link">
                    <div className="cl-icon">{link.icon}</div>
                    <div className="cl-body">
                      <span className="cl-label">{link.label}</span>
                      <span className="cl-value">{link.value}</span>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>

          <div className={`contact-visual fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.25s' }}>
            <canvas ref={canvasRef} id="contact-canvas" />
            <div className="contact-tagline">● Available for Full-Time &amp; Freelance</div>
            <div style={{
              marginTop: '1.5rem', border: '1px solid var(--border)',
              padding: '1.2rem',
              fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem',
              color: 'var(--muted)', lineHeight: 2, background: 'var(--surface)',
            }}>
              <div style={{ color: 'var(--cyan)', marginBottom: '0.4rem', letterSpacing: '0.2em' }}>OPERATOR STATUS</div>
              <div>CLASS    <span style={{ color: 'var(--text)' }}>Full-Stack Engineer</span></div>
              <div>LEVEL    <span style={{ color: 'var(--green)' }}>Senior Lv.3</span></div>
              <div>STATUS   <span style={{ color: 'var(--green)' }}>● AVAILABLE</span></div>
              <div>LOCATION <span style={{ color: 'var(--text)' }}>Mumbai, IN</span></div>
              <div>RESPONSE <span style={{ color: 'var(--cyan)' }}>&lt; 24h</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
