import { MapPin, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-full h-full overflow-hidden flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Shiny Wheels Logo"
                className="w-full h-10 md:h-12 object-cover bg-transparent"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />

            </div>

          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Services</button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-blue-600 transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+917977841620" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Phone size={16} />
              <span className="text-sm">+91 98765 43210</span>
            </a>
            <div className="flex items-center space-x-1 text-gray-700">
              <MapPin size={16} />
              <span className="text-sm">Mumbai, Maharashtra</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Services</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Pricing</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Contact</button>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex flex-col space-y-2">
                  <a href="tel:+917977841620" className="flex items-center space-x-2 text-gray-700">
                    <Phone size={16} />
                    <span>+91 98765 43210</span>
                  </a>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <MapPin size={16} />
                    <span>Mumbai, Maharashtra</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;