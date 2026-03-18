import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'About Us', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className={`font-serif text-2xl font-bold ${isScrolled ? 'text-saffron-600' : 'text-white'}`}>
              Visit Mahakal
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`font-medium hover:text-saffron-500 transition-colors ${isScrolled ? 'text-stone-800' : 'text-stone-200'}`}>
                {link.name}
              </a>
            ))}
            <a href="tel:+919617988929" className="flex items-center gap-2 bg-saffron-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-saffron-700 transition-colors shadow-lg shadow-saffron-600/30">
              <Phone size={18} />
              <span>+91 96179 88929</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={isScrolled ? 'text-stone-900' : 'text-white'}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center space-y-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-stone-800 font-medium text-lg w-full text-center py-2 hover:bg-stone-50"
            >
              {link.name}
            </a>
          ))}
          <a href="tel:+919617988929" className="flex items-center gap-2 bg-saffron-600 text-white px-6 py-3 rounded-full font-medium">
            <Phone size={18} />
            <span>+91 96179 88929</span>
          </a>
        </motion.div>
      )}
    </nav>
  );
}
