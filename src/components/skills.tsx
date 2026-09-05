
import { Code2, Wrench, Zap, Check } from "lucide-react";
import Reveal from "./Animation/Reveal";

interface SkillCardProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  skills: string[];
  dark?: boolean;
  checkColor: string;
}

function SkillCard({ icon, iconBg, title, skills, dark, checkColor }: SkillCardProps) {
  return (
    <div
      className={`rounded-2xl p-8 ${
        dark
          ? "bg-[#1A1815] text-white"
          : "bg-white dark:bg-[#211c17] text-[#1A1815] dark:text-[#f5f0e8]"
      }`}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-5">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-3">
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: checkColor }}
            >
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </span>
            <span className={dark ? "text-gray-200" : "text-[#4A473F] dark:text-[#c9c4b8]"}>
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const frontendSkills = ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS", "TypeScript"];
const toolsSkills = ["Git", "GitHub", "Figma", "VS Code", "Responsive Design", "Accessibility"];
const learningSkills = ["Next.js", "Testing with Vitest", "Animation & Motion", "REST APIs"];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#F4F1E8] dark:bg-[#17130f] transition-colors duration-300 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-[#e96512]" />
            <span className="text-xs font-semibold tracking-widest text-[#e96512]">
              SKILLS
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-[#1A1815] dark:text-[#f5f0e8] max-w-2xl mb-6">
            The toolbox I built in{" "}
            <span className="italic text-[#e96512]">six months</span>
          </h2>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <p className="text-[#5A574E] dark:text-[#a8a296] max-w-md">
              Everything below is stuff I&apos;ve actually shipped with — learned
              through building, not just watching tutorials.
            </p>
            <p className="text-sm text-[#1A1815] dark:text-[#f5f0e8]">
              <span className="font-semibold">One rule:</span> if I list it,
              I&apos;ve built something real with it.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          <Reveal delay={0}>
            <SkillCard
              icon={<Code2 className="w-6 h-6 text-[#e96512]" />}
              iconBg="#F6DCC8"
              title="Frontend"
              skills={frontendSkills}
              checkColor="#e96512"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <SkillCard
              icon={<Wrench className="w-6 h-6 text-white" />}
              iconBg="#3E6B4F"
              title="Tools & Workflow"
              skills={toolsSkills}
              dark
              checkColor="#4F8F63"
            />
          </Reveal>
          <Reveal delay={0.3}>
            <SkillCard
              icon={<Zap className="w-6 h-6 text-[#e96512]" />}
              iconBg="#F6DCC8"
              title="Currently Learning"
              skills={learningSkills}
              checkColor="#e96512"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}