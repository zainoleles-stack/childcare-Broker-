import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Quality Childcare in London
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Connect with trusted nannies, nurseries, childminders, and babysitters. We help parents find the perfect care solution for their children.
          </p>
          <button
            onClick={onGetStarted}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
