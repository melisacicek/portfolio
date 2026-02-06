import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description:
    'Bu araç yeteneklerimin listesini gösterir.',
  parameters: z.object({}),
  execute: async () => {
    return "Web geliştirme, REST API tasarımı ve veri tabanı tarafında çalışıyorum. Java ve Spring Boot ile backend geliştiriyorum, React ve JavaScript ile arayüz geliştiriyorum. PostgreSQL ile veri tabanı modelleme ve sorgulama yapıyorum. Ayrıca siber güvenlik alanına özellikle ilgi duyuyorum ve bu alandaki temel kavramlar, güvenli kod geliştirme ve ağ güvenliği konularında kendimi geliştiriyorum.";
  },
});
