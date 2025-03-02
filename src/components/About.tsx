import React from 'react';

const About: React.FC = () => {
  const stats = [
    { value: '500+', label: 'Выполненных проектов' },
    { value: '100%', label: 'Опытные профессионалы' },
    { value: '98%', label: 'Довольных клиентов' },
    { value: '10+', label: 'Лет на рынке' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">О нашей компании</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Мы — команда профессионалов с многолетним опытом в сфере ремонта и отделки помещений. 
                Наша компания специализируется на выполнении полного спектра ремонтно-отделочных работ любой сложности.
              </p>
              <p>
                Мы гордимся тем, что за годы работы сформировали команду высококвалифицированных специалистов, 
                которые любят свое дело и выполняют его на высшем уровне. Каждый мастер имеет профильное 
                образование и регулярно повышает свою квалификацию.
              </p>
              <p>
                Наш подход — это сочетание традиционного мастерства с современными технологиями и материалами. 
                Мы внимательно следим за новинками в сфере ремонта и отделки, чтобы предлагать нашим клиентам 
                наиболее эффективные и долговечные решения.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <img 
              src="https://github.com/open00103/image/blob/main/%D0%A0%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%20%D0%B2%20%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B5%D0%B2%D0%B5.jpg?raw=true?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Ремонт квартир" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
