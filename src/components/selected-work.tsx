"use client";

import { useState } from "react";
import Image from "next/image";
import { selectedWork } from "@/content/data";
import { Reveal } from "@/components/reveal";
import { ProjectModal } from "@/components/project-modal";

const SPANS = [
  "col-span-2 lg:col-span-3 lg:row-span-2",
  "col-span-2 lg:col-span-2 lg:row-span-2",
  "col-span-2 lg:col-span-2 lg:row-span-1",
  "col-span-2 lg:col-span-2 lg:row-span-2",
  "col-span-2 lg:col-span-2 lg:row-span-1",
];

export function SelectedWork() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="work" className="w-full py-8 md:py-12">
      <div className="shell">
        <div className="label mb-3">Selected work</div>
        <h2 className="t-h2 mb-8">Systems that moved the needle.</h2>

        <div className="grid grid-cols-2 auto-rows-[160px] md:auto-rows-[200px] gap-3 md:gap-4 lg:grid-cols-6">
          {selectedWork.map((item, i) => {
            const onMedia = Boolean(item.image);

            return (
              <Reveal
                key={item.slug}
                delay={i * 100}
                y={14}
                scale={0.98}
                className={SPANS[i % SPANS.length]}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  aria-haspopup="dialog"
                  className={`card group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[28px] p-5 text-left md:p-6 ${
                    item.featured ? "card-dark" : ""
                  }`}
                >
                  {item.image && (
                    <>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: item.featured
                            ? "linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28)), linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.7) 100%), radial-gradient(120% 100% at 100% 0%, rgba(99,102,241,0.45), transparent 60%)"
                            : "linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), linear-gradient(180deg, transparent 25%, rgba(0,0,0,0.72) 100%)",
                        }}
                      />
                    </>
                  )}

                  <div className="relative flex items-start justify-between gap-3">
                    {item.tag && (
                      <span className={`inline-flex shrink-0 ${onMedia ? "badge-on-dark" : "badge"}`}>
                        {item.tag}
                      </span>
                    )}
                    <span
                      className={`ml-auto text-right text-[11px] ${
                        onMedia ? "on-media" : "text-subtle"
                      }`}
                    >
                      {item.metric}
                    </span>
                  </div>

                  <div className="relative">
                    <div
                      className={`t-card-title underline-offset-[6px] group-hover:underline ${
                        onMedia ? "on-media-strong" : "text-ink"
                      }`}
                    >
                      {item.title}
                    </div>
                    <p
                      className={`mt-1 line-clamp-2 text-[13.5px] leading-[1.45] ${
                        onMedia ? "on-media" : "text-subtle"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <ProjectModal
        items={selectedWork}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </section>
  );
}
