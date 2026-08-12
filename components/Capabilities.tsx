'use client';

import { useEffect, useRef, useState } from 'react';

const capabilities = [
  {
    number: '01',
    title: 'Product interfaces',
    description: 'Accessible, responsive interfaces with considered motion, strong design systems, and maintainable component architecture.',
    tools: ['React', 'Next.js', 'TypeScript', 'Motion'],
    visual: 'interface',
  },
  {
    number: '02',
    title: 'Complex workflows',
    description: 'Metadata-driven forms, role-based experiences, dashboards, and product flows designed to make complexity feel simple.',
    tools: ['RJSF', 'Redux Toolkit', 'RTK Query', 'Plasmic'],
    visual: 'workflow',
  },
  {
    number: '03',
    title: 'Scalable systems',
    description: 'Reliable APIs, caching strategies, service integrations, and cloud-ready architecture built around measurable performance.',
    tools: ['Node.js', 'FastAPI', 'MongoDB', 'AWS'],
    visual: 'system',
  },
];

export default function Capabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: .18 });
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="capabilities" ref={sectionRef} className={visible ? 'capabilities-visible' : ''}>
      <div className="section-wrap">
        <div className="capabilities-heading">
          <div>
            <div className="section-label">What I bring</div>
            <h2 className="section-title">From first idea to<br /><span>production reality.</span></h2>
          </div>
          <p>I work across the stack, but always start with the same question: what will make this product clearer, faster, and more valuable?</p>
        </div>

        <div className="capabilities-layout">
          <div className="capability-list">
            {capabilities.map((item, index) => (
              <button key={item.number} className={active === index ? 'capability-active' : ''} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)}>
                <span>{item.number}</span><strong>{item.title}</strong><i>↗</i>
              </button>
            ))}
          </div>

          <div className="capability-detail">
            <div className={`capability-art art-${capabilities[active].visual}`} aria-hidden="true">
              <div className="art-window">
                <div className="art-window-bar"><i /><i /><i /></div>
                <div className="art-content"><span /><span /><span /><span /><span /></div>
              </div>
              <div className="art-orbit"><i /><i /><i /></div>
              <div className="art-code">{active === 0 ? '<Experience />' : active === 1 ? 'flow.execute()' : 'cache.optimize()'}</div>
            </div>
            <div className="capability-detail-copy" key={capabilities[active].number}>
              <span>Capability / {capabilities[active].number}</span>
              <h3>{capabilities[active].title}</h3>
              <p>{capabilities[active].description}</p>
              <div>{capabilities[active].tools.map(tool => <em key={tool}>{tool}</em>)}</div>
            </div>
          </div>
        </div>

        <div className="process-line" aria-label="Working process">
          {['Discover', 'Design', 'Engineer', 'Optimize', 'Ship'].map((step, index) => (
            <div key={step}><i>{String(index + 1).padStart(2, '0')}</i><span>{step}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
