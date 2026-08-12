'use client';

import { useEffect, useRef, useState } from 'react';

const metrics = [
  { value: '1M+', label: 'daily requests', tone: 'muted' },
  { value: '<100', label: 'after optimization', tone: 'accent' },
  { value: '99.99%', label: 'request reduction', tone: 'light' },
];

export default function Impact() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: .25 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" ref={ref} className={visible ? 'impact-visible' : ''}>
      <div className="section-wrap impact-wrap">
        <div className="impact-copy">
          <div className="section-label">Selected impact</div>
          <h2 className="section-title">Performance you can <span>see.</span></h2>
          <p>I don’t just ship interfaces. I find the expensive parts of a product, simplify the system, and turn engineering decisions into measurable business results.</p>
          <div className="impact-metrics">
            {metrics.map(metric => (
              <div key={metric.label} className={`impact-metric ${metric.tone}`}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="impact-visual" aria-label="Visualization showing API requests reduced from over one million to fewer than one hundred">
          <div className="visual-toolbar"><span /><span /><span /><em>request-optimizer.ts</em><b>LIVE</b></div>
          <div className="visual-stage">
            <div className="flow-source">
              <span>CLIENTS</span>
              <div className="node-cloud">
                {Array.from({ length: 20 }, (_, i) => <i key={i} style={{ '--i': i } as React.CSSProperties} />)}
              </div>
              <strong>1,000,000+</strong>
            </div>
            <div className="flow-line"><i /><i /><i /><i /><span>RTK QUERY CACHE</span></div>
            <div className="flow-target"><div className="server-core"><i /><i /><i /></div><span>API</span><strong>&lt;100</strong></div>
          </div>
          <div className="visual-chart">
            {[92, 78, 65, 46, 31, 20, 12, 7, 4, 2].map((height, i) => (
              <i key={i} style={{ '--height': `${height}%`, '--delay': `${i * 70}ms` } as React.CSSProperties} />
            ))}
            <span>Requests over time</span><b>−99.99%</b>
          </div>
        </div>
      </div>
    </section>
  );
}
