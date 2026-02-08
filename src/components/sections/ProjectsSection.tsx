"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SectionAvatar from "@/components/SectionAvatar";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

export default function ProjectsSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/repos.json")
      .then((res) => {
        if (!res.ok) throw new Error("Projeler yüklenemedi.");
        return res.json();
      })
      .then((data: Repo[]) => setRepos(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projeler" className="w-full max-w-3xl py-8">
      <SectionAvatar src="/avatar2.png" />
      <h2 className="text-2xl font-semibold text-zinc-800 mb-4">Projeler</h2>
      {loading && (
        <p className="text-zinc-500">Yükleniyor...</p>
      )}
      {error && (
        <p className="text-red-600">{error}</p>
      )}
      {!loading && !error && repos.length === 0 && (
        <p className="text-zinc-600">Henüz proje bulunmuyor.</p>
      )}
      {!loading && !error && repos.length > 0 && (
        <ul className="grid gap-4 sm:grid-cols-2" role="list">
          {repos.map((repo) => (
            <li key={repo.id}>
              <Link
                href={`/projeler/${repo.name}`}
                className="block p-4 rounded-xl bg-white/90 border border-zinc-200 shadow-sm hover:bg-zinc-50 hover:border-zinc-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 transition-colors"
              >
                <h3 className="font-semibold text-zinc-800 truncate">{repo.name}</h3>
                {repo.description && (
                  <p className="text-sm text-zinc-600 mt-1 line-clamp-2">{repo.description}</p>
                )}
                <div className="mt-2 flex items-center gap-3 text-xs text-zinc-500">
                  {repo.language && (
                    <span>{repo.language}</span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span>★ {repo.stargazers_count}</span>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
