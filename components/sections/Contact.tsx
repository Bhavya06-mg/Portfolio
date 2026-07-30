"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Phone, CheckCircle2, X, MessageCircleQuestion } from "lucide-react";
import FadeIn from "../ui/FadeIn";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const CONTACT_ITEMS = [
  { icon: Mail, label: "EMAIL", value: "bhavyamadev681@gmail.com" },
  { icon: Phone, label: "PHONE", value: "+91 9591411482" },
  { icon: MapPin, label: "LOCATION", value: "Bangalore, Karnataka" },
];

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [submitted, setSubmitted] = useState({ name: "", email: "", message: "" });
  const [showDetails, setShowDetails] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const snapshot = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setSubmitted(snapshot);
          setStatus("sent");
          form.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
        }
      );
  };

  return (
    <FadeIn>
      <motion.section id="contact" className="relative min-h-screen bg-[#0B0F14] overflow-hidden px-5 py-16 sm:px-8 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ backgroundImage: "radial-gradient(#1C2530 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[#5EEAD4]/[0.06] blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[#38BDF8]/[0.05] blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-14 max-w-lg sm:mb-20">
            <p className="mb-4 font-mono text-sm tracking-widest text-[#5EEAD4]">// 02 — LET'S TALK</p>
            <h2 className="text-3xl font-bold text-[#E7ECF0] sm:text-5xl md:text-6xl">
              Get In <span className="text-[#5EEAD4]">Touch</span>
            </h2>
          </div>

          <div className="grid gap-12 sm:gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="relative pl-2 lg:mt-6">
              <div className="absolute left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-[#5EEAD4]/50 via-[#1C2530] to-transparent" />
              <div className="space-y-8 sm:space-y-10">
                {CONTACT_ITEMS.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="relative flex items-start gap-5 sm:gap-6">
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#1C2530] bg-[#0B0F14] sm:h-12 sm:w-12">
                      <Icon className="text-[#5EEAD4]" size={20} />
                    </div>
                    <div className="pt-1.5 sm:pt-2">
                      <p className="font-mono text-xs tracking-widest text-[#7C8B99] sm:text-sm">{label}</p>
                      <p className="mt-1 break-all text-base text-[#E7ECF0] sm:text-lg">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex gap-6 pl-[62px] sm:mt-14 sm:pl-[68px]">
                <a href="https://github.com/Bhavya06-mg" target="_blank" rel="noopener noreferrer">
                  <Github size={30} className="text-[#7C8B99] hover:text-[#5EEAD4] duration-300 sm:h-[34px] sm:w-[34px]" />
                </a>
                <a href="https://www.linkedin.com/in/bhavya-madev-71951a307/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={30} className="text-[#7C8B99] hover:text-[#5EEAD4] duration-300 sm:h-[34px] sm:w-[34px]" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#5EEAD4]/10 via-transparent to-[#38BDF8]/10 blur-xl" />
              <div className="relative rounded-2xl border border-[#1C2530] bg-[#11161D] p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] sm:p-9">
                <AnimatePresence mode="wait">
                  {!formOpen ? (
                    <motion.div
                      key="prompt"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col items-start gap-5 py-4 sm:py-6"
                    >
                      <MessageCircleQuestion className="text-[#5EEAD4]" size={32} />
                      <p className="text-lg leading-7 text-[#7C8B99] sm:text-xl sm:leading-8">
                        Got a project in mind, a question, or just want to say hi?
                      </p>
                      <button
                        type="button"
                        onClick={() => setFormOpen(true)}
                        className="w-full rounded-xl bg-[#5EEAD4] px-7 py-3.5 text-lg font-semibold text-[#0B0F14] duration-300 hover:bg-[#7FF3E1] sm:w-auto"
                      >
                        Any Queries?
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      ref={form}
                      onSubmit={sendEmail}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full bg-[#0B0F14] text-base text-[#E7ECF0] placeholder:text-[#7C8B99] rounded-xl p-4 outline-none border border-[#1C2530] focus:border-[#5EEAD4] transition-colors sm:text-lg"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full bg-[#0B0F14] text-base text-[#E7ECF0] placeholder:text-[#7C8B99] rounded-xl p-4 outline-none border border-[#1C2530] focus:border-[#5EEAD4] transition-colors sm:text-lg"
                      />
                      <textarea
                        rows={5}
                        name="message"
                        placeholder="Your Message"
                        required
                        className="w-full bg-[#0B0F14] text-base text-[#E7ECF0] placeholder:text-[#7C8B99] rounded-xl p-4 outline-none border border-[#1C2530] focus:border-[#5EEAD4] transition-colors sm:text-lg"
                      />

                      {status === "error" && (
                        <p className="text-sm text-[#FF6B6B] font-mono sm:text-base">
                          Something went wrong — try again in a moment.
                        </p>
                      )}

                      <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                        <button
                          type="submit"
                          disabled={status === "sending"}
                          className="w-full rounded-xl bg-[#5EEAD4] px-8 py-3.5 text-lg font-semibold text-[#0B0F14] duration-300 hover:bg-[#7FF3E1] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                        >
                          {status === "sending" ? "Sending..." : "Send Message"}
                        </button>

                        <AnimatePresence>
                          {status === "sent" && (
                            <motion.button
                              type="button"
                              onClick={() => setShowDetails(true)}
                              initial={{ opacity: 0, scale: 0.85 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.85 }}
                              transition={{ duration: 0.25 }}
                              className="flex items-center gap-2 rounded-full border border-[#5EEAD4]/40 bg-[#5EEAD4]/10 px-4 py-2.5 text-sm font-mono text-[#5EEAD4] hover:bg-[#5EEAD4]/20 transition-colors sm:text-base"
                            >
                              <CheckCircle2 size={18} />
                              Sent — view details
                            </motion.button>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-5 sm:px-6"
              onClick={() => setShowDetails(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md space-y-5 rounded-xl border border-[#5EEAD4]/30 bg-[#11161D] p-6 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[#5EEAD4]">
                    <CheckCircle2 size={22} />
                    <span className="text-lg font-semibold sm:text-xl">Message sent</span>
                  </div>
                  <button onClick={() => setShowDetails(false)} className="text-[#7C8B99] hover:text-[#E7ECF0] transition-colors">
                    <X size={22} />
                  </button>
                </div>

                <div className="space-y-4 font-mono text-sm sm:text-base">
                  <div>
                    <p className="mb-1 text-xs tracking-wide text-[#7C8B99] sm:text-sm">FROM</p>
                    <p className="break-words text-[#E7ECF0]">{submitted.name}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs tracking-wide text-[#7C8B99] sm:text-sm">EMAIL</p>
                    <p className="break-all text-[#E7ECF0]">{submitted.email}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs tracking-wide text-[#7C8B99] sm:text-sm">MESSAGE</p>
                    <p className="whitespace-pre-wrap break-words leading-7 text-[#E7ECF0]">{submitted.message}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </FadeIn>
  );
}