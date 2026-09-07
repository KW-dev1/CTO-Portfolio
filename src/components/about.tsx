import { aboutBody, quote } from "@/content/data";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="w-full py-8 md:py-12">
      <div className="shell grid gap-3 md:gap-4 lg:grid-cols-3">
        <Reveal className="card lg:col-span-2 rounded-[28px] p-7 md:p-9">
          <div className="label mb-3">About</div>
          <div className="space-y-4 text-[1.0625rem] leading-[1.7] text-subtle">
            {aboutBody.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={100}
          className="card card-tint flex flex-col justify-between rounded-[28px] p-7 md:p-9"
        >
          <div className="font-serif text-[2.25rem] leading-[0.9] text-accent">&#10077;</div>
          <p className="font-serif text-[1.125rem] leading-snug text-ink">{quote}</p>
          <div />
        </Reveal>
      </div>
    </section>
  );
}
