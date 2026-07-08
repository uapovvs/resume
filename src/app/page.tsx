"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { SkillsMarquee } from "@/components/ui/skills-marquee";
import { LaunchNavbar } from "@/components/ui/launch-navbar";

// ─── Icon SVGs ────────────────────────────────────────────────────────────────
const FigmaIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 3.333 3.333 3.333 3.333 0 0 0 3.333-3.333V8.668z"/>
    <circle cx="15.332" cy="12.001" r="3.333"/>
  </svg>
);
const CodeIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const CubeIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);
const PlayIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
  </svg>
);
const GlobeIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const BrushIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1 1 2.65 2.02 5 2.02 2.96 0 5-2.02 5-5.02 0-1.54-1.35-3.04-3-3.04z"/>
  </svg>
);
const ServerIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
    <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>
);
const ZapIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

// ─── Services / What I do ─────────────────────────────────────────────────────
const services = [
  {
    icon: <img src="/icons/Figma.svg" alt="Figma" className="w-8 h-8 object-contain" />,
    title: "UI/UX Дизайн",
    description: "Создаю современные интерфейсы в Figma с глубоким пониманием UX. Прототипирование, дизайн-системы и адаптивная вёрстка.",
    color: "from-[#A259FF]/20 to-transparent",
    glow: "#A259FF",
  },
  {
    icon: <CubeIcon />,
    title: "3D & Motion",
    description: "Разрабатываю 3D-сцены в Blender, создаю захватывающие motion-анимации в After Effects и интерактивный 3D на Three.js.",
    color: "from-[#F5792A]/20 to-transparent",
    glow: "#F5792A",
  },
  {
    icon: <CodeIcon />,
    title: "Full-stack разработка",
    description: "Строю веб-приложения на Next.js, React, TypeScript. От красивого фронтенда до надёжного бэкенда.",
    color: "from-[#61DAFB]/20 to-transparent",
    glow: "#61DAFB",
  },
  {
    icon: <PlayIcon />,
    title: "Видео & Анимация",
    description: "Монтаж, motion-графика, 3D-рендер. Создаю визуальный контент, который работает на ваш бренд.",
    color: "from-[#FF6B6B]/20 to-transparent",
    glow: "#FF6B6B",
  },
  {
    icon: <GlobeIcon />,
    title: "Веб-сайты под ключ",
    description: "Полный цикл: от дизайна и разработки до деплоя. Сайты для бизнеса, лендинги, интернет-магазины.",
    color: "from-[#38BDF8]/20 to-transparent",
    glow: "#38BDF8",
  },
  {
    icon: <BrushIcon />,
    title: "Брендинг",
    description: "Разрабатываю визуальную идентичность: логотипы, фирменный стиль, гайдлайны. Айдентика, которую запоминают.",
    color: "from-[#FB923C]/20 to-transparent",
    glow: "#FB923C",
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
const stats = [
  { value: "20+", label: "Проектов" },
  { value: "3+", label: "Года опыта" },
  { value: "100%", label: "Клиентов довольны" },
  { value: "∞", label: "Кофе выпито" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030303] antialiased text-white selection:bg-primary/30 overflow-x-hidden">
      
      <LaunchNavbar />

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <main className="relative pt-40 pb-0 lg:pt-56 overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Glow blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/15 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-sm font-medium text-white/80 mb-8 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Студент колледжа AITU · Открыт к работе
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-9xl font-extrabold tracking-tight mb-8 bg-gradient-to-b from-white via-white to-white/30 bg-clip-text text-transparent"
          >
            Привет, я{" "}
            <span className="bg-gradient-to-r from-primary via-[#A259FF] to-[#C084FC] bg-clip-text text-transparent">
              Саид
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/55 max-w-[700px] mx-auto mb-12 font-medium leading-relaxed"
          >
            Дизайнер, Motion-художник и Full-stack разработчик. Создаю продукты,
            которые выглядят как искусство и работают как швейцарские часы.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-primary text-white font-semibold text-base hover:bg-primary/90 transition-all shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:shadow-[0_0_60px_rgba(139,92,246,0.7)] hover:scale-105 active:scale-95"
            >
              Связаться со мной
            </a>
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-base hover:bg-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              Посмотреть работы
            </a>
          </motion.div>
        </div>

        {/* Skills Marquee right after hero */}
        <div className="w-full relative z-10">
          <SkillsMarquee />
        </div>
      </main>



      {/* ── About ──────────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" id="about">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-6 uppercase tracking-widest">
                Обо мне
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Создаю визуальный{" "}
                <span className="bg-gradient-to-r from-primary to-[#A259FF] bg-clip-text text-transparent">
                  WOW-эффект
                </span>
              </h2>
              <div className="space-y-4 text-white/60 text-lg leading-relaxed">
                <p>
                  Я — студент колледжа <strong className="text-white">AITU</strong>. Начинал с дизайна и motion-анимации, что дало мне острое чувство эстетики и понимание идеального продукта.
                </p>
                <p>
                  Проходил практику в <strong className="text-white">«КазМунайГаз»</strong>, работал с крупными государственными компаниями, создавая комплексные системы.
                </p>
                <p>
                  Реализовал множество коммерческих проектов <strong className="text-white">под ключ</strong> — от сайтов для автомастерских до масштабных маркетплейсов.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="#contact" className="px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all hover:scale-105">
                  Написать
                </a>
                <a href="#projects" className="px-6 py-3 rounded-full border border-white/15 text-white font-semibold hover:bg-white/10 transition-all hover:scale-105">
                  Проекты
                </a>
              </div>
            </motion.div>

            {/* Card stack / visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 blur-[80px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#A259FF]/20 blur-[60px] rounded-full" />
                <div className="relative z-10 space-y-6">
                  {[
                    { label: "UI/UX Design", level: 92, color: "#A259FF" },
                    { label: "Motion & 3D", level: 88, color: "#F5792A" },
                    { label: "React / Next.js", level: 85, color: "#61DAFB" },
                    { label: "Figma", level: 95, color: "#FF6B6B" },
                  ].map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-semibold text-white">{skill.label}</span>
                        <span className="text-white/40">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="h-full rounded-full"
                          style={{ background: skill.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────────────────── */}
      <section className="py-24 relative" id="services">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-6 uppercase tracking-widest">
              Что я делаю
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white">
              Мои{" "}
              <span className="bg-gradient-to-r from-primary to-[#A259FF] bg-clip-text text-transparent">
                услуги
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:border-white/20 transition-all duration-300 overflow-hidden hover:-translate-y-1"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${service.glow}20`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="mb-5" style={{ color: service.glow }}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ───────────────────────────────────────────────────────── */}
      <section id="projects" className="relative z-10">
        <div className="text-center py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-6 uppercase tracking-widest">
            Портфолио
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white">
            Мои{" "}
            <span className="bg-gradient-to-r from-primary to-[#A259FF] bg-clip-text text-transparent">
              проекты
            </span>
          </h2>
        </div>
        <HeroParallax products={products} />
      </section>

      {/* ── Contact ────────────────────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden" id="contact">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-8 uppercase tracking-widest">
              Контакты
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
              Начнём проект?
            </h2>
            <p className="text-white/50 text-xl mb-12 max-w-xl mx-auto leading-relaxed">
              Оставьте заявку — я отвечу в течение часа и расскажу, как могу помочь вашему бизнесу.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://t.me/uapovvs"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-semibold text-base hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(139,92,246,0.4)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.829.94z"/>
                </svg>
                Telegram
              </a>
              <a
                href="https://wa.me/77075510911?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%AF%20%D0%BF%D0%B8%D1%88%D1%83%20%D1%81%20%D1%82%D0%B2%D0%BE%D0%B5%D0%B3%D0%BE%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20(https://resume-peach-nine-69.vercel.app/)"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366]/20 border border-[#25D366]/30 text-white px-8 py-4 rounded-2xl font-semibold text-base hover:bg-[#25D366]/30 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:saiduapov48@gmail.com?subject=%D0%9E%D0%B1%D1%81%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0&body=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%9F%D0%B5%D1%80%D0%B5%D1%88%D0%B5%D0%BB%20%D1%81%20%D1%82%D0%B2%D0%BE%D0%B5%D0%B3%D0%BE%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20(https://resume-peach-nine-69.vercel.app/)"
                className="flex items-center justify-center gap-3 bg-white/[0.06] border border-white/15 text-white px-8 py-4 rounded-2xl font-semibold text-base hover:bg-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                Gmail
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="py-10 text-center border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-8 h-8 font-bold text-xl flex items-center">
            <span className="absolute left-0 top-0 text-white z-10">S</span>
            <span className="absolute left-2.5 top-2 text-white/70 z-0 text-base">U</span>
          </div>
          <p className="text-white/25 text-sm">© 2026 Саид Уапов. Сделано с любовью, кодом и Gilroy.</p>
          <div className="flex gap-4">
            <a href="https://t.me/uapovvs" className="text-white/30 hover:text-white transition-colors text-sm">Telegram</a>
            <a href="https://wa.me/77075510911?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%AF%20%D0%BF%D0%B8%D1%88%D1%83%20%D1%81%20%D1%82%D0%B2%D0%BE%D0%B5%D0%B3%D0%BE%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20(https://resume-peach-nine-69.vercel.app/)" className="text-white/30 hover:text-white transition-colors text-sm">WhatsApp</a>
            <a href="mailto:saiduapov48@gmail.com?subject=%D0%9E%D0%B1%D1%81%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0" className="text-white/30 hover:text-white transition-colors text-sm">Gmail</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const thumbs = [
  "/projects/frame2.svg",
  "/projects/thumbnail.svg",
  "/projects/frame4.svg",
  "/projects/image-copy.png",
  "/projects/image.png",
];

export const products = [
  { title: "Landing Page — Стоматология", link: "#", thumbnail: thumbs[0] },
  { title: "Корпоративный сайт", link: "#", thumbnail: thumbs[1] },
  { title: "Интернет-магазин", link: "#", thumbnail: thumbs[2] },
  { title: "SaaS Dashboard", link: "#", thumbnail: thumbs[3] },
  { title: "3D Landing Page", link: "#", thumbnail: thumbs[4] },
  { title: "CRM система", link: "#", thumbnail: thumbs[0] },
  { title: "Авто-сервис сайт", link: "#", thumbnail: thumbs[1] },
  { title: "Портфолио студия", link: "#", thumbnail: thumbs[2] },
  { title: "Маркетплейс", link: "#", thumbnail: thumbs[3] },
  { title: "Брендинг проект", link: "#", thumbnail: thumbs[4] },
  { title: "Motion Reel", link: "#", thumbnail: thumbs[0] },
  { title: "Мобильное приложение", link: "#", thumbnail: thumbs[1] },
  { title: "Event Landing", link: "#", thumbnail: thumbs[2] },
  { title: "AI инструмент", link: "#", thumbnail: thumbs[3] },
  { title: "Ресторан — сайт меню", link: "#", thumbnail: thumbs[4] },
];
