"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent mt-2 ${
      scrolled ? 'backdrop-blur-md bg-white/90 shadow-md py-2' : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className={`transition-all duration-500 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
          <h1 className="font-bold text-blue-600">
            YOUTHFUL GLOW STUDIO
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className={`hidden md:flex items-center gap-8 transition-all duration-500 ${
          scrolled ? 'text-sm' : 'text-base'
        }`}>
          <Link href="/" className="relative text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
            Home
          </Link>
          <Link href="/about" className="relative text-gray-700 hover:text-blue-600 transition-colors pb-1 hover:border-b-2 hover:border-blue-600">
            About
          </Link>
          <Link href="/services" className="relative text-gray-700 hover:text-blue-600 transition-colors pb-1 hover:border-b-2 hover:border-blue-600">
            Services
          </Link>
          <Link href="/contact" className="relative text-gray-700 hover:text-blue-600 transition-colors pb-1 hover:border-b-2 hover:border-blue-600">
            Contact
          </Link>
          <Link href="/review" className="relative text-gray-700 hover:text-blue-600 transition-colors pb-1 hover:border-b-2 hover:border-blue-600">
            Clients Review
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white border-t border-gray-200 px-6 py-4 space-y-3">
          <Link href="/" className="block text-blue-600 font-medium py-2 px-3 bg-blue-50 rounded-lg">
            Home
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-blue-50 rounded-lg transition-colors">
            About
          </Link>
          <Link href="/services" className="block text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-blue-50 rounded-lg transition-colors">
            Services
          </Link>
          <Link href="/#contact" className="block text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-blue-50 rounded-lg transition-colors">
            Contact
          </Link>
          <Link href="/#reviews" className="block text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-blue-50 rounded-lg transition-colors">
            Clients Review
          </Link>
        </div>
      </div>
    </nav>
  );
}