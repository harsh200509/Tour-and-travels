/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Phone } from 'lucide-react';
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
      <div id="top" className="font-sans text-stone-900 bg-stone-50 min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Global Floating Action Buttons */}
        {/* WhatsApp Button - Left Side */}
        <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
          <Link 
            to="/book" 
            className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform overflow-hidden"
            aria-label="Book Now via WhatsApp Icon"
          >
            <img src="/1.png" alt="WhatsApp" className="w-10 h-10 object-contain" />
          </Link>
        </div>

        {/* Call Button - Right Side */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
          <a 
            href="tel:+919981246634" 
            className="w-14 h-14 bg-stone-900 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            aria-label="Call Us"
          >
            <Phone size={24} />
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
