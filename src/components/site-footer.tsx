import { profile } from "@/content/data";
import { Reveal } from "@/components/reveal";

const links = [
  { label: "GitHub", handle: profile.githubHandle, href: profile.github },
  { label: "LinkedIn", handle: profile.linkedinHandle, href: profile.linkedin },
  { label: "Email", handle: profile.email, href: `mailto:${profile.email}` },
  {
    label: "Resume",
    handle: "Download PDF",
    href: "/Kenneth_Webber_Resume.pdf",
    download: true,
  },
];

export function SiteFooter() {
  return (
    <section id="contact" className="w-full py-8 md:py-12">
      <div className="shell grid gap-3 md:gap-4 lg:grid-cols-3">
        <Reveal className="card card-tint flex flex-col justify-between rounded-[28px] p-8 md:p-10 lg:col-span-2">
          <div>
            <div className="label mb-3">Get in touch</div>
            <h2 className="t-h2-about">I read every email. Even the long ones.</h2>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              Email me
              <span>&rarr;</span>
            </a>
            <span className="text-[13px] text-subtle">{profile.email}</span>
          </div>
        </Reveal>

        <Reveal delay={100} className="card flex flex-col justify-between rounded-[28px] p-7">
          <div>
            <div className="label mb-3">Find me</div>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    download={link.download ? "" : undefined}
                    className="group flex items-baseline justify-between py-1 text-[14.5px]"
                  >
                    <span className="text-subtle">{link.label}</span>
                    <span className="text-ink underline-offset-[6px] group-hover:underline">
                      {link.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 text-[12px] text-subtle">
            📍&nbsp;{profile.location} · {profile.availability.toLowerCase()}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
