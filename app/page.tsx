'use client';

import dynamic from 'next/dynamic';

// Dynamic imports with no SSR for Three.js dependent components
const Cursor       = dynamic(() => import('@/components/Cursor'),          { ssr: false });

import Navbar   from '@/components/Navbar';
import Hero     from '@/components/Hero';
import About    from '@/components/About';
import Journey  from '@/components/Journey';
import Skills   from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact  from '@/components/Contact';
import Footer   from '@/components/Footer';
import Impact   from '@/components/Impact';
import ScrollProgress from '@/components/ScrollProgress';
import Capabilities from '@/components/Capabilities';
import Ambient from '@/components/Ambient';
import RecruiterBrief from '@/components/RecruiterBrief';

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Ambient />
      <RecruiterBrief />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Impact />
        <Capabilities />
        <Journey />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
