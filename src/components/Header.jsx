import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScroll = (href) => {
    if (href === '#faq') {
      window.location.hash = 'faq';
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity">
          <img src="/logo.jpeg" alt="Contalkt Logo" className="w-12 h-12 rounded-full shadow-md hover:shadow-lg transition-shadow" />
          <div>
            <h1 className="text-lg font-bold text-[#0066CC]">Contalkt Solutions</h1>
            <p className="text-xs text-[#FF6B35] font-semibold tracking-wide">CONNECTION & COMMUNICATION</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleScroll(link.href)}
              className="px-4 py-2 text-gray-700 hover:text-[#0066CC] hover:bg-blue-50 font-medium transition-all duration-300 rounded-lg"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleScroll('#contact')}
            className="btn-accent shadow-lg"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleScroll(link.href)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#0066CC] rounded-lg font-medium transition-all"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleScroll('#contact')}
              className="btn-primary w-full mt-3"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
