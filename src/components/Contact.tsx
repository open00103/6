import React, { useState } from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const services = [
    'Арки, откосы, поклейка обоев',
    'Укладка плитки, ламината, линолеума, ковролина',
    'Выравнивание стен и потолков, стяжка пола',
    'Штукатурка, шпатлевка, покраска',
    'Многоуровневые потолки из гипсокартона',
    'Дизайнерские перегородки',
    'Декоративная штукатурка, жидкие обои',
    'Ремонт и утепление балконов',
    'Сантехнические работы',
    'Электромонтажные работы',
    'Натяжные потолки',
    'Помощь в выборе и доставка материала'
  ];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to the server
    console.log('Form submitted:', formData);
    // Simulate form submission
    setIsSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      phone: '',
      service: '',
      message: ''
    });
    // Reset submission status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Контактная информация</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Phone size={24} className="text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Телефон</h3>
                    <a href="tel:+375445404460" className="text-gray-600 hover:text-blue-600 transition-colors">
                      +375 44 540-44-60
                    </a>
                    <p className="text-gray-600">Станислав</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <Mail size={24} className="text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Email</h3>
                    <a href="mailto:info@remontpro.by" className="text-gray-600 hover:text-blue-600 transition-colors">
                      info@remontpro.by
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock size={24} className="text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Время работы</h3>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 19:00</p>
                    <p className="text-gray-600">Сб: 10:00 - 16:00</p>
                    <p className="text-gray-600">Вс: выходной</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="font-bold text-gray-800 mb-2">
                  Мы работаем по всему Могилеву и Могилевкой области
                </p>
                <p className="text-gray-600">
                  Выезжаем на объект для консультации и оценки работ бесплатно в пределах города.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Оставьте заявку</h3>
              
              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                    Вид услуги
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Выберите услугу</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;