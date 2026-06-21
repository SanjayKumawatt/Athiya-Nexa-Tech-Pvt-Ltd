import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Link2, ShieldCheck, Zap, Search, 
  PenLine, ArrowRight
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Capabilities = () => {
  return (
    <div className="bg-[#030305] text-slate-200 font-sans overflow-x-hidden selection:bg-purple-500/30 selection:text-white pb-32">
      
      {/* =========================================
          INTRODUCTORY BLOCK (Hero Section with Image)
          ========================================= */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5 bg-[#050508]">
        {/* Background Image - Masked and Grayscaled to fit the aesthetic */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen" style={{ maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)' }}>
          <img 
            src="https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80" 
            alt="Sleek network visualisation" 
            className="w-full h-full object-cover grayscale opacity-50"
          />
        </div>

        {/* Soft floating orb - kept for accent, z-index managed */}
        <div className="absolute z-10 top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.05]">
              Everything you need to <br className="hidden sm:block"/> think clearer.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-400 leading-relaxed font-light max-w-3xl mx-auto">
              We are keeping the interface intentionally clean while packing the backend with immense capability. Here is a detailed look at the tools we are perfecting in our current release cycles to supercharge your cognitive output.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          DEEP DIVE 1: BI-DIRECTIONAL LINKING (Cinematic Overlay)
          ========================================= */}
      <section className="relative w-full min-h-[80vh] flex items-center py-20 border-y border-white/5 overflow-hidden bg-[#050508]">
        {/* Abstract Network Image Fading into Darkness */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen" style={{ maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)' }}>
          <img 
            src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80" 
            alt="Network Nodes" 
            className="w-full h-full object-cover grayscale opacity-50"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-xl bg-[#0a0a0f]/80 backdrop-blur-2xl border border-white/10 p-10 md:p-14 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <Link2 className="w-8 h-8 text-purple-400 mb-8" />
            <h2 className="text-3xl font-bold text-white tracking-tight mb-6 leading-snug">
              Connect the dots effortlessly across your entire workspace.
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed font-light">
              Highlight a word, type a bracket, and watch your personal knowledge graph grow. When you link 'Concept A' to 'Concept B', the system automatically creates a reverse link so you can always trace your logic backward. This means you never have to copy-paste the same information in multiple places. It is a singular, breathing ecosystem of your ideas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          DEEP DIVE 2 & 3: SECURITY & SYNC (Asymmetrical Grid)
          ========================================= */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 mt-8">
          
          {/* Security - Small Column (Span 2) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="md:col-span-2 relative rounded-3xl border border-white/5 bg-[#08080b] overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
              <img 
                src="https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&w=800&q=80" 
                alt="Abstract Dark Security" 
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080b] via-[#08080b]/80 to-transparent"></div>
            </div>
            
            <div className="relative z-10 p-10 h-full flex flex-col justify-end min-h-[450px]">
              <ShieldCheck className="w-8 h-8 text-purple-500 mb-6" />
              <h3 className="text-2xl font-bold text-white tracking-tight mb-4">Hardened privacy for your private thoughts.</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Your intellectual property is yours alone. In an era of aggressive data harvesting, we are bootstrapping a platform where local-first encryption is the default standard. Your vault remains completely locked behind your own credentials. Not even our founding squad can read your unencrypted thoughts. Peace of mind is built into the foundation.
              </p>
            </div>
          </motion.div>

          {/* Offline Sync - Large Column (Span 3) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:col-span-3 relative rounded-3xl border border-purple-500/10 bg-[#0a0a0f] overflow-hidden group shadow-[0_0_40px_rgba(168,85,247,0.05)]"
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 mix-blend-luminosity">
              <img 
                src="https://images.pexels.com/photos/1637766/pexels-photo-1637766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&q=80" 
                alt="Offline Sync Anywhere" 
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent"></div>
            </div>

            <div className="relative z-10 p-10 md:p-14 h-full flex flex-col justify-center">
              <Zap className="w-8 h-8 text-purple-400 mb-8" />
              <h3 className="text-3xl font-bold text-white tracking-tight mb-6">Write offline. Sync anywhere seamlessly.</h3>
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                True inspiration doesn’t require a WiFi connection. Whether you are on a remote flight or commuting through a subway, Athiya Nexa lets you write without interruption. We are fine-tuning our sync protocols so that the moment your device reconnects to a network, every single keystroke is reconciled across your mobile and desktop apps instantly and without collision.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================
          DEEP DIVE 4: UNIVERSAL SEARCH (Wide Spotlight)
          ========================================= */}
      <section className="my-8 relative rounded-3xl max-w-[95%] mx-auto overflow-hidden bg-[#050508] border border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[150px] opacity-50"></div>
          {/* Subtle light leak image blending into background */}
          <img 
            src="https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80" 
            alt="Light leak search concept" 
            className="w-full h-full object-cover mix-blend-screen opacity-10"
          />
        </div>

        <div className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
            <Search className="w-10 h-10 text-purple-400 mx-auto" />
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Never lose a brilliant reference again.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-slate-400 leading-relaxed font-light">
              What good is taking notes if you can't find them when you need them? Our universal search is engineered for absolute speed. Type a single keyword or a vague memory of a phrase, and our system scans thousands of entries in milliseconds to pull up the exact paragraph you are looking for, complete with its surrounding context.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          DEEP DIVE 5: THE DAILY SCRATCHPAD (Focus Editor Layout)
          ========================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="relative rounded-3xl border border-white/5 bg-[#0a0a0f] p-8 md:p-16 flex flex-col md:flex-row gap-16 items-center"
        >
          {/* Abstract Canvas Image framing the text */}
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
            <img 
              src="https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&q=80" 
              alt="Clean Desk Minimalist" 
              className="w-full h-full object-cover mix-blend-luminosity"
              style={{ maskImage: 'linear-gradient(to left, black, transparent)', WebkitMaskImage: 'linear-gradient(to left, black, transparent)' }}
            />
          </div>

          <div className="relative z-10 md:w-1/2 space-y-8">
            <PenLine className="w-8 h-8 text-purple-400" />
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Your daily blank canvas.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-slate-400 leading-relaxed font-light">
              Every day opens with a fresh, date-stamped blank page. No need to name files or create directories before you start your day. Log your coffee thoughts, drop meeting notes, and paste web links. The chronological structure combined with associative backlinking ensures everything is perfectly mapped in time.
            </motion.p>
          </div>

          {/* Visual Editor Cue */}
          <motion.div variants={fadeUp} className="relative z-10 md:w-1/2 w-full">
            <div className="w-full bg-[#050508] border border-white/10 rounded-xl p-8 shadow-2xl">
              <div className="flex gap-2 mb-6 border-b border-white/5 pb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
              </div>
              <div className="space-y-4">
                <div className="w-3/4 h-3 bg-slate-800 rounded-full"></div>
                <div className="w-full h-3 bg-slate-800/50 rounded-full"></div>
                <div className="w-5/6 h-3 bg-slate-800/50 rounded-full"></div>
                <div className="flex items-center gap-2 pt-4">
                  <div className="w-4 h-4 rounded text-purple-500 font-mono text-xs font-bold">[[</div>
                  <div className="w-1/3 h-3 bg-purple-500/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
};

export default Capabilities;