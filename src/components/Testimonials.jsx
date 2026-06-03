export default function Testimonials() {
  const steps = [
    {
      step: '1',
      title: 'Discovery & Planning',
      image: '💭',
      description: 'We listen to understand your business goals and what you need'
    },
    {
      step: '2',
      title: 'Design & Development',
      image: '🛠️',
      description: 'We build your solution with clean code and great design'
    },
    {
      step: '3',
      title: 'Testing & Launch',
      image: '✅',
      description: 'We test everything thoroughly before your launch'
    },
    {
      step: '4',
      title: 'Support & Growth',
      image: '📈',
      description: 'We keep your systems running and help you grow from there'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">
            Our simple, honest process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="card-hover bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg text-center relative"
            >
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#FF6B35] text-white font-bold rounded-full flex items-center justify-center">
                {item.step}
              </div>
              <div className="text-4xl mb-4">{item.image}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-4">Ready to get started with us?</p>
          <button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-accent"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
}
