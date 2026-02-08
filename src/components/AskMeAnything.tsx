"use client";

import { useState, useCallback } from "react";
import { profile } from "@/data/profile";

type FAQEntry = { keywords: string[]; answer: string };

const FAQ: FAQEntry[] = [
  // Kimlik / tanıtım
  {
    keywords: ["kimsin", "kim", "tanıt", "tanış", "kendini", "who are you", "sen kim"],
    answer: `Ben ${profile.name}. ${profile.shortBio}`,
  },
  {
    keywords: ["ne iş", "ne iş yapıyorsun", "meslek", "ünvan", "rol"],
    answer: "Bilgisayar mühendisliği öğrencisiyim; yazılım alanında kendimi geliştiriyorum. Backend ve web teknolojileri üzerine çalışıyorum.",
  },
  // Eğitim
  {
    keywords: ["nerede okuyorsun", "hangi üniversite", "okul", "üniversite", "bingöl", "anadolu", "eğitim", "öğrenci"],
    answer: "Bingöl Üniversitesinde bilgisayar mühendisliği, Anadolu Üniversitesinde işletme (çift eğitim) okuyorum.",
  },
  {
    keywords: ["çift anadal", "çift eğitim", "işletme", "neden işletme"],
    answer: "Anadolu Üniversitesinde işletme okuyarak çift eğitim yapıyorum. Teknik bilgiyle iş dünyası bakış açısını birleştirmeyi hedefliyorum.",
  },
  {
    keywords: ["hangi bölüm", "bölüm", "bilgisayar mühendisliği"],
    answer: "Bingöl Üniversitesi Bilgisayar Mühendisliği ve Anadolu Üniversitesi İşletme bölümlerinde okuyorum.",
  },
  // Yaş / konum
  {
    keywords: ["yaş", "kaç yaş", "age", "kaç yaşındasın"],
    answer: `${profile.age} yaşındayım.`,
  },
  {
    keywords: ["nerede yaşıyorsun", "türkiye", "turkey", "şehir", "nerede oturuyorsun", "konum"],
    answer: `${profile.location}'de yaşıyorum.`,
  },
  // Teknolojiler / skills
  {
    keywords: ["teknoloji", "teknolojiler", "hangi diller", "skills", "beceri", "yetenek", "biliyorsun", "kullanıyorsun", "hangi programlama"],
    answer: "Java, JavaScript, Node.js, Spring Boot, React, PostgreSQL kullanıyorum. Web için HTML, CSS, JavaScript ve React; araç olarak Git, GitHub. Özellikle backend ve PostgreSQL ile ilgileniyorum.",
  },
  {
    keywords: ["postgresql", "veritabanı", "database", "db", "sql"],
    answer: "PostgreSQL ile özellikle ilgileniyorum; veritabanı tasarımı ve backend geliştirmede kullanıyorum.",
  },
  {
    keywords: ["java", "spring", "spring boot", "backend"],
    answer: "Java ve Spring Boot ile backend geliştirme yapıyorum; RESTful API ve sürdürülebilir mimariye önem veriyorum.",
  },
  {
    keywords: ["react", "frontend", "javascript", "node", "node.js"],
    answer: "React ve JavaScript ile frontend, Node.js ile backend tarafında da çalışıyorum. Web teknolojileri ve ölçeklenebilir sistemlere yoğunlaşıyorum.",
  },
  {
    keywords: ["git", "github", "versiyon"],
    answer: "Git ve GitHub kullanıyorum; projelerimi GitHub'da paylaşıyorum. github.com/melisacicek adresinden ulaşabilirsiniz.",
  },
  // Projeler
  {
    keywords: ["proje", "projeler", "projects", "github", "repos", "repo"],
    answer: "Projelerim GitHub'da. Sayfadaki 'Projeler' bölümünden veya doğrudan github.com/melisacicek üzerinden inceleyebilirsiniz.",
  },
  {
    keywords: ["hangi projeler", "öne çıkan", "weather", "library"],
    answer: "GitHub'da hava durumu uygulaması (weatherAPI), kütüphane sistemi gibi projelerim var. Projeler sekmesinden detaylara ve README'lere ulaşabilirsiniz.",
  },
  // İletişim
  {
    keywords: ["iletişim", "contact", "ulaş", "nasıl ulaşırım", "link", "sosyal", "eriş", "irtibat"],
    answer: `GitHub: ${profile.contact.github}, Instagram: ${profile.contact.instagram} (${profile.contact.instagramHandle}), LinkedIn: ${profile.contact.linkedin}, E-posta: ${profile.contact.email}`,
  },
  {
    keywords: ["email", "e-posta", "mail", "eposta"],
    answer: `E-posta adresim: ${profile.contact.email}`,
  },
  {
    keywords: ["linkedin", "linkedin adresin", "linkedin link"],
    answer: `LinkedIn: ${profile.contact.linkedin}`,
  },
  {
    keywords: ["instagram", "ig", "insta", "dailycicek"],
    answer: `Instagram: ${profile.contact.instagram} (${profile.contact.instagramHandle})`,
  },
  {
    keywords: ["github link", "github adresin", "github hesabı"],
    answer: `GitHub: ${profile.contact.github}`,
  },
  // Hobiler / ilgi alanları
  {
    keywords: ["hobi", "hobiler", "boş zaman", "ne yapıyorsun", "nasıl geçiriyorsun"],
    answer: "Kitap okumayı, yeni şehirler ve mekanlar keşfetmeyi, farklı deneyimler edinmeyi seviyorum. Yoğun teknik çalışmanın yanında dengeli bir yaşam sürmeyi önemsiyorum.",
  },
  {
    keywords: ["kitap", "okumak", "okuyor musun"],
    answer: "Evet, kitap okumayı seviyorum; özellikle kişisel gelişim ve teknik kitaplara ilgi duyuyorum.",
  },
  {
    keywords: ["seyahat", "gezmek", "keşfetmek", "şehir", "yer"],
    answer: "Yeni yerler keşfetmeyi ve farklı kültürler tanımayı seviyorum; boş zamanlarımda yeni şehirler ve mekanlar keşfederim.",
  },
  {
    keywords: ["ilgi", "ilgi alanı", "ilgi alanların", "neye ilgi"],
    answer: "Yazılım ve yeni teknolojiler, backend geliştirme, kişisel gelişim ve teknik kitaplar, yeni yerler keşfetmek ve farklı kültürler tanımak.",
  },
  // Hedefler / yaklaşım
  {
    keywords: ["hedef", "hedeflerin", "gelecek", "plan", "kariyer"],
    answer: "Teknik bilgiyle iş dünyası bakış açısını birleştirmeyi hedefliyorum. Backend, web teknolojileri ve ölçeklenebilir sistemler üzerine yoğunlaşıyorum; temiz kod ve sürdürülebilir mimariye önem veriyorum.",
  },
  {
    keywords: ["neden yazılım", "niye bilgisayar", "yazılım neden"],
    answer: "Yazılım benim için sadece bir meslek değil; problem çözme, üretme ve sürekli öğrenme süreci. Backend geliştirme ve web teknolojilerine ilgi duyuyorum.",
  },
  {
    keywords: ["temiz kod", "mimari", "sürdürülebilir", "ekip"],
    answer: "Temiz kod yazımı, sürdürülebilir mimari ve ekip çalışmasına uyum konularına özellikle önem veriyorum.",
  },
  // Merhaba / selam
  {
    keywords: ["merhaba", "selam", "hey", "hi", "hello", "naber", "nasılsın"],
    answer: "Merhaba! 👋 Bana eğitimim, projelerim, becerilerim, hobilerim veya iletişim bilgilerim hakkında soru sorabilirsiniz.",
  },
  // Yardım
  {
    keywords: ["yardım", "help", "ne sorabilirim", "sorular", "örnek soru"],
    answer: "Örneğin şunları sorabilirsiniz: Kimsin? Nerede okuyorsun? Hangi teknolojileri kullanıyorsun? Hobilerin neler? İletişim bilgilerin? Projelerin nerede? E-posta adresin?",
  },
];

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[ğüşıöç]/g, (c) => ({ ğ: "g", ü: "u", ş: "s", ı: "i", ö: "o", ç: "c" }[c] ?? c))
    .trim();
}

function findAnswer(query: string): string | null {
  const n = normalize(query);
  if (!n) return null;
  for (const entry of FAQ) {
    const match = entry.keywords.some((k) => n.includes(normalize(k)));
    if (match) return entry.answer;
  }
  return null;
}

const FALLBACK_MESSAGE =
  "Bu soruya hazır bir cevabım yok. Şunları deneyebilirsiniz: 'Kimsin?', 'Nerede okuyorsun?', 'Hangi teknolojiler?', 'Hobilerin neler?', 'İletişim bilgilerin?', 'Projelerin nerede?', 'E-posta adresin?' veya 'Yardım'.";

export default function AskMeAnything() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
      const result = findAnswer(query);
      setAnswer(result ?? FALLBACK_MESSAGE);
    },
    [query]
  );

  return (
    <div className="w-full max-w-2xl mx-auto mb-10">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Bana bir şey sor..."
          className="flex-1 px-4 py-3 rounded-full border border-zinc-200 bg-white/90 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:border-transparent focus-visible:ring-2 focus-visible:ring-zinc-300"
          aria-label="Soru sor"
        />
        <button
          type="submit"
          className="shrink-0 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
          aria-label="Gönder"
        >
          <span className="sr-only">Gönder</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </form>
      {submitted && (
        <div
          className="mt-4 p-4 rounded-xl bg-white/90 border border-zinc-200 text-zinc-700 shadow-sm"
          role="status"
          aria-live="polite"
        >
          {answer}
        </div>
      )}
    </div>
  );
}
