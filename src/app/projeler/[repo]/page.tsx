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
        <header className="sticky top-0 z-20 flex items-center justify-center h-12 sm:h-14 px-3 sm:px-4 bg-white/70 backdrop-blur-sm border-b border-zinc-200/80">
          <Link href="/" className="text-base sm:text-xl font-semibold text-zinc-800 text-center truncate max-w-[85vw]">
            MELISA ÇİÇEK SOYUBEY
          </Link>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 gap-4">
          <p className="text-red-600 text-sm sm:text-base">Proje bulunamadı.</p>
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
      <header className="sticky top-0 z-20 flex items-center justify-between h-12 sm:h-14 px-3 sm:px-4 gap-2 bg-white/70 backdrop-blur-sm border-b border-zinc-200/80">
        <Link href="/" className="text-base sm:text-xl font-semibold text-zinc-800 truncate min-w-0">
          MELİSA ÇİÇEK
        </Link>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-700 min-h-[44px] flex items-center"
        >
          GitHub&apos;da aç
        </a>
      </header>
      <main className="flex-1 w-full max-w-3xl mx-auto px-3 py-6 sm:px-4 sm:py-8">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-zinc-900 break-words">{repo.name}</h1>
          {repo.description && (
            <p className="text-zinc-600 mt-1 text-sm sm:text-base">{repo.description}</p>
          )}
          <div className="flex items-center gap-3 sm:gap-4 mt-2 text-xs sm:text-sm text-zinc-500">
            {repo.language && <span>{repo.language}</span>}
            {repo.stargazers_count > 0 && (
              <span>★ {repo.stargazers_count}</span>
            )}
          </div>
        </div>
        {readme ? (
          <article className="prose-readme max-w-none rounded-lg sm:rounded-xl bg-white border border-zinc-200 p-4 sm:p-6 md:p-8 shadow-sm">
            <ReactMarkdown>{readme}</ReactMarkdown>
          </article>
        ) : (
          <p className="text-zinc-500">Bu proje için README bulunmuyor.</p>
        )}
      </main>
    </div>
  );
}
