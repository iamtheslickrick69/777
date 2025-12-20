import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Process', href: '#process' },
    { label: 'Work', href: '#projects' },
    { label: 'Insights', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-[#3a3a3a] rounded-md px-3 py-3 flex items-center gap-3 shadow-2xl border border-white/5">
        {/* Logo Box */}
        <div className="bg-[#1a1a1a] rounded-md w-[60px] h-[60px] flex items-center justify-center p-2">
          <img src="/anvil-logo.png" alt="Haestus Logo" className="w-full h-full object-contain" />
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex items-center gap-2">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-6 py-3 rounded-md border border-white/10 text-white text-base hover:bg-white/5 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:block px-8 py-3 rounded-md bg-[#e8e8e8] text-black text-base font-medium hover:bg-white transition-colors"
        >
          Start Project →
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden px-4 py-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full mt-2 left-0 right-0 bg-[#3a3a3a] rounded-md p-4 flex flex-col gap-2 shadow-2xl border border-white/5">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-md border border-white/10 text-white text-base hover:bg-white/5 text-left"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-3 rounded-md bg-[#e8e8e8] text-black text-base font-medium text-center hover:bg-white"
          >
            Start Project →
          </a>
        </div>
      )}
    </nav>
  );
}
