"use client";
import { ArrowBigDown, Link, Navigation } from "lucide-react";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { NoiseBackground } from "./ui/noise-background";

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <div className="pb-20 pt-36">
      <div className="">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className=" w-full absolute top-0 left-0 h-screen  items-center justify-center bg-linear from-0% to-background">
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[60px_60px]",
            "md:bg-size-[100px_100px]",
            "bg-[linear-gradient(to_right,var(--grid-line)_1.5px,transparent_1.5px),linear-gradient(to_bottom,var(--grid-line)_1.5px,transparent_1.5px)]",
          )}
        />

        <div className="absolute h-screen inset-0 bg-linear-to-b from-transparent to-background/80" />
      </div>

      <div className=" flex flex-col gap-2 justify-center my-20 z-40">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] flex flex-col z-50 items-center justify-center">
          <p className="uppercase tracking-widest md:text-sm font-lato text-xs text-center text-blue-100 max-w-100">
            {t("title")}
          </p>

          <TextGenerateEffect
            words={`${t("description")}`}
            textClassName="text-center font-teko md:text-5xl lg:text-5xl"
            duration={0.8}
          />

          <p className="text-center md:tracking-wider font-play mb-4 text-sm md:text-2xl lg:text-2xl">
            {t("intro")} {t("role")}
          </p>

          <div className="w-70 md:w-100 lg:mt-2 flex justify-center">
            <NoiseBackground
              containerClassName="w-full p-1.5 rounded-full mx-auto"
              gradientColors={[
                "rgb(142, 44, 222)",
                "rgb(87, 11, 84)",
                "rgb(110, 100, 255)",
              ]}
            >
              <button className="h-full items-center w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]">
                <span className="w-full flex font-lato font-semibold text-base tracking-wide justify-center gap-2 items-center">
                  {" "}
                  {t("cta_projects")} <Navigation size={16} />
                </span>
              </button>
            </NoiseBackground>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
