import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description:
    'Bu araç özgeçmişimi gösterir.',
  parameters: z.object({}),
  execute: async () => {
    return "Portföydeki özgeçmiş kartından CV dosyamı PDF olarak indirebilirsin. Ayrıca eğitim geçmişim ve deneyimlerim hakkında daha fazla detay için LinkedIn profilimi inceleyebilirsin: https://www.linkedin.com/in/melisaciceksoyubey/";
  },
});
