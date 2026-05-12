import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TCB</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">The Childcare Broker</h1>
              <p className="text-xs text-gray-500">London</p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium">
              Services
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium">
              Contact
            </a>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium">
              Services
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
