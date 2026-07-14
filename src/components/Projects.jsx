import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'HireTrack Job Application Tracking System',
    stack: 'Java • Spring Boot • MySQL • JWT • Spring Security',
    link: 'https://github.com/haripriyap07/hiretrack',
    bullets: [
      'Architected a multi-role backend for USER, RECRUITER, and ADMIN flows using stateless JWT authentication, BCrypt hashing, and role-based authorization.',
      'Designed 10+ RESTful APIs for authentication, job posting, and application lifecycle management with DTO-based responses to prevent database entity over-exposure.',
      'Applied global exception handling via @ControllerAdvice and Bean Validation across a layered Controller → Service → Repository architecture.',
    ],
  },
  {
    title: 'URL Shortener Full Stack',
    stack: 'Spring Boot • Redis • React • Docker Compose',
    link: 'https://github.com/haripriyap07/url-shortener',
    bullets: [
      'Built a full-stack URL shortener using Base62 encoding for collision-free short URL generation.',
      'Implemented a Redis cache-aside pattern for O(1) redirect lookups, reducing repeated-access database load.',
      'Decoupled click-analytics writes from the live redirect path via async batch writes using Spring Scheduler, and containerized the multi-service stack with Docker Compose.',
    ],
  },
  {
    title: 'Reverse Product Search',
    stack: 'Python • CLIP ViT-B/32 • Vector Space',
    bullets: [
      'Built an image-based product retrieval system using CLIP embeddings and cosine similarity search over a fashion product dataset.',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#38bdf8]">Selected projects</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">
          Engineering mini-case studies with clear architectural logic
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Each project is framed around the core technical decision, the implementation approach, and the system-level tradeoff.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex h-full flex-col rounded-3xl border border-[#1e293b] bg-[#131a26]/70 p-6 shadow-[0_0_50px_rgba(56,189,248,0.06)]"
          >
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-[#a78bfa]">Case study</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-100">{project.title}</h3>
            <p className="mt-3 text-sm text-slate-400">{project.stack}</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-400">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <a
              href={project.link || '#contact'}
              target={project.link ? '_blank' : undefined}
              rel={project.link ? 'noreferrer' : undefined}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#c4b5fd] transition hover:text-[#e9d5ff]"
            >
              {project.link ? 'View repository' : 'Discuss this work'} <ArrowRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
