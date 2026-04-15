'use client';

import { useEffect, useRef, useState } from 'react';

const ROLES = [
  'Full-Stack Engineer',
  'React / Next.js Dev',
  'TypeScript Architect',
  'UI/UX Craftsman',
  'Cloud Enthusiast',
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [roleText, setRoleText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [typing, setTyping] = useState(true);

  // Typewriter effect
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const current = ROLES[roleIdx];

    if (typing) {
      if (roleText.length < current.length) {
        timeout = setTimeout(() => setRoleText(current.slice(0, roleText.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (roleText.length > 0) {
        timeout = setTimeout(() => setRoleText(roleText.slice(0, -1)), 35);
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [roleText, typing, roleIdx]);

  // Three.js hero scene
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === 'undefined') return;

    let THREE: typeof import('three');
    let animId: number;

    import('three').then((mod) => {
      THREE = mod;

      const W = canvas.clientWidth || window.innerWidth;
      const H = canvas.clientHeight || window.innerHeight;
      canvas.width = W; canvas.height = H;

      const scene    = new THREE.Scene();
      const camera   = new THREE.PerspectiveCamera(70, W / H, 0.1, 1000);
      camera.position.z = 10;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Stars
      const sGeo = new THREE.BufferGeometry();
      const sc   = 4000;
      const sp   = new Float32Array(sc * 3);
      for (let i = 0; i < sc * 3; i++) sp[i] = (Math.random() - 0.5) * 200;
      sGeo.setAttribute('position', new THREE.BufferAttribute(sp, 3));
      scene.add(new THREE.Points(sGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.07, transparent: true, opacity: 0.7 })));

      // Grid floor (XZ plane)
      const gridHelper = new THREE.GridHelper(60, 40, 0x00e5ff, 0x0a2a3a);
      gridHelper.position.y = -8;
      (gridHelper.material as THREE.LineBasicMaterial).transparent = true;
      (gridHelper.material as THREE.LineBasicMaterial).opacity = 0.25;
      scene.add(gridHelper);

      // DNA double helix
      const helixPts1: THREE.Vector3[] = [], helixPts2: THREE.Vector3[] = [];
      for (let i = 0; i <= 200; i++) {
        const t = i / 200, angle = t * Math.PI * 8, y = (t - 0.5) * 14;
        helixPts1.push(new THREE.Vector3(Math.cos(angle) * 1.5, y, Math.sin(angle) * 1.5));
        helixPts2.push(new THREE.Vector3(Math.cos(angle + Math.PI) * 1.5, y, Math.sin(angle + Math.PI) * 1.5));
      }
      const h1G = new THREE.BufferGeometry().setFromPoints(helixPts1);
      const h2G = new THREE.BufferGeometry().setFromPoints(helixPts2);
      const helix = new THREE.Group();
      helix.add(new THREE.Line(h1G, new THREE.LineBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.55 })));
      helix.add(new THREE.Line(h2G, new THREE.LineBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.55 })));
      for (let i = 0; i <= 20; i++) {
        const t = i / 20, angle = t * Math.PI * 8, y = (t - 0.5) * 14;
        const rGeo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(Math.cos(angle) * 1.5, y, Math.sin(angle) * 1.5),
          new THREE.Vector3(Math.cos(angle + Math.PI) * 1.5, y, Math.sin(angle + Math.PI) * 1.5),
        ]);
        helix.add(new THREE.Line(rGeo, new THREE.LineBasicMaterial({ color: 0x00ff9d, transparent: true, opacity: 0.25 })));
      }
      helix.position.x = 4;
      scene.add(helix);

      // Wireframe icosahedron
      const wGeo    = new THREE.IcosahedronGeometry(3.5, 1);
      const wSphere = new THREE.Mesh(wGeo, new THREE.MeshBasicMaterial({ color: 0x00e5ff, wireframe: true, transparent: true, opacity: 0.08 }));
      wSphere.position.x = -4;
      scene.add(wSphere);

      // Orbiting torus rings
      const ring1 = new THREE.Mesh(
        new THREE.TorusGeometry(5, 0.015, 8, 120),
        new THREE.MeshBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.35 })
      );
      ring1.rotation.x = Math.PI / 4;
      scene.add(ring1);

      const ring2 = new THREE.Mesh(
        new THREE.TorusGeometry(6.5, 0.012, 8, 150),
        new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.25 })
      );
      ring2.rotation.x = -Math.PI / 5;
      ring2.rotation.z =  Math.PI / 3;
      scene.add(ring2);

      // Floating particles
      const fpGeo = new THREE.BufferGeometry();
      const fpC   = 100;
      const fpP   = new Float32Array(fpC * 3);
      for (let i = 0; i < fpC * 3; i++) fpP[i] = (Math.random() - 0.5) * 28;
      fpGeo.setAttribute('position', new THREE.BufferAttribute(fpP, 3));
      scene.add(new THREE.Points(fpGeo, new THREE.PointsMaterial({ color: 0x00ff9d, size: 0.12, transparent: true, opacity: 0.55 })));

      // Small octahedrons floating
      const floaters: THREE.Mesh[] = [];
      for (let i = 0; i < 6; i++) {
        const m = new THREE.Mesh(
          new THREE.OctahedronGeometry(0.15 + Math.random() * 0.2),
          new THREE.MeshBasicMaterial({ color: [0x00e5ff, 0x8b5cf6, 0x00ff9d][i % 3], wireframe: true, transparent: true, opacity: 0.5 })
        );
        m.position.set((Math.random() - 0.5) * 14, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6);
        scene.add(m);
        floaters.push(m);
      }

      // Mouse parallax
      let targetX = 0, targetY = 0;
      const onMouse = (e: MouseEvent) => {
        targetX = (e.clientX / window.innerWidth  - 0.5) * 2;
        targetY = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      document.addEventListener('mousemove', onMouse);

      let t = 0;
      function animate() {
        animId = requestAnimationFrame(animate);
        t += 0.005;
        helix.rotation.y   += 0.006;
        wSphere.rotation.x += 0.003;
        wSphere.rotation.y += 0.005;
        ring1.rotation.z   += 0.004;
        ring2.rotation.z   -= 0.003;
        ring2.rotation.y   += 0.002;
        gridHelper.position.z = ((t * 2) % 1.5) - 0.75; // animated grid scroll
        floaters.forEach((f, i) => {
          f.rotation.x += 0.01 + i * 0.003;
          f.rotation.y += 0.008;
          f.position.y += Math.sin(t + i) * 0.003;
        });
        camera.position.x += (targetX * 1.5 - camera.position.x) * 0.04;
        camera.position.y += (-targetY - camera.position.y) * 0.04;
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
      }
      animate();

      const onResize = () => {
        const nW = canvas.clientWidth, nH = canvas.clientHeight;
        camera.aspect = nW / nH;
        camera.updateProjectionMatrix();
        renderer.setSize(nW, nH);
      };
      window.addEventListener('resize', onResize);

      return () => {
        cancelAnimationFrame(animId);
        document.removeEventListener('mousemove', onMouse);
        window.removeEventListener('resize', onResize);
        renderer.dispose();
      };
    });
  }, []);

  return (
    <section id="hero">
      <canvas ref={canvasRef} id="hero-canvas" />

      {/* HUD corners */}
      <div className="hud-corner hud-tl" />
      <div className="hud-corner hud-tr" />
      <div className="hud-corner hud-bl" />
      <div className="hud-corner hud-br" />

      <div className="hero-content" style={{ animation: 'fadeUp 1s 0.3s both' }}>
        <div className="hero-eyebrow">// Full-Stack Engineer · Mumbai, India</div>

        <h1 className="hero-name glitch" data-text="SAURABH PATHAK">
          SAURABH PATHAK
        </h1>

        <p className="hero-role">
          {roleText}
          <span className="hero-role-cursor" />
        </p>

        <p className="hero-desc">
          Crafting high-performance web experiences at the intersection of
          <strong style={{ color: 'var(--cyan)' }}> React</strong>,
          <strong style={{ color: 'var(--purple)' }}> TypeScript</strong>, and
          <strong style={{ color: 'var(--green)' }}> modern cloud</strong>.
          2+ years shipping production-grade products.
        </p>

        <div className="hero-btns">
          <a href="#projects" className="btn-primary"
            onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View Projects
          </a>
          <a href="#contact" className="btn-ghost"
            onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Hire Me
          </a>
        </div>

        {/* XP BAR */}
        <div className="hero-xp-bar" style={{ marginTop: '2.5rem' }}>
          <div className="hero-xp-label">
            <span>XP</span><span>LVL 3 · 7,300 / 10,000</span>
          </div>
          <div className="hero-xp-track">
            <div className="hero-xp-fill" />
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
