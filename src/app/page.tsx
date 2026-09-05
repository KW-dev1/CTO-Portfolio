import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { SelectedWork } from "@/components/selected-work";
import { SkillsGrid } from "@/components/skills-grid";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SelectedWork />
      <SkillsGrid />
      <ExperienceTimeline />
      <SiteFooter />
    </main>
  );
}
