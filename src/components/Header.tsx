import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-center h-12 sm:h-14 px-3 sm:px-4 bg-white/70 backdrop-blur-sm border-b border-zinc-200/80">
      <Link
        href="/"
        className="flex items-center gap-2 sm:gap-3 text-base sm:text-xl font-semibold text-zinc-800 tracking-tight text-center truncate max-w-[90vw]"
        aria-label="Ana sayfa"
      >
        <Image
          src="/images.png"
          alt=""
          width={32}
          height={32}
          className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 object-contain"
        />
        <span className="truncate">MELİSA ÇİÇEK SOYUBEY</span>
      </Link>
    </header>
  );
}
