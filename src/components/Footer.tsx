import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <HashLink smooth to="/#top" className="font-serif text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <img src="/logo.jpeg" alt="Logo" className="w-12 h-12 rounded-full object-cover" />
              <span>Visit Mahakaleshwar</span>
            </HashLink>
            <p className="text-stone-400 max-w-sm mb-6 leading-relaxed">
              Experience the divine at Visit Mahakaleshwar, your gateway to Ujjain’s spiritual heart. We offer seamless darshan bookings, Bhasma Aarti assistance, and guided tours.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><HashLink smooth to="/#top" className="hover:text-saffron-500 transition-colors">Home</HashLink></li>
              <li><Link to="/packages" className="hover:text-saffron-500 transition-colors">Tour Packages</Link></li>
              <li><Link to="/about" className="hover:text-saffron-500 transition-colors">About Us</Link></li>
              <li><HashLink smooth to="/#destinations" className="hover:text-saffron-500 transition-colors">Destinations</HashLink></li>
              <li><HashLink smooth to="/#reviews" className="hover:text-saffron-500 transition-colors">Reviews</HashLink></li>
              <li><Link to="/contact" className="hover:text-saffron-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Information</h4>
            <ul className="space-y-3">
              <li className="flex flex-col">
                <span className="text-white font-medium">Address:</span>
                <span className="text-stone-400">201, Patidar Tower, Freeganj, Ujjain, MP - 456010</span>
              </li>
              <li className="flex flex-col mt-4">
                <span className="text-white font-medium">Contact:</span>
                <span className="text-stone-400">Durgesh Prajapat</span>
                <a href="tel:+919981246634" className="text-stone-400 hover:text-saffron-500">+91 9981246634</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <h4 className="text-white font-bold text-lg mb-6">Scan for Payment</h4>
            <div className="bg-white p-4 rounded-2xl inline-block shadow-2xl">
              <img 
                src="qrcode.jpg" 
                alt="Payment QR Code" 
                className="w-48 h-48 object-contain"
              />
            </div>
            <p className="mt-4 text-sm text-stone-500 font-medium">Accepting all UPI Payments</p>
          </div>

        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Visit Mahakaleshwar. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-sm text-stone-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
