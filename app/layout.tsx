import type { Metadata } from "next";
import { Geist, Geist_Mono, Teko } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const teko = localFont({
  src: "../font/Teko-VariableFont_wght.ttf",
  variable: "--font-teko",
  display: "swap",
});

const play = localFont({
  src: "../font/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-play",
  display: "swap",
});
const lato = localFont({
  src: [
    {
      path: "../font/Lato/Lato-Regular.ttf",
      weight: "400",
    },
    { path: "../font/Lato/Lato-Bold.ttf", weight: "700" },
  ],
  variable: "--font-lato",
});
export const metadata: Metadata = {
  title: "Joseph zinga futi — Développeur Fullstack",
  description:
    "Portfolio de Joseph, développeur fullstack spécialisé en React, Next.js, Express et architectures web modernes.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} ${teko.variable} ${play.variable}  antialiased`}
      >
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
