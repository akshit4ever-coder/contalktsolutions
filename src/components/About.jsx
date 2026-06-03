import { CheckCircle, Users, Target, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Zap,
      title: 'Simple Solutions',
      description: 'We keep things straightforward and easy to understand'
    },
    {
      icon: Users,
      title: 'Your Success Matters',
      description: "We're invested in helping your business grow"
    },
    {
      icon: Target,
      title: 'Focus on Results',
      description: 'We measure success by what actually works for you'
    },
    {
      icon: CheckCircle,
      title: 'Do It Right',
      description: 'We take pride in our work and deliver quality'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="section-title">About Contalkt Solutions</h2>
            <p className="text-gray-600 text-lg mb-6">
              We're a growing team of digital professionals building affordable digital solutions for businesses. We started with a simple mission: help local businesses get online and reach more customers. Every project we take on, we focus on delivering real value.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-[#1ECC4B] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900">Honest & Direct</h4>
                  <p className="text-gray-600">We tell you what you really need, not just what we can sell</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-[#1ECC4B] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900">Affordable & Transparent</h4>
                  <p className="text-gray-600">Clear pricing with no hidden costs or surprises</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-[#1ECC4B] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900">Always Available</h4>
                  <p className="text-gray-600">We respond quickly and solve your problems</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#0066CC]/10 to-[#FF6B35]/10 p-6 rounded-lg border border-[#0066CC]/20">
              <p className="text-gray-700 italic">
                "Every business deserves to succeed online. We're here to help you build something real without the corporate hassle."
              </p>
              <p className="text-[#FF6B35] font-bold mt-3">— Contalkt Solutions Team</p>
            </div>
          </div>

          {/* Right Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-200 hover:border-[#0066CC] transition-colors">
                  <Icon size={28} className="text-[#0066CC] mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
