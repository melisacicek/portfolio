import SectionAvatar from "@/components/SectionAvatar";

const CATEGORIES = [
  {
    title: "Backend & Systems",
    icon: "⚙️",
    skills: ["Java", "Spring Boot", "PostgreSQL", "Node.js", "Git", "GitHub"],
  },
  {
    title: "Frontend",
    icon: "🖥️",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Tools & Diğer",
    icon: "🔧",
    skills: ["Git", "GitHub", "TypeScript"],
  },
];

export default function SkillsView() {
  return (
    <section className="w-full max-w-3xl py-4 sm:py-8 px-1 sm:px-0">
      <SectionAvatar src="/avatar3.jpg" />
      <h2 className="text-xl sm:text-2xl font-bold text-zinc-800 mb-4 sm:mb-6">Skills & Expertise</h2>
      <div className="space-y-6 sm:space-y-8">
        {CATEGORIES.map((cat) => (
          <div key={cat.title}>
            <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-zinc-800 mb-2 sm:mb-3">
              <span aria-hidden>{cat.icon}</span>
              {cat.title}
            </h3>
            <ul className="flex flex-wrap gap-1.5 sm:gap-2" role="list">
              {cat.skills.map((skill) => (
                <li key={skill}>
                  <span className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-zinc-800 text-white text-xs sm:text-sm font-medium">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
