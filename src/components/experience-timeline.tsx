import { education, experience } from "@/content/data";
import { Reveal } from "@/components/reveal";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full py-12">
      <div className="shell">
        <div className="label mb-3">Worked on</div>
        <h2 className="t-h2 mb-8">Twenty-plus years, one deep bench.</h2>

        <div className="grid gap-3 md:gap-4">
          {experience.map((job, i) => (
            <Reveal
              key={`${job.company}-${job.period}`}
              delay={i * 100}
              y={10}
              className="tile grid items-start gap-4 rounded-[24px] p-6 md:grid-cols-12 md:gap-6 md:p-7"
            >
              <div className="flex items-center gap-3 md:col-span-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-tint text-[15px] font-medium text-ink">
                  {job.initial}
                </div>
                <div>
                  <div className="text-[15px] font-medium tracking-[-0.01em] text-ink">
                    {job.company}
                  </div>
                  <div className="text-[11.5px] uppercase tracking-[0.14em] text-muted">
                    {job.period}
                  </div>
                </div>
              </div>
              <div className="text-[15px] font-medium text-ink md:col-span-3">{job.role}</div>
              <div className="text-[14.5px] leading-[1.6] text-subtle md:col-span-6">
                {job.highlight}
              </div>
            </Reveal>
          ))}

          <Reveal
            delay={experience.length * 100}
            y={10}
            className="tile grid items-start gap-4 rounded-[24px] p-6 md:grid-cols-12 md:gap-6 md:p-7"
          >
            <div className="flex items-center gap-3 md:col-span-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-tint text-[15px] font-medium text-ink">
                {education.school.charAt(0)}
              </div>
              <div>
                <div className="text-[15px] font-medium tracking-[-0.01em] text-ink">
                  {education.school}
                </div>
                <div className="text-[11.5px] uppercase tracking-[0.14em] text-muted">
                  {education.period}
                </div>
              </div>
            </div>
            <div className="text-[15px] font-medium text-ink md:col-span-3">Education</div>
            <div className="text-[14.5px] leading-[1.6] text-subtle md:col-span-6">
              {education.degree}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
