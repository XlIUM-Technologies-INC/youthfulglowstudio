"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { SERVICES } from "@/lib/services";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const isDarkHeroPage = false;
  //  pathname.startsWith("/services/") || pathname === "/contact";

  // Subtle parallax/scaling for the navbar width
  const navWidth = useTransform(scrollY, [0, 100], ["100%", "85%"]);
  const navPadding = useTransform(scrollY, [0, 100], ["0rem", "0.75rem"]);
  const navRadius = useTransform(scrollY, [0, 100], ["0px", "50px"]);
  const navTop = useTransform(scrollY, [0, 100], ["0rem", "1.5rem"]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/review", label: "Reviews" },
  ];

  return (
    <motion.nav
      style={{
        width: isMobile ? "100%" : navWidth,
        top: isMobile ? 0 : navTop,
        borderRadius: isMobile ? 0 : navRadius,
        margin: "0 auto",
        left: 0,
        right: 0,
      }}
      className={`fixed z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "bg-[#F5F0E9]/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(17,34,80,0.15)] border border-[#E0C58F]/30"
          : isDarkHeroPage
            ? "bg-[#112250]/10 backdrop-blur-md"
            : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-700 ${
            scrolled ? "h-20" : "h-28"
          }`}
        >
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-4 group relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className={`relative flex items-center justify-center transition-all duration-700 ${
                scrolled ? "w-12 h-12" : "w-16 h-16"
              }`}
            >
              <div className="relative w-full h-full bg-white rounded-2xl shadow-xl border border-[#E0C58F]/20 group-hover:border-[#E0C58F]/50 transition-all duration-500 overflow-hidden">
                <Image
                  src="/favicon.webp"
                  alt="Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#E0C58F]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={`transition-all duration-700 ${
                scrolled ? "scale-90 origin-left" : "scale-100"
              }`}
            >
              <h1
                className={`font-black text-transparent bg-clip-text bg-gradient-to-r text-xl md:text-2xl tracking-[0.1em] uppercase ${
                  !scrolled && isDarkHeroPage
                    ? "from-white via-[#E0C58F] to-white"
                    : "from-[#112250] via-[#3C507D] to-[#112250]"
                }`}
              >
                Youthful Glow
              </h1>
              <p className="text-[10px] font-black text-[#E0C58F] tracking-[0.3em] uppercase -mt-0.5">
                Beauty Studio
              </p>
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1.5 bg-white/30 backdrop-blur-md rounded-full p-1.5 border border-[#E0C58F]/10 shadow-sm">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
              >
                {link.label === "Services" ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      className={`relative px-5 py-2.5 font-bold transition-all duration-500 rounded-full group outline-none flex items-center gap-2 ${
                        isActive(link.href) || pathname.startsWith("/services/")
                          ? "text-[#F5F0E9]"
                          : !scrolled && isDarkHeroPage
                            ? "text-white hover:text-[#E0C58F]"
                            : "text-[#112250] hover:text-[#3C507D]"
                      }`}
                    >
                      {(isActive(link.href) ||
                        pathname.startsWith("/services/")) && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-gradient-to-r from-[#112250] to-[#3C507D] rounded-full shadow-lg"
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                      <ChevronDown className="relative z-10 w-4 h-4 transition-transform duration-500 group-data-[state=open]:rotate-180" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-64 bg-[#F5F0E9] border-[#E0C58F]/20 p-2 shadow-2xl rounded-2xl backdrop-blur-3xl">
                      <DropdownMenuItem
                        asChild
                        className="focus:bg-[#112250] focus:text-[#F5F0E9] rounded-xl cursor-pointer mb-1"
                      >
                        <Link
                          href="/services"
                          className="w-full px-4 py-3 font-black text-[#112250] hover:text-[#112250] transition-colors uppercase tracking-[0.2em] text-xs"
                        >
                          All Services
                        </Link>
                      </DropdownMenuItem>
                      <div className="h-px bg-[#E0C58F]/10 my-2 mx-2" />
                      {SERVICES.map((service) => (
                        <DropdownMenuItem
                          key={service.slug}
                          asChild
                          className="focus:bg-[#112250] focus:text-[#F5F0E9] rounded-xl cursor-pointer"
                        >
                          <Link
                            href={`/services/${service.slug}`}
                            className="w-full px-4 py-3 font-bold transition-colors"
                          >
                            {service.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={link.href}
                    className={`relative px-6 py-2.5 font-bold transition-all duration-500 rounded-full group overflow-hidden ${
                      isActive(link.href)
                        ? "text-[#F5F0E9]"
                        : !scrolled && isDarkHeroPage
                          ? "text-white hover:text-[#E0C58F]"
                          : "text-[#112250] hover:text-[#3C507D]"
                    }`}
                  >
                    {isActive(link.href) && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gradient-to-r from-[#112250] to-[#3C507D] rounded-full shadow-lg"
                      />
                    )}

                    <span className="relative z-10">{link.label}</span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="hidden lg:block"
            >
              <Link href="/services">
                <button className="relative px-8 py-3 rounded-full font-black text-white uppercase tracking-widest text-xs group overflow-hidden border border-[#E0C58F]/30 cursor-pointer ">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#112250] to-[#3C507D] transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#E0C58F] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 group-hover:text-[#112250] transition-colors duration-500">
                    Book Now
                  </span>
                </button>
              </Link>
            </motion.div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-3 rounded-2xl transition-all duration-500 ${
                !scrolled && isDarkHeroPage
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-[#112250]/5 text-[#112250] hover:bg-[#112250] hover:text-white"
              }`}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#F5F0E9]/95 backdrop-blur-3xl border-t border-[#E0C58F]/20 overflow-y-auto max-h-[calc(100vh-6rem)]"
          >
            <div className="px-6 py-12 space-y-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  {link.label === "Services" ? (
                    <div className="space-y-4">
                      <button
                        onClick={() =>
                          setMobileServicesOpen(!mobileServicesOpen)
                        }
                        className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/50 border border-[#E0C58F]/10 font-bold text-[#112250]"
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-500 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-2 pl-6 overflow-hidden"
                          >
                            <Link
                              href="/services"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block p-3 text-sm font-black text-[#112250] hover:text-[#112250] transition-colors uppercase tracking-[0.2em] border-b border-[#E0C58F]/20 pb-3 mb-2"
                            >
                              All Services
                            </Link>
                            {SERVICES.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block p-3 text-sm font-bold text-[#3C507D] hover:text-[#112250] transition-colors"
                              >
                                {s.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block p-4 rounded-2xl font-bold transition-all duration-500 ${
                        isActive(link.href)
                          ? "bg-[#112250] text-[#F5F0E9] shadow-xl"
                          : "bg-white/50 text-[#112250] border border-[#E0C58F]/10"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-6"
              >
                <Link href="/services" className="block">
                  <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#112250] to-[#3C507D] text-white font-black uppercase tracking-[0.2em] shadow-2xl shadow-[#112250]/20 cusror-pointer">
                    Book Now
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
