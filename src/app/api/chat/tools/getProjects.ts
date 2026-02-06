
import { tool } from "ai";
import { z } from "zod";


export const getProjects = tool({
  description:
    "Bu araç Melisa tarafından yapılan projeler hakkında bilgi verir.",
  parameters: z.object({}),
  execute: async () => {
    return "Portföydeki projeler bölümünde bazı çalışmalarımı görebilirsin. Daha fazlası için GitHub profilimi inceleyebilirsin: https://github.com/melisacicek. Projelerim arasında Java & Spring Boot ile geliştirdiğim REST API\'ler, React tabanlı web arayüzleri ve PostgreSQL kullandığım uygulamalar yer alıyor. Dilediğin proje hakkında detay sorabilirsin.";
  },
});
