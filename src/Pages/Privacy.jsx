import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, EyeOff, Lock, Activity, UserCog, Scale 
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Privacy = () => {
  return (
    <div className="bg-[#030305] text-slate-200 font-sans overflow-x-hidden selection:bg-purple-500/30 selection:text-white pb-32">
      
      {/* =========================================
          HERO SECTION (Clean Document Style)
          ========================================= */}
      <section className="relative pt-48 pb-16 border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Data Practices, Privacy Stance & Platform Terms
            </motion.h1>
            
          </motion.div>
        </div>
      </section>

      {/* =========================================
          LEGAL CONTENT SECTIONS
          ========================================= */}
      <section className="py-16 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer} 
            className="space-y-16"
          >

            {/* Section 1 */}
            <motion.div variants={fadeUp} className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">A Philosophical Stance on Data</h2>
              </div>
              <p className="text-slate-300 font-light leading-relaxed text-lg">
                Before the legal jargon, here is our promise: You own your mind, and you own your notes. We are building a software company, not a data-harvesting operation. Your personal insights, meeting notes, and research are your proprietary assets. We do not look at them, we do not mine them for advertising, and we do not sell them. Period.
              </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div variants={fadeUp} className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <EyeOff className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">Information Collection & Usage</h2>
              </div>
              <p className="text-slate-300 font-light leading-relaxed text-lg">
                When you voluntarily join our waitlist, apply for beta access, or contact our team, we collect basic communication details such as your name, email address, and your primary use cases. This data is utilized strictly to evaluate your fit for our pilot cohort, grant you staging access, and gather product feedback.
              </p>
            </motion.div>

            {/* Section 3 */}
            <motion.div variants={fadeUp} className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">Our Security Framework</h2>
              </div>
              <p className="text-slate-300 font-light leading-relaxed text-lg">
                Because we are in the MVP testing phase, the platform is evolving rapidly. However, foundational security is not an afterthought. We prioritize industry-standard local-first encryption practices to protect your synced notes and vault data. As we scale toward a public launch, we are continuously laying the groundwork to ensure your intellectual property remains fortified against unauthorized access.
              </p>
            </motion.div>

            {/* Section 4 */}
            <motion.div variants={fadeUp} className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">Cookie Policy & Tracking</h2>
              </div>
              <p className="text-slate-300 font-light leading-relaxed text-lg">
                We use minimal analytics purely to understand how the platform performs (e.g., page load speeds, crash reports) so our developers can push fixes. We do not use cross-site tracking pixels to follow you around the internet.
              </p>
            </motion.div>

            {/* Section 5 */}
            <motion.div variants={fadeUp} className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <UserCog className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">User Rights & Data Control</h2>
              </div>
              <p className="text-slate-300 font-light leading-relaxed text-lg">
                You have the absolute right to request a full export, modification, or complete deletion of your account and associated personal data at any time. Simply email our founding squad directly at <a href="mailto:contact@athiyatechnexa.in" className="text-purple-400 hover:text-purple-300 transition-colors">contact@athiyatechnexa.in</a>, and we will ensure your request is processed thoroughly within 30 days. No questions asked.
              </p>
            </motion.div>

            {/* Section 6 */}
            <motion.div variants={fadeUp} className="space-y-4 pt-8 border-t border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">Governing Law & Jurisdiction</h2>
              </div>
              <p className="text-slate-300 font-light leading-relaxed text-lg">
                Any inquiries, disputes, or legal matters regarding our beta services, data handling practices, or website operations shall be governed exclusively by the laws of India. All matters fall under the strict and exclusive jurisdiction of the competent courts located in Bharatpur, Rajasthan.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Privacy;