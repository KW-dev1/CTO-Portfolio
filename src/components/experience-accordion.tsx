"use client";

import { useState } from "react";
import type { Role } from "@/content/data";
import { ExperienceRow } from "@/components/experience-row";
import { Reveal } from "@/components/reveal";

export function ExperienceAccordion({ roles }: { roles: Role[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(roles[0]?.slug ?? null);

  return (
    <div className="grid gap-3 md:gap-4">
      {roles.map((role, i) => (
        <Reveal key={role.slug} delay={i * 100} y={10}>
          <ExperienceRow
            role={role}
            open={openSlug === role.slug}
            onToggle={() => setOpenSlug((cur) => (cur === role.slug ? null : role.slug))}
          />
        </Reveal>
      ))}
    </div>
  );
}
