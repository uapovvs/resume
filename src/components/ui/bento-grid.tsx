import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 p-0 relative overflow-hidden bg-black/40 border border-white/10 flex flex-col justify-end",
        className
      )}
    >
      <div className="absolute inset-0 z-0">
        {header}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
      </div>
      
      <div className="relative z-10 p-6 group-hover/bento:translate-y-[-4px] transition-transform duration-200">
        <div className="mb-2">{icon}</div>
        <div className="font-sans font-bold text-white text-xl mb-2">
          {title}
        </div>
        <div className="font-sans font-normal text-white/70 text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
