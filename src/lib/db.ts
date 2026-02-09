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

const DAILY_LIMIT = 10;

/**
 * Bu IP'nin bugün (UTC günü) sorduğu soru sayısını döner.
 * DB yoksa veya hata olursa 0 döner.
 */
export async function getTodayQuestionCount(ip: string): Promise<number> {
  if (!sql) return 0;
  try {
    await ensureTable();
    const rows = await sql`
      SELECT COUNT(*)::int AS cnt
      FROM visitor_questions
      WHERE ip = ${ip}
        AND created_at >= date_trunc('day', now() AT TIME ZONE 'UTC')
    `;
    const row = Array.isArray(rows) ? rows[0] : null;
    const cnt = row?.cnt;
    return typeof cnt === "number" ? cnt : Number(cnt) || 0;
  } catch {
    return 0;
  }
}

/**
 * Bu IP için günlük limit aşıldı mı?
 */
export async function isOverDailyLimit(ip: string): Promise<boolean> {
  const count = await getTodayQuestionCount(ip);
  return count >= DAILY_LIMIT;
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
