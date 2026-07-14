const skills = [
  'Java',
  'Spring Boot',
  'Spring Security',
  'REST API Design',
  'MySQL',
  'MongoDB',
  'Redis',
  'Docker',
  'Docker Compose',
  'Maven',
  'Postman',
  'DSA',
  'OOP',
  'DBMS',
  'Operating Systems',
  'System Design Basics',
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#a78bfa]">Technical stack</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">
          Built for backend depth and clear systems thinking
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          The stack reflects both product delivery and engineering discipline: Java-first services, modern data stores, and tooling that supports reliable iteration.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-2xl border border-[#1e293b] bg-[#131a26]/70 p-5 text-slate-300 transition hover:-translate-y-1 hover:border-[#a78bfa]/35"
          >
            <p className="font-medium text-slate-100">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
