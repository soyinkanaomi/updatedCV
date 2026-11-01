
import React from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "./Animation/Reveal";

const bullets = [
  "Clean, readable code",
  "Accessible interfaces",
  "Pixel-obsessed detail",
  "Fast to learn, eager to ship",
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-[#fcfaf5] dark:bg-[#17130f] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#e96512]" />
            <span className="text-[13px] font-semibold tracking-widest uppercase text-[#e96512]">
              About me
            </span>
          </div>

          <h2 className="font-display font-semibold text-4xl md:text-5xl leading-tight text-[#211812] dark:text-[#f5f0e8] mb-16 max-w-3xl">
            A secondary-school leaver who decided{" "}
            <span className="italic text-[#e96512]">code was the plan</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:items-stretch">
          <Reveal delay={0}>
            <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[420px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsS-sB_3hICansxUC5Ind4Xfjg1WBWo8gS-yml6qwww&s=10"
                alt="Naomi working"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col">
              <div className="space-y-5 text-[16px] leading-relaxed text-[#3a3a38] dark:text-[#c9c4b8] mb-10">
                <p>
                  Hi, I'm{" "}
                  <span className="font-semibold text-[#211812] dark:text-white">
                    Naomi
                  </span>{" "}
                  after finishing secondary school I made an unusual call:
                  instead of waiting around, I threw myself into a{" "}
                  <span className="font-serif text-[#e96512]">
                    six-month intensive at kode10x
                  </span>{" "}
                  and learned to build for the web from scratch.
                </p>
                <p>
                  What started as curiosity about how websites work became a real
                  craft. I love the moment a design clicks into place, when
                  layout, motion and typography come together into something that
                  feels effortless to use.
                </p>
                <p>
                  I bring the energy, discipline and fresh perspective of a junior
                  developer who is hungry to grow and I'm looking for my first
                  team to build with.
                </p>
              </div>

              <div className="border-t-2 border-black/10 dark:border-white/15 pt-10 mt-auto">
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {bullets.map((text, i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-[#211c17] border border-black/10 dark:border-white/10 rounded-xl p-5 flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e96512] mt-2 shrink-0" />
                      <p className="text-[14px] text-[#3a3a38] dark:text-[#c9c4b8] leading-snug">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    className="group flex items-center gap-3 rounded-full bg-[#e96512] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#d95609]"
                  >
                    Let's work together
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="#work"
                    className="rounded-full border border-[#e2d8cd] dark:border-white/15 bg-transparent px-7 py-4 text-sm font-semibold text-[#2c211b] dark:text-[#f5f0e8] transition-all duration-300 hover:border-[#e96512] hover:text-[#e96512]"
                  >
                    See projects
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;