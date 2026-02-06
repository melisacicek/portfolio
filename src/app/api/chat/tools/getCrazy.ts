
import { tool } from "ai";
import { z } from "zod";


export const getCrazy = tool({
  description:
    "Bu araç şimdiye kadar yaptığım en çılgın şeyi gösterir. Kullanıcı 'Şimdiye kadar yaptığın en çılgın şey nedir?' gibi bir şey sorduğunda kullanın",
  parameters: z.object({}),
  execute: async () => {
    return "Şu an için anlatmayı sevdiğim tek bir 'aşırı çılgın' anı yok, ama kendimi geliştirmek için konfor alanımın dışına çıkmayı seviyorum. Yeni teknolojiler öğrenmek, web ve siber güvenlik tarafında projeler denemek ve bazen de kickboksta sınırlarımı zorlamak benim için yeterince çılgın sayılabilir. 🙂";
  },
});