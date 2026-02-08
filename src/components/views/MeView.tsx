import Image from "next/image";
import { profile } from "@/data/profile";
import SectionAvatar from "@/components/SectionAvatar";

export default function MeView() {
  return (
    <section className="w-full max-w-3xl py-8">
      <SectionAvatar src="/avatar1.png" />
      <div className="rounded-2xl bg-white/90 border border-zinc-200 shadow-lg overflow-hidden">
        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="shrink-0 flex justify-center md:block">
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src="/avatar1.png"
                alt={profile.name}
                width={176}
                height={176}
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">
              {profile.name}
            </h2>
            <p className="text-zinc-600 mt-1">{profile.age} yaşında • {profile.location}</p>
            <p className="text-zinc-600 mt-4 leading-relaxed">
              Hey 👋 {profile.shortBio}
            </p>
            <p className="text-zinc-600 mt-3 leading-relaxed">
              {profile.bioParagraph}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {profile.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-zinc-800 text-white text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
