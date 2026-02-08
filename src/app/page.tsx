import Header from "@/components/Header";
import AskMeAnything from "@/components/AskMeAnything";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center px-4 py-8 md:py-12">
          <HomeContent />
          <AskMeAnything />
        </main>
    </div>
  );
}
