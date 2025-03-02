import React from 'react';
import { Award, Package, Clock, Shield, Coins, Users } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: <Award size={40} />,
      title: 'Опыт и профессионализм',
      description: 'Наши мастера имеют многолетний опыт работы и регулярно повышают квалификацию'
    },
    {
      icon: <Package size={40} />,
      title: 'Качественные материалы',
      description: 'Используем только проверенные материалы от надежных поставщиков'
    },
    {
      icon: <Clock size={40} />,
      title: 'Соблюдение сроков',
      description: 'Выполняем работы в строго оговоренные сроки без задержек'
    },
    {
      icon: <Shield size={40} />,
      title: 'Гарантия на работы',
      description: 'Предоставляем гарантию на все выполненные работы'
    },
    {
      icon: <Coins size={40} />,
      title: 'Прозрачное ценообразование',
      description: 'Честные цены без скрытых платежей и дополнительных расходов'
    },
    {
      icon: <Users size={40} />,
      title: 'Индивидуальный подход',
      description: 'Учитываем все пожелания клиента и предлагаем оптимальные решения'
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Почему выбирают нас</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;