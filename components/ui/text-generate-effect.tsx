"use client";
import { ReactNode, useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  textClassName,
}: {
  words: string | ReactNode[];
  className?: string;
  textClassName?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();

  // Traitement différent selon le type de words
  const wordsArray = Array.isArray(words) ? words : words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.1),
      },
    );
  }, [scope.current, animate, filter, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((item, idx) => {
          // Si c'est une chaîne de caractères
          if (typeof item === "string") {
            return (
              <motion.span
                key={`${item}-${idx}`}
                className={cn(
                  idx > 11 ? "text-purple-400" : "text-black dark:text-white",
                  "opacity-0",
                )}
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {item}{" "}
              </motion.span>
            );
          }

          // Si c'est un composant React
          return (
            <motion.span
              key={`component-${idx}`}
              className="dark:bg-blue-300 inline-block"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {item}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <p
          className={cn(
            "dark:text-white text-black text-2xl leading-tight tracking-wider",
            textClassName,
          )}
        >
          {renderWords()}
        </p>
      </div>
    </div>
  );
};
