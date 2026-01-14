'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/prodotti', label: 'Prodotti' },
    { href: '/come-funziona', label: 'Come Funziona' },
    { href: '/contatti', label: 'Contatti' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#faf9f7]/95 backdrop-blur-md border-b border-[#c9a962]/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img 
              src="/logo.svg?v=3" 
              alt="LaserCraft" 
              className="h-9 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#2d2d2d] hover:text-[#c9a962] transition-colors font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c9a962] transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <Link
              href="/carrello"
              className="relative p-2 hover:bg-[#c9a962]/10 rounded-full transition-colors"
            >
              <ShoppingBag className="w-6 h-6 text-[#2d2d2d]" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-[#c9a962] text-white text-xs font-bold rounded-full flex items-center justify-center"
                >
                  {totalItems}
                </motion.span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-[#c9a962]/10 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[#2d2d2d]" />
              ) : (
                <Menu className="w-6 h-6 text-[#2d2d2d]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-3 px-4 text-[#2d2d2d] hover:bg-[#c9a962]/10 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

