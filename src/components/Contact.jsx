import { Mail, Github, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact({ profile }) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '8d1127b1-f819-49e8-b077-5c81ec80c327', 
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormData({ email: '', name: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const contactCards = [
    {
      icon: Mail,
      title: 'Email',
      value: profile.email,
      link: `mailto:${profile.email}`,
    },
    {
      icon: Github,
      title: 'GitHub',
      value: '@haripriyap07',
      link: profile.github,
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: '@haripriyap7',
      link: profile.linkedin,
    },
  ];

  return (
    <section id="contact" className="py-8 md:py-12">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Hey there!
          </h2>
          <p className="text-lg text-[#94A3B8]">
            Got a project in mind? Want to collaborate? Or just want to say hi?
            <br />
            Drop me a message and I'll get back to you as soon as possible!
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactCards.map(({ icon: Icon, title, value, link }) => (
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="bg-[#151D2A] border border-[#1E293B] rounded-xl p-6 hover:border-[#38bdf8] transition group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#0B111E] group-hover:bg-[#38bdf8]/10 transition">
                  <Icon size={24} className="text-[#38bdf8]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#94A3B8]">{title}</p>
                  <p className="text-white font-semibold truncate">{value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-[#151D2A] border border-[#1E293B] rounded-2xl p-8 md:p-10 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="developer@domain.com"
                  required
                  className="w-full px-4 py-3 bg-[#0B111E] border border-[#1E293B] rounded-lg text-white placeholder-text-slate-500 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition"
                />
              </div>

              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Developer X"
                  required
                  className="w-full px-4 py-3 bg-[#0B111E] border border-[#1E293B] rounded-lg text-white placeholder-text-slate-500 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What's up?"
                required
                rows="5"
                className="w-full px-4 py-3 bg-[#0B111E] border border-[#1E293B] rounded-lg text-white placeholder-text-slate-500 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition resize-none"
              ></textarea>
            </div>

            {/* Submission Alerts */}
            {status === 'success' && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm animate-fade-in">
                <CheckCircle2 size={18} />
                <span>Message sent successfully! I'll be in touch soon.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm animate-fade-in">
                <AlertCircle size={18} />
                <span>Something went wrong. Please check your setup or try again.</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-6 py-3 rounded-lg border border-slate-600 text-slate-300 font-medium hover:border-[#38bdf8] hover:text-[#38bdf8] hover:bg-[#38bdf8]/5 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <div className="w-5 h-5 border-2 border-[#38bdf8] border-t-transparent rounded-full animate-spin" />
              ) : (
                'Send'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}