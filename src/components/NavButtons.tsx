"use client";

export type ViewId = "me" | "projeler" | "skills" | "fun" | "iletisim";

const buttons: { id: ViewId; label: string; icon: string }[] = [
  { id: "me", label: "Ben", icon: "😊" },
  { id: "projeler", label: "Projeler", icon: "💼" },
  { id: "skills", label: "Skills", icon: "📦" },
  { id: "fun", label: "Fun", icon: "✨" },
  { id: "iletisim", label: "İletişim", icon: "👤" },
];

interface NavButtonsProps {
  activeView: ViewId | null;
  onSelectView: (id: ViewId | null) => void;
}

export default function NavButtons({ activeView, onSelectView }: NavButtonsProps) {
  return (
    <nav
      className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-1 sm:px-0"
      aria-label="Sayfa bölümleri"
    >
      {buttons.map(({ id, label, icon }) => (
        <button
          key={id}
          type="button"
          onClick={() => onSelectView(activeView === id ? null : id)}
          aria-pressed={activeView === id}
          className={`flex items-center justify-center gap-1.5 sm:gap-2 min-h-[44px] px-3 py-2.5 sm:px-4 text-sm sm:text-base rounded-lg sm:rounded-xl border font-medium shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 ${
            activeView === id
              ? "bg-zinc-800 text-white border-zinc-800"
              : "bg-white/90 border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300"
          }`}
        >
          <span aria-hidden>{icon}</span>
          {label}
        </button>
      ))}
    </nav>
  );
}
