export default function Achievements({ experiences }) {
  return (
    <section id="experience" className="py-8 md:py-12">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#38bdf8]">Experience & Achievements</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white">
            Work & Recognition
          </h2>
          <p className="mt-4 text-lg text-[#94A3B8]">
            Professional experience and key achievements in engineering and leadership.
          </p>
        </div>

        {/* Achievements Timeline */}
        <div className="space-y-0">
          {experiences.map((achievement, index) => (
            <div
              key={index}
              className={`py-8 ${index !== experiences.length - 1 ? 'border-b border-[#1E293B]' : ''}`}
            >
              {/* Achievement Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {achievement.role} • {achievement.org}
              </h3>

              {/* Description */}
              <p className="mt-3 text-base text-[#94A3B8] leading-relaxed max-w-2xl">
                {achievement.description}
              </p>

              {/* Date & Details */}
              <p className="mt-3 text-sm text-[#64748B]">
                {achievement.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
