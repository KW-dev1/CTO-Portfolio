import { education, experience } from "@/content/data";
import { Reveal } from "@/components/reveal";

export function ExperienceTimeline() {
  return (
    <>
      <section id="experience" className="w-full py-8 md:py-12">
        <div className="shell">
          <div className="label mb-3">Worked on</div>
          <h2 className="t-h2 mb-8">Twenty-one years, one deep bench.</h2>

          <div className="grid gap-3 md:gap-4">
            {experience.map((role, i) => (
              <Reveal
                key={role.slug}
                delay={i * 100}
                y={10}
                className="tile rounded-[24px] p-6 md:p-7"
              >
                <div className="grid items-start gap-4 md:grid-cols-12 md:gap-6">
                  <div className="flex items-center gap-3 md:col-span-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tint text-[15px] font-medium text-ink">
                      {role.initial}
                    </div>
                    <div>
                      <div className="text-[15px] font-medium tracking-[-0.01em] text-ink">
                        {role.company}
                      </div>
                      <div className="text-[11.5px] uppercase tracking-[0.14em] text-muted">
                        {role.period} · {role.duration}
                      </div>
                    </div>
                  </div>
                  <div className="text-[15px] font-medium text-ink md:col-span-4">{role.title}</div>
                  <div className="text-[14.5px] leading-[1.6] text-subtle md:col-span-4">
                    {role.product}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-hairline pt-5">
                  {role.skills.map((skill) => (
                    <span key={skill} className="badge">
                      {skill}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-2.5">
                  {role.bullets.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-[14.5px] leading-[1.6] text-subtle">{line}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="w-full py-8 md:py-12">
        <div className="shell">
          <div className="label mb-3">Education</div>
          <h2 className="t-h2 mb-8">Where it started</h2>

          <Reveal y={10} className="tile rounded-[24px] p-6 md:p-7">
            <div className="grid items-start gap-4 md:grid-cols-12 md:gap-6">
              <div className="flex items-center gap-3 md:col-span-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tint text-[15px] font-medium text-ink">
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
              <div className="text-[14.5px] leading-[1.6] text-subtle md:col-span-8">
                {education.degree}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
