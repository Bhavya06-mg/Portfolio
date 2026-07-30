"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Server, GitBranch, Cpu } from "lucide-react";
import FadeIn from "../ui/FadeIn";

const skills = [
  { icon: <Code2 size={30} />, title: "Languages", items: ["Java", "JavaScript", "TypeScript", "HTML", "CSS"], accent: "#5EEAD4", span: "md:col-span-3" },
  { icon: <Globe size={30} />, title: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"], accent: "#38BDF8", span: "md:col-span-3" },
  { icon: <Server size={30} />, title: "Backend", items: ["Node.js", "Express.js"], accent: "#FFB454", span: "md:col-span-2" },
  { icon: <Database size={30} />, title: "Database", items: ["MongoDB"], accent: "#5EEAD4", span: "md:col-span-2" },
  { icon: <GitBranch size={30} />, title: "Tools", items: ["Git", "GitHub", "Postman", "Docker", "Render"], accent: "#38BDF8", span: "md:col-span-2" },
  { icon: <Cpu size={30} />, title: "Other", items: ["REST API", "Socket.IO", "JWT", "Google Maps API", "Gemini API"], accent: "#FFB454", span: "md:col-span-6" },
];

export default function Skills() {
  return (
    <FadeIn>
      <section id="skills" className="relative min-h-screen overflow-hidden bg-[#0B0F14] px-5 py-16 sm:px-8 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ backgroundImage: "radial-gradient(#1C2530 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="pointer-events-none absolute -left-32 bottom-10 h-[380px] w-[380px] rounded-full bg-[#38BDF8]/[0.06] blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="mb-4 font-mono text-sm tracking-widest text-[#5EEAD4]">// 03 — TOOLKIT</p>
          <h2 className="mb-10 text-3xl font-bold text-[#E7ECF0] sm:mb-16 sm:text-5xl md:text-6xl">
            My <span className="text-[#5EEAD4]">Skills</span>
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`group relative overflow-hidden rounded-2xl border border-[#1C2530] bg-[#11161D] p-6 sm:p-8 ${skill.span}`}
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20"
                  style={{ backgroundColor: skill.accent }}
                />
                <div
                  className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl border sm:h-16 sm:w-16"
                  style={{ borderColor: `${skill.accent}40`, color: skill.accent }}
                >
                  {skill.icon}
                </div>
                <h3 className="relative mb-4 text-2xl font-semibold text-[#E7ECF0] sm:text-3xl">{skill.title}</h3>
                <div className="relative flex flex-wrap gap-2.5 sm:gap-3">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border px-3.5 py-1.5 text-sm sm:px-4 sm:text-base"
                      style={{ borderColor: `${skill.accent}30`, backgroundColor: `${skill.accent}14`, color: skill.accent }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}