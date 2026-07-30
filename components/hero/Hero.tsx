'use client';

import { useRef, useState } from 'react';

const STACK_TAGS = [
  { label: 'Java', top: '18%', left: '10%', depth: 18 },
  { label: 'Spring Boot', top: '68%', left: '8%', depth: 28 },
  { label: 'React.js', top: '12%', left: '84%', depth: 22 },
  { label: 'Machine Learning', top: '72%', left: '82%', depth: 14 },
  { label: 'Full-Stack', top: '42%', left: '92%', depth: 32 },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouse({ x, y });
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-[#0B0F14] px-5 pt-16 text-[#E7ECF0] sm:px-6"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%]"
        style={{ perspective: '900px' }}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: 'rotateX(62deg)',
            transformOrigin: 'bottom',
            backgroundImage:
              'linear-gradient(#1C2530 1px, transparent 1px), linear-gradient(90deg, #1C2530 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage:
              'radial-gradient(ellipse 70% 100% at 50% 100%, black 40%, transparent 85%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 100% at 50% 100%, black 40%, transparent 85%)',
          }}
        />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-[38%] h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5EEAD4]/[0.07] blur-[120px]" />

      <div className="pointer-events-none absolute left-6 top-6 hidden font-mono text-[11px] tracking-widest text-[#7C8B99] sm:block">
        12.9716° N / 77.5946° E — BLR
      </div>
      <div className="pointer-events-none absolute right-6 top-6 hidden font-mono text-[11px] tracking-widest text-[#7C8B99] sm:block">
        PORTFOLIO — BUILD 02
      </div>

      {STACK_TAGS.map((tag) => (
        <div
          key={tag.label}
          className="pointer-events-none absolute hidden rounded-full border border-[#1C2530] bg-[#11161D]/80 px-4 py-1.5 font-mono text-xs text-[#7C8B99] backdrop-blur-sm md:block"
          style={{
            top: tag.top,
            left: tag.left,
            transform: `translate3d(${mouse.x * tag.depth}px, ${
              mouse.y * tag.depth
            }px, 0)`,
            transition: 'transform 0.15s ease-out',
          }}
        >
          {tag.label}
        </div>
      ))}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center text-center">
        <div className="mb-6 flex items-center gap-2 rounded-full border border-[#5EEAD4]/30 bg-[#5EEAD4]/[0.06] px-4 py-1.5 font-mono text-xs tracking-wide text-[#5EEAD4]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5EEAD4] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#5EEAD4]" />
          </span>
          OPEN TO SDE INTERNSHIPS
        </div>

        <h1
          className="animate-gradient-shift bg-gradient-to-r from-[#5EEAD4] via-[#38BDF8] via-40% to-[#5EEAD4] bg-[length:200%_auto] bg-clip-text text-4xl font-black leading-[0.95] tracking-tight text-transparent sm:text-6xl md:text-8xl"
          style={{ fontFamily: '"Space Grotesk", ui-sans-serif, sans-serif' }}
        >
          Bhavya Madev
        </h1>

        <h2 className="mt-5 text-lg font-medium text-[#7C8B99] sm:text-2xl md:text-3xl">
          Information Science Engineer,{' '}
          <span className="relative inline-block text-[#E7ECF0]">
            building systems that scale.
            <span className="animate-underline-sweep absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#5EEAD4] to-transparent bg-[length:200%_auto]" />
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-[#7C8B99] sm:text-lg sm:leading-8">
          I turn ideas into full-stack products — Java and Spring on the
          backend, React up front, and a growing habit of bolting AI onto
          things that don't strictly need it (but are better for it).
        </p>

        <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <button className="w-full max-w-xs rounded-xl bg-[#5EEAD4] px-7 py-3 font-semibold text-[#0B0F14] transition hover:bg-[#7FF3E1] sm:w-auto">
            View Projects
          </button>

          <a
            href="/resume/Resumee.pdf"
            download
            className="w-full max-w-xs rounded-xl border border-[#FFB454] px-7 py-3 text-center font-semibold text-[#FFB454] transition duration-300 hover:bg-[#FFB454] hover:text-[#0B0F14] sm:w-auto"
          >
            Download Resume
          </a>
        </div>

        <a
          href="mailto:you@example.com"
          className="mt-8 font-mono text-sm text-[#7C8B99] underline decoration-[#7C8B99]/40 underline-offset-4 transition hover:text-[#5EEAD4]"
        >
          or just say hi →
        </a>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: -200% center;
          }
        }
        @keyframes underline-sweep {
          0%,
          100% {
            background-position: 200% center;
          }
          50% {
            background-position: 0% center;
          }
        }
        .animate-gradient-shift {
          animation: gradient-shift 4s linear infinite;
        }
        .animate-underline-sweep {
          animation: underline-sweep 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}