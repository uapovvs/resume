"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function LaunchNavbar({ className }: { className?: string }) {
  return (
    <header className={cn("fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl", className)}>
      <div className="absolute inset-0 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] pointer-events-none"></div>
      <div className="relative mx-auto px-6 h-16">
        <NavbarComponent className="h-full flex items-center justify-between">
          <NavbarLeft>
            <Link href="/" className="relative w-10 h-10 font-bold text-2xl flex items-center cursor-pointer group">
              <span className="absolute left-0 top-1 text-white z-10 transition-transform group-hover:-translate-y-1">S</span>
              <span className="absolute left-3 top-3 text-white z-0 transition-transform group-hover:translate-y-1">U</span>
            </Link>
          </NavbarLeft>
          
          <NavbarRight>
            <div className="hidden md:flex gap-8 text-sm font-medium text-white/70 mr-4">
              <a href="#about" className="hover:text-white transition-colors">Обо мне</a>
              <a href="#projects" className="hover:text-white transition-colors">Проекты</a>
              <a href="#contact" className="hover:text-white transition-colors">Контакты</a>
            </div>
            <Button
              asChild
              className="hidden md:flex rounded-full bg-white text-black hover:bg-white/90"
            >
              <a href="#contact">Связаться</a>
            </Button>

            {/* Mobile Nav */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden text-white"
                >
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#030303] border-white/10 text-white">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <nav className="grid gap-6 text-lg font-medium mt-8">
                  <a href="#about" className="text-white/70 hover:text-white">Обо мне</a>
                  <a href="#projects" className="text-white/70 hover:text-white">Проекты</a>
                  <a href="#contact" className="text-white/70 hover:text-white">Контакты</a>
                  <Button className="rounded-full bg-white text-black hover:bg-white/90 w-full mt-4">
                    Связаться
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
