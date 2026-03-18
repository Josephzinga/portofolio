import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { ArrowBigDown, HomeIcon } from "lucide-react";
import { Grid } from "@/components/grid";

export default function Home() {
  const navItems = [
    {
      name: "Accueil",
      link: "/",
      icon: <HomeIcon />,
    },
    {
      name: "About",
      link: "/#about",
      icon: <ArrowBigDown />,
    },
  ];
  return (
    <main className="relative bg-background flex justify-center place-items-start min-h-[150vh] overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-ful">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
