
import { Briefcase, GraduationCap } from "lucide-react";
import Reveal from "./Animation/Reveal";

interface ExperienceItem {
  dateRange: string;
  org: string;
  title: string;
  description: string;
  points: string[];
}

interface EducationItem {
  badge: string;
  title?: string;
  description: string;
}

const experience: ExperienceItem[] = [
  {
    dateRange: "Jan — Jun 2025",
    org: "kode10x",
    title: "Frontend Development Trainee",
    description:
      "A 6-month intensive focused on frontend fundamentals — daily practice, code reviews, and guided projects covering the core of modern web development.",
    points: [
      "Worked through 2 UI exercises covering layout, state and interactivity",
      "Practiced pair-coding sessions with a cohort of fellow learners",
      "Currently building a multi-page pastry e-commerce site (SweetBites) as a personal practice project",
    ],
  },
  {
    dateRange: "2025 — 2026",
    org: "Self-directed",
    title: "Independent Practice",
    description:
      "Before and alongside kode10x, learned the fundamentals through online resources, cloning real interfaces and rebuilding them from scratch.",
    points: [
      "Currently recreating a landing page pixel-by-pixel to build fundamentals",
      "Learned responsive design, accessibility and semantic HTML",
      "Working on building a consistent, well-documented GitHub commit habit",
    ],
  },
];

const education: EducationItem[] = [
  {
    badge: "Completed 2024",
    title: "Secondary School Graduate",
    description:
      "Finished secondary school with a strong record, especially in Mathematics and English.",
  },
  {
    badge: "2025",
    title: "kode10x — Frontend Track",
    description:
      "Graduated a focused 6-month coding intensive covering modern web development and real project workflows.",
  },
  {
    badge: "Currently",
    description:
      "Open to junior frontend roles and internships where I can learn fast and contribute from day one.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="bg-[#F4F1E8] dark:bg-[#17130f] transition-colors duration-300 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-[#e96512]" />
            <span className="text-xs font-semibold tracking-widest text-[#e96512]">
              MY JOURNEY
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-[#1A1815] dark:text-[#f5f0e8] max-w-xl mb-6">
            From school leaver to{" "}
            <span className="italic text-[#e96512]">developer</span>
          </h2>

          <p className="text-[#5A574E] dark:text-[#a8a296] max-w-xl mb-16">
            The short, intense path that got me here — and the foundations
            underneath it.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience column */}
          <Reveal delay={0}>
            <div>
              <div className="flex items-center gap-2 mb-8">
                <Briefcase className="w-5 h-5 text-[#e96512]" />
                <h3 className="font-serif text-xl font-bold text-[#1A1815] dark:text-[#f5f0e8]">
                  Experience
                </h3>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#DCD6C6] dark:bg-white/15" />
                <div className="space-y-8">
                  {experience.map((item) => (
                    <div key={item.title} className="relative">
                      <span className="absolute -left-8 top-2 w-3.5 h-3.5 rounded-full bg-white dark:bg-[#17130f] border-2 border-[#e96512]" />
                      <div className="bg-white dark:bg-[#211c17] rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="bg-[#F6DCC8] dark:bg-[#3a2e1a] text-[#e96512] text-xs font-medium px-3 py-1 rounded-full">
                            {item.dateRange}
                          </span>
                          <span className="text-xs text-[#8A8677] dark:text-[#9a9488]">
                            {item.org}
                          </span>
                        </div>
                        <h4 className="font-semibold text-[#1A1815] dark:text-[#f5f0e8] mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-[#5A574E] dark:text-[#a8a296] mb-4">
                          {item.description}
                        </p>
                        <ul className="space-y-2">
                          {item.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2 text-sm text-[#5A574E] dark:text-[#a8a296]"
                            >
                              <span className="text-[#e96512] mt-0.5">›</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Education column */}
          <Reveal delay={0.15}>
            <div>
              <div className="flex items-center gap-2 mb-8">
                <GraduationCap className="w-5 h-5 text-[#e96512]" />
                <h3 className="font-serif text-xl font-bold text-[#1A1815] dark:text-[#f5f0e8]">
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                {education.map((item, i) => (
                  <div key={i} className="bg-[#1A1815] rounded-2xl p-6 text-white">
                    <span className="inline-block bg-[#4F8F63] text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
                      {item.badge}
                    </span>
                    {item.title && <h4 className="font-semibold mb-2">{item.title}</h4>}
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}