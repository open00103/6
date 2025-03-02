import React from 'react';

const Footer: React.FC = () => {
  const services = [
    'Арки, откосы, поклейка обоев',
    'Укладка плитки, ламината',
    'Выравнивание стен и потолков',
    'Штукатурка, шпатлевка, покраска',
    'Многоуровневые потолки',
    'Дизайнерские перегородки',
    'Декоративная штукатурка',
    'Ремонт и утепление балконов',
    'Сантехнические работы',
    'Электромонтажные работы',
    'Натяжные потолки',
    'Помощь в выборе материалов'
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-bold mb-4">РемонтПро</h2>
            <p className="text-gray-400">
              Профессиональный ремонт квартир, домов и офисов в Могилеве с гарантией качества
            </p>
          </div>
          
          {/* Center Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Услуги</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm">{service}</li>
              ))}
            </ul>
          </div>
          
          {/* Right Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="text-gray-400 mb-2">+375 44 540-44-60 Станислав</p>
            <p className="text-gray-400 mb-2">info@remontpro.by</p>
            <p className="text-gray-400">Пн-Пт: 9:00 - 19:00, Сб: 10:00 - 16:00</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-2 md:mb-0">© {new Date().getFullYear()} РемонтПро. Все права защищены.</p>
          <p className="text-gray-400">УНП: МВ0197475</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;