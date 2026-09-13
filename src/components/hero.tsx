import Image from "next/image";
import { profile, selectedWork } from "@/content/data";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section id="top" className="w-full py-10 md:py-20">
      <div className="shell grid grid-cols-6 auto-rows-[92px] md:auto-rows-[140px] gap-3 md:gap-4">
        <Reveal
          y={16}
          scale={0.97}
          className="card relative col-span-6 md:col-span-4 row-span-3 flex flex-col justify-center overflow-hidden p-7 md:p-9 shadow-[0_12px_32px_-20px_rgba(0,0,0,0.15)]"
        >
          <div>
            <div className="text-[12px] uppercase tracking-[0.16em] text-muted mb-2">
              {profile.availability}
            </div>
            <h1 className="t-hero">{profile.name}</h1>
            <p className="mt-3 text-[1.0625rem] text-subtle">
              {profile.title} | {profile.subtitle}
            </p>
          </div>
          <div className="absolute bottom-7 left-7 text-[44px] leading-none text-accent md:bottom-9 md:left-9">
            ✶
          </div>
        </Reveal>

        <Reveal
          y={16}
          scale={0.97}
          delay={100}
          className="card relative col-span-6 row-span-4 md:col-span-2 md:row-span-3 overflow-hidden"
        >
          <Image
            src="/profile2.jpeg"
            alt={profile.name}
            fill
            sizes="(min-width: 768px) 34vw, 100vw"
            className="absolute inset-0 h-full w-full object-cover [object-position:50%_15%] md:[object-position:50%_20%]"
            priority
          />
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-canvas px-3 py-1 text-[11px] text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.availability}
          </div>
        </Reveal>

        <Reveal
          y={16}
          scale={0.97}
          delay={200}
          className="card col-span-6 md:col-span-2 row-span-2 flex flex-col overflow-hidden p-5"
        >
          <div className="label">Where</div>
          <div className="flex flex-1 flex-col justify-center">
            <div className="text-[1.5rem] font-medium tracking-[-0.02em]">{profile.location}</div>
            <div className="mt-0.5 text-[12px] text-subtle">{profile.availability}</div>
          </div>
        </Reveal>

        <Reveal
          y={16}
          scale={0.97}
          delay={300}
          className="card card-tint col-span-6 md:col-span-2 row-span-2 flex flex-col overflow-hidden p-5"
        >
          <div className="label">Building</div>
          <div className="flex flex-1 flex-col justify-center">
            <div className="text-[1.5rem] font-medium tracking-[-0.02em]">
              {selectedWork[0].title}
            </div>
            <div className="mt-0.5 text-[12px] text-subtle">{selectedWork[0].metric}</div>
          </div>
        </Reveal>

        <Reveal
          y={16}
          scale={0.97}
          delay={400}
          className="card col-span-6 md:col-span-2 row-span-2 flex flex-col overflow-hidden p-5"
        >
          <div className="label">Experience</div>
          <div className="flex flex-1 flex-col justify-center">
            <div className="text-[2rem] font-medium leading-none tracking-[-0.025em]">
              {profile.years}
            </div>
            <div className="mt-1 text-[12px] text-subtle">{profile.yearsCaption}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
