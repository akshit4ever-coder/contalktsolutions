import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Restaurant Online Ordering',
      category: 'E-commerce',
      description: 'Complete ordering platform with integration',
      image: '🍽️'
    },
    {
      title: 'Retail Store E-commerce',
      category: 'Website',
      description: 'Full product catalog with payment integration',
      image: '🛍️'
    },
    {
      title: 'Mobile App Development',
      category: 'App',
      description: 'Custom app with member management system',
      image: '📱'
    },
    {
      title: 'Social Media Management',
      category: 'Marketing',
      description: 'Content strategy & platform management',
      image: '📱'
    },
    {
      title: 'Appointment Portal',
      category: 'Web App',
      description: 'Online booking with management system',
      image: '📅'
    },
    {
      title: 'Lead Generation Campaign',
      category: 'Digital Ads',
      description: 'Google & social media advertising',
      image: '📊'
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            Projects we've worked on for our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-hover group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg"
            >
              <div className="h-32 bg-gradient-to-br from-[#0066CC]/10 to-[#FF6B35]/10 flex items-center justify-center">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
              </div>

              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-[#0066CC]/10 text-[#0066CC] rounded-full text-xs font-bold mb-3">
                  {project.category}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-4">
            Want to see more of our work?
          </p>
          <button className="btn-primary">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
