import { useState, useEffect } from "react";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-nav py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold tracking-tighter text-white">
          Siva<span className="text-primary">.</span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-textMuted hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1fvQkEF4n5OQGd8RS-1PJVWYWZD0xzoJa/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-all"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-nav border-t border-border p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-textMuted hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
