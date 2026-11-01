
import { ArrowUp } from "lucide-react";
import Reveal from "./Animation/Reveal";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: <GithubIcon className="w-4 h-4" />,
    href: "https://github.com/soyinkanaomi",
    label: "GitHub",
  },
  {
    icon: <LinkedinIcon className="w-4 h-4" />,
    href: "https://www.linkedin.com/in/naomi-soyinka-4bab44340",
    label: "LinkedIn",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1815] text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-10 border-b border-white/10">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#e96512] flex items-center justify-center font-serif font-bold text-sm">
                  N
                </span>
                <span className="font-serif font-bold text-lg">Soyinka.</span>
              </div>
              <p className="text-sm text-gray-400">
                Frontend developer building clean, responsive interfaces
                currently open to junior roles and internships.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold tracking-widest text-[#e96512] mb-4">
                EXPLORE
              </h4>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[#e96512] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-xs font-semibold tracking-widest text-[#e96512] mb-4">
                CONNECT
              </h4>
              <div className="flex flex-col gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#e96512] transition-colors active:scale-95"
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-xs text-gray-500">
            © {year} Naomi Soyinka. All rights reserved.
          </p>
          <a
            href="#top"
            aria-label="Back to top"
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#e96512] hover:border-[#e96512] transition-colors active:scale-95"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}