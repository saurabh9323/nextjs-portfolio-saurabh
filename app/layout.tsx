import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Saurabh Pathak — Full-Stack Engineer',
  description: 'Full-Stack Engineer specializing in React, Next.js, TypeScript, Node.js and cloud infrastructure.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
