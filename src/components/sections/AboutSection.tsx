import { profile } from "@/data/profile";

export default function AboutSection() {
  return (
    <section id="hakkimda" className="w-full max-w-3xl py-16 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-zinc-800 mb-6">Hakkımda</h2>
      <div className="text-zinc-600 leading-relaxed space-y-4">
        {profile.aboutParagraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
