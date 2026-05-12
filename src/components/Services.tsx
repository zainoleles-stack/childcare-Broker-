import { Users, Building2, Heart, Smile } from 'lucide-react';

interface ServicesProps {
  onServiceSelect: (service: string) => void;
}

const services = [
  {
    id: 'nanny',
    title: 'Nannies',
    description: 'Professional nannies who provide in-home childcare with flexibility and personal attention.',
    icon: Users,
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
  },
  {
    id: 'nursery',
    title: 'Nurseries',
    description: 'Registered nurseries offering structured care, early education, and social development programs.',
    icon: Building2,
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-200',
  },
  {
    id: 'childminder',
    title: 'Childminders',
    description: 'Registered childminders providing warm, home-based care in small groups with flexible hours.',
    icon: Heart,
    color: 'bg-pink-50',
    iconColor: 'text-pink-600',
    borderColor: 'border-pink-200',
  },
  {
    id: 'babysitter',
    title: 'Babysitters',
    description: 'Reliable babysitters for evenings, weekends, and occasional childcare needs.',
    icon: Smile,
    color: 'bg-amber-50',
    iconColor: 'text-amber-600',
    borderColor: 'border-amber-200',
  },
];

export default function Services({ onServiceSelect }: ServicesProps) {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            Choose the type of childcare that works best for your family
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`${service.color} ${service.borderColor} border-2 rounded-xl p-8 cursor-pointer transition-all hover:shadow-lg hover:scale-105`}
                onClick={() => onServiceSelect(service.id)}
              >
                <Icon className={`${service.iconColor} mb-4`} size={40} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <button className="w-full bg-white text-gray-900 font-semibold py-2 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
