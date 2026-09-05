import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { about, profile } from "@/content/data";
import { ThemeToggle } from "@/components/theme-toggle";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-serif" });

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: about.body,
};

const noFlash = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light"){document.documentElement.dataset.theme=t}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
      </head>
      <body>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
