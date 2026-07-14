import { Download, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Hero({ profile, profileImage }) {
  return (
    <section id="home" className="py-8 md:py-12">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left Column: Text Content */}
        <div className="space-y-8">
          {/* Name */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {profile.name}
            </h1>
            <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-lg">
              {profile.title}
            </p>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-[#94A3B8] max-w-xl leading-relaxed">
            {profile.summary}
          </p>

          {/* Status */}
          <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
            <span className="inline-block w-2 h-2 bg-[#38bdf8] rounded-full animate-pulse"></span>
            Working remotely • Available for opportunities
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4">
            <a
              href={`mailto:${profile.email}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#151D2A] border border-[#1E293B] text-[#38bdf8] hover:bg-[#1E293B] transition"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#151D2A] border border-[#1E293B] text-[#38bdf8] hover:bg-[#1E293B] transition"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#151D2A] border border-[#1E293B] text-[#38bdf8] hover:bg-[#1E293B] transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 ml-4 px-4 py-2 rounded-lg bg-[#151D2A] border border-[#1E293B] hover:bg-[#1E293B] text-slate-300 text-sm transition"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-sm aspect-[3/4]">
            <img
              src={profileImage}
              alt={profile.name}
              className="w-full h-full object-cover rounded-2xl border border-[#1E293B]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
