import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Code2,
  Github,
  Linkedin,
  Mail,
  Phone,
  ServerCog,
  Sparkles,
} from 'lucide-react';
import Projects from './components/Projects';
import Skills from './components/Skills';

const profile = {
  name: 'Haripriya P',
  title: 'Final-year Robotics & Automation Engineering student',
  summary:
    'I build backend systems with a systems-level lens shaped by robotics, hardware-software integration, and production-minded architecture.',
  email: 'haripriyap027@gmail.com',
  phone: '+91 9036310956',
  linkedin: 'https://linkedin.com/in/haripriyap7/',
  github: 'https://github.com/',
};

const experiences = [
  {
    role: 'Technical Lead',
    org: 'Sahyadri Robotics Club',
    period: 'Sep 2025 - Present',
    description:
      'Lead technical mentorship for 20+ students across robotics competitions, conduct code reviews, and guide hardware-software integration decisions.',
  },
  {
    role: 'Team Member',
    org: 'Smart India Hackathon',
    period: 'Sep 2025',
    description:
      'Built a TensorFlow-based image classification pipeline to identify cattle breeds from real-world datasets, from preprocessing to deployment.',
  },
  {
    role: 'Competitor',
    org: 'Techkriti IIT Kanpur',
    period: 'Mar 2024',
    description:
      'Designed and built Pick-and-Place and Line Following robots, coordinating mechanical design, motor control, and sensor integration.',
  },
];

const certifications = ['Microsoft Certified Azure Fundamentals (AZ-900)', 'Postman API Student Expert', 'Cisco Networking Academy Networking Basics'];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.35em] text-[#a78bfa]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg text-slate-400">{description}</p> : null}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-200">
      <header className="sticky top-0 z-20 border-b border-[#1e293b] bg-[#0b0f19]/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-lg font-semibold uppercase tracking-[0.2em] text-slate-100">
            HP
          </a>
          <div className="hidden gap-6 text-sm text-slate-400 md:flex">
            <a href="#skills" className="transition hover:text-[#38bdf8]">Skills</a>
            <a href="#projects" className="transition hover:text-[#38bdf8]">Projects</a>
            <a href="#experience" className="transition hover:text-[#38bdf8]">Experience</a>
            <a href="#contact" className="transition hover:text-[#38bdf8]">Contact</a>
          </div>
        </nav>
      </header>

      <main id="home" className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 lg:px-8 lg:py-24">
        <section className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#a78bfa]/25 bg-[#a78bfa]/10 px-3 py-1 text-sm text-[#c4b5fd]">
              <Sparkles size={15} />
              Backend engineering • robotics-driven systems thinking
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Hi, I’m <span className="text-[#c4b5fd]">Haripriya P</span>.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
                I’m a final-year Robotics & Automation Engineering student focused on backend engineering, distributed systems, and building reliable services with strong architectural discipline.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[#a78bfa] px-5 py-3 text-sm font-medium text-[#0b0f19] transition hover:bg-[#c4b5fd]">
                Explore case studies <ArrowRight size={16} />
              </a>
              <a href="#contact" className="rounded-full border border-[#1e293b] px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-[#a78bfa] hover:text-[#c4b5fd]">
                Get in touch
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-[#1e293b] bg-[#131a26] px-3 py-2 transition hover:border-[#a78bfa] hover:text-[#c4b5fd]">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-[#1e293b] bg-[#131a26] px-3 py-2 transition hover:border-[#a78bfa] hover:text-[#c4b5fd]">
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[320px] rounded-[24px] border border-[#1e293b] bg-[#131a26]/90 p-2.5 shadow-[0_0_45px_rgba(167,139,250,0.08)]">
              <div className="relative overflow-hidden rounded-[20px] border border-[#a78bfa]/20 bg-gradient-to-br from-[#a78bfa]/10 via-[#131a26] to-[#c4b5fd]/10 p-1.5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.16),_transparent_45%)]" />
                <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[16px] border border-[#1e293b] bg-[#0b0f19]">
                  <img
                    src="src/assets/profile.jpg"
                    alt="Haripriya P"
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[#0b0f19]/10" />
                </div>
              </div>
              <div className="mt-3 rounded-2xl border border-[#1e293b] bg-[#0b0f19]/60 p-3 text-sm text-slate-400">
                <p className="text-[#c4b5fd]">Current focus</p>
                <p className="mt-2 text-slate-200">Backend systems • robotics-informed engineering • clean architecture</p>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Projects />

        <section id="experience" className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Experience"
              title="Leadership grounded in mentorship and execution"
              description="My experience spans technical leadership, collaborative build work, and competitive engineering environments."
            />
            <div className="space-y-4">
              {experiences.map((item) => (
                <div key={`${item.org}-${item.role}`} className="rounded-2xl border border-[#1e293b] bg-[#131a26]/70 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100">{item.role}</h3>
                      <p className="text-sm text-[#c4b5fd]">{item.org}</p>
                    </div>
                    <p className="text-sm text-slate-500">{item.period}</p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#1e293b] bg-[#131a26]/70 p-8">
            <SectionHeading
              eyebrow="Credentials"
              title="Certifications and proof of depth"
              description="A mix of systems, cloud, and API fundamentals that complements my project work."
            />
            <ul className="mt-8 space-y-4 text-sm text-slate-300">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-3 rounded-2xl border border-[#1e293b] bg-[#0b0f19]/70 p-4">
                  <BadgeCheck className="mt-0.5 text-[#a78bfa]" size={18} />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="rounded-3xl border border-[#1e293b] bg-gradient-to-br from-[#131a26] to-[#0b0f19] p-8 shadow-[0_0_70px_rgba(56,189,248,0.08)]">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#a78bfa]">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Open to backend engineering and software engineering internship opportunities.</h2>
            <p className="mt-4 text-lg text-slate-400">If you’re looking for someone who can connect systems thinking, clean backend architecture, and hands-on implementation, I’d love to connect.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 rounded-full border border-[#1e293b] px-4 py-3 text-sm text-slate-300 transition hover:border-[#a78bfa] hover:text-[#c4b5fd]">
              <Mail size={16} /> {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-2 rounded-full border border-[#1e293b] px-4 py-3 text-sm text-slate-300 transition hover:border-[#a78bfa] hover:text-[#c4b5fd]">
              <Phone size={16} /> {profile.phone}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
