import React from 'react';
import { Wallpaper, Grid3X3, Ruler, Paintbrush, Layers, Divide, Palette, Thermometer, ShowerHead as Shower, Zap, Cloud, ShoppingBag } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  backgroundImage: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, backgroundImage }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-blue-600 rounded-full mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'Арки, откосы, поклейка обоев',
      description: 'Профессиональное создание арочных конструкций любой сложности, оформление оконных и дверных откосов, а также качественная поклейка обоев различных типов с идеальной стыковкой рисунка.',
      icon: <Wallpaper size={24} className="text-white" />,
      backgroundImage: 'https://raw.githubusercontent.com/open00103/image/refs/heads/main/%D0%90%D1%80%D0%BA%D0%B8%2C%20%D0%BE%D1%82%D0%BA%D0%BE%D1%81%D1%8B%2C%20%D0%BF%D0%BE%D0%BA%D0%BB%D0%B5%D0%B9%D0%BA%D0%B0%20%D0%BE%D0%B1%D0%BE%D0%B5%D0%B2.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Укладка плитки, ламината, линолеума, ковролина',
      description: 'Точная и аккуратная укладка напольных покрытий с соблюдением технологии. Работаем с керамической плиткой, керамогранитом, ламинатом, линолеумом и ковролином любой сложности.',
      icon: <Grid3X3 size={24} className="text-white" />,
      backgroundImage: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Выравнивание стен и потолков, стяжка пола',
      description: 'Профессиональное выравнивание поверхностей с использованием современных материалов и технологий. Создаем идеально ровное основание для дальнейшей отделки.',
      icon: <Ruler size={24} className="text-white" />,
      backgroundImage: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Штукатурка, шпатлевка, покраска',
      description: 'Качественное нанесение штукатурки и шпатлевки для создания идеально гладких поверхностей. Профессиональная покраска с равномерным нанесением и без подтеков.',
      icon: <Paintbrush size={24} className="text-white" />,
      backgroundImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Многоуровневые потолки из гипсокартона',
      description: 'Создание эксклюзивных многоуровневых потолочных конструкций из гипсокартона любой сложности. Реализуем дизайнерские решения с встроенным освещением.',
      icon: <Layers size={24} className="text-white" />,
      backgroundImage: 'https://images.unsplash.com/photo-1594940208655-d433a9428f97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Дизайнерские перегородки',
      description: 'Изготовление функциональных и эстетичных перегородок для зонирования пространства. Используем гипсокартон, стекло, дерево и другие материалы.',
      icon: <Divide size={24} className="text-white" />,
      backgroundImage: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Декоративная штукатурка, жидкие обои',
      description: 'Нанесение декоративных покрытий для создания уникальных текстур и эффектов на стенах. Работаем с венецианской штукатуркой, жидкими обоями и другими декоративными материалами.',
      icon: <Palette size={24} className="text-white" />,
      backgroundImage: 'https://images.unsplash.com/photo-1614633833026-0820552978b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Ремонт и утепление балконов',
      description: 'Комплексный ремонт и утепление балконов и лоджий. Выполняем внутреннюю и внешнюю отделку, устанавливаем остекление, проводим утепление современными материалами.',
      icon: <Thermometer size={24} className="text-white" />,
      backgroundImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Сантехнические работы',
      description: 'Профессиональный монтаж и замена сантехнического оборудования. Установка ванн, душевых кабин, унитазов, раковин, смесителей. Монтаж и ремонт систем водоснабжения и канализации.',
      icon: <Shower size={24} className="text-white" />,
      backgroundImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Электромонтажные работы',
      description: 'Полный комплекс электромонтажных работ: прокладка новой проводки, замена старой, установка розеток, выключателей, светильников. Монтаж электрощитов и автоматов защиты.',
      icon: <Zap size={24} className="text-white" />,
      backgroundImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Натяжные потолки',
      description: 'Установка качественных натяжных потолков различных типов и фактур. Матовые, глянцевые, сатиновые, тканевые потолки с фотопечатью или без. Многоуровневые конструкции и потолки со светодиодной подсветкой.',
      icon: <Cloud size={24} className="text-white" />,
      backgroundImage: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Помощь в выборе и доставка материала',
      description: 'Профессиональная консультация по выбору отделочных материалов с учетом ваших пожеланий и бюджета. Помощь в подборе оптимальных вариантов и организация доставки всех необходимых материалов прямо на объект.',
      icon: <ShoppingBag size={24} className="text-white" />,
      backgroundImage: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Предлагаем полный спектр услуг по ремонту и отделке помещений. 
            Наши специалисты выполнят работы любой сложности качественно и в срок.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              backgroundImage={service.backgroundImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
