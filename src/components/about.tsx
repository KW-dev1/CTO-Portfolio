import { aboutBody, quote } from "@/content/data";
import { Reveal } from "@/components/reveal";

export function About() {
  const [headline, ...body] = aboutBody;

  return (
    <section id="about" className="w-full py-8 md:py-12">
      <div className="shell grid gap-3 md:gap-4 lg:grid-cols-3">
        <Reveal className="card lg:col-span-2 rounded-[28px] p-7 md:p-9">
          <div className="label mb-3">About</div>
          <h2 className="t-h2-about">{headline}</h2>
          {body.map((para) => (
            <p key={para} className="mt-4 text-[1.0625rem] leading-[1.7] text-subtle">
              {para}
            </p>
          ))}
        </Reveal>

        <Reveal
          delay={100}
          className="card card-tint flex flex-col justify-center gap-4 rounded-[28px] p-7 md:p-9"
        >
          <div className="font-serif text-[2.25rem] leading-[0.9] text-accent">&#10077;</div>
          <p className="font-serif text-[1.5rem] leading-snug tracking-[-0.01em] text-ink md:text-[1.75rem]">
            {quote.text}
          </p>
          <div className="text-[13px] text-subtle">{quote.attribution}</div>
        </Reveal>
      </div>
    </section>
  );
}
