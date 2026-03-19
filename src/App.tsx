/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import PackagesPage from './pages/PackagesPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll to top if there's no hash
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Handle initial load with hash or navigation with hash
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div id="top" className="font-sans text-stone-900 bg-stone-50 min-h-screen flex flex-col relative">
        {/* Global Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
          <a 
            href="tel:+919617988929" 
            className="w-14 h-14 bg-stone-900 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            aria-label="Call Us"
          >
            <Phone size={24} />
          </a>
          <a 
            href="https://wa.me/919617988929?text=*Jai Shree Mahakaal* 🙏%0A%0AHello, I would like to know more about your services." 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            aria-label="WhatsApp Us"
          >
            <MessageCircle size={28} />
          </a>
        </div>

        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/packages" element={<PackagesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
