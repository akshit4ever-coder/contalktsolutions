import { TrendingUp, Users, Award, Target } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Target,
      number: 'Growing',
      label: 'Active Projects',
      color: 'text-[#0066CC]'
    },
    {
      icon: Users,
      number: 'Quality',
      label: 'Focused Service',
      color: 'text-[#FF6B35]'
    },
    {
      icon: TrendingUp,
      number: '24/7',
      label: 'Ready to Help',
      color: 'text-[#1ECC4B]'
    },
    {
      icon: Award,
      number: 'Trust',
      label: 'Our Foundation',
      color: 'text-purple-600'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#0066CC]/5 to-[#FF6B35]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon size={40} className={`${stat.color} opacity-80`} />
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <p className="text-gray-700 font-semibold">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
