import { coreExpertise, executiveSummary } from "@/content/data";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="w-full py-8 md:py-12">
      <div className="shell grid gap-3 md:gap-4 lg:grid-cols-3">
        <Reveal className="card lg:col-span-2 rounded-[28px] p-7 md:p-9">
          <div className="label mb-3">About</div>
          <p className="text-[1.0625rem] leading-[1.7] text-subtle">{executiveSummary}</p>
        </Reveal>

        <Reveal
          delay={100}
          className="card card-tint flex flex-col justify-between rounded-[28px] p-7 md:p-9"
        >
          <div className="label mb-3">Core expertise</div>
          <ul className="space-y-2.5">
            {coreExpertise.map((item) => (
              <li key={item} className="flex items-baseline gap-2.5 text-[15px] text-ink">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
