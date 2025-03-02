import React from 'react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative">
      <div className="absolute -top-5 -left-5 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
        {number}
      </div>
      <div className="pt-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowWeWork: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Консультация',
      description: 'Бесплатная консультация и оценка объема работ. Обсуждаем ваши пожелания и предлагаем оптимальные решения.'
    },
    {
      number: 2,
      title: 'Смета и договор',
      description: 'Составляем детальную смету и заключаем договор с четкими сроками и стоимостью работ.'
    },
    {
      number: 3,
      title: 'Выполнение работ',
      description: 'Наши специалисты выполняют все работы согласно технологии и в соответствии с договором.'
    },
    {
      number: 4,
      title: 'Сдача объекта',
      description: 'Финальная проверка качества, уборка и сдача объекта. Предоставляем гарантию на все выполненные работы.'
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Как мы работаем</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <StepCard 
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;