"use client";

import { useState } from "react";
import NavButtons, { type ViewId } from "@/components/NavButtons";
import MeView from "@/components/views/MeView";
import SkillsView from "@/components/views/SkillsView";
import ProjectsSection from "@/components/sections/ProjectsSection";
import FunSection from "@/components/sections/FunSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomeContent() {
  const [activeView, setActiveView] = useState<ViewId>("me");

  return (
    <>
      <div className="w-full flex-1 min-h-0 flex flex-col items-center overflow-auto">
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
