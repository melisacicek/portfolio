import Image from "next/image";
import { profile } from "@/data/profile";
import SectionAvatar from "@/components/SectionAvatar";

const FUN_IMAGES = [
  { src: "/fun1.jpg", alt: "Manzara ve köy görünümü", caption: "Keşfettiğim manzaralar" },
  { src: "/fun2.jpg", alt: "Kedi portresi", caption: "Doğa ve hayvanlar" },
  { src: "/fun3.jpg", alt: "Kız Kulesi, İstanbul", caption: "Şehirler ve mekanlar" },
] as const;

export default function FunSection() {
  return (
    <section className="w-full max-w-3xl py-8">
      <SectionAvatar src="/avatar1.png" />
      <h2 className="text-2xl font-semibold text-zinc-800 mb-4">Fun</h2>
      <p className="text-zinc-600 mb-6 leading-relaxed">
        Yoğun teknik çalışmaların yanında dengeli bir yaşam sürmeyi önemsiyorum. Hobilerim:
      </p>
      <ul className="list-disc list-inside text-zinc-600 space-y-1 mb-8">
        {profile.hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
      <p className="text-zinc-600 mb-6">
        Yeni yerler keşfetmek ve farklı deneyimler edinmek benim için hem dinlenme hem ilham kaynağı.
        Aşağıda hobilerimden birkaç anı paylaşıyorum.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {FUN_IMAGES.map(({ src, alt, caption }) => (
          <figure key={src} className="rounded-xl overflow-hidden bg-white/90 border border-zinc-200 shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={src}
                alt={alt}
                width={400}
                height={300}
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
            <figcaption className="p-3 text-sm text-zinc-600 text-center">
              {caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
