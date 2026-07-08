"use client";

import React from "react";
import Image from "next/image";

import { Marquee } from "@/components/ui/marquee";

const userIcons = [
  { name: "Figma", src: "/icons/Figma.svg" },
  { name: "After Effects", src: "/icons/After Effects.svg" },
  { name: "Blender", src: "/icons/Blender.svg" },
  { name: "3D Modeling", src: "/icons/3D Modeling.svg" },
  { name: "Photoshop", src: "/icons/Adobe Photoshop.svg" },
  { name: "React", src: "/icons/React.svg" },
  { name: "Next.js", src: "/icons/Nextjs.svg" },
  { name: "Framer", src: "/icons/Framer.svg" },
  { name: "Three.js", src: "/icons/Three.js.svg" },
];

function IconRow() {
  return (
    <div className="flex gap-[4rem] pr-[4rem]">
      {userIcons.map((icon, i) => (
        <div key={i} className="flex flex-col items-center justify-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300 w-20">
          <img src={icon.src} alt={icon.name} className="w-12 h-12 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-110" />
          <span className="text-xs font-semibold text-white/50">{icon.name}</span>
        </div>
      ))}
    </div>
  );
}

export function SkillsMarquee() {
  return (
    <section className="py-16 space-y-8 overflow-hidden">
      <Marquee speed={35} className="!mt-0">
        <IconRow />
      </Marquee>
      <Marquee speed={30} direction="right" className="!mt-0">
        <IconRow />
      </Marquee>
    </section>
  );
}
