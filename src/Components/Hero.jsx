import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// fixed: Added Search to the imports list
import { Sparkles, ArrowRight, Command, Mic, Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#030305] overflow-hidden flex flex-col justify-center pt-20 selection:bg-purple-500 selection:text-white">
      
      {/* =========================================
          Exact Reflect Background Animation
          ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Subtle Cosmic Mesh/Starfield */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"></div>
        
        {/* Layer 2: Deep Purple Background Aurora/Black Hole */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[400px] bg-purple-700/20 blur-[120px] rounded-t-[100%]"></div>
        <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-fuchsia-600/30 blur-[80px] rounded-t-[100%]"></div>
        
        {/* Layer 3: Core Accretion Disk / Glowing Arc */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_30px_5px_rgba(168,85,247,0.8)]"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-32">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.05] mb-8">
            Give your brain a <br className="hidden md:block" /> digital upgrade.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            Athiya Nexa is a lightweight, AI-native workspace that connects your thoughts automatically. We are an Emerging Startup iterating fast to replace rigid folders with a fluid, networked second brain. We are laying the groundwork for our MVP alongside our first tight-knit cohort of early adopters.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            to="/beta"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-[#030305] rounded-xl text-sm font-bold tracking-wide hover:bg-slate-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            Join the Beta Waitlist
          </Link>
          
          <Link
            to="/graph"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-slate-700/50 text-slate-300 rounded-xl text-sm font-medium hover:bg-slate-800/50 hover:text-white transition-all"
          >
            Explore the Graph
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Abstract Mockup / UI Hint floating over the glow */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 max-w-5xl mx-auto px-4 w-full translate-y-16"
      >
        <div className="w-full h-[250px] bg-[#0a0a0f]/80 backdrop-blur-md border border-white/10 rounded-t-2xl shadow-2xl overflow-hidden flex flex-col">
          {/* Mockup Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md text-xs text-slate-400">
                {/* Search is now defined and works here */}
                <Search className="w-3 h-3" />
                Search anything...
                <div className="flex items-center gap-1 ml-4 text-[10px] bg-white/10 px-1.5 py-0.5 rounded">
                  <Command className="w-3 h-3" /> K
                </div>
              </div>
            </div>
            <div className="text-sm font-medium text-slate-300">
              June 2026
            </div>
          </div>
          
          {/* Mockup Body Snippet */}
          <div className="p-8 flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent z-10"></div>
            <h3 className="text-xl font-medium text-slate-200 mb-4 border-l-2 border-purple-500 pl-3">
              Daily Scratchpad
            </h3>
            <ul className="space-y-3 text-slate-400 text-sm font-light">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                Athiya Nexa maps your notes exactly like your brain works.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                By utilizing seamless <span className="text-purple-400">[[bi-directional linking]]</span>...
              </li>
            </ul>
            
            {/* Floating Mic Button Hint */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center shadow-xl">
              <Mic className="w-5 h-5 text-purple-300" />
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default Hero;