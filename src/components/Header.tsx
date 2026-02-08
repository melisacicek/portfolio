import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-center h-14 px-4 bg-white/70 backdrop-blur-sm border-b border-zinc-200/80">
      <Link href="/" className="text-xl font-semibold text-zinc-800 tracking-tight" aria-label="Ana sayfa">
        MELİSA ÇİÇEK SOYUBEY
      </Link>
    </header>
  );
}
