import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/data";
import { cn } from "@/lib/utils";

export function Grid() {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            titleClassName,
            img,
            imgClassName,
          }) => (
            <BentoGridItem
              className={cn("z-100", className)}
              id={id}
              key={id}
              title={title}
              description={description}
            />
          ),
        )}
      </BentoGrid>
    </section>
  );
}

export default Grid;
