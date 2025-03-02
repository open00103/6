import React from 'react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section 
      className="relative py-20 bg-cover bg-center"
      style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
        minHeight: '600px'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="max-w-2xl my-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Качественный ремонт
            и отделка помещений
            в Могилеве
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Профессиональные услуги по ремонту и отделке квартир, домов и офисов. 
            Работаем быстро, качественно и по доступным ценам.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Наши услуги
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors font-medium"
            >
              Связаться с нами
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
