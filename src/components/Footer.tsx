import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I have a question about your services!");
    window.open(`https://wa.me/917977841620?text=${message}`, '_blank');
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">SW</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Shiny Wheels</h3>
                <p className="text-gray-400">Happy Rides</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for professional vehicle care. We provide top-quality car wash,
              bike wash, tyre services, and detailing with eco-friendly practices and customer satisfaction guarantee.
            </p>

            <div className="flex space-x-4">
              <button
                onClick={handleWhatsApp}
                className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                </svg>
              </button>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:info@shinywheels.com"
                className="bg-gray-600 hover:bg-gray-700 p-3 rounded-full transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <a
                href="tel:+917977841620"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>+91 79778 41620</span>
              </a>

              <button
                onClick={() => window.open('https://maps.app.goo.gl/7Mssr2ZHEorgQoLz9', '_blank')}
                className="flex items-start space-x-3 text-gray-300 hover:text-white transition-colors text-left"
              >
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>
                  Shop No 1/2, near Meena Hospital Road,<br />
                  Talvali, Ghansoli Gaon, Ghansoli,<br />
                  Navi Mumbai, Maharashtra 400701
                </span>
              </button>

              <div className="flex items-start space-x-3 text-gray-300">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <div>Mon-Sat: 8AM-11PM</div>
                  <div>Sunday: 8AM-11PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Shiny Wheels. All rights reserved. | Professional Vehicle Care Services
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;