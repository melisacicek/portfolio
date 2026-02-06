
import { tool } from "ai";
import { z } from "zod";


export const getSports = tool({
  description:
    'Bu araç spor alışkanlıklarım ve hobilerim hakkında bilgi verir.',
  parameters: z.object({}),
  execute: async () => {
    return "Spor ve hareketli kalmak benim için önemli. Kickboks ile ilgileniyorum ve bunun yanı sıra yürüyüş yapmayı, gezmeyi ve yeni yerler keşfetmeyi seviyorum. Spor, hem fiziksel hem de mental olarak dengede kalmama yardımcı oluyor.";
  },
});
