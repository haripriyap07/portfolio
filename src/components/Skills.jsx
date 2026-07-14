import { Cpu, Database, Layers, Server, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Terminal,
    skills: ['Java', 'C++', 'Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Backend & Frameworks',
    icon: Server,
    skills: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'REST API Design'],
  },
  {
    title: 'Databases & Caching',
    icon: Database,
    skills: ['MySQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'DevOps & Tooling',
    icon: Cpu,
    skills: ['Docker', 'Docker Compose', 'Git', 'Maven', 'Postman'],
  },
  {
    title: 'CS Fundamentals',
    icon: Layers,
    skills: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'System Design Basics'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-8 md:py-12">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#38bdf8]">Technical stack</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white">
            Backend depth & systems thinking
          </h2>
          <p className="mt-4 text-lg text-[#94A3B8]">
            Java-first services, modern data stores, and tooling that supports reliable iteration and production-grade architecture.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map(({ title, icon: Icon, skills }) => (
            <div
              key={title}
              className="rounded-xl border border-[#1E293B] bg-[#151D2A] p-6 hover:border-[#38bdf8] hover:shadow-[0_0_20px_rgba(56,189,248,0.1)] transition duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-[#1E293B] bg-[#0B111E] p-2.5 text-[#38bdf8]">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>

              {/* Divider */}
              <div className="mt-4 h-px w-full bg-[#1E293B]" />

              {/* Skills Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#1E293B] bg-[#0B111E] px-3 py-1.5 text-sm font-medium text-[#94A3B8] hover:border-[#38bdf8] hover:text-[#38bdf8] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
