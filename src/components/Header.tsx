import React from 'react';
import { Phone } from 'lucide-react';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
  activeSection: string | null;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, activeSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <button 
            onClick={scrollToTop} 
            className="text-2xl font-bold text-blue-600 cursor-pointer"
          >
            РемонтПро
          </button>
        </div>
        
        <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
          <ul className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0 md:mr-8">
            <li>
              <button 
                onClick={() => scrollToSection('services')}
                className={`font-medium hover:text-blue-600 transition-colors ${activeSection === 'services' ? 'text-blue-600' : 'text-gray-700'}`}
              >
                Услуги
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className={`font-medium hover:text-blue-600 transition-colors ${activeSection === 'about' ? 'text-blue-600' : 'text-gray-700'}`}
              >
                О нас
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`font-medium hover:text-blue-600 transition-colors ${activeSection === 'contact' ? 'text-blue-600' : 'text-gray-700'}`}
              >
                Контакты
              </button>
            </li>
          </ul>
          
          <div className="flex items-center">
            <Phone size={18} className="text-blue-600 mr-2" />
            <span className="text-gray-700 mr-3">+375 44 540-44-60</span>
            <a 
              href="tel:+375445404460" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              <span>Позвонить</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;