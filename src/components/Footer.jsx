import { Facebook, Twitter, Linkedin, Instagram, Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#001F3F] via-[#002856] to-[#003366] text-gray-300 border-t border-gray-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo.jpeg" alt="Contalkt Logo" className="w-12 h-12 rounded-full shadow-lg" />
              <div>
                <h2 className="text-lg font-bold text-white">Contalkt Solutions</h2>
                <p className="text-xs text-[#FF6B35] font-semibold">Connection & Communication</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Digital solutions partner for websites, apps, social media, and digital marketing.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  title={label}
                  className="w-10 h-10 bg-gray-700 hover:bg-[#FF6B35] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone size={20} className="text-[#FF6B35] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-semibold">+91 95811 91311</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-[#FF6B35] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold">akshitpatnala@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Location */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Office Location</h3>
            <div className="flex items-start space-x-3">
              <MapPin size={20} className="text-[#FF6B35] flex-shrink-0 mt-1" />
              <div>
                <p className="text-gray-400 text-sm mb-2">Address</p>
                <p className="text-white text-sm leading-relaxed">
                  H.No: 10-349, Plot No: 249/250<br/>
                  Patha Venture, Near Kirby Colony<br/>
                  Chitkul, Sangareddly District<br/>
                  Hyderabad - 502307, Telangana
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <div className="space-y-3">
              <a href="#home" className="block text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300">Home</a>
              <a href="#about" className="block text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300">About</a>
              <a href="#services" className="block text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300">Services</a>
              <a href="#portfolio" className="block text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300">Portfolio</a>
              <a href="#faq" className="block text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300">FAQ</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              CIN: U72900TG2021PTC153881
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-[#FF6B35]" /> by Contalkt Solutions
            </p>
            <p className="text-gray-500 text-sm">
              © {currentYear} Contalkt Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
