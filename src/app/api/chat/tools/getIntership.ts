import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Ne tür bir staj aradığımın özetini, iletişim bilgilerimi ve bana nasıl ulaşılacağını verir. Kullanıcı staj araştırmam veya fırsatlar için bana nasıl ulaşacağı hakkında sorduğunda bu aracı kullanın.",
  parameters: z.object({}),
  execute: async () => {
    return `İşte staj ve iş fırsatları için aradığım şeyler 👇

- 🎓 **Profil**: Bilgisayar Mühendisliği öğrencisiyim, yazılım geliştirme ve siber güvenlik alanlarında kendimi geliştiriyorum.
- 🧑‍💻 **Odak Alanlarım**: Web geliştirme, REST API geliştirme, Java & Spring Boot, React, PostgreSQL, temel siber güvenlik konuları.
- 🌍 **Konum**: Türkiye, aynı zamanda uzaktan (remote) fırsatlara da açığım.
- 📚 **Hedefim**: Gerçek projelerde sorumluluk alarak hem backend hem de güvenlik bakış açımı güçlendirmek, takım içinde üretken bir geliştirici olmak.

📬 **Bana ulaşmak için**:
- E-posta: **melissaciceksoyubey@gmail.com**
- LinkedIn: **https://www.linkedin.com/in/melisaciceksoyubey/**
- GitHub: **https://github.com/melisacicek**

Staj veya junior pozisyonlar için her zaman konuşmaya açığım.`;
  },
});
