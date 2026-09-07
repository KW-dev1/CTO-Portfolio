"use client";

import { useId } from "react";
import type { Role } from "@/content/data";

export function ExperienceRow({
  role,
  open,
  onToggle,
}: {
  role: Role;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();

  return (
    <div className="tile rounded-[24px]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="grid w-full items-start gap-4 p-6 text-left md:grid-cols-12 md:gap-6 md:p-7"
      >
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

        <div className="flex items-start justify-between gap-3 md:col-span-4">
          <span className="text-[14.5px] leading-[1.6] text-subtle">{role.product}</span>
          <span
            aria-hidden
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tint text-ink transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </div>
      </button>

      <div
        id={panelId}
        className={`overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-hairline px-6 pb-6 pt-5 md:px-7 md:pb-7">
          <div className="flex flex-wrap gap-1.5">
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
        </div>
      </div>
    </div>
  );
}
