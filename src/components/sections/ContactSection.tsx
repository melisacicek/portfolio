import { profile } from "@/data/profile";
import SectionAvatar from "@/components/SectionAvatar";

const LINKS = [
  { label: "GitHub", href: profile.contact.github, icon: "↗" },
  { label: "Instagram", href: profile.contact.instagram, icon: "↗" },
  { label: "LinkedIn", href: profile.contact.linkedin, icon: "↗" },
] as const;

export default function ContactSection() {
  return (
    <section className="w-full max-w-3xl py-4 sm:py-8 px-1 sm:px-0">
      <SectionAvatar src="/avatar2.jpg" />
      <h2 className="text-xl sm:text-2xl font-semibold text-zinc-800 mb-3 sm:mb-4">İletişim</h2>
      <p className="text-zinc-600 mb-4 sm:mb-6 text-sm sm:text-base">Benimle aşağıdaki kanallardan iletişime geçebilirsiniz.</p>
      <ul className="flex flex-wrap gap-2 sm:gap-4" role="list">
        {LINKS.map(({ label, href, icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 min-h-[44px] px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base rounded-lg sm:rounded-xl bg-white/90 border border-zinc-200 text-zinc-700 font-medium shadow-sm hover:bg-zinc-50 hover:border-zinc-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 transition-colors"
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
