import { ArrowRight, Code2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'HireTrack Job Application Tracking System',
    description: 'Multi-role backend platform with JWT authentication, role-based authorization, and comprehensive RESTful APIs for job lifecycle management.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'Spring Security'],
    date: 'March 2025',
    link: 'https://github.com/haripriyap07/hiretrack',
    bullets: [
      'Architected a multi-role backend for USER, RECRUITER, and ADMIN flows using stateless JWT authentication, BCrypt hashing, and role-based authorization.',
      'Designed 10+ RESTful APIs for authentication, job posting, and application lifecycle management with DTO-based responses to prevent database entity over-exposure.',
      'Applied global exception handling via @ControllerAdvice and Bean Validation across a layered Controller → Service → Repository architecture.',
    ],
  },
  {
    title: 'URL Shortener Full Stack',
    description: 'Full-stack URL shortener leveraging Base62 encoding, Redis caching, and async analytics processing for high-performance redirects.',
    stack: ['Spring Boot', 'Redis', 'React', 'Docker Compose'],
    date: 'February 2025',
    link: 'https://github.com/haripriyap07/url-shortener',
    bullets: [
      'Built a full-stack URL shortener using Base62 encoding for collision-free short URL generation.',
      'Implemented a Redis cache-aside pattern for O(1) redirect lookups, reducing repeated-access database load.',
      'Decoupled click-analytics writes from the live redirect path via async batch writes using Spring Scheduler, and containerized the multi-service stack with Docker Compose.',
    ],
  },
  {
    title: 'Reverse Product Search',
    description: 'AI-powered image-based product retrieval system using CLIP embeddings and cosine similarity for fashion product matching.',
    stack: ['Python', 'CLIP', 'Vector Search'],
    date: 'January 2025',
    link: '#contact',
    bullets: [
      'Built an image-based product retrieval system using CLIP embeddings and cosine similarity search over a fashion product dataset.',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-8 md:py-12">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#38bdf8]">Selected projects</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white">
            Engineering case studies with architectural clarity
          </h2>
          <p className="mt-4 text-lg text-[#94A3B8]">
            Each project is framed around the core technical decision, the implementation approach, and the system-level tradeoff.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="grid md:grid-cols-[1fr_1fr] gap-8 items-start group"
            >
              {/* Left Column: Text Content */}
              <div className="space-y-6">
                {/* Project Title */}
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#94A3B8] leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-3 py-1 bg-[#151D2A] text-[#94A3B8] rounded text-xs font-medium border border-[#1E293B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-3">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-[#94A3B8] leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#38bdf8] flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer: Date & Links */}
                <div className="flex items-center justify-between pt-4 border-t border-[#1E293B]">
                  <span className="text-xs text-[#64748B]">{project.date}</span>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.link}
                      target={project.link !== '#contact' ? '_blank' : undefined}
                      rel={project.link !== '#contact' ? 'noreferrer' : undefined}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#38bdf8] hover:text-white transition"
                    >
                      {project.link === '#contact' ? 'Discuss' : 'Repository'}
                      <ArrowRight size={14} />
                    </a>
                    {project.link !== '#contact' && (
                      <ExternalLink size={14} className="text-[#64748B]" />
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Mockup Preview */}
              <div className="relative w-full aspect-video rounded-2xl border border-[#1E293B] bg-[#151D2A] overflow-hidden group-hover:border-[#38bdf8] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] transition">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-[#64748B] space-y-2">
                    <Code2 size={40} className="mx-auto opacity-50" />
                    <p className="text-sm">Project Preview</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
