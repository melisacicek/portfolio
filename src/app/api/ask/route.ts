import { NextResponse } from "next/server";
import { profile } from "@/data/profile";

const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

function buildProfileContext(): string {
  const p = profile;
  const lines: string[] = [
    `İsim: ${p.name}`,
    `Yaş: ${p.age}`,
    `Konum: ${p.location}`,
    "",
    "Kısa tanıtım:",
    p.shortBio,
    "",
    p.bioParagraph,
    "",
    "Hakkımda (detay):",
    ...p.aboutParagraphs,
    "",
    "Eğitim:",
    ...p.education.map((e) => `- ${e.school}: ${e.field}`),
    "",
    "Beceriler:",
    `Diller: ${p.skills.languages.join(", ")}`,
    `Backend: ${p.skills.backend.join(", ")}`,
    `Veritabanı: ${p.skills.database.join(", ")}`,
    `Web: ${p.skills.web.join(", ")}`,
    `Araçlar: ${p.skills.tools.join(", ")}`,
    "",
    "İlgi alanları:",
    p.interests.join("; "),
    "",
    "Hobiler:",
    p.hobbies.join("; "),
    "",
    "Değer verdiğim konular:",
    p.values.join("; "),
    "",
    "Kısa vadeli hedefler:",
    p.goals.shortTerm.join("; "),
    "",
    "Uzun vadeli hedefler:",
    p.goals.longTerm.join("; "),
    "",
    "Yazılımda sevdiğim şeyler:",
    p.whatILove.join("; "),
    "",
    "Şu an öğrendiklerim:",
    p.currentlyLearning.join("; "),
    "",
    "İletişim:",
    `GitHub: ${p.contact.github}`,
    `LinkedIn: ${p.contact.linkedin}`,
    `Instagram: ${p.contact.instagram} (${p.contact.instagramHandle})`,
    `E-posta: ${p.contact.email}`,
    "",
    "Etiketler:",
    p.tags.join(", "),
  ];
  return lines.join("\n");
}

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Gemini API anahtarı yapılandırılmamış." },
      { status: 501 }
    );
  }

  let body: { question?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Geçersiz istek gövdesi." },
      { status: 400 }
    );
  }

  const question = typeof body.question === "string" ? body.question.trim() : "";
  if (!question) {
    return NextResponse.json(
      { error: "Soru boş olamaz." },
      { status: 400 }
    );
  }

  const context = [
    `Sen ${profile.name} adına yanıt veriyorsun.`,
    "Aşağıdaki yalnızca bu kişiyle ilgili bilgileri kullan.",
    "Bilmediğin veya profilde olmayan konularda uydurma; kibarca sadece profil bilgisiyle cevapla.",
    "Kısa, samimi ve Türkçe yanıt ver.",
    "",
    "--- Profil bilgisi ---",
    buildProfileContext(),
    "",
    "--- Kullanıcının sorusu ---",
    question,
  ].join("\n");

  const payload = {
    contents: [
      {
        role: "user",
        parts: [{ text: context }],
      },
    ],
  };

  try {
    const res = await fetch(`${GEMINI_URL}?key=${encodeURIComponent(apiKey)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      const detail =
        data?.error?.message ||
        (typeof data?.error === "string" ? data.error : undefined) ||
        "Gemini API hatası.";
      return NextResponse.json(
        { error: `Yanıt alınamadı, tekrar deneyin. (${detail})` },
        { status: 502 }
      );
    }

    const candidate = data?.candidates?.[0];
    const text = candidate?.content?.parts?.[0]?.text?.trim() ?? "";
    if (!text) {
      const reason =
        candidate?.finishReason ||
        (candidate?.content?.parts?.length === 0 ? "Boş yanıt" : "Bilinmeyen");
      return NextResponse.json(
        { error: `Yanıt alınamadı, tekrar deneyin. (${reason})` },
        { status: 502 }
      );
    }

    return NextResponse.json({ answer: text });
  } catch {
    return NextResponse.json(
      { error: "Yanıt alınamadı, tekrar deneyin." },
      { status: 502 }
    );
  }
}
