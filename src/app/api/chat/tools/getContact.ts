import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    'Bu araç iletişim bilgilerimi gösterir.',
  parameters: z.object({}),
  execute: async () => {
    return `Benimle aşağıdaki kanallardan iletişime geçebilirsin:

- E-posta: melissaciceksoyubey@gmail.com
- GitHub: https://github.com/melisacicek
- LinkedIn: https://www.linkedin.com/in/melisaciceksoyubey/
- Instagram: https://www.instagram.com/dailycicek/

Mesajlara elimden geldiğince hızlı dönmeye çalışıyorum.`;
  },
});
