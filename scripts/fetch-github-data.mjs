/**
 * Build öncesi çalışır: GitHub repos + README'leri alıp
 * public/repos.json ve src/data/generated-repos-details.json yazar.
 * Statik export için API route kullanılamadığından bu veriler build-time'da üretilir.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

// .env.local yükle (Node ortamında next build bunu otomatik yapmaz)
try {
  const envPath = path.join(root, ".env.local");
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, "utf8");
    content.split("\n").forEach((line) => {
      const m = line.match(/^([^#=]+)=(.*)$/);
      if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, "");
    });
  }
} catch (e) {
  console.warn(" .env.local okunamadı:", e.message);
}

const token = process.env.GITHUB_TOKEN;
const username = process.env.GITHUB_USERNAME || "melisacicek";

if (!token) {
  console.warn(" GITHUB_TOKEN yok; boş repo listesi yazılacak.");
}

async function fetchRepos() {
  if (!token) return [];
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=30`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    }
  );
  if (!res.ok) throw new Error(`Repos: ${res.status}`);
  const data = await res.json();
  return data.map((r) => ({
    id: r.id,
    name: r.name,
    description: r.description,
    html_url: r.html_url,
    language: r.language,
    stargazers_count: r.stargazers_count,
    updated_at: r.updated_at,
  }));
}

async function fetchReadme(repoName) {
  if (!token) return null;
  const res = await fetch(
    `https://api.github.com/repos/${username}/${repoName}/readme`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.raw+json",
      },
    }
  );
  if (res.status === 404 || !res.ok) return null;
  return res.text();
}

async function main() {
  console.log(" GitHub verileri alınıyor...");
  const repos = await fetchRepos();
  fs.writeFileSync(
    path.join(root, "public", "repos.json"),
    JSON.stringify(repos),
    "utf8"
  );
  console.log(" public/repos.json yazıldı (" + repos.length + " repo).");

  const details = {};
  for (const repo of repos) {
    const readme = await fetchReadme(repo.name);
    details[repo.name] = { repo, readme };
  }
  const dataPath = path.join(root, "src", "data", "generated-repos-details.json");
  fs.mkdirSync(path.dirname(dataPath), { recursive: true });
  fs.writeFileSync(dataPath, JSON.stringify(details), "utf8");
  console.log(" src/data/generated-repos-details.json yazıldı.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
