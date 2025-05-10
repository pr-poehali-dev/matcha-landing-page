
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-[#226D4A] mb-4">Matcha Suri</h3>
            <p className="text-gray-600 mb-4">
              Премиальный японский чай матча высочайшего качества, созданный с соблюдением вековых традиций.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#226D4A] transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#226D4A] transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#226D4A] transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#226D4A] transition-colors">О нас</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#226D4A] transition-colors">Доставка и оплата</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#226D4A] transition-colors">Гарантии качества</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#226D4A] transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">
                Email: info@matchasuri.ru
              </li>
              <li className="text-gray-600">
                Телефон: +7 (800) 123-45-67
              </li>
              <li className="text-gray-600">
                Адрес: г. Москва, ул. Японская, д. 42
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#E2E8F0] text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Matcha Suri. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
