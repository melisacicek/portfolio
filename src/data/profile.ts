/**
 * Merkezi profil verisi – MeView, FAQ ve diğer sayfalarda kullanılır.
 * Kaynak: src/profil.txt
 */

export const profile = {
  name: "Melisa Çiçek Soyubey",
  age: 21,
  location: "Türkiye",
  greeting: "Merhaba, ben Melisa Çiçek Soyubey 👋",
  shortBio:
    "21 yaşındayım ve yazılım alanında kendimi sürekli geliştiren bir bilgisayar mühendisliği öğrencisiyim. Bingöl Üniversitesi Bilgisayar Mühendisliği bölümünde öğrenimime devam ederken, aynı zamanda Anadolu Üniversitesi İşletme bölümünde eğitim alıyorum. Teknik bilgiyle iş dünyası bakış açısını birleştirmeyi hedefliyorum.",
  bioParagraph:
    "Yazılım benim için sadece bir meslek değil; problem çözme, üretme ve sürekli öğrenme süreci. Özellikle backend geliştirme, web teknolojileri ve ölçeklenebilir sistemler üzerine yoğunlaşıyorum.",
  education: [
    { school: "Bingöl Üniversitesi", field: "Bilgisayar Mühendisliği" },
    { school: "Anadolu Üniversitesi", field: "İşletme (Çift Eğitim)" },
  ],
  skills: {
    languages: ["Java", "JavaScript", "Node.js"],
    backend: ["Spring Boot", "RESTful API"],
    database: ["PostgreSQL"],
    web: ["HTML", "CSS", "JavaScript", "React"],
    tools: ["Git", "GitHub"],
  },
  interests: [
    "Yazılım ve yeni teknolojiler",
    "Backend geliştirme",
    "Kişisel gelişim ve teknik kitaplar",
    "Yeni yerler keşfetmek ve farklı kültürler tanımak",
  ],
  hobbies: [
    "Kitap okumak",
    "Yeni şehirler ve mekanlar keşfetmek",
    "Farklı deneyimler edinmek",
  ],
  contact: {
    github: "https://github.com/melisacicek",
    linkedin: "https://www.linkedin.com/in/melisaciceksoyubey/",
    instagram: "https://www.instagram.com/dailycicek/",
    email: "melissaciceksoyubey@gmail.com",
    instagramHandle: "@dailycicek",
  },
  tags: [
    "Bilgisayar Mühendisi",
    "PostgreSQL",
    "Java",
    "Spring Boot",
    "React",
    "Node.js",
    "JavaScript",
    "Backend",
  ],
} as const;
