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
  /** Hakkımda bölümünde gösterilecek detaylı paragraflar */
  aboutParagraphs: [
    "Hey 👋 21 yaşındayım ve yazılım alanında kendimi sürekli geliştiren bir bilgisayar mühendisliği öğrencisiyim. Bingöl Üniversitesi Bilgisayar Mühendisliği bölümünde öğrenimime devam ederken, aynı zamanda Anadolu Üniversitesi İşletme bölümünde eğitim alıyorum. Teknik bilgiyle iş dünyası bakış açısını birleştirmeyi hedefliyorum.",
    "Yazılım benim için sadece bir meslek değil; problem çözme, üretme ve sürekli öğrenme süreci. Kod yazarken bir yandan sistemi nasıl daha güvenilir ve ölçeklenebilir kılabileceğimi düşünüyor, bir yandan da kullanıcı ve iş ihtiyaçlarını anlamaya çalışıyorum.",
    "Özellikle backend geliştirme, web teknolojileri ve ölçeklenebilir sistemler üzerine yoğunlaşıyorum. RESTful API tasarımı, veritabanı yönetimi ve modern web framework’leriyle projeler geliştiriyorum; Java, Spring Boot, Node.js ve React ekosisteminde kendimi geliştiriyorum.",
    "Hem mühendislik hem işletme perspektifine sahip olmak, yazılımı sadece teknik bir ürün olarak değil; değer üreten, sürdürülebilir çözümler olarak görmeme yardımcı oluyor. Yeni teknolojileri takip ediyor, açık kaynak projelere ve kişisel projelere zaman ayırıyorum.",
    "Takım çalışmasına ve iletişime önem veriyorum; hem teknik hem iş tarafında ortak bir dil kurmak benim için değerli. Projelerde sorumluluk almayı, geri bildirim alıp vermeyi ve sürekli iyileştirmeyi seviyorum.",
  ],
  values: [
    "Temiz kod ve sürdürülebilir mimari",
    "Şeffaf iletişim ve ekip uyumu",
    "Sürekli öğrenme ve merak",
    "Kullanıcı ve iş değeri odaklı düşünme",
    "Açık kaynak ve bilgi paylaşımı",
  ],
  goals: {
    shortTerm: [
      "Backend ve API tasarımında derinleşmek",
      "Gerçek projelerde ekip deneyimi kazanmak",
      "PostgreSQL ve veritabanı performansı konusunda ilerlemek",
    ],
    longTerm: [
      "Yazılım mühendisi olarak ürün ekiplerinde yer almak",
      "Teknik bilgi ile iş vizyonunu birleştiren rollerde çalışmak",
      "Ölçeklenebilir ve güvenilir sistemler tasarlamak",
    ],
  },
  whatILove: [
    "Bir problemi parçalara ayırıp adım adım çözmek",
    "API ve veri modeli tasarlamak",
    "Kodun okunabilir ve bakımı kolay olmasına dikkat etmek",
    "Yeni teknolojileri deneyip projelere taşımak",
  ],
  currentlyLearning: [
    "RESTful API best practices",
    "Veritabanı indeksleme ve sorgu optimizasyonu",
    "React ve modern frontend araçları",
  ],
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
