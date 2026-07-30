"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#1C2530] bg-[#0B0F14]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <Link
          href="#"
          className="font-mono text-xl font-bold tracking-tight text-[#5EEAD4] sm:text-2xl"
        >
          Bhavya<span className="text-[#E7ECF0]">.</span>
        </Link>

        <div className="hidden items-center gap-10 text-lg text-[#C4CDD5] md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative transition-colors hover:text-[#5EEAD4]"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#5EEAD4] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-[#E7ECF0] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-[#1C2530] bg-[#0B0F14] px-5 py-4 sm:px-8 md:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-lg text-[#C4CDD5] transition-colors hover:text-[#5EEAD4]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}