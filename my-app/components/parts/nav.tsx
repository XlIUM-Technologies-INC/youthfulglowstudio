"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname);
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
    { href: '/review', label: 'Reviews' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-xl shadow-2xl shadow-blue-100/50' 
        : 'bg-gradient-to-b from-white/95 via-white/90 to-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo with Glow Effect */}
          <Link href="/" className="flex items-center gap-3 group relative">
            <div className={`relative transition-all duration-500 ${
              scrolled ? 'w-14 h-14' : 'w-16 h-16'
            }`}>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#5A95CD] via-[#7AB8E8] to-[#4A85BD] rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-all duration-500 group-hover:blur-2xl"></div>
              
              {/* Logo container */}
              <div className="relative w-full h-full bg-gradient-to-br from-[#5A95CD] to-[#4A85BD] rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 flex items-center justify-center overflow-hidden group-hover:scale-105">
                <Sparkles className="w-8 h-8 text-white" strokeWidth={2.5} />
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
            
            <div className={`transition-all duration-500 ${scrolled ? 'scale-95' : 'scale-100'}`}>
              <h1 className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#5A95CD] via-[#6AA5DA] to-[#4A85BD] text-2xl tracking-tight">
                YOUTHFUL GLOW
              </h1>
              <div className="flex items-center gap-1.5 -mt-1">
                <div className="h-0.5 w-8 bg-gradient-to-r from-[#5A95CD] to-transparent rounded-full"></div>
                <p className="text-xs font-medium text-gray-500 tracking-wider">BEAUTY STUDIO</p>
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2.5 font-semibold transition-all duration-300 rounded-full group ${
                  isActive(link.href) 
                    ? 'text-white' 
                    : 'text-gray-700 hover:text-[#5A95CD]'
                }`}
              >
                {/* Active background */}
                {isActive(link.href) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5A95CD] to-[#4A85BD] rounded-full shadow-lg shadow-blue-300/50"></div>
                )}
                
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="relative z-10">{link.label}</span>
                
                {/* Animated underline for non-active items */}
                {!isActive(link.href) && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#5A95CD] to-[#4A85BD] group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link href="https://cal.com/youthfulglowstudiobookings?overlayCalendar=true" target="_blank" rel="noopener noreferrer">
              <button className="relative group overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5A95CD] via-[#6AA5DA] to-[#4A85BD] animate-gradient-x"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#4A85BD] to-[#3A75AD] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <span className="relative z-10 flex items-center gap-2 px-7 py-3 text-white font-bold tracking-wide">
                  <Sparkles className="w-4 h-4" />
                  Book Now
                </span>
                
                {/* Shadow */}
                <div className="absolute inset-0 rounded-full shadow-lg shadow-blue-400/50 group-hover:shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-300"></div>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative p-3 rounded-2xl text-[#5A95CD] hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 transition-all duration-300 group"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#5A95CD]/10 to-[#4A85BD]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {mobileMenuOpen ? <X className="w-6 h-6 relative z-10" /> : <Menu className="w-6 h-6 relative z-10" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out ${
        mobileMenuOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-gradient-to-b from-white via-blue-50/30 to-white backdrop-blur-xl border-t border-blue-100/50 px-4 py-6 space-y-3 shadow-2xl shadow-blue-100/50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block relative overflow-hidden rounded-2xl font-semibold transition-all duration-300 group ${
                isActive(link.href) 
                  ? 'text-white' 
                  : 'text-gray-700'
              }`}
            >
              {/* Active/Hover background */}
              <div className={`absolute inset-0 transition-all duration-300 ${
                isActive(link.href)
                  ? 'bg-gradient-to-r from-[#5A95CD] to-[#4A85BD] opacity-100'
                  : 'bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100'
              }`}></div>
              
              {/* Active indicator */}
              {isActive(link.href) && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-white rounded-r-full shadow-lg"></div>
              )}
              
              <span className="relative z-10 block px-6 py-4">{link.label}</span>
            </Link>
          ))}
          
          {/* Mobile CTA */}
          <div className="pt-4">
            <Link href="https://cal.com/youthfulglowstudiobookings?overlayCalendar=true" target="_blank" rel="noopener noreferrer">
              <button className="w-full relative group overflow-hidden rounded-2xl" onClick={() => setMobileMenuOpen(false)}>
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5A95CD] via-[#6AA5DA] to-[#4A85BD]"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#4A85BD] to-[#3A75AD] opacity-0 group-active:opacity-100 transition-opacity duration-200"></div>
                
                <span className="relative z-10 flex items-center justify-center gap-2 py-4 text-white font-bold tracking-wide">
                  <Sparkles className="w-5 h-5" />
                  Book Appointment
                </span>
                
                {/* Shadow */}
                <div className="absolute inset-0 rounded-2xl shadow-lg shadow-blue-400/50"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </nav>
  );
}