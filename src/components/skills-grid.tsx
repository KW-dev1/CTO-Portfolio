import { technicalStack } from "@/content/data";
import { Reveal } from "@/components/reveal";

export function SkillsGrid() {
  return (
    <section id="skills" className="w-full py-8 md:py-12">
      <div className="shell">
        <div className="label mb-3">Stack</div>
        <h2 className="t-h2 mb-8">What&apos;s running in the background</h2>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
          {technicalStack.map((group, i) => (
            <Reveal
              key={group.label}
              delay={i * 100}
              className={`tile rounded-[24px] p-6 ${i === 0 || i === 4 ? "tile-tint" : ""}`}
            >
              <div className="label-sm mb-3">{group.label}</div>
              <div className="text-[16.5px] font-semibold leading-[1.6] text-ink">{group.items}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
