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
    <section className="w-full max-w-3xl py-8">
      <SectionAvatar src="/avatar3.png" />
      <h2 className="text-2xl font-bold text-zinc-800 mb-6">Skills & Expertise</h2>
      <div className="space-y-8">
        {CATEGORIES.map((cat) => (
          <div key={cat.title}>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-zinc-800 mb-3">
              <span aria-hidden>{cat.icon}</span>
              {cat.title}
            </h3>
            <ul className="flex flex-wrap gap-2" role="list">
              {cat.skills.map((skill) => (
                <li key={skill}>
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800 text-white text-sm font-medium">
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
