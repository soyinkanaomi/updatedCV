
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

function ThemeIcon({ isDark }: { isDark: boolean }) {
  return isDark ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => !!el
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FCFAF5]/60 dark:bg-[#17130f]/70 backdrop-blur-md border-b-2 border-black/[0.04] dark:border-white/[0.06] transition-colors duration-300">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-7 lg:px-10">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e96512] font-serif text-xl text-white">
            N
          </span>
          <span className="font-serif text-[24px] font-semibold tracking-tight text-[#211812] dark:text-[#f5f0e8]">
            Soyinka<span className="text-[#e96512]">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-sm font-medium text-[#3a3a38] dark:text-[#c9c4b8] transition-colors hover:text-[#e96512]"
            >
              {link.label}
              {activeSection === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#e96512]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}

          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-[#211c17] border border-black/10 dark:border-white/10 text-[#211812] dark:text-[#f5f0e8] hover:-translate-y-0.5 transition-all duration-300"
          >
            <ThemeIcon isDark={isDark} />
          </button>

          <motion.a
            href="#contact"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.1, repeat: Infinity, repeatDelay: 2.2, ease: "easeInOut" }}
            className="ml-2 flex items-center gap-2 rounded-full bg-[#211812] dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-[#17130f] transition-colors duration-300 hover:bg-[#e96512] dark:hover:bg-[#e96512] dark:hover:text-white"
          >
            Hire me
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </motion.a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-[#211c17] border border-black/10 dark:border-white/10 text-[#211812] dark:text-[#f5f0e8]"
          >
            <ThemeIcon isDark={isDark} />
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#F2E0BD] dark:bg-[#2b2620] text-[#211812] dark:text-[#f5f0e8]"
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span className={`h-[2px] w-full rounded-full bg-current transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-full rounded-full bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`h-[2px] w-full rounded-full bg-current transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-[#FCFAF5] dark:bg-[#17130f] border-b-2 border-black/[0.04] dark:border-white/[0.06] px-6 pb-8 pt-2"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    activeSection === link.href
                      ? "bg-[#F2E0BD] dark:bg-[#2b2620] text-[#e96512]"
                      : "text-[#3a3a38] dark:text-[#c9c4b8]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-4">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-[#211812] dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-[#17130f]"
              >
                Hire me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;