
import { useState } from "react";
import { Mail, MapPin, Briefcase, ArrowUpRight } from "lucide-react";
import Reveal from "./Animation/Reveal";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

interface InfoCard {
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  value: string;
}

const infoCards: InfoCard[] = [
  {
    icon: <Mail className="w-5 h-5 text-[#e96512]" />,
    iconBg: "#F6DCC8",
    label: "Email me",
    value: "soyinka.naomi00@gmail.com",
  },
  {
    icon: <MapPin className="w-5 h-5 text-[#3E6B4F]" />,
    iconBg: "#D9EAD9",
    label: "Based in",
    value: "Lagos, Nigeria",
  },
  {
    icon: <Briefcase className="w-5 h-5 text-[#8A6A4B]" />,
    iconBg: "#EAE0D0",
    label: "Availability",
    value: "Open to junior frontend roles & internships",
  },
];

const socials = [
  {
    icon: <GithubIcon className="w-4 h-4" />,
    label: "GitHub",
    href: "https://github.com/soyinkanaomi",
  },
  {
    icon: <LinkedinIcon className="w-4 h-4" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/naomi-soyinka-4bab44340",
  },
  // {
  //   icon: <Mail className="w-4 h-4" />,
  //   label: "Email",
  //   href: "mailto:soyinka.naomi00@gmail.com",
  // },
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrpglgre";
const MAX_MESSAGE_LENGTH = 500;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-[#F4F1E8] dark:bg-[#17130f] transition-colors duration-300 py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <Reveal>
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-[#1A1815] dark:text-[#f5f0e8] mb-6">
              Let&apos;s build something{" "}
              <span className="italic text-[#e96512]">together</span>
            </h2>

            <p className="text-[#5A574E] dark:text-[#a8a296] max-w-md mb-10">
              Got a project, an internship, or just want to say hi? My inbox is
              always open — I reply fast.
            </p>

            <div className="space-y-4 mb-8">
              {infoCards.map((card) =>
                card.label === "Email me" ? (
                  <a
                    key={card.label}
                    href={`mailto:${card.value}`}
                    className="flex items-center gap-4 bg-white dark:bg-[#211c17] border border-[#E8E2D2] dark:border-white/10 rounded-2xl px-5 py-4 transition-colors hover:border-[#e96512]"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: card.iconBg }}
                    >
                      
                      {card.icon}
                    </div>
                    <div>
                      <p className="text-xs text-[#8A8677] dark:text-[#9a9488] mb-0.5">{card.label}</p>
                      <p className="font-semibold text-[#1A1815] dark:text-[#f5f0e8]">{card.value}</p>
                    </div>
                  </a>
                ) : (
                  <div
                    key={card.label}
                    className="flex items-center gap-4 bg-white dark:bg-[#211c17] border border-[#E8E2D2] dark:border-white/10 rounded-2xl px-5 py-4"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: card.iconBg }}
                    >
                      {card.icon}
                    </div>
                    <div>
                      <p className="text-xs text-[#8A8677] dark:text-[#9a9488] mb-0.5">{card.label}</p>
                      <p className="font-semibold text-[#1A1815] dark:text-[#f5f0e8]">{card.value}</p>
                    </div>
                  </div>
                ),
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className=" active:scale-95 inline-flex items-center gap-2 border border-[#E8E2D2] dark:border-white/10 bg-white dark:bg-[#211c17] rounded-full px-4 py-2 text-sm font-medium text-[#1A1815] dark:text-[#f5f0e8] hover:border-[#e96512] hover:text-[#e96512] transition-colors"
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#1A1815] dark:text-[#f5f0e8] mb-2">
              Send a message
            </h3>
            <p className="text-[#5A574E] dark:text-[#a8a296] mb-8">
              Tell me a little about your project or opportunity.
            </p>

            <form
              onSubmit={handleSubmit}
              className="border-2 border-[#e96512] rounded-3xl p-6 sm:p-8"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1A1815] dark:text-[#f5f0e8] mb-2">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full border border-[#E8E2D2] dark:border-white/10 bg-white dark:bg-[#17130f] rounded-xl px-4 py-3 text-sm text-[#1A1815] dark:text-[#f5f0e8] placeholder:text-[#B5B0A0] focus:outline-none focus:border-[#e96512]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1A1815] dark:text-[#f5f0e8] mb-2">
                    Your email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full border border-[#E8E2D2] dark:border-white/10 bg-white dark:bg-[#17130f] rounded-xl px-4 py-3 text-sm text-[#1A1815] dark:text-[#f5f0e8] placeholder:text-[#B5B0A0] focus:outline-none focus:border-[#e96512]"
                  />
                </div>
              </div>

              <div className="mb-2">
                <label htmlFor="message" className="block text-sm font-medium text-[#1A1815] dark:text-[#f5f0e8] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  maxLength={MAX_MESSAGE_LENGTH}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Naomi, we'd love to talk about..."
                  className="w-full border border-[#E8E2D2] dark:border-white/10 bg-white dark:bg-[#17130f] rounded-xl px-4 py-3 text-sm text-[#1A1815] dark:text-[#f5f0e8] placeholder:text-[#B5B0A0] focus:outline-none focus:border-[#e96512] resize-none"
                />
              </div>
              <p className="text-right text-xs text-[#8A8677] dark:text-[#9a9488] mb-6">
                Max {MAX_MESSAGE_LENGTH} characters
              </p>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 bg-[#e96512] text-white font-medium py-4 rounded-full hover:bg-[#1A1815] dark:hover:bg-white dark:hover:text-[#17130f] transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send message"}
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {status === "sent" && (
                <p className="text-sm text-[#3E6B4F] dark:text-[#7bc796] mt-4 text-center">
                  Message sent — thanks! I'll reply soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 dark:text-red-400 mt-4 text-center">
                  Something went wrong — try again, or email me directly.
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}