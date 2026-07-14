import profileImage from './assets/profile.jpg';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Contact from './components/Contact';

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

function App() {
  return (
    <div className="min-h-screen bg-[#0B111E] text-white antialiased">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#1E293B] bg-[#0B111E]/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-lg font-bold uppercase tracking-[0.2em] text-white">
            HP
          </a>
          <div className="hidden gap-8 text-sm text-[#94A3B8] md:flex">
            <a href="#skills" className="transition hover:text-[#38bdf8]">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-[#38bdf8]">
              Projects
            </a>
            <a href="#experience" className="transition hover:text-[#38bdf8]">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-[#38bdf8]">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 lg:px-8 lg:py-24">
        {/* Hero Section */}
        <Hero profile={profile} profileImage={profileImage} />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Achievements/Experience Section */}
        <Achievements experiences={experiences} />

        {/* Contact Section */}
        <Contact profile={profile} />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1E293B] bg-[#0B111E] py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-[#64748B] lg:px-8">
          <p>Crafted with care • Backend engineer focused on systems thinking</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
