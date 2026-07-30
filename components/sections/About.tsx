"use client";

import { GraduationCap, Code2, BrainCircuit } from "lucide-react";
import FadeIn from "../ui/FadeIn";
import Image from "next/image";
import { useState } from "react";

const INFO_CARDS = [
  { icon: GraduationCap, accent: "#5EEAD4", title: "Education", detail: "B.E Information Science Engineering" },
  { icon: Code2, accent: "#38BDF8", title: "Full Stack Development", detail: "React • Next.js • Node.js • MongoDB" },
  { icon: BrainCircuit, accent: "#FFB454", title: "AI Projects", detail: "Building AI-powered developer tools using the Gemini API." },
];

export default function About() {
  const [revealed, setRevealed] = useState(false);

  return (
    <FadeIn>
      <section id="about" className="relative min-h-screen overflow-hidden bg-[#0B0F14] px-5 py-16 sm:px-8 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ backgroundImage: "radial-gradient(#1C2530 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-[#5EEAD4]/[0.06] blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="font-mono text-sm tracking-widest text-[#5EEAD4] mb-4">// 01 — WHO I AM</p>

          <div className="grid gap-x-12 gap-y-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0">
              <button
                type="button"
                onClick={() => setRevealed((r) => !r)}
                aria-label="Toggle photo color"
                className="group relative block w-full rotate-[-3deg] transition-transform duration-500 hover:rotate-0 focus:outline-none"
              >
                <span className="absolute -left-3 -top-3 h-8 w-8 border-l-2 border-t-2 border-[#5EEAD4]" />
                <span className="absolute -right-3 -top-3 h-8 w-8 border-r-2 border-t-2 border-[#5EEAD4]" />
                <span className="absolute -bottom-3 -left-3 h-8 w-8 border-b-2 border-l-2 border-[#5EEAD4]" />
                <span className="absolute -bottom-3 -right-3 h-8 w-8 border-b-2 border-r-2 border-[#5EEAD4]" />
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-[#1C2530] bg-[#11161D]">
                  <Image
                    src="/images/Formal.jpeg"
                    alt="Bhavya Madev"
                    fill
                    className={`object-cover transition-all duration-500 group-hover:grayscale-0 ${
                      revealed ? "grayscale-0" : "grayscale"
                    }`}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0F14]/70 via-transparent to-transparent" />
                </div>
              </button>

              <p className="mt-6 text-center font-mono text-sm tracking-widest text-[#7C8B99] lg:text-left">
                FIG. 01 — BHAVYA MADEV / ISE STUDENT
              </p>
            </div>

            <div className="lg:pt-10">
              <h2 className="mb-8 text-3xl font-bold text-[#E7ECF0] sm:text-5xl md:text-6xl">
                About <span className="text-[#5EEAD4]">Me</span>
              </h2>

              <p className="text-base leading-8 text-[#C4CDD5] sm:text-xl sm:leading-9">
                I'm an Information Science Engineering student at Bangalore
                Institute of Technology, spending most of my time at the
                intersection of full-stack development and applied AI.
              </p>

              <p className="mt-6 text-base leading-8 text-[#7C8B99] sm:text-lg sm:leading-9">
                Less interested in tutorials, more interested in shipping —
                I build things end to end, break them, and figure out why.
                Currently deep in React, Node, and whatever Gemini's API
                will let me get away with.
              </p>

              <div className="relative mt-14 pl-2">
                <div className="absolute left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-[#5EEAD4]/50 via-[#1C2530] to-transparent" />
                <div className="space-y-10">
                  {INFO_CARDS.map(({ icon: Icon, accent, title, detail }) => (
                    <div key={title} className="relative flex items-start gap-6">
                      <div
                        className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-[#0B0F14]"
                        style={{ borderColor: `${accent}55` }}
                      >
                        <Icon size={22} style={{ color: accent }} />
                      </div>
                      <div className="pt-1.5">
                        <h3 className="text-lg font-semibold text-[#E7ECF0] sm:text-xl">{title}</h3>
                        <p className="mt-1 text-base text-[#7C8B99] sm:text-lg">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}