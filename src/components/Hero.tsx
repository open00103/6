import React from 'react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section 
      className="relative py-20 bg-cover bg-center"
      style={{ 
        backgroundImage: 'url(https://github.com/open00103/image/blob/main/%D0%9F%D1%80%D0%BE%D1%84%D0%B5%D1%81%D1%81%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B8%20%D0%BF%D0%BE%20%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%D1%83%20%D0%B8%20%D0%BE%D1%82%D0%B4%D0%B5%D0%BB%D0%BA%D0%B5%20%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80.jpg?raw=true?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
        minHeight: '600px'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="max-w-2xl my-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Качественный ремонт и отделка помещений в Могилеве
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
