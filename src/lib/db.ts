import { neon } from "@neondatabase/serverless";

const hasDatabaseUrl = Boolean(process.env.DATABASE_URL);
const sql = hasDatabaseUrl ? neon(process.env.DATABASE_URL!) : null;

if (hasDatabaseUrl) {
  console.log("[db] DATABASE_URL tanımlı, veritabanı kullanılacak.");
} else {
  console.log("[db] DATABASE_URL yok, veritabanı işlemleri atlanacak.");
}

/** Tabloyu yoksa oluşturur; mevcut tabloya mac sütunu yoksa ekler. */
async function ensureTable(): Promise<void> {
  if (!sql) return;
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS visitor_questions (
        id SERIAL PRIMARY KEY,
        ip VARCHAR(45) NOT NULL,
        mac VARCHAR(17),
        question TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `;
    await sql`ALTER TABLE visitor_questions ADD COLUMN IF NOT EXISTS mac VARCHAR(17)`;
  } catch (err) {
    console.error("[db] ensureTable hatası:", err);
    throw err;
  }
}

const DAILY_LIMIT = 10;

/**
 * Bu IP'nin bugün (UTC günü) sorduğu soru sayısını döner.
 * DB yoksa veya hata olursa 0 döner.
 */
export async function getTodayQuestionCount(ip: string): Promise<number> {
  if (!sql) {
    console.log("[db] getTodayQuestionCount: DB yok, 0 döndürülüyor.");
    return 0;
  }
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
    const count = typeof cnt === "number" ? cnt : Number(cnt) || 0;
    console.log("[db] getTodayQuestionCount:", { ip, count });
    return count;
  } catch (err) {
    console.error("[db] getTodayQuestionCount hatası:", err);
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
 * Ziyaretçi IP, MAC (varsa) ve soruyu veritabanına kaydeder.
 * Not: Tarayıcıdan gelen isteklerde MAC adresi HTTP ile gelmez; özel istemci X-Client-MAC header'ı ile gönderebilir.
 * DATABASE_URL yoksa veya hata olursa sessizce atlanır (portfolio çalışmaya devam eder).
 */
export async function saveVisitorQuestion(
  ip: string,
  question: string,
  mac?: string | null
): Promise<void> {
  if (!sql) {
    console.log("[db] saveVisitorQuestion: DB yok, kayıt atlanıyor.");
    return;
  }
  if (!question.trim()) {
    console.log("[db] saveVisitorQuestion: boş soru, kayıt atlanıyor.");
    return;
  }
  const macVal = mac?.trim() || null;
  try {
    await ensureTable();
    await sql`
      INSERT INTO visitor_questions (ip, mac, question)
      VALUES (${ip}, ${macVal}, ${question.trim()})
    `;
    console.log("[db] Kayıt eklendi:", { ip, mac: macVal ?? "(yok)", questionLength: question.trim().length });
  } catch (err) {
    console.error("[db] saveVisitorQuestion hatası:", err);
  }
}
