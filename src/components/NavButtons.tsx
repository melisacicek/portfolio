"use client";

export type ViewId = "me" | "projeler" | "skills" | "fun" | "iletisim";

const buttons: { id: ViewId; label: string; icon: string }[] = [
  { id: "me", label: "Me", icon: "😊" },
  { id: "projeler", label: "Projeler", icon: "💼" },
  { id: "skills", label: "Skills", icon: "📦" },
  { id: "fun", label: "Fun", icon: "✨" },
  { id: "iletisim", label: "İletişim", icon: "👤" },
];

interface NavButtonsProps {
  activeView: ViewId;
  onSelectView: (id: ViewId) => void;
}

export default function NavButtons({ activeView, onSelectView }: NavButtonsProps) {
  return (
    <nav className="flex flex-wrap justify-center gap-3 mb-8" aria-label="Sayfa bölümleri">
      {buttons.map(({ id, label, icon }) => (
        <button
          key={id}
          type="button"
          onClick={() => onSelectView(id)}
          aria-pressed={activeView === id}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border font-medium shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 ${
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
