import React from 'react';
import { Link } from 'react-router-dom';

import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#030305] border-t border-white/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Identity */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} className='h-8' alt="" />
              <span className="text-slate-100 font-semibold text-lg tracking-wide">Athiya Nexa</span>
            </Link>
            <p className="text-slate-400 text-sm font-normal leading-relaxed max-w-xs">
              AI-native workspace built to replace rigid folders with a fluid, networked second brain.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold tracking-wide uppercase">Product</h4>
            <ul className="space-y-3 text-sm text-slate-300 font-medium">
              <li><Link to="/capabilities" className="hover:text-purple-400 transition-colors">Capabilities</Link></li>
              <li><Link to="/workflows" className="hover:text-purple-400 transition-colors">Workflows</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold tracking-wide uppercase">Company</h4>
            <ul className="space-y-3 text-sm text-slate-300 font-medium">
              <li><Link to="/company" className="hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link to="/beta" className="hover:text-purple-400 transition-colors">Join the Beta</Link></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold tracking-wide uppercase">Contact</h4>
            <p className="text-slate-300 text-sm font-medium">contact@athiyatechnexa.in</p>
            <p className="text-slate-400 text-xs font-normal leading-relaxed">
              Chhonkara Wali Gali, Shiv Mandir K Pas Jaswant, Bharatpur City, Rajasthan, 321001.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-xs font-medium">
            © {new Date().getFullYear()} ATHIYA NEXA TECH PRIVATE LIMITED.
          </div>
          <div className="flex gap-8 text-xs text-slate-400 font-medium">
            <Link to="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
            {/* <Link to="/privacy" className="hover:text-purple-400 transition-colors">Terms of Service</Link> */}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;