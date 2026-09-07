import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile, selectedWork } from "@/content/data";
import { Reveal } from "@/components/reveal";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return selectedWork.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const item = selectedWork.find((w) => w.slug === slug);
  if (!item) return {};
  const title = `${item.title} | ${profile.name}`;
  return {
    title,
    description: item.description,
    alternates: { canonical: `/work/${item.slug}` },
    openGraph: {
      title,
      description: item.description,
      url: `/work/${item.slug}`,
      images: item.image ? [item.image] : undefined,
      type: "article",
    },
    twitter: {
      card: item.image ? "summary_large_image" : "summary",
      title,
      description: item.description,
      images: item.image ? [item.image] : undefined,
    },
  };
}

export default async function WorkDetail({ params }: Params) {
  const { slug } = await params;
  const index = selectedWork.findIndex((w) => w.slug === slug);
  if (index === -1) notFound();

  const item = selectedWork[index];
  const next = selectedWork[(index + 1) % selectedWork.length];
  const prev = selectedWork[(index - 1 + selectedWork.length) % selectedWork.length];

  return (
    <main>
      <section className="w-full py-10 md:py-20">
        <div className="shell">
          <Link
            href="/#work"
            className="group mb-6 inline-flex items-center gap-2 text-[13px] text-subtle"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">&larr;</span>
            <span className="underline-offset-[6px] group-hover:underline">All work</span>
          </Link>

          <div className="grid grid-cols-6 auto-rows-[92px] md:auto-rows-[140px] gap-3 md:gap-4">
            <Reveal
              y={16}
              scale={0.97}
              className={`card relative col-span-6 md:col-span-4 row-span-3 flex flex-col justify-between overflow-hidden p-7 md:p-9 shadow-[0_12px_32px_-20px_rgba(0,0,0,0.15)] ${
                item.featured ? "card-dark" : ""
              }`}
            >
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 66vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover"
                  priority
                />
              )}
              {item.featured && (
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(0,0,0,0.22), rgba(0,0,0,0.22)), linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.8) 100%)",
                  }}
                />
              )}
              <div className="relative">
                <span className={item.featured ? "badge-on-dark" : "badge"}>{item.tag}</span>
                <h1 className={`t-hero mt-4 ${item.featured ? "on-media-strong" : "text-ink"}`}>
                  {item.title}
                </h1>
              </div>
              <p
                className={`relative mt-3 text-[1.0625rem] leading-[1.7] ${
                  item.featured ? "on-media" : "text-subtle"
                }`}
              >
                {item.description}
              </p>
            </Reveal>

            <Reveal
              y={16}
              scale={0.97}
              delay={100}
              className="card col-span-6 md:col-span-2 row-span-3 flex flex-col justify-between overflow-hidden p-5 md:p-6"
            >
              <div>
                <div className="label mb-3">Role</div>
                <div className="text-[15px] font-medium leading-snug tracking-[-0.01em] text-ink">
                  {item.role}
                </div>
              </div>
              <div>
                <div className="label mb-1.5">When</div>
                <div className="text-[15px] font-medium tracking-[-0.01em] text-ink">
                  {item.period}
                </div>
              </div>
              <div>
                <div className="label mb-1.5">Headline</div>
                <div className="text-[1.5rem] font-medium tracking-[-0.02em] text-ink">
                  {item.metric}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12">
        <div className="shell grid gap-3 md:gap-4 lg:grid-cols-3">
          <Reveal className="card lg:col-span-2 rounded-[28px] p-7 md:p-9">
            <div className="label mb-3">Overview</div>
            <h2 className="t-h2-about">What it is</h2>
            <p className="mt-4 text-[1.0625rem] leading-[1.7] text-subtle">{item.summary}</p>
          </Reveal>

          <Reveal delay={100} className="card card-tint flex flex-col justify-between rounded-[28px] p-7 md:p-9">
            <div className="label mb-3">By the numbers</div>
            <ul className="space-y-3">
              {item.metrics.map((m) => (
                <li key={m} className="flex gap-2.5 text-[15px] leading-[1.5] text-ink">
                  <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="w-full py-8 md:py-12">
        <div className="shell">
          <div className="label mb-3">What I built</div>
          <h2 className="t-h2 mb-8">The work behind the number</h2>

          <div className="grid gap-3 md:gap-4">
            {item.highlights.map((line, i) => (
              <Reveal
                key={line}
                delay={i * 100}
                y={10}
                className="tile flex items-start gap-4 rounded-[24px] p-6 md:gap-6 md:p-7"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tint text-[15px] font-medium text-ink">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="pt-2 text-[14.5px] leading-[1.6] text-subtle">{line}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12">
        <div className="shell">
          <div className="label mb-3">Stack</div>
          <h2 className="t-h2 mb-8">What it runs on</h2>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
            {item.stack.map((tech, i) => (
              <Reveal
                key={tech}
                delay={i * 100}
                className={`tile rounded-[24px] p-6 ${i === 0 || i === 4 ? "tile-tint" : ""}`}
              >
                <div className="label-sm mb-3">{`0${i + 1}`}</div>
                <div className="t-tile-value">{tech}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12">
        <div className="shell grid gap-3 md:gap-4 lg:grid-cols-2">
          {[
            { dir: "Previous", item: prev, arrow: "←" },
            { dir: "Next", item: next, arrow: "→" },
          ].map((nav, i) => (
            <Reveal key={nav.dir} delay={i * 100}>
              <Link
                href={`/work/${nav.item.slug}`}
                className="card group flex h-full flex-col justify-between rounded-[28px] p-7 md:p-9"
              >
                <div className="label mb-3">{nav.dir}</div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="t-card-title underline-offset-[6px] group-hover:underline">
                    {nav.item.title}
                  </span>
                  <span className="text-subtle">{nav.arrow}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
