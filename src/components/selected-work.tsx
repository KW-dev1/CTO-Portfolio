import Image from "next/image";
import Link from "next/link";
import { selectedWork } from "@/content/data";
import { Reveal } from "@/components/reveal";

const SPANS = [
  "lg:col-span-3 lg:row-span-2",
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-2 lg:row-span-1",
];

export function SelectedWork() {
  return (
    <section id="work" className="w-full py-12">
      <div className="shell">
        <div className="label mb-3">Selected work</div>
        <h2 className="t-h2 mb-8">Systems that moved the needle.</h2>

        <div className="grid grid-cols-2 lg:grid-cols-6 auto-rows-[160px] md:auto-rows-[200px] gap-3 md:gap-4">
          {selectedWork.map((item, i) => (
            <Reveal
              key={item.slug}
              delay={i * 100}
              y={14}
              scale={0.98}
              className={`col-span-2 ${SPANS[i % SPANS.length]}`}
            >
              <Link
                href={`/work/${item.slug}`}
                className={`card group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] p-5 md:p-6 ${
                  item.featured ? "card-dark" : ""
                }`}
              >
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                {item.featured && (
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28)), linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.7) 100%), radial-gradient(120% 100% at 100% 0%, rgba(99,102,241,0.45), transparent 60%)",
                    }}
                  />
                )}

                <div className="relative flex items-start justify-between">
                  <span className={item.featured ? "badge-on-dark" : "badge"}>{item.tag}</span>
                  <span className={`text-[11px] ${item.featured ? "on-media" : "text-subtle"}`}>
                    {item.metric}
                  </span>
                </div>

                <div className="relative">
                  <div
                    className={`t-card-title underline-offset-[6px] group-hover:underline ${
                      item.featured ? "on-media-strong" : "text-ink"
                    }`}
                  >
                    {item.title}
                  </div>
                  <p
                    className={`mt-1 line-clamp-2 text-[13.5px] leading-[1.45] ${
                      item.featured ? "on-media" : "text-subtle"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
