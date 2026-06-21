import React from 'react';
import { motion } from 'framer-motion';
import { 
  LightbulbOff, Zap, ShieldCheck, Layers, 
  User, Code2, MapPin, Building, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Company = () => {
  return (
    <div className="bg-[#030305] text-slate-200 font-sans overflow-x-hidden selection:bg-purple-500/30 selection:text-white pb-32">
      
      {/* =========================================
          THE ORIGIN STORY (Hero Section)
          ========================================= */}
      <section className="relative pt-40 pb-32 border-b border-white/5 overflow-hidden">
        {/* Cinematic Workspace Image Faded in Background */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity" style={{ maskImage: 'linear-gradient(to bottom, black, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)' }}>
          <img 
            src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80" 
            alt="Dark Tech Workspace" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              We got tired of losing <br className="hidden sm:block"/> our best ideas.
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          THE NARRATIVE (Main Content)
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
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-200 font-medium leading-relaxed mb-10">
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.03)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Our Foundational Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-10 rounded-3xl bg-[#0a0a0f] border border-white/5 hover:border-purple-500/20 transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <Zap className="w-8 h-8 text-purple-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Speed Over Friction</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                If it takes more than 2 seconds to capture a thought, the tool has failed.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="p-10 rounded-3xl bg-[#0a0a0f] border border-white/5 hover:border-purple-500/20 transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <ShieldCheck className="w-8 h-8 text-purple-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Privacy by Default</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Your brain is private. Your digital brain should be too. We don't compromise on encryption.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="p-10 rounded-3xl bg-[#0a0a0f] border border-white/5 hover:border-purple-500/20 transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <Layers className="w-8 h-8 text-purple-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Simplicity is Hard</h3>
              <p className="text-slate-400 font-light leading-relaxed">
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
        <div className="absolute inset-0 opacity-10 mix-blend-screen pointer-events-none">
          <img 
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80" 
            alt="Team Working" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">The people laying the groundwork.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Aditya */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-10 rounded-3xl bg-[#0a0a0f]/90 backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                  <User className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Aditya</h3>
                  <p className="text-purple-400 text-sm font-medium tracking-wide">Founder & Product Lead</p>
                </div>
              </div>
              <p className="text-slate-400 font-light leading-relaxed">
                Obsessed with minimal UI and intuitive design. Aditya leads the product vision, ensuring that every new feature we introduce actually reduces your cognitive load rather than adding complexity. His goal is to keep the software invisible so your ideas remain the focal point.
              </p>
            </motion.div>

            {/* The Dev Squad */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="p-10 rounded-3xl bg-[#0a0a0f]/90 backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-600 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-slate-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">The Dev Squad</h3>
                  <p className="text-slate-400 text-sm font-medium tracking-wide">Engineering Team</p>
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
          OPERATIONS BASE (Clean Footer-style Block)
          ========================================= */}
      <section className="py-24 relative bg-[#030305]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 p-10 rounded-3xl border border-white/5 bg-gradient-to-r from-[#050508] to-[#0a0a0f]"
          >
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-slate-300 font-medium">
                <Building className="w-5 h-5 text-purple-400" /> Entity
              </div>
              <p className="text-white font-semibold tracking-wide">ATHIYA NEXA TECH PRIVATE LIMITED</p>
            </div>
            
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-slate-300 font-medium">
                <MapPin className="w-5 h-5 text-purple-400" /> Location
              </div>
              <p className="text-slate-400 font-light leading-relaxed max-w-xs mx-auto md:mx-0">
                Chhonkara Wali Gali, Shiv Mandir K Pas Jaswant, Bharatpur City, Rajasthan, India, 321001.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          CLOSING CTA
          ========================================= */}
      <section className="py-32 relative overflow-hidden text-center border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.1)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Help us build the ecosystem.
          </h2>
          <p className="text-lg text-slate-400 font-light leading-relaxed">
            We are looking for power users to push our features to their limits. Talk directly to the team writing the code.
          </p>
          <div className="pt-6">
            <Link to="/beta" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#030305] rounded-xl text-sm font-bold tracking-wide hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Join the Beta Cohort
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Company;