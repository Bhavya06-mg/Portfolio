"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import FadeIn from "../ui/FadeIn";
import ProjectSlider from "../projects/ProjectSlider";

const coolgridImages = [
  "/images/coolgrid/home.png", "/images/coolgrid/login.png", "/images/coolgrid/register.png",
  "/images/coolgrid/registersupplier.png", "/images/coolgrid/booking.png", "/images/coolgrid/request.png",
  "/images/coolgrid/customerdashboard.png", "/images/coolgrid/supplierdashboard.png", "/images/coolgrid/statistics.png",
];
const yourTubeImages = [
  "/images/yourtube/home.png", "/images/yourtube/channel.png", "/images/yourtube/subscription.png",
  "/images/yourtube/videocalling.png", "/images/yourtube/downloads.png", "/images/yourtube/plans.png", "/images/yourtube/tools.png",
];

const projects = [
  { title: "CoolGrid EV", description: "A full-stack EV charging and fuel delivery platform with secure authentication, Google Maps integration, real-time communication, and booking workflow.", tech: ["React.js", "Node.js", "Express", "MongoDB", "Socket.IO", "Google Maps API"], github: "https://github.com/Bhavya06-mg/CoolGrid-EV", demo: "https://coolgrid-ev-1.onrender.com/", accent: "#5EEAD4" },
  { title: "YourTube", description: "A full-stack video streaming platform featuring authentication, subscriptions, WebRTC video calling, screen sharing, and Razorpay payments.", tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Firebase", "WebRTC", "Razorpay"], github: "YOUR_GITHUB_LINK", demo: "https://youtube-xn82.onrender.com/", accent: "#38BDF8" },
  { title: "CodeLens AI", description: "An AI-powered repository analysis platform that reviews GitHub repositories and generates intelligent code quality reports using Google Gemini.", tech: ["React", "Node.js", "MongoDB", "Gemini API", "GitHub API", "JWT"], status: "In Progress", accent: "#FFB454" },
];

export default function Projects() {
  return (
    <FadeIn>
      <section id="projects" className="relative min-h-screen overflow-hidden bg-[#0B0F14] px-5 py-16 sm:px-8 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ backgroundImage: "radial-gradient(#1C2530 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="pointer-events-none absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-[#5EEAD4]/[0.06] blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="mb-4 font-mono text-sm tracking-widest text-[#5EEAD4]">// 04 — WORK</p>
          <h2 className="mb-10 text-3xl font-bold text-[#E7ECF0] sm:mb-16 sm:text-5xl md:text-6xl">
            My <span className="text-[#5EEAD4]">Projects</span>
          </h2>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group overflow-hidden rounded-2xl border border-[#1C2530] bg-[#11161D] transition-colors duration-300"
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${project.accent}60`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1C2530")}
              >
                {project.title === "CoolGrid EV" ? (
                  <ProjectSlider images={coolgridImages} />
                ) : project.title === "YourTube" ? (
                  <ProjectSlider images={yourTubeImages} />
                ) : (
                  <div
                    className="flex h-48 items-center justify-center px-4 text-center text-2xl font-bold text-[#0B0F14] sm:text-3xl"
                    style={{ background: `linear-gradient(135deg, ${project.accent}, #38BDF8)` }}
                  >
                    {project.title}
                  </div>
                )}

                <div className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold text-[#E7ECF0] sm:text-2xl">{project.title}</h3>
                    {project.status && (
                      <span className="rounded-full bg-[#FFB454] px-3 py-1 text-sm font-bold text-[#0B0F14]">
                        🚧 {project.status}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-base leading-7 text-[#7C8B99] sm:text-lg sm:leading-8">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2 sm:gap-2.5">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border px-3 py-1 text-sm sm:px-3.5 sm:py-1.5 sm:text-base"
                        style={{ borderColor: `${project.accent}30`, backgroundColor: `${project.accent}14`, color: project.accent }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-6 text-base sm:text-lg">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#7C8B99] transition-colors hover:text-[#E7ECF0]">
                      <Github size={20} />
                      GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors" style={{ color: project.accent }}>
                      <ExternalLink size={20} />
                      Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}