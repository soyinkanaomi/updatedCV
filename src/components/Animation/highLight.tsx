// import React from "react";

// const stats = [
//   { value: "6", label: "months of focused coding" },
//   { value: "20+", label: "mini projects built" },
//   { value: "4", label: "full featured builds" },
//   { value: "10", label: "techs & tools learned" },
// ];

// const techs = [
//   "TypeScript",
//   "Responsive Design",
//   "HTML & CSS",
//   "Git & GitHub",
//   "Figma",
//   "React",
//   "JavaScript",
//   "Tailwind CSS",
// ];

// const Sparkle: React.FC = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="#E96512">
//     <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
//   </svg>
// );

// const Highlights: React.FC = () => {
//   const loopedTechs = [...techs, ...techs];

//   return (
//     <section className="bg-dots relative overflow-hidden py-16 md:py-20">
//       <div className="pointer-events-none absolute -top-10 -left-20 w-[420px] h-[420px] rounded-full bg-[#c8e6c0]/40 dark:bg-[#c8e6c0]/10 blur-3xl" />
//       <div className="pointer-events-none absolute -top-10 left-40 w-[300px] h-[300px] rounded-full bg-[#f3c99a]/30 dark:bg-[#f3c99a]/10 blur-3xl" />

//       <div className="relative max-w-7xl mx-auto px-6 md:px-8 ">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-14">
//           {stats.map((stat, i) => (
//             <div
//               key={i}
//               className=" border border-black/10 dark:border-white/10 rounded-2xl px-2 py-2 text-center"
//             >
//               <p className="font-display font-semibold text-4xl md:text-5xl text-[#1A1A1A] dark:text-[#f5f0e8] mb-2 font-serif">
//                 {stat.value}
//               </p>
//               <p className="text-[13px] md:text-[14px] text-[#8a8983] dark:text-[#9a9488]">
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="relative border-y border-black/10 dark:border-white/10 py-3 overflow-hidden bg-[#F2E0BD] dark:bg-[#2b2620]">
//         <div className="flex w-max animate-marquee">
//           {loopedTechs.map((tech, i) => (
//             <div
//               key={i}
//               className="flex items-center gap-2.5 px-8 whitespace-nowrap"
//             >
//               <Sparkle />
//               <span className="text-[15px] font-medium text-[#3a3a38] dark:text-[#c9c4b8]">
//                 {tech}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Highlights;


// Highlights.tsx
import React from "react";
import Reveal from "./Reveal";

const stats = [
  { value: "6", label: "months of focused coding" },
  { value: "20+", label: "mini projects built" },
  { value: "4", label: "full featured builds" },
  { value: "10", label: "techs & tools learned" },
];

const techs = [
  "TypeScript",
  "Responsive Design",
  "HTML & CSS",
  "Git & GitHub",
  "Figma",
  "React",
  "JavaScript",
  "Tailwind CSS",
];

const Sparkle: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#E96512">
    <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
  </svg>
);

const Highlights: React.FC = () => {
  const loopedTechs = [...techs, ...techs];

  return (
    <section className="relative overflow-hidden bg-[#fcfaf5] dark:bg-[#17130f] transition-colors duration-300 py-16 md:py-20">
      <div className="pointer-events-none absolute -top-10 -left-20 w-[420px] h-[420px] rounded-full bg-[#c8e6c0]/40 dark:bg-[#c8e6c0]/10 blur-3xl" />
      <div className="pointer-events-none absolute -top-10 left-40 w-[300px] h-[300px] rounded-full bg-[#f3c99a]/30 dark:bg-[#f3c99a]/10 blur-3xl" />

      <Reveal className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-14">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#211c17] border border-black/10 dark:border-white/10 rounded-2xl px-2 py-2 text-center"
            >
              <p className="font-display font-semibold text-4xl md:text-5xl text-[#1A1A1A] dark:text-[#f5f0e8] mb-2 font-serif">
                {stat.value}
              </p>
              <p className="text-[13px] md:text-[14px] text-[#8a8983] dark:text-[#9a9488]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="relative border-y border-black/10 dark:border-white/10 py-3 overflow-hidden bg-[#F2E0BD] dark:bg-[#2b2620]">
        <div className="flex w-max animate-marquee">
          {loopedTechs.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-8 whitespace-nowrap"
            >
              <Sparkle />
              <span className="text-[15px] font-medium text-[#3a3a38] dark:text-[#c9c4b8]">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;