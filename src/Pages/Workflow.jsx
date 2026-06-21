import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, BookOpen, KanbanSquare, 
  AlertCircle, CheckCircle2, ArrowRight, BrainCircuit 
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

const Workflows = () => {
  return (
    <div className="bg-[#030305] text-slate-200 font-sans overflow-x-hidden selection:bg-purple-500/30 selection:text-white pb-32">
      
      {/* =========================================
          HERO SECTION (Workflows Hook)
          ========================================= */}
      <section className="relative pt-22 pb-32 overflow-hidden border-b border-white/5">

  {/* Background Layers */}
  <div className="absolute inset-0 z-0">

    {/* Main Background Image */}
    <img
      src="https://images.pexels.com/photos/9572494/pexels-photo-9572494.jpeg"
      alt="Knowledge Worker"
      className="w-full h-full object-cover"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/75"></div>

    {/* Purple Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black/40 to-[#030305]"></div>

    {/* Glow Effect */}
    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-purple-600/10 blur-[150px] rounded-full opacity-60"></div>

    {/* Grid Background */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-20"></div>
  </div>

  <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="space-y-8"
    >
      <motion.div
        variants={fadeUp}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest"
      >
        <BrainCircuit className="w-3 h-3 text-purple-400" />
        Practical Applications
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.05]"
      >
        Built for heavy
        <br className="hidden sm:block" />
        cognitive lifting.
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto"
      >
        We aren't building a basic grocery list app. Our staging platform
        is being adopted by founders, researchers, and operators to manage
        massive, continuous information intake. See how different minds
        utilize the graph.
      </motion.p>
    </motion.div>
  </div>
</section>

      {/* =========================================
          PROFILE A: THE FOUNDER & EXECUTIVE
          ========================================= */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl border border-white/10 bg-[#0a0a0f] overflow-hidden shadow-2xl"
          >
            {/* Cinematic Background Image Blend */}
            <div className="absolute top-0 right-0 w-full md:w-2/3 h-full opacity-20 pointer-events-none mix-blend-luminosity">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&q=80" 
                alt="Executive Meetings" 
                className="w-full h-full object-cover"
                style={{ maskImage: 'linear-gradient(to left, black, transparent)', WebkitMaskImage: 'linear-gradient(to left, black, transparent)' }}
              />
            </div>

            <div className="relative z-10 p-8 md:p-16 lg:w-2/3">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#111116] border border-white/10 flex items-center justify-center shadow-lg">
                  <Briefcase className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-purple-400 tracking-widest uppercase">Profile A</h3>
                  <h2 className="text-2xl text-white font-semibold">The Founder & Executive</h2>
                </div>
              </div>

              <h4 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-10 leading-snug">
                Get exponentially more out of your meetings.
              </h4>

              <div className="space-y-6">
                {/* The Friction */}
                <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <h5 className="text-red-200 font-medium">The Friction</h5>
                  </div>
                  <p className="text-slate-400 font-light leading-relaxed">
                    For operators jumping between back-to-back calls, context is easily dropped. You take a note in one meeting, but by the end of the week, it's buried under twenty other documents.
                  </p>
                </div>

                {/* The Solution */}
                <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm shadow-[0_0_30px_rgba(168,85,247,0.05)]">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                    <h5 className="text-purple-200 font-medium">The Nexa Solution</h5>
                  </div>
                  <p className="text-slate-300 font-light leading-relaxed">
                    Sync your calendar, pull in meeting details automatically, and let our AI summarize the transcript into clear deliverables. Backlink the project name, and instantly aggregate every meeting you've ever had on that specific topic into one clean view. No more manual searching through past dates.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          PROFILE B: THE DEEP RESEARCHER & WRITER
          ========================================= */}
      <section className="py-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl border border-white/10 bg-[#08080b] overflow-hidden shadow-2xl"
          >
            {/* Cinematic Background Image Blend (Flipped to Left) */}
            <div className="absolute top-0 left-0 w-full md:w-2/3 h-full opacity-10 pointer-events-none mix-blend-screen">
              <img 
                src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&q=80" 
                alt="Deep Research Connectivity" 
                className="w-full h-full object-cover"
                style={{ maskImage: 'linear-gradient(to right, black, transparent)', WebkitMaskImage: 'linear-gradient(to right, black, transparent)' }}
              />
            </div>

            <div className="relative z-10 p-8 md:p-16 lg:w-2/3 lg:ml-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#111116] border border-white/10 flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-purple-400 tracking-widest uppercase">Profile B</h3>
                  <h2 className="text-2xl text-white font-semibold">The Deep Researcher & Writer</h2>
                </div>
              </div>

              <h4 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-10 leading-snug">
                Synthesize scattered research into structured drafts.
              </h4>

              <div className="space-y-6">
                {/* The Friction */}
                <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <h5 className="text-red-200 font-medium">The Friction</h5>
                  </div>
                  <p className="text-slate-400 font-light leading-relaxed">
                    Writers and researchers collect hundreds of web snippets, book highlights, and sudden midnight ideas. Keeping them organized organically is a nightmare in traditional software.
                  </p>
                </div>

                {/* The Solution */}
                <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm shadow-[0_0_30px_rgba(168,85,247,0.05)]">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                    <h5 className="text-purple-200 font-medium">The Nexa Solution</h5>
                  </div>
                  <p className="text-slate-300 font-light leading-relaxed">
                    Because of our networked structure, a quote you saved six months ago will organically resurface when you start writing about a connected topic today. It feels less like searching through a filing cabinet and more like having a conversation with your past self. Connect disparate ideas to form original theses effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          PROFILE C: THE PRODUCT MANAGER
          ========================================= */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl border border-white/10 bg-[#0a0a0f] overflow-hidden shadow-2xl"
          >
            {/* Cinematic Background Image Blend */}
            <div className="absolute top-0 right-0 w-full md:w-2/3 h-full opacity-15 pointer-events-none mix-blend-luminosity">
              <img 
                src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&q=80" 
                alt="Product Management Desk" 
                className="w-full h-full object-cover"
                style={{ maskImage: 'linear-gradient(to left, black, transparent)', WebkitMaskImage: 'linear-gradient(to left, black, transparent)' }}
              />
            </div>

            <div className="relative z-10 p-8 md:p-16 lg:w-2/3">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#111116] border border-white/10 flex items-center justify-center shadow-lg">
                  <KanbanSquare className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-purple-400 tracking-widest uppercase">Profile C</h3>
                  <h2 className="text-2xl text-white font-semibold">The Product Manager</h2>
                </div>
              </div>

              <h4 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-10 leading-snug">
                Track daily progress without the friction.
              </h4>

              <div className="space-y-6">
                {/* The Friction */}
                <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <h5 className="text-red-200 font-medium">The Friction</h5>
                  </div>
                  <p className="text-slate-400 font-light leading-relaxed">
                    Managing feature requests, bug logs, and daily standups usually requires jumping between rigid project management tools and personal notebooks.
                  </p>
                </div>

                {/* The Solution */}
                <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm shadow-[0_0_30px_rgba(168,85,247,0.05)]">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                    <h5 className="text-purple-200 font-medium">The Nexa Solution</h5>
                  </div>
                  <p className="text-slate-300 font-light leading-relaxed">
                    Keep a running log of feature ideas and daily standup notes in your daily scratchpad. By using simple backlinks like <span className="text-purple-400 bg-purple-500/20 px-1 rounded">#Q3-Roadmap</span> or <span className="text-purple-400 bg-purple-500/20 px-1 rounded">@Aditya</span>, you create an automatic, constantly updating feed for any specific project or team member without ever leaving your daily note.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          CLOSING CTA
          ========================================= */}
      <section className="py-32 relative overflow-hidden text-center border-t border-white/5 bg-[#050508]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.1)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Ready to upgrade your workflow?
          </h2>
          <p className="text-lg text-slate-400 font-light leading-relaxed">
            Join the founders, researchers, and product managers who are already building their networked second brain.
          </p>
          <div className="pt-6">
            <Link to="/beta" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#030305] rounded-xl text-sm font-bold tracking-wide hover:bg-slate-200 hover:-translate-y-0.5 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Secure Early Access
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Workflows;