"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  images: string[];
}

export default function ProjectSlider({ images }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1500);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
     <AnimatePresence mode="sync">
  <motion.div
    key={current}
    initial={{ x: 400, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -200, opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="absolute inset-0"
  >
    <Image
      src={images[current]}
      alt="Project Screenshot"
      fill
      className="object-cover"
    />
  </motion.div>
</AnimatePresence>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              current === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}