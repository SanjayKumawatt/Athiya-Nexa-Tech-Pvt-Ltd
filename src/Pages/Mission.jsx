import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, Zap, ShieldCheck, Layers, 
  User, Code2, MapPin, Building, ArrowRight, BrainCircuit 
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Mission = () => {
  return (
    <div className="bg-[#030305] text-slate-200 font-sans overflow-x-hidden selection:bg-purple-500/30 selection:text-white pb-32">
      
      {/* =========================================
          HERO SECTION (Image Background + Glow)
          ========================================= */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
        {/* Background Image with Fade & Blend */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity">
          <img 
            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80" 
            alt="Dark Tech Workspace" 
            className="w-full h-full object-cover grayscale"
          />
          {/* Gradients to fade out the image at edges so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-transparent to-[#030305]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#030305] via-transparent to-[#030305]"></div>
        </div>
        
        {/* Glowing Orb */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <Target className="w-3 h-3 text-purple-400" /> The Origin Story
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              We got tired of losing <br className="hidden sm:block"/> our best ideas.
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          THE NARRATIVE (Main Story Content)
          ========================================= */}
      <section className="py-24 relative z-10 bg-[#050508]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={staggerContainer} 
            className="space-y-8 text-lg text-slate-300 font-light leading-relaxed"
          >
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-200 font-medium leading-relaxed mb-10 border-l-2 border-purple-500 pl-6">
              The origin of Athiya Nexa is surprisingly simple. We looked at our own digital lives and realized our notes were an absolute mess.
            </motion.p>
            <motion.p variants={fadeUp}>
              We were bouncing between five different apps to manage daily to-dos, voice memos, meeting transcripts, and long-form writing. Everything was disjointed. A brilliant idea saved in one app was completely invisible when working in another.
            </motion.p>
            <motion.p variants={fadeUp}>
              We formed Athiya Nexa Tech to fix our own frustration. We are a lean, fast-moving team based in Bharatpur, Rajasthan, entirely focused on creating a frictionless knowledge ecosystem. We aren’t interested in bloated enterprise software filled with features nobody uses; we just want a tool that gets out of the way and helps us think better.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          OUR FOUNDATIONAL VALUES
          ========================================= */}
      <section className="py-32 border-t border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.03)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Our Foundational Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-10 rounded-3xl bg-[#0a0a0f] border border-white/5 hover:border-purple-500/20 hover:bg-white/[0.02] transition-all shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Zap className="w-8 h-8 text-purple-400 mb-6 relative z-10" />
              <h3 className="text-xl font-semibold text-white mb-4 relative z-10">Speed Over Friction</h3>
              <p className="text-slate-400 font-light leading-relaxed relative z-10">
                If it takes more than 2 seconds to capture a thought, the tool has failed.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="p-10 rounded-3xl bg-[#0a0a0f] border border-white/5 hover:border-purple-500/20 hover:bg-white/[0.02] transition-all shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <ShieldCheck className="w-8 h-8 text-purple-400 mb-6 relative z-10" />
              <h3 className="text-xl font-semibold text-white mb-4 relative z-10">Privacy by Default</h3>
              <p className="text-slate-400 font-light leading-relaxed relative z-10">
                Your brain is private. Your digital brain should be too. We don't compromise on encryption.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="p-10 rounded-3xl bg-[#0a0a0f] border border-white/5 hover:border-purple-500/20 hover:bg-white/[0.02] transition-all shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Layers className="w-8 h-8 text-purple-400 mb-6 relative z-10" />
              <h3 className="text-xl font-semibold text-white mb-4 relative z-10">Simplicity is Hard</h3>
              <p className="text-slate-400 font-light leading-relaxed relative z-10">
                Making software look this minimal takes immense backend work. We hide the complexity so you don't have to deal with it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          THE FOUNDING SQUAD
          ========================================= */}
      <section className="py-32 bg-[#050508] border-y border-white/5 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] opacity-20 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">The people laying the groundwork.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Aditya Profile */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-10 rounded-3xl bg-[#0a0a0f] border border-white/5 shadow-[0_0_40px_rgba(168,85,247,0.05)] relative overflow-hidden">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-[#111116] border border-purple-500/20 flex items-center justify-center shadow-lg">
                  <User className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Aditya</h3>
                  <p className="text-purple-400 text-sm font-medium tracking-wide uppercase">Founder & Product Lead</p>
                </div>
              </div>
              <p className="text-slate-400 font-light leading-relaxed">
                Obsessed with minimal UI and intuitive design. Aditya leads the product vision, ensuring that every new feature we introduce actually reduces your cognitive load rather than adding complexity. His goal is to keep the software invisible so your ideas remain the focal point.
              </p>
            </motion.div>

            {/* The Dev Squad Profile */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="p-10 rounded-3xl bg-[#0a0a0f] border border-white/5 shadow-[0_0_40px_rgba(168,85,247,0.05)] relative overflow-hidden">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-[#111116] border border-slate-600/30 flex items-center justify-center shadow-lg">
                  <Code2 className="w-8 h-8 text-slate-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">The Dev Squad</h3>
                  <p className="text-slate-400 text-sm font-medium tracking-wide uppercase">Engineering Team</p>
                </div>
              </div>
              <p className="text-slate-400 font-light leading-relaxed">
                A tight-knit group of coders running fast iteration cycles. They are the ones optimizing our graph database, resolving the edge cases reported by our pilot users, and ensuring the app loads seamlessly across all your devices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          OPERATIONS BASE
          ========================================= */}
      <section className="py-24 relative bg-[#030305]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 p-12 rounded-3xl border border-white/5 bg-[#08080b] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[80px] pointer-events-none"></div>
            
            <div className="space-y-4 text-center md:text-left relative z-10">
              <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 text-sm font-semibold tracking-widest uppercase">
                <Building className="w-4 h-4 text-purple-400" /> Entity
              </div>
              <p className="text-white text-lg font-medium tracking-wide">ATHIYA NEXA TECH PRIVATE LIMITED</p>
            </div>
            
            <div className="space-y-4 text-center md:text-left relative z-10">
              <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 text-sm font-semibold tracking-widest uppercase">
                <MapPin className="w-4 h-4 text-purple-400" /> Location
              </div>
              <p className="text-slate-300 font-light leading-relaxed max-w-xs mx-auto md:mx-0">
                Chhonkara Wali Gali, Shiv Mandir K Pas Jaswant, <br/> Bharatpur City, Rajasthan, India, 321001.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          CLOSING CTA
          ========================================= */}
      <section className="py-32 relative overflow-hidden text-center border-t border-white/5 bg-[#050508]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.1)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-8">
          <BrainCircuit className="w-10 h-10 text-purple-500/50 mx-auto" />
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Fix your own frustration.
          </h2>
          <p className="text-lg text-slate-400 font-light leading-relaxed">
            Stop bouncing between disconnected apps. We are building the single source of truth for your intellect.
          </p>
          <div className="pt-6">
            <Link to="/beta" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#030305] rounded-xl text-sm font-bold tracking-wide hover:bg-slate-200 hover:-translate-y-0.5 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Join the Beta Waitlist
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Mission;