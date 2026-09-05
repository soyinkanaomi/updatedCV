
import { ArrowRight, Download } from "lucide-react";
import image from "../assets/image.png";
import Reveal from "./Animation/Reveal";

const RESUME_PATH = "/My_Professional_CV.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#fcfaf5] dark:bg-[#17130f] transition-colors duration-300"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 top-0 h-[700px] w-[500px] rounded-full bg-[#F3D9A8] dark:bg-[#3a2e1a] opacity-60 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[1400px] items-center px-6 pb-12 pt-32 lg:px-10 lg:pt-24">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.82fr]">
          {/* LEFT SIDE */}
          <Reveal>
            <div className="mx-auto max-w-[700px] pt-10 text-center lg:mx-0 lg:text-left">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#e6dcd0] dark:border-white/10 bg-[#f5f0e8] dark:bg-[#211c17] px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#61a35c] animate-pulse" />
                <span className="text-[12px] font-medium tracking-[0.04em] text-[#342a23] dark:text-[#e5ded2]">
                  JUNIOR FRONTEND DEVELOPER
                </span>
              </div>

              <h1 className="font-serif text-[56px] font-semibold leading-[0.95] tracking-[-0.03em] text-[#1d1510] dark:text-[#f5f0e8] sm:text-[72px] lg:text-[92px]">
                Naomi
                <br />
                Soyinka
              </h1>

              <p className="mt-7 font-serif text-[22px] italic leading-tight text-[#dc5b0c] sm:text-[27px] lg:text-[31px]">
                from 0 to developer in six months.
              </p>

              <p className="mx-auto mt-6 max-w-[650px] text-[16px] leading-[1.8] tracking-[0.01em] text-[#51463e] dark:text-[#a8a296] sm:text-[17px] lg:mx-0">
                I'm a junior frontend developer who traded my secondary-school
                mornings for a six-month coding sprint at{" "}
                <span className="font-semibold text-[#dc5b0c]">kode10x</span> —
                now I build{" "}
                <span className="font-semibold text-[#dc5b0c]">
                  clean, fast, human-feeling
                </span>{" "}
                websites that just work.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <a
                  href="#work"
                  className="group flex items-center gap-3 rounded-full bg-[#e96512] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#d95609]"
                >
                  View my work
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href={RESUME_PATH}
                  download="Naomi_Soyinka_CV.pdf"
                  className="group flex items-center gap-2 rounded-full border border-[#e2d8cd] dark:border-white/15 bg-transparent px-7 py-4 text-sm font-semibold text-[#2c211b] dark:text-[#f5f0e8] transition-all duration-300 hover:border-[#e96512] hover:text-[#e96512]"
                >
                  Resume
                  <Download size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* RIGHT SIDE */}
          <Reveal delay={0.15}>
            <div className="mx-auto flex justify-center pt-6 lg:mx-0 lg:justify-end lg:pt-0">
              <div className="relative w-[240px] h-[300px] sm:w-[300px] sm:h-[360px] lg:w-[360px] lg:h-[420px]">
                <div className="w-full h-full rounded-[2.5rem] border-2 border-[#E2672E]/40 p-3 bg-[#F0E6D2] dark:bg-[#2b2620]">
                  <div className="w-full h-full rounded-[2rem] bg-[#F3D9A8] overflow-hidden">
                    <img
                      src={image}
                      alt="Portrait of Naomi Soyinka"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="absolute -right-3 bottom-6 sm:-right-4 sm:bottom-10 bg-[#1A1A1A] rounded-2xl shadow-lg px-4 py-3 sm:px-5 sm:py-3.5">
                  <p className="text-[10px] tracking-wider text-[#E2672E] font-semibold uppercase mb-0.5">
                    Making
                  </p>
                  <p className="text-white font-display font-semibold text-base sm:text-lg leading-none">
                    Pixel-perfect UI
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;