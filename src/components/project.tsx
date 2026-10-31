import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Animation/Reveal";
import weddingImage from "../assets/wedding2.jpg";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

type Project = {
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image?: string;
  live?: string;
  repo?: string;
  status?: string;
};

const projects: Project[] = [
  {
    title: "Simi & Femi Wedding Website",
    category: "Web App",
    year: "2026",
    description:
      "A responsive wedding website with a live countdown, an RSVP form that emails responses, a photo gallery with a lightbox, and scroll animations.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Motion", "Vite"],
    image: weddingImage,
    live: "https://the-dapsons-wedding.vercel.app/",
    repo: "https://github.com/soyinkanaomi/theDapsons-iv",
  },
  {
    title: "SweetBites Pastry Store",
    category: "E-commerce",
    year: "2026",
    status: "In progress",
    description:
      "A pastry storefront with a menu, customer reviews, a contact form and a checkout flow.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
];

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

export default function Work() {
  const [[index, direction], setPage] = useState<[number, number]>([0, 0]);
  const project = projects[index];
  const many = projects.length > 1;

  const paginate = (dir: number) =>
    setPage(([i]) => [(i + dir + projects.length) % projects.length, dir]);

  const goTo = (target: number) =>
    setPage(([i]) => [target, target > i ? 1 : -1]);

  return (
    <section
      id="work"
      className="bg-[#F4F1E8] dark:bg-[#17130f] transition-colors duration-300 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-[#e96512]" />
            <span className="text-xs font-semibold tracking-widest text-[#e96512]">
              SELECTED WORK
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-[#1A1815] dark:text-[#f5f0e8] max-w-2xl mb-6">
            Things I&apos;ve{" "}
            <span className="italic text-[#e96512]">built</span>
          </h2>

          <p className="text-[#5A574E] dark:text-[#a8a296] max-w-xl mb-14">
            A few of my projects, from first idea to deployed site. Swipe or use
            the arrows to browse.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.article
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag={many ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) paginate(1);
                else if (info.offset.x > 80) paginate(-1);
              }}
              className="grid overflow-hidden rounded-3xl border border-[#E8E2D2] bg-white shadow-sm dark:shadow-2xl dark:shadow-black/40 md:grid-cols-2"
            >
              <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[340px]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    draggable={false}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#F6DCC8] to-[#e96512]/40">
                    <span className="font-serif text-7xl italic text-[#e96512]">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#1A1815]">
                  {project.status ?? project.category}
                </span>
              </div>

              <div className="flex flex-col justify-center p-6 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#e96512]">
                  {project.category} · {project.year}
                </p>

                <h3 className="mt-3 font-serif text-2xl md:text-3xl font-bold text-[#1A1815]">
                  {project.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-[#5A574E]">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-[#F6DCC8] px-3 py-1 text-xs font-medium text-[#8a3d08]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#e96512] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1A1815]"
                    >
                      View live site ↗
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#1A1815]/20 px-6 py-3 text-sm font-medium text-[#1A1815] transition-colors hover:border-[#e96512] hover:text-[#e96512]"
                    >
                      <GithubIcon className="h-4 w-4" />
                      View code
                    </a>
                  )}
                  {!project.live && !project.repo && (
                    <p className="text-sm italic text-[#5A574E]">
                      Link coming soon
                    </p>
                  )}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          {many && (
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium tabular-nums text-[#5A574E] dark:text-[#a8a296]">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </p>
                <div className="flex gap-2">
                  {projects.map((p, i) => (
                    <button
                      key={p.title}
                      onClick={() => goTo(i)}
                      aria-label={`Show ${p.title}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === index
                          ? "w-8 bg-[#e96512]"
                          : "w-2 bg-[#1A1815]/20 hover:bg-[#1A1815]/40 dark:bg-white/20 dark:hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => paginate(-1)}
                  aria-label="Previous project"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8E2D2] text-lg text-[#1A1815] transition-colors hover:border-[#e96512] hover:bg-[#e96512] hover:text-white dark:border-white/15 dark:text-[#f5f0e8]"
                >
                  ←
                </button>
                <button
                  onClick={() => paginate(1)}
                  aria-label="Next project"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8E2D2] text-lg text-[#1A1815] transition-colors hover:border-[#e96512] hover:bg-[#e96512] hover:text-white dark:border-white/15 dark:text-[#f5f0e8]"
                >
                  →
                </button>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
