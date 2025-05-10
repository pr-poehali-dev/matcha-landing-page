
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F2] flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-[#8FB98D]/20 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-[#226D4A]" />
            </div>
          </div>
          
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-[#226D4A] mb-4">
            Спасибо за ваш заказ!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Мы получили вашу заявку и скоро свяжемся с вами для подтверждения заказа.
          </p>
          
          <div className="bg-[#F9F7F2] rounded-lg p-6 mb-8">
            <h3 className="font-bold text-xl mb-4">Детали заказа</h3>
            <p className="text-gray-600 mb-2">
              Номер заказа: <span className="font-semibold">#{Math.floor(Math.random() * 10000)}</span>
            </p>
            <p className="text-gray-600 mb-2">
              Дата: <span className="font-semibold">{new Date().toLocaleDateString()}</span>
            </p>
            <p className="text-gray-600">
              Статус: <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">Обрабатывается</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="outline" 
              asChild
              className="inline-flex items-center border-[#226D4A] text-[#226D4A] hover:bg-[#226D4A] hover:text-white"
            >
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Вернуться на главную
              </Link>
            </Button>
            
            <Button
              asChild
              className="bg-[#226D4A] hover:bg-[#184935] text-white"
            >
              <a href="mailto:info@matchasuri.ru">
                Связаться с нами
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="bg-white py-8 w-full">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Matcha Suri. Все права защищены.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
