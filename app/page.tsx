'use client';

import dynamic from 'next/dynamic';

// Dynamic imports with no SSR for Three.js dependent components
const Cursor       = dynamic(() => import('@/components/Cursor'),          { ssr: false });
const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'),   { ssr: false });
const AchievementToast = dynamic(() => import('@/components/AchievementToast'), { ssr: false });

import Navbar   from '@/components/Navbar';
import Hero     from '@/components/Hero';
import About    from '@/components/About';
import Journey  from '@/components/Journey';
import Skills   from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact  from '@/components/Contact';
import Footer   from '@/components/Footer';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Cursor />
      <AchievementToast />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
