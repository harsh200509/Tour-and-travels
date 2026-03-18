export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <a href="#home" className="font-serif text-3xl font-bold text-white mb-6 block">
              Visit Mahakal
            </a>
            <p className="text-stone-400 max-w-sm mb-6 leading-relaxed">
              Experience the divine at Visit Mahakal, your gateway to Ujjain’s spiritual heart. We offer seamless darshan bookings, Bhasma Aarti assistance, and guided tours.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-saffron-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-saffron-500 transition-colors">About Us</a></li>
              <li><a href="#destinations" className="hover:text-saffron-500 transition-colors">Destinations</a></li>
              <li><a href="#testimonials" className="hover:text-saffron-500 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-saffron-500 transition-colors">Contact Us</a></li>
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
                <span className="text-white font-medium">Phone:</span>
                <a href="tel:+919617988929" className="text-stone-400 hover:text-saffron-500">+91 96179 88929</a>
              </li>
              <li className="flex flex-col mt-4">
                <span className="text-white font-medium">Hours:</span>
                <span className="text-stone-400">Mon – Sun: 10 am – 6 pm</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Visit Mahakal. All Rights Reserved.
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
