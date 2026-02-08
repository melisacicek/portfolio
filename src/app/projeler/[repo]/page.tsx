import Link from "next/link";
import ReactMarkdown from "react-markdown";
import details from "@/data/generated-repos-details.json";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

type DetailsMap = Record<string, { repo: Repo; readme: string | null }>;

export function generateStaticParams() {
  const d = details as DetailsMap;
  return Object.keys(d).map((repo) => ({ repo }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ repo: string }>;
}) {
  const { repo: repoName } = await params;
  const d = details as DetailsMap;
  const entry = d[repoName];

  if (!entry) {
    return (
      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="sticky top-0 z-20 flex items-center justify-center h-14 px-4 bg-white/70 backdrop-blur-sm border-b border-zinc-200/80">
          <Link href="/" className="text-xl font-semibold text-zinc-800">
            M
          </Link>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center p-8 gap-4">
          <p className="text-red-600">Proje bulunamadı.</p>
          <Link href="/" className="text-zinc-600 hover:text-zinc-800 underline">
            Ana sayfaya dön
          </Link>
        </main>
      </div>
    );
  }

  const { repo, readme } = entry;

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <header className="sticky top-0 z-20 flex items-center justify-between h-14 px-4 bg-white/70 backdrop-blur-sm border-b border-zinc-200/80">
        <Link href="/" className="text-xl font-semibold text-zinc-800">
          M
        </Link>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          GitHub&apos;da aç
        </a>
      </header>
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-zinc-900">{repo.name}</h1>
          {repo.description && (
            <p className="text-zinc-600 mt-1">{repo.description}</p>
          )}
          <div className="flex items-center gap-4 mt-2 text-sm text-zinc-500">
            {repo.language && <span>{repo.language}</span>}
            {repo.stargazers_count > 0 && (
              <span>★ {repo.stargazers_count}</span>
            )}
          </div>
        </div>
        {readme ? (
          <article className="prose prose-zinc max-w-none rounded-xl bg-white/90 border border-zinc-200 p-6 shadow-sm">
            <ReactMarkdown>{readme}</ReactMarkdown>
          </article>
        ) : (
          <p className="text-zinc-500">Bu proje için README bulunmuyor.</p>
        )}
      </main>
    </div>
  );
}
