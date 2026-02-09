import { neon } from "@neondatabase/serverless";

const sql = process.env.DATABASE_URL
  ? neon(process.env.DATABASE_URL)
  : null;

/** Tabloyu yoksa oluşturur (ilk kullanımda). */
async function ensureTable(): Promise<void> {
  if (!sql) return;
  await sql`
    CREATE TABLE IF NOT EXISTS visitor_questions (
      id SERIAL PRIMARY KEY,
      ip VARCHAR(45) NOT NULL,
      question TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
}

/**
 * Ziyaretçi IP'si ve soruyu veritabanına kaydeder.
 * DATABASE_URL yoksa veya hata olursa sessizce atlanır (portfolio çalışmaya devam eder).
 */
export async function saveVisitorQuestion(ip: string, question: string): Promise<void> {
  if (!sql || !question.trim()) return;
  try {
    await ensureTable();
    await sql`
      INSERT INTO visitor_questions (ip, question)
      VALUES (${ip}, ${question.trim()})
    `;
  } catch {
    // Loglama yapılabilir; API yanıtını bozmayalım
  }
}
