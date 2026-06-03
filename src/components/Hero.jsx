import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Grow Business <span className="text-[#0066CC]">Online</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build digital solutions that help businesses reach their customers. Websites, mobile apps, social media management, and digital marketing—everything you need to get started online.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button
              onClick={() => handleScroll('#contact')}
              className="btn-accent flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => handleScroll('#services')}
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <span>Our Services</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:border-[#0066CC] hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-lg font-bold text-[#0066CC] mb-3">Web & App</h3>
              <p className="text-gray-600">We build clean, functional websites and mobile apps for your business</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:border-[#FF6B35] hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-lg font-bold text-[#FF6B35] mb-3">Social & Marketing</h3>
              <p className="text-gray-600">We create content and manage your presence on social platforms</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:border-[#1ECC4B] hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-bold text-[#1ECC4B] mb-3">Growth Support</h3>
              <p className="text-gray-600">Ongoing maintenance, updates, and guidance to help you succeed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
