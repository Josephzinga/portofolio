import { cn } from "@/lib/utils";
import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-[var(--grid-bg)]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[var(--grid-mask-bg)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Salut c&apos;est joseph
      </p>
    </div>
  );
}
