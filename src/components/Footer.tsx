import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">РемонтПро</h3>
            <p className="text-gray-400 mb-4">Профессиональный ремонт и отделка помещений любой сложности. Качество, проверенное временем.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Viber</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.4 0C5.1 0 0 5.1 0 11.4c0 1.7.4 3.4 1.1 5 .1.2.1.4.1.6 0 .4-.2.8-.5 1.1l-.9 1c-.2.2-.3.5-.3.7 0 .5.3.9.7 1.1.2.1.4.1.6.1.3 0 .6-.1.8-.2l2.8-1.1c.4-.2.9-.1 1.3.1 1.7.9 3.6 1.4 5.6 1.4 6.3 0 11.4-5.1 11.4-11.4S17.7 0 11.4 0zm0 20.6c-1.8 0-3.5-.5-5-1.3-.1-.1-.3-.1-.4-.1-.1 0-.3 0-.4.1l-2.8 1.1c-.1 0-.2.1-.3.1-.1 0-.2 0-.3-.1-.1-.1-.1-.2-.1-.3 0-.1 0-.2.1-.2l.9-1c.4-.5.7-1.1.7-1.7 0-.3-.1-.7-.2-1-.6-1.4-1-3-1-4.6 0-5.8 4.7-10.5 10.5-10.5S21.9 5.6 21.9 11.4 17.2 20.6 11.4 20.6z"/>
                  <path d="M14.1 13.4c-.3-.2-.7-.2-1 0l-1.1.6c-.3.2-.7.1-1-.1-.5-.4-1-.8-1.4-1.3-.4-.5-.8-1-1.1-1.5-.2-.3-.2-.7 0-1l.6-1.1c.2-.3.2-.7 0-1l-1.2-2c-.2-.3-.5-.5-.8-.5-.3 0-.6.1-.8.4l-.8 1.1c-.5.7-.6 1.6-.3 2.4.6 1.5 1.4 2.8 2.4 4 1 1.2 2.2 2.2 3.6 3 .5.3 1.1.4 1.7.4.5 0 1-.1 1.4-.4l1.1-.8c.3-.2.4-.5.4-.8 0-.3-.2-.6-.5-.8l-2.2-1.6z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white">Арки, откосы, поклейка обоев</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Укладка плитки, ламината</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Выравнивание стен и потолков</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Штукатурка, шпатлевка, покраска</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Многоуровневые потолки</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Сантехнические работы</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Электромонтажные работы</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Натяжные потолки</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Помощь в выборе материалов</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Контакты</h4>
            <ul class="space-y-2">
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone w-4 h-4 mr-2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                 <a href="tel:+375445404460" className="text-gray-400 hover:text-white">+375 44 540-44-60</a>
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-4 h-4 mr-2">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                 <a href="mailto:info@remontpro.by" className="text-gray-400 hover:text-white">info@remontpro.by</a>
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock w-4 h-4 mr-2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span class="text-gray-400">Пн-Пт: 9:00 - 19:00, Сб: 10:00 - 16:00</span>
              </li>
              <li class="flex items-center">
                <span class="text-gray-400">УНП: МВ0197475 Битковский С.М.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} РемонтПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
