import { Globe, Smartphone, Share2, Megaphone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'We build clean, fast websites that work on all devices. No complicated systems—just what your business needs.'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Custom apps for Android and iOS. We build apps that your customers actually want to use.'
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'We create and post content, manage comments, and help you stay active on platforms your customers use.'
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Google Ads, Facebook ads, and content marketing. We help you reach people who are looking for what you offer.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Professional digital solutions tailored for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="professional-card group hover:border-[#0066CC] border-transparent"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110">
                  <Icon size={32} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0066CC] transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#0066CC]/95 to-[#0052A3]/95 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Custom Solutions for Your Business</h3>
          <p className="mb-8 max-w-2xl mx-auto text-blue-50 text-lg leading-relaxed">
            Not sure what you need? Our team can also help with online ordering systems, e-commerce setup, booking platforms, and more. Let's discuss what would work best for your business.
          </p>
          <button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-[#0066CC] px-8 py-4 font-bold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

