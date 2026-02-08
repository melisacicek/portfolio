import Image from "next/image";
import { profile } from "@/data/profile";
import SectionAvatar from "@/components/SectionAvatar";

export default function MeView() {
  return (
    <section className="w-full max-w-3xl py-4 sm:py-8 px-1 sm:px-0">
      <SectionAvatar src="/avatar1.jpg" />
      <div className="rounded-xl sm:rounded-2xl bg-white/90 border border-zinc-200 shadow-lg overflow-hidden">
        <div className="p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
          <div className="shrink-0 flex justify-center md:block">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src="/avatar1.jpg"
                alt={profile.name}
                width={176}
                height={176}
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900">
              {profile.name}
            </h2>
            <p className="text-zinc-600 mt-1 text-sm sm:text-base">{profile.age} yaşında • {profile.location}</p>
            <p className="text-zinc-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
              Hey 👋 {profile.shortBio}
            </p>
            <p className="text-zinc-600 mt-2 sm:mt-3 leading-relaxed text-sm sm:text-base">
              {profile.bioParagraph}
            </p>
            <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-4 text-zinc-600 text-xs sm:text-sm">
              <div>
                <span className="font-semibold text-zinc-800">Değer verdiğim konular:</span>
                <p className="mt-1">{profile.values.join(" · ")}</p>
              </div>
              <div>
                <span className="font-semibold text-zinc-800">Kısa vadeli hedefler:</span>
                <ul className="mt-1 list-disc list-inside">{profile.goals.shortTerm.map((g, i) => <li key={i}>{g}</li>)}</ul>
              </div>
              <div>
                <span className="font-semibold text-zinc-800">Yazılımda sevdiğim şeyler:</span>
                <p className="mt-1">{profile.whatILove.join(" · ")}</p>
              </div>
              <div>
                <span className="font-semibold text-zinc-800">Şu an öğrendiklerim:</span>
                <p className="mt-1">{profile.currentlyLearning.join(", ")}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-5">
              {profile.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-zinc-800 text-white text-xs sm:text-sm font-medium"
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
