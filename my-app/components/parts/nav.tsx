"use client"
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent ${
      scrolled ? 'backdrop-blur-md bg-white/90 shadow-md py-2' : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className={`transition-all duration-500 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
          <h1 className="font-bold text-[#5A95CD]">
            YOUTHFUL GLOW
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className={`hidden md:flex items-center gap-8 transition-all duration-500 ${
          scrolled ? 'text-sm' : 'text-base'
        }`}>
          <Link href="/" className={`relative font-medium pb-1 transition-colors ${
            isActive('/') 
              ? 'text-[#5A95CD] border-b-2 border-[#5A95CD]' 
              : 'text-gray-700 hover:text-[#5A95CD] hover:border-b-2 hover:border-[#5A95CD]'
          }`}>
            Home
          </Link>
          <Link href="/about" className={`relative font-medium pb-1 transition-colors ${
            isActive('/about') 
              ? 'text-[#5A95CD] border-b-2 border-[#5A95CD]' 
              : 'text-gray-700 hover:text-[#5A95CD] hover:border-b-2 hover:border-[#5A95CD]'
          }`}>
            About
          </Link>
          <Link href="/services" className={`relative font-medium pb-1 transition-colors ${
            isActive('/services') 
              ? 'text-[#5A95CD] border-b-2 border-[#5A95CD]' 
              : 'text-gray-700 hover:text-[#5A95CD] hover:border-b-2 hover:border-[#5A95CD]'
          }`}>
            Services
          </Link>
          <Link href="/contact" className={`relative font-medium pb-1 transition-colors ${
            isActive('/contact') 
              ? 'text-[#5A95CD] border-b-2 border-[#5A95CD]' 
              : 'text-gray-700 hover:text-[#5A95CD] hover:border-b-2 hover:border-[#5A95CD]'
          }`}>
            Contact
          </Link>
          <Link href="/review" className={`relative font-medium pb-1 transition-colors ${
            isActive('/review') 
              ? 'text-[#5A95CD] border-b-2 border-[#5A95CD]' 
              : 'text-gray-700 hover:text-[#5A95CD] hover:border-b-2 hover:border-[#5A95CD]'
          }`}>
            Clients Review
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#5A95CD] p-2 hover:bg-blue-50 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white border-t border-gray-200 px-6 py-4 space-y-3">
          <Link href="/" className={`block font-medium py-2 px-3 rounded-lg transition-colors ${
            isActive('/') 
              ? 'text-[#5A95CD] bg-blue-50 border-l-4 border-[#5A95CD]' 
              : 'text-gray-700 hover:text-[#5A95CD] hover:bg-blue-50'
          }`}>
            Home
          </Link>
          <Link href="/about" className={`block font-medium py-2 px-3 rounded-lg transition-colors ${
            isActive('/about') 
              ? 'text-[#5A95CD] bg-blue-50 border-l-4 border-[#5A95CD]' 
              : 'text-gray-700 hover:text-[#5A95CD] hover:bg-blue-50'
          }`}>
            About
          </Link>
          <Link href="/services" className={`block font-medium py-2 px-3 rounded-lg transition-colors ${
            isActive('/services') 
              ? 'text-[#5A95CD] bg-blue-50 border-l-4 border-[#5A95CD]' 
              : 'text-gray-700 hover:text-[#5A95CD] hover:bg-blue-50'
          }`}>
            Services
          </Link>
          <Link href="/contact" className={`block font-medium py-2 px-3 rounded-lg transition-colors ${
            isActive('/contact') 
              ? 'text-[#5A95CD] bg-blue-50 border-l-4 border-[#5A95CD]' 
              : 'text-gray-700 hover:text-[#5A95CD] hover:bg-blue-50'
          }`}>
            Contact
          </Link>
          <Link href="/review" className={`block font-medium py-2 px-3 rounded-lg transition-colors ${
            isActive('/review') 
              ? 'text-[#5A95CD] bg-blue-50 border-l-4 border-[#5A95CD]' 
              : 'text-gray-700 hover:text-[#5A95CD] hover:bg-blue-50'
          }`}>
            Clients Review
          </Link>
        </div>
      </div>
    </nav>
  );
}