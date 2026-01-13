import React from 'react';
import Nav from '@/components/parts/nav';
import Footer from '@/components/parts/footer';

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * RootLayout: Wraps page content with Nav and Footer
 * Use this in pages to avoid repeating Nav/Footer imports and structure
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F5F0E9] flex flex-col">
      <Nav />
      {/* Add pt-20 to account for fixed nav height */}
      <main className="grow pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
}
