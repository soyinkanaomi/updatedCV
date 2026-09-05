// import { ArrowUpRight } from "lucide-react";

// function GithubIcon({ className }: { className?: string }) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className={className}
//       aria-hidden="true"
//     >
//       <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
//     </svg>
//   );
// }

// interface Project {
//   category: string;
//   year: string;
//   title: string;
//   description: string;
//   tech: string[];
//   gradient: string;
//   link: string;
//   repo: string;
// }

// const projects: Project[] = [
//   {
//     category: "E-commerce",
//     year: "2026",
//     title: "Storefront concept",
//     description:
//       "A product-grid storefront with cart flow, filtering, and a checkout stepper built for mobile-first browsing.",
//     tech: ["React", "TypeScript", "Tailwind CSS"],
//     gradient: "linear-gradient(135deg, #B97457 0%, #E8C7B0 100%)",
//     link: "#",
//     repo: "#",
//   },
//   {
//     category: "Productivity",
//     year: "2026",
//     title: "Kanban task board",
//     description:
//       "A drag-and-drop task board with columns, tags, and per-card progress tracking for small teams.",
//     tech: ["React", "TypeScript", "REST API"],
//     gradient: "linear-gradient(135deg, #A08A3C 0%, #D9C77A 100%)",
//     link: "#",
//     repo: "#",
//   },
// ];

// function WorkCard({ project }: { project: Project }) {
//   return (
//     <div className="rounded-2xl overflow-hidden bg-white ">
//       <div
//         className="relative h-64 flex items-end p-5"
//         style={{ background: project.gradient }}
//       >
//         <div className="absolute top-5 left-5 flex gap-2">
//           <span className="bg-white/90 text-[#1A1815] text-xs font-medium px-3 py-1 rounded-full">
//             {project.category}
//           </span>
//           <span className="bg-[#1A1815]/90 text-white text-xs font-medium px-3 py-1 rounded-full">
//             {project.year}
//           </span>
//         </div>
//         <div className="w-full h-36 rounded-lg bg-white/15 border border-white/30 backdrop-blur-sm" />
//       </div>

//       <div className="p-6">
//         <h3 className="text-lg font-semibold text-[#1A1815] mb-2">
//           {project.title}
//         </h3>
//         <p className="text-sm text-[#5A574E] mb-4">{project.description}</p>
//         <div className="flex flex-wrap gap-2 mb-5">
//           {project.tech.map((t) => (
//             <span
//               key={t}
//               className="text-xs px-2.5 py-1 rounded-full bg-[#DAEFD6] text-[#5d9462]"
//             >
//               {t}
//             </span>
//           ))}
//         </div>
//         <div className="flex items-center gap-4">
//           <a
//             href={project.link}
//             className="inline-flex items-center gap-1 text-sm font-medium text-[#C1541F] hover:underline"
//           >
//             View project
//             <ArrowUpRight className="w-4 h-4" />
//           </a>
//           <a
//             href={project.repo}
//             aria-label={`View ${project.title} repository on GitHub`}
//             className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#F4F1E8] text-[#1A1815] hover:bg-[#1A1815] hover:text-white transition-colors"
//           >
//             <GithubIcon className="w-4 h-4" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Work() {
//   return (
//     <section id="work" className="bg-[#F4F1E8] py-24 px-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex items-center gap-2 mb-5">
//           <span className="w-6 h-px bg-[#C1541F]" />
//           <span className="text-xs font-semibold tracking-widest text-[#C1541F]">
//             SELECTED WORK
//           </span>
//         </div>

//         <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-[#1A1815] max-w-2xl mb-6">
//           Things I&apos;ve built{" "}
//           <span className="italic text-[#C1541F]">& proudly shipped</span>
//         </h2>

//         <p className="text-[#5A574E] max-w-xl mb-14">
//           A handful of my favourite builds from the kode10x journey — each
//           one an idea turned into a working, responsive interface.
//         </p>

//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project) => (
//             <WorkCard key={project.title} project={project} />
//           ))}
//         </div>

//         <div className="flex justify-center mt-14">
//           <a
//             href="#contact"
//             className="inline-flex items-center gap-2 bg-[#1A1815] text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-[#C1541F] transition-colors"
//           >
//             I&apos;d love to hear from you
//             <ArrowUpRight className="w-4 h-4" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


// Work.tsx
// Work.tsx
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Animation/Reveal";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

export default function Work() {
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
              WORK IN PROGRESS
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-[#1A1815] dark:text-[#f5f0e8] max-w-2xl mb-6">
            Building my{" "}
            <span className="italic text-[#e96512]">first shipped projects</span>
          </h2>

          <p className="text-[#5A574E] dark:text-[#a8a296] max-w-xl mb-14">
            I'm currently deep in my first real-world builds — nothing's live yet,
            but it's coming. In the meantime you can follow the code as it
            happens.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="bg-white dark:bg-[#211c17] border border-[#E8E2D2] dark:border-white/10 rounded-3xl py-16 px-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#F6DCC8] dark:bg-[#3a2e1a] flex items-center justify-center mb-6">
              <span className="text-2xl">🚧</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1A1815] dark:text-[#f5f0e8] mb-3">
              More coming soon
            </h3>
            <p className="text-[#5A574E] dark:text-[#a8a296] max-w-md mb-8">
              My first shippable projects are in progress — check back here soon,
              or take a look at what I'm working on right now.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#1A1815] dark:bg-white text-white dark:text-[#17130f] text-sm font-medium px-6 py-3 rounded-full hover:bg-[#e96512] dark:hover:bg-[#e96512] dark:hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              View my GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}