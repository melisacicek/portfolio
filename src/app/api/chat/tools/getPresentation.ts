import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'Bu araç Melisa Çiçek Soyubey\'in kısa bir kişisel tanıtımını döndürür. "Sen kimsin?" veya "Kendinden bahset" sorusunu cevaplamak için kullanılır.',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "Ben Melisa Çiçek Soyubey, 21 yaşında Bilgisayar Mühendisliği öğrencisiyim. Web geliştirme, REST API tasarımı, PostgreSQL ile veri tabanı modelleme ve siber güvenlik alanlarında kendimi geliştiriyorum. Boş zamanlarımda kitap okumayı, yürüyüş yapmayı, yeni yerler keşfetmeyi ve kickboks ile ilgilenmeyi seviyorum. Projelerime GitHub üzerinden ulaşabilirsin: https://github.com/melisacicek",
    };
  },
});
