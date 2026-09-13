"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { WorkItem } from "@/content/data";

export function ProjectModal({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: WorkItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);
  const open = index !== null;

  const step = useCallback(
    (delta: number) => {
      if (index === null) return;
      onNavigate((index + delta + items.length) % items.length);
    },
    [index, items.length, onNavigate]
  );

  const stepZoom = useCallback(
    (delta: number) => {
      if (index === null) return;
      const shots = items[index].gallery;
      if (!shots || shots.length < 2) return;
      setZoomedIndex((current) =>
        current === null ? current : (current + delta + shots.length) % shots.length
      );
    },
    [index, items]
  );

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (zoomedIndex !== null) setZoomedIndex(null);
        else onClose();
        return;
      }
      if (zoomedIndex !== null) {
        if (event.key === "ArrowRight") stepZoom(1);
        if (event.key === "ArrowLeft") stepZoom(-1);
        return;
      }
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    const { overflow, paddingRight } = document.body.style;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (gap > 0) document.body.style.paddingRight = `${gap}px`;
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [open, onClose, step, stepZoom, zoomedIndex]);

  useEffect(() => {
    setZoomedIndex(null);
    if (!open) return;
    panelRef.current?.scrollTo({ top: 0 });
    panelRef.current?.focus({ preventScroll: true });
  }, [open, index]);

  if (index === null) return null;

  const item = items[index];
  const next = items[(index + 1) % items.length];
  const prev = items[(index - 1 + items.length) % items.length];
  const banner = item.bannerImage ?? item.image;
  const shots = item.gallery ?? [];
  const zoomed = zoomedIndex === null ? null : shots[zoomedIndex];
  const onMedia = Boolean(banner);

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div ref={panelRef} tabIndex={-1} className="modal-panel card">
        <button type="button" onClick={onClose} aria-label="Close project" className="modal-close">
          <span aria-hidden="true">&times;</span>
        </button>

        <div className="px-5 pb-10 pt-6 md:px-9 md:pb-12 md:pt-8">
          <div
            className={`card relative flex min-h-[260px] flex-col justify-between overflow-hidden p-7 md:min-h-[340px] md:p-9 ${
              item.featured ? "card-dark" : ""
            }`}
          >
            {banner && (
              <>
                <Image
                  src={banner}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 66vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(0,0,0,0.22), rgba(0,0,0,0.22)), linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.8) 100%)",
                  }}
                />
              </>
            )}
            <div className="relative">
              {item.tag && <span className={onMedia ? "badge-on-dark" : "badge"}>{item.tag}</span>}
              <h2
                className={`t-h2 ${item.tag ? "mt-4" : ""} ${
                  onMedia ? "on-media-strong" : "text-ink"
                }`}
              >
                {item.title}
              </h2>
            </div>
            <p
              className={`relative mt-3 text-[1.0625rem] leading-[1.7] ${
                onMedia ? "on-media" : "text-subtle"
              }`}
            >
              {item.description}
            </p>
          </div>

          <div className="mt-3 grid gap-3 md:mt-4 md:gap-4 lg:grid-cols-3">
            {[
              { label: "Role", value: item.role },
              { label: "When", value: item.period },
              { label: "Headline", value: item.metric },
            ].map((meta) => (
              <div key={meta.label} className="tile p-5 md:p-6">
                <div className="label mb-1.5">{meta.label}</div>
                <div className="text-[15px] font-medium leading-snug tracking-[-0.01em] text-ink">
                  {meta.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 md:mt-4 md:gap-4 lg:grid-cols-3">
            <div className="card p-7 md:p-9 lg:col-span-2">
              <div className="label mb-3">Overview</div>
              <h3 className="t-h2-about">What it is</h3>
              <p className="mt-4 text-[1.0625rem] leading-[1.7] text-subtle">{item.summary}</p>
            </div>

            <div className="card card-tint flex flex-col justify-between p-7 md:p-9">
              <div className="label mb-3">By the numbers</div>
              <ul className="space-y-3">
                {item.metrics.map((m) => (
                  <li key={m} className="flex gap-2.5 text-[15px] leading-[1.5] text-ink">
                    <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {item.videos && item.videos.length > 0 && (
            <div className="mt-10 md:mt-12">
              <div className="label mb-3">Walkthrough</div>
              <h3 className="t-h2 mb-6">See it running</h3>
              <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
                {item.videos.map((video) => (
                  <figure key={video.src} className="tile overflow-hidden">
                    <div className="relative w-full bg-tint" style={{ aspectRatio: "16 / 9" }}>
                      <iframe
                        src={video.src}
                        title={video.title}
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full border-0"
                      />
                    </div>
                    <figcaption className="px-5 py-4 text-[13px] leading-[1.5] text-subtle">
                      {video.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          {item.gallery && item.gallery.length > 0 && (
            <div className="mt-10 md:mt-12">
              <div className="label mb-3">Screens &amp; architecture</div>
              <h3 className="t-h2 mb-6">A look at it</h3>
              <div
                className={`grid gap-3 md:gap-4 ${
                  item.gallery.length > 1 ? "sm:grid-cols-2" : ""
                }`}
              >
                {item.gallery.map((shot, shotIndex) => (
                  <figure key={shot.src} className="tile flex h-full flex-col overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setZoomedIndex(shotIndex)}
                      aria-label={`Enlarge: ${shot.caption}`}
                      className="group relative block w-full cursor-zoom-in bg-tint"
                      style={{ aspectRatio: "16 / 9" }}
                    >
                      <Image
                        src={shot.src}
                        alt={shot.caption}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </button>
                    <figcaption className="mt-auto px-5 py-4 text-[13px] leading-[1.5] text-subtle">
                      {shot.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 md:mt-12">
            <div className="label mb-3">What I built</div>
            <h3 className="t-h2 mb-6">The work behind the number</h3>
            <div className="grid gap-3 md:gap-4">
              {item.highlights.map((line, i) => (
                <div key={line} className="tile flex items-start gap-4 p-6 md:gap-6 md:p-7">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tint text-[15px] font-medium text-ink">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="pt-2 text-[14.5px] leading-[1.6] text-subtle">{line}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 md:mt-12">
            <div className="label mb-3">Stack</div>
            <h3 className="t-h2 mb-6">What it runs on</h3>
            <div className="grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
              {item.stack.map((tech, i) => (
                <div key={tech} className={`tile p-6 ${i === 0 || i === 4 ? "tile-tint" : ""}`}>
                  <div className="label-sm mb-3">{`0${i + 1}`}</div>
                  <div className="t-tile-value">{tech}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-3 md:mt-12 md:gap-4 lg:grid-cols-2">
            {[
              { dir: "Previous", target: prev, arrow: "←", delta: -1 },
              { dir: "Next", target: next, arrow: "→", delta: 1 },
            ].map((nav) => (
              <button
                key={nav.dir}
                type="button"
                onClick={() => step(nav.delta)}
                className="card group flex h-full flex-col justify-between p-7 text-left md:p-9"
              >
                <div className="label mb-3">{nav.dir}</div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="t-card-title underline-offset-[6px] group-hover:underline">
                    {nav.target.title}
                  </span>
                  <span className="text-subtle">{nav.arrow}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {zoomed && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={zoomed.caption}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setZoomedIndex(null);
          }}
        >
          <button
            type="button"
            onClick={() => setZoomedIndex(null)}
            aria-label="Close image"
            className="modal-close lightbox-close"
          >
            <span aria-hidden="true">&times;</span>
          </button>

          {shots.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => stepZoom(-1)}
                aria-label="Previous image"
                className="lightbox-nav lightbox-nav-prev"
              >
                <span aria-hidden="true">&#8592;</span>
              </button>
              <button
                type="button"
                onClick={() => stepZoom(1)}
                aria-label="Next image"
                className="lightbox-nav lightbox-nav-next"
              >
                <span aria-hidden="true">&#8594;</span>
              </button>
            </>
          )}

          <figure className="lightbox-figure">
            <Image
              src={zoomed.src}
              alt={zoomed.caption}
              width={2400}
              height={1350}
              sizes="100vw"
              className="h-auto max-h-[80vh] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-3 text-center text-[13px] leading-[1.5] text-white/80">
              {zoomed.caption}
              {shots.length > 1 && (
                <span className="ml-2 text-white/50">
                  {(zoomedIndex ?? 0) + 1} / {shots.length}
                </span>
              )}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
