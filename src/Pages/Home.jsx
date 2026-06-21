import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, Search, Command, Mic, Layers3,
  BrainCircuit, Zap, Network, Bot, XCircle, CheckCircle2,
  FileText, Calendar, Layout
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Home = () => {
  return (
    <div className="bg-[#030305] text-slate-200 font-sans overflow-x-hidden selection:bg-purple-500/30 selection:text-white">
      
      {/* =========================================
          HERO SECTION (ELEGANT, MINIMAL)
          ========================================= */}
      <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden selection:bg-purple-900/40 selection:text-white">
        
        {/* Correct Reflect Background and Glow Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Layer 1: Minimal Starfield/Mesh */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)] opacity-30"></div>
          
          {/* Layer 2: Deep Purple Background Aurora/Black Hole */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[400px] bg-purple-700/20 blur-[120px] rounded-t-[100%]"></div>
          <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-fuchsia-600/15 blur-[80px] rounded-t-[100%]"></div>
          
          {/* Layer 3: Core Accretion Disk / Glowing Arc */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_30px_5px_rgba(168,85,247,0.8)]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.05]">
              Give your brain a <br className="hidden md:block" /> digital upgrade.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              Athiya Nexa is a lightweight, AI-native workspace that connects your thoughts automatically. We are an Emerging Startup iterating fast to replace rigid folders with a fluid, networked second brain. We are laying the groundwork for our MVP alongside our first tight-knit cohort of early adopters.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 relative z-30">
              <Link to="/beta" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#030305] rounded-xl text-sm font-semibold tracking-wide hover:bg-slate-200 hover:-translate-y-0.5 transition-all shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <Sparkles className="w-4 h-4 text-purple-600" />
                Join the Beta Waitlist
              </Link>
              
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          THE COGNITIVE CRISIS (Clean & Spacious)
          ========================================= */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="py-32 border-b border-white/5 relative z-10 bg-[#050508] border-y border-white/5 selection:bg-purple-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <BrainCircuit className="w-12 h-12 text-purple-500/50 mx-auto" />
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            The heavy tax of scattered thinking.
          </motion.h2>
          <motion.div variants={fadeUp} className="text-lg text-slate-300 font-normal leading-relaxed space-y-6">
            <p>
              The human brain is incredible at generating ideas, but terrible at storing them. Most scaling teams and deep thinkers rely on a fragmented mess of physical notebooks, unread text documents, and chaotic chat threads.
            </p>
            <p>
              When your knowledge is scattered, your execution slows down. Finding a brilliant insight from three months ago shouldn't require a forensic investigation. We are engineering a platform from the ground up to solve this exact friction.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* =========================================
          FEATURE HIGHLIGHT 1: FRICTIONLESS CAPTURE (Real UI Mockup)
          ========================================= */}
      <section className="py-32 border-b border-white/5 relative bg-[#030305]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(168,85,247,0.03)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
              <Zap className="w-8 h-8 text-purple-400" />
              <motion.h3 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.2]">
                Ideas vanish in seconds. Catch them before they fade.
              </motion.h3>
              <motion.div variants={fadeUp} className="space-y-6 text-slate-300 font-normal leading-relaxed">
                <p>
                  The biggest bottleneck in modern note-taking apps is the constant need to categorize. When a sudden idea strikes, you shouldn't have to pause and decide which folder, sub-folder, or tag it belongs to. That tiny hesitation is often enough to make you lose your train of thought entirely.
                </p>
                <p>
                  Just open the daily scratchpad and type. Our system handles the organization later. We are shaping this platform to be the absolute fastest way to get a raw thought out of your head and safely secured onto a screen.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-300 text-sm font-mono tracking-wide">
                [ Zero load time. Zero folder anxiety. Just write. ]
              </motion.div>
            </motion.div>

            {/* Translucent detailed UI mockup */}
            <motion.div initial={{ opacity: 0, scale: 0.98, x: 20 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative h-[450px] rounded-2xl border border-white/5 bg-[#0a0a0f] shadow-2xl flex overflow-hidden">
               {/* Sidebar Mockup */}
               <div className="w-1/3 border-r border-white/5 bg-[#050508] p-4 hidden sm:block">
                 <div className="flex items-center gap-2 mb-8 px-2">
                   <div className="w-3 h-3 rounded bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                   <span className="text-sm font-medium text-slate-300">Athiya Vault</span>
                 </div>
                 <div className="space-y-1">
                   <div className="flex items-center gap-2 text-purple-300 bg-purple-500/10 px-3 py-2 rounded-lg text-sm">
                     <FileText className="w-4 h-4" /> Daily Notes
                   </div>
                   <div className="flex items-center gap-2 text-slate-400 px-3 py-2 rounded-lg text-sm">
                     <Search className="w-4 h-4" /> All Notes
                   </div>
                   <div className="flex items-center gap-2 text-slate-400 px-3 py-2 rounded-lg text-sm opacity-50">
                     <Layers3 className="w-4 h-4" /> Templates
                   </div>
                 </div>
               </div>
               
               {/* Main Editor Mockup */}
               <div className="flex-1 p-8 relative">
                 <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none"></div>
                 <h4 className="text-xl font-medium text-slate-200 mb-6 flex items-center gap-2 selection:bg-purple-900/50">
                   <Calendar className="w-5 h-5 text-slate-500" />
                   Sun, June 21st, 2026
                 </h4>
                 <div className="space-y-5">
                   <div className="flex gap-3 relative z-10">
                     <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2"></div>
                     <p className="text-slate-300 text-sm leading-relaxed">Meeting with the dev team regarding the <span className="text-purple-400 bg-purple-500/20 px-1 rounded hover:text-purple-200">[[MVP Launch]]</span>. We need to finalize the schema.</p>
                   </div>
                   <div className="flex gap-3 relative z-10">
                     <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2"></div>
                     <p className="text-slate-300 text-sm leading-relaxed">Idea: Use native encryption for <span className="text-purple-400 bg-purple-500/20 px-1 rounded hover:text-purple-200">[[Hardened Privacy Frameworks]]</span>. <br/> - Must prioritize local-first data custody.</p>
                   </div>
                   <div className="flex gap-3 opacity-50">
                     <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2"></div>
                     <p className="text-slate-600 text-sm">Just write...</p>
                   </div>
                 </div>
                 {/* Floating Mic */}
                 <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform cursor-pointer">
                    <Mic className="w-5 h-5 text-purple-300" />
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          FEATURE 2: THE GRAPH DATABASE (Detailed Mockup)
          ========================================= */}
      <section className="py-32 border-b border-white/5 relative bg-[#050508]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(168,85,247,0.03)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* FULL DETAILED GRAPH UI MOCKUP */}
            <motion.div initial={{ opacity: 0, scale: 0.98, x: -20 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-2 lg:order-1 relative h-[450px] rounded-2xl border border-white/10 bg-[#0a0a0f] shadow-2xl flex items-center justify-center overflow-hidden p-6 selection:bg-purple-900/50">
               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50"></div>
               
               {/* Visual Network/Graph with customized labels */}
               <div className="relative w-full h-full">
                 {/* Center Node */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group z-20">
                   <div className="w-20 h-20 bg-purple-600/30 rounded-full border-2 border-purple-400 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.6)] cursor-pointer group-hover:scale-110 transition-transform">
                      <Zap className="w-8 h-8 text-white" />
                   </div>
                   <span className="text-white text-sm font-semibold mt-3 px-3 py-1 bg-[#050508]/80 backdrop-blur rounded-lg border border-white/5">Foundational database schema</span>
                 </div>
                 
                 {/* Links */}
                 <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                   <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="rgba(168,85,247,0.3)" strokeWidth="1.5" />
                   <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="rgba(168,85,247,0.3)" strokeWidth="1.5" />
                   <line x1="50%" y1="50%" x2="20%" y2="70%" stroke="rgba(168,85,247,0.3)" strokeWidth="1.5" />
                 </svg>

                 {/* Surrounding Nodes */}
                 <div className="absolute top-[20%] left-[20%] bg-[#1a1a24]/90 border border-white/5 px-3 py-2 rounded-xl text-slate-300 text-xs z-10 flex gap-2 items-center">
                    <BrainCircuit className="w-3 h-3 text-slate-500" />
                    Cognitive clarity
                 </div>
                 <div className="absolute top-[20%] right-[20%] bg-[#1a1a24]/90 border border-white/5 px-3 py-2 rounded-xl text-slate-300 text-xs z-10 flex gap-2 items-center selection:bg-purple-900/40">
                    <Mic className="w-3 h-3 text-purple-400" />
                    Audio models
                 </div>
                 <div className="absolute bottom-[20%] left-[20%] bg-[#1a1a24]/90 border border-white/5 px-3 py-2 rounded-xl text-slate-300 text-xs z-10 flex gap-2 items-center">
                    <Layers3 className="w-3 h-3 text-slate-500" />
                    Isolated text files
                 </div>
               </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-1 lg:order-2 space-y-8">
              <Network className="w-8 h-8 text-purple-400" />
              <motion.h3 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.2]">
                Your thoughts are connected. Your notes should be too.
              </motion.h3>
              <motion.div variants={fadeUp} className="space-y-6 text-slate-300 font-normal leading-relaxed">
                <p>
                  Human memory doesn't work in straight lines or alphabetical lists. We remember things through context and association. Athiya Nexa maps your notes exactly like your brain works.
                </p>
                <p>
                  By utilizing seamless bi-directional linking, a note taken months ago can organically surface the moment you mention a related topic today. Watch your personal knowledge base evolve into a visual network. Every link you create forms a new neural pathway in your digital brain, allowing you to zoom out and see the big picture of your research.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          FEATURE HIGHLIGHT 3: AI CO-PILOT (Coded Mockup)
          ========================================= */}
      <section className="py-32 border-b border-white/5 relative bg-[#030305]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-3xl space-y-8 mx-auto text-center">
            <Bot className="w-8 h-8 text-purple-400 mx-auto" />
            <motion.h3 variants={fadeUp} className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.2]">
              An assistant for your intellect.
            </motion.h3>
            <motion.p variants={fadeUp} className="text-lg text-slate-300 font-normal leading-relaxed">
              We’re embedding generative AI right into your daily workflow, not as a gimmick, but as a core functional utility. Imagine finishing a chaotic hour-long brainstorm and having an assistant instantly extract the actionable to-dos.
            </motion.p>
          </motion.div>

          {/* MASSIVE DETAILED AI COMMAND MOCKUP */}
          <motion.div initial={{ opacity: 0, scale: 0.98, y: 30 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full bg-[#0a0a0f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-8 selection:bg-purple-900/50">
            <div className="flex items-center justify-between gap-4 mb-8 border-b border-white/5 pb-6">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-slate-500" />
                <span className="text-slate-300 font-light text-base">Ask Nexa AI or type a command...</span>
              </div>
              <div className="flex items-center gap-2 hover:bg-white/5 p-2 rounded-lg cursor-pointer transition-colors">
                <Mic className="w-5 h-5 text-purple-300" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-[#121218] border border-white/5 p-4 rounded-xl cursor-pointer hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-3 text-slate-200">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-semibold group-hover:text-purple-200">Summarize scattered meeting transcripts</span>
                </div>
                <Command className="w-5 h-5 text-slate-600" />
              </div>

              <div className="flex justify-between items-center bg-[#121218] border border-white/5 p-4 rounded-xl cursor-pointer hover:border-purple-500/30 transition-colors selection:bg-purple-900/40">
                <div className="flex items-center gap-3 text-slate-200">
                  <Mic className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-semibold group-hover:text-purple-200">Transcribe voice memos with human-level accuracy</span>
                </div>
                <Command className="w-5 h-5 text-slate-600" />
              </div>

              <div className="flex justify-between items-center bg-[#121218] border border-white/5 p-4 rounded-xl cursor-pointer hover:border-purple-500/30 transition-colors opacity-50">
                <div className="flex items-center gap-3 text-slate-500">
                  <Bot className="w-5 h-5 text-slate-500" />
                  <span className="text-sm font-semibold group-hover:text-purple-200">Run your own personalized AI prompts</span>
                </div>
                <Command className="w-5 h-5 text-slate-600" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          COMPARISON BLOCK (Detailed SaaS Style)
          ========================================= */}
      <section className="py-32 bg-[#050508] border-b border-white/5 relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.05)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-10">
            
            {/* The Old Way */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-10 rounded-2xl bg-[#0a0a0f] border border-red-500/10 relative overflow-hidden backdrop-blur-xl selection:bg-red-900/20 shadow-[0_0_50px_rgba(239,68,68,0.03)] hover:border-red-500/20 transition-all">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-red-500 opacity-40"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <XCircle className="w-8 h-8 text-red-400" />
                <h4 className="text-2xl font-bold text-white tracking-tight">The Old Way (Folders)</h4>
              </div>
              
              <p className="text-slate-300 font-light leading-relaxed text-lg">
                Rigid, hierarchical, requires manual sorting, ideas get lost in deep sub-folders, impossible to see connections.
              </p>
            </motion.div>

            {/* The Nexa Way */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="p-10 rounded-2xl bg-[#0f0f15] border border-purple-500/20 relative overflow-hidden backdrop-blur-3xl selection:bg-purple-900/40 shadow-[0_0_80px_rgba(168,85,247,0.08)] hover:border-purple-500/30 transition-all">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>
              
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <CheckCircle2 className="w-8 h-8 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
                <h4 className="text-2xl font-bold text-white tracking-tight">The Nexa Way (Networked)</h4>
              </div>
              
              <p className="text-white font-light leading-relaxed text-lg relative z-10 opacity-80">
                Fluid, associative, organizes itself through links, ideas resurface organically, visual map of your entire thought process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          CLOSING HOOK
          ========================================= */}
      <section className="py-40 relative overflow-hidden text-center border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15)_0%,transparent_60%)] pointer-events-none"></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-3xl mx-auto px-4 relative z-10 space-y-8">
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Help us find perfect product-market fit.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-slate-400 font-light leading-relaxed">
            We are pushing new updates weekly based exclusively on the insights of our early adopters. Secure your spot in our initial testing cohort and help shape the future of networked thinking.
          </motion.p>
          <motion.div variants={fadeUp} className="pt-8 relative z-30">
            <Link to="/beta" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#030305] rounded-xl text-sm font-bold tracking-wide hover:bg-slate-200 hover:-translate-y-0.5 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Secure Early Access
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;