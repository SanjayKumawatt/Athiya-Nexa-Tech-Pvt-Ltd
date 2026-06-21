import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Send, CheckCircle2, UserPlus, Mail, 
  ShieldCheck, Zap, Bot, Clock, ChevronRight, Search,
  LinkIcon
} from 'lucide-react';

// Animation configs
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Beta = () => {
  // 1. Expanded Form State to collect better information
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '',
    role: '',       // NEW FIELD
    company: '',    // NEW FIELD (optional)
    profileUrl: ''  // NEW FIELD
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 2. 1.5 Second delay as requested before showing the success popup
    setTimeout(() => {
      setIsSubmitting(false);
      setShowPopup(true);
      // Clear form
      setFormData({ name: '', email: '', message: '', role: '', company: '', profileUrl: '' });
    }, 1500);
  };

  return (
    <div className="bg-[#030305] text-slate-200 font-sans overflow-x-hidden selection:bg-purple-500/30 selection:text-white pb-32">
      
      {/* =========================================
          HERO AREA (V3.0 Content + Unique Image)
          ========================================= */}
      <section className="relative pt-48 pb-20 overflow-hidden selection:bg-purple-900/40 selection:text-white border-b border-white/5 bg-[#050508]">
        {/* Faded Unique Pexels Image in Background (ID: 3182743 - Meeting/Tech) */}
        <div className="absolute inset-0 z-0 opacity-15 mix-blend-luminosity" style={{ maskImage: 'linear-gradient(to bottom, black, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)' }}>
          <img 
            src="https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80" 
            alt="Dark Tech Workspace" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]"
          >
            Enter the inner circle. <br/> Let’s build this together.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Athiya Nexa is currently in its early MVP phase. We are highly selective about our early adopters because we rely heavily on your honest, critical feedback to shape the product roadmap.
          </motion.p>
        </div>
      </section>

      {/* =========================================
          APPLICATION FORM & INFO SECTION
          ========================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Expanded Form Block */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl border border-purple-500/20 bg-[#0a0a0f] shadow-2xl relative overflow-hidden backdrop-blur-2xl selection:bg-purple-900/40"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g. Aditya Sharma" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-300 ml-1">Work Email</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="name@company.com" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all"
                />
              </div>

              {/* NEW FIELDS Grouped */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-300 ml-1">Role / Job Title</label>
                  <input 
                    required
                    type="text" 
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    placeholder="e.g. CEO or Researcher" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-300 ml-1">Company Name / Affiliation </label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="e.g. Nexa Tech" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5 selection:bg-purple-900/50">
                <label className="text-sm font-medium text-slate-300 ml-1 flex items-center gap-2">
                   <LinkIcon className="w-4 h-4 text-slate-600" /> Linked profile or Portfolio URL
                </label>
                <input 
                  required
                  type="url" 
                  value={formData.profileUrl}
                  onChange={(e) => setFormData({...formData, profileUrl: e.target.value})}
                  placeholder="https://linkedin.com/in/username" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-300 ml-1">Use-case message</label>
                <textarea 
                  required
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="How do you plan to use the networked graph ecosystem?" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 py-4 bg-white text-[#030305] rounded-xl font-bold hover:bg-slate-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-slate-400 border-t-purple-600 rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Send Application
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Context Section (Matching V3 Tone) */}
          <div className="space-y-12 pt-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-10 tracking-tight">What early adopters can expect:</h2>
              <div className="space-y-9">
                {[
                  { icon: ShieldCheck, title: "Direct Line to the Founders", desc: "We don't use automated support desks or chatbots. When you find a bug, request a feature, or hit a friction point, you are talking directly to the people writing the code." },
                  { icon: Zap, title: "Rapid Weekly Updates", desc: "Expect the UI to evolve. We push optimizations frequently as we learn what works best for our user base. We move fast." },
                  { icon: Bot, title: "Focused Feedback Loops", desc: "We are looking for power-users who want to push our AI and backlinking features to their absolute limits and tell us exactly where they break." }
                ].map((item, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                        <p className="text-slate-400 font-light leading-relaxed text-sm">{item.desc}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            {/* Email info card */}
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center gap-4">
               <Mail className="w-5 h-5 text-purple-400" />
               <div className="space-y-1">
                <span className="text-white font-medium">contact@athiyatechnexa.in</span>
                <p className="text-slate-500 text-xs font-normal">We aim to review applications and तकनीकी inquiry single 24-hour cycle.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          THE ONBOARDING TIMELINE (Detailed V3 Content)
          ========================================= */}
      <section className="py-32 relative bg-[#050508] border-y border-white/5 overflow-hidden">
        {/* Unique Image Blend (ID: 3183197 - Focus/Pointer) */}
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-screenpointer-events-none">
          <img 
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80" 
            alt="Onboarding Focus" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-transparent to-[#050508] z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
           <div className="text-center mb-20 max-w-2xl mx-auto">
              <Clock className="w-10 h-10 text-purple-500/50 mx-auto opacity-80" />
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mt-6">The Onboarding Timeline</h2>
              <p className="text-slate-400 mt-4 leading-relaxed font-light">From application to Hop on a 15-minute call with our squad.</p>
           </div>

           <div className="grid md:grid-cols-4 gap-8">
              {[
                { day: "Day 1", title: "Review", desc: "Submit your request. We review your use-case." },
                { day: "Day 2", title: "Staging Access", desc: "You receive staging credentials and a personal welcome from the founders." },
                { day: "Week 1", title: "Build", desc: "Import your old notes. Start building your graph." },
                { day: "Week 4", title: "Sync", desc: "Tell us what you love and what we need to fix." }
              ].map((item, idx) => (
                <div key={idx} className="relative p-8 rounded-2xl bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col group hover:border-purple-500/30 transition-all">
                  <div className="text-purple-400 font-bold text-sm mb-4 tracking-widest uppercase">{item.day}</div>
                  <h4 className="text-white font-semibold text-xl mb-3 flex items-center justify-between gap-3">
                    {item.title} <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all" />
                  </h4>
                  <p className="text-slate-300 text-sm font-light leading-relaxed mt-2">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* =========================================
          SUCCESS POPUP MODAL (Framer Motion)
          ========================================= */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 w-full max-w-md bg-[#0a0a0f] border border-purple-500/30 rounded-3xl p-10 text-center shadow-[0_0_60px_rgba(168,85,247,0.3)] backdrop-blur-3xl selection:bg-purple-900/40"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-purple-500"></div>
              <div className="w-20 h-20 bg-purple-500/20 border-2 border-purple-400/50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                <CheckCircle2 className="w-10 h-10 text-purple-300" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Application Sent!</h3>
              <p className="text-slate-300 font-light leading-relaxed mb-8 text-sm">
                Thank you for applying. We've received your request for staging credentials and a single 24-hour single cycle single cycle response Single 24-hour single. We move fast.
              </p>
              <button 
                onClick={() => setShowPopup(false)}
                className="w-full py-4 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-500 transition-colors shadow-lg hover:-translate-y-0.5"
              >
                Got it, thanks!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Beta;