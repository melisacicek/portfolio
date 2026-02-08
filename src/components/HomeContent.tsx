"use client";

import { useState } from "react";
import NavButtons, { type ViewId } from "@/components/NavButtons";
import MeView from "@/components/views/MeView";
import SkillsView from "@/components/views/SkillsView";
import ProjectsSection from "@/components/sections/ProjectsSection";
import FunSection from "@/components/sections/FunSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomeContent() {
  const [activeView, setActiveView] = useState<ViewId | null>(null);

  return (
    <>
      <div className="w-full flex-1 min-h-0 flex flex-col items-center overflow-auto">
        {activeView !== null && (
          <div className="w-full max-w-3xl flex justify-end py-1.5 px-2 sm:py-2">
            <button
              type="button"
              onClick={() => setActiveView(null)}
              className="min-h-[44px] text-xs sm:text-sm font-medium text-zinc-500 hover:text-zinc-800 border border-zinc-200 hover:border-zinc-300 rounded-lg px-3 py-2 sm:py-1.5 transition-colors"
            >
              Kapat
            </button>
          </div>
        )}
        {activeView === "me" && <MeView />}
        {activeView === "projeler" && <ProjectsSection />}
        {activeView === "skills" && <SkillsView />}
        {activeView === "fun" && <FunSection />}
        {activeView === "iletisim" && <ContactSection />}
      </div>
      <NavButtons activeView={activeView} onSelectView={setActiveView} />
    </>
  );
}
