'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Code2, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';

const InternshipCard = () => {
  const openMail = () => {
    window.open('mailto:raphaelgiraud12@gmail.com', '_blank');
  };
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12"
    >
      {/* Header */}
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar placeholder */}
          <div className="bg-muted h-16 w-16 overflow-hidden rounded-full shadow-md">
            <img
              src="/avatar1.png"
              alt="Raphael's avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              Raphael Giraud
            </h2>
            <p className="text-muted-foreground text-sm">
              Staj Başvurusu
            </p>
          </div>
        </div>

        {/* Live badge */}
        <div className="mt-4 flex items-center gap-2 sm:mt-0">
          <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-0.5 text-sm font-medium text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Canlı
          </span>
        </div>
      </div>

      {/* Internship Info */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <CalendarDays className="mt-1 h-5 w-5 text-blue-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Süre</p>
            <p className="text-muted-foreground text-sm">
              6 ay – Eylül 2025'ten başlayacak (sonbahar 2025)
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Globe className="mt-1 h-5 w-5 text-green-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Konum</p>
            <p className="text-muted-foreground text-sm">
              Tercihen San Francisco 🇺🇸
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex items-start gap-3 sm:col-span-2">
          <Code2 className="mt-1 h-5 w-5 text-purple-500" />
          <div className="w-full">
            <p className="text-foreground text-sm font-medium">Teknoloji Yığını</p>
            <div className="text-muted-foreground grid grid-cols-1 gap-y-1 text-sm sm:grid-cols-2">
              <ul className="decoration-none list-disc pl-4">
                <li>Python, Next.js, TypeScript, Tailwind CSS</li>
                <li>Vercel AI SDK, Supabase, Prisma</li>
                <li>OpenAI, Mistral, Claude, Whisper</li>
                <li>Prompt engineering, fine-tuning</li>
              </ul>
              <ul className="list-disc pl-4">
                <li>Weaviate, Pinecone, vector DBs</li>
                <li>Hugging Face Transformers</li>
                <li>Tool routing, calling, RAG</li>
                <li>Hackathons + AI agent workflows</li>
                <li>
                  <a
                    href="/chat?query=What%20are%20your%20skills%3F%20Give%20me%20a%20list%20of%20your%20soft%20and%20hard%20skills."
                    className="cursor-pointer items-center text-blue-500 underline"
                  >
                    Daha Fazla Gör
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What I bring */}
      <div className="mt-10">
        <p className="text-foreground mb-2 text-lg font-semibold">
          Ne Getiriyorum
        </p>
        <p className="text-foreground text-sm">
          Lighton'dan gerçek dünya AI geliştirme deneyimi (MCP, güvenli GPT'ler, RAG
          boru hatları). <br /> 3 hackathon zaferi (ETH Oxford, Paris Blockchain
          Week, Solana'da Colosseum Breakout). <br /> Hızlı çalışırım ve gerçekten
          işe yarayan kullanışlı şeyler yapmayı severim.
        </p>
      </div>

      {/* Goal */}
      <div className="mt-8">
        <p className="text-foreground mb-2 text-lg font-semibold">Hedef</p>
        <p className="text-foreground text-sm">
          Önemli AI destekli araçlar geliştiren cesur, yenilikçi bir ekibe katılmak.
          Hızlı gelişmek, sıkı çalışmak ve iz bırakmak istiyorum. Hızlıyım,
          esneyim ve ÇOK AÇ 🔥
        </p>
      </div>

      {/* Contact button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={openMail}
          className="cursor-pointer rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800"
        >
          Bana Ulaş
        </button>
      </div>
    </motion.div>
  );
};

export default InternshipCard;
