import { profile } from "@/data/profile";
import SectionAvatar from "@/components/SectionAvatar";

const LINKS = [
  { label: "GitHub", href: profile.contact.github, icon: "↗" },
  { label: "Instagram", href: profile.contact.instagram, icon: "↗" },
  { label: "LinkedIn", href: profile.contact.linkedin, icon: "↗" },
] as const;

export default function ContactSection() {
  return (
    <section className="w-full max-w-3xl py-8">
      <SectionAvatar src="/avatar2.png" />
      <h2 className="text-2xl font-semibold text-zinc-800 mb-4">İletişim</h2>
      <p className="text-zinc-600 mb-6">Benimle aşağıdaki kanallardan iletişime geçebilirsiniz.</p>
      <ul className="flex flex-wrap gap-4" role="list">
        {LINKS.map(({ label, href, icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/90 border border-zinc-200 text-zinc-700 font-medium shadow-sm hover:bg-zinc-50 hover:border-zinc-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 transition-colors"
            >
              {label}
              <span aria-hidden>{icon}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
