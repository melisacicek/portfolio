const SKILLS = [
  "Java",
  "Spring Boot",
  "React",
  "PostgreSQL",
  "JavaScript",
  "Node.js",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full max-w-3xl py-16 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-zinc-800 mb-4">Skills</h2>
      <ul className="flex flex-wrap gap-3" role="list">
        {SKILLS.map((skill) => (
          <li key={skill}>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 border border-zinc-200 text-zinc-700 font-medium shadow-sm">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
