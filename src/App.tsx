import { useState } from 'react';
import { MessageCircle, Phone, Users, Home, Building2, Heart, Smile } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    setShowContactForm(true);
  };

  const handleCloseForm = () => {
    setShowContactForm(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero onGetStarted={() => setShowContactForm(true)} />
      <Services onServiceSelect={handleServiceSelect} />

      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <ContactForm
            selectedService={selectedService}
            onClose={handleCloseForm}
          />
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
