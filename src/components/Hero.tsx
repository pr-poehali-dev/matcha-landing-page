
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroProps {
  onOrderNow: () => void;
}

const Hero = ({ onOrderNow }: HeroProps) => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center text-center py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#8FB98D]" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-[#226D4A]" />
      </div>
      
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4"
      >
        <div className="mb-6 flex items-center justify-center">
          <div className="h-0.5 w-8 bg-[#226D4A]"></div>
          <span className="mx-4 text-[#226D4A] font-medium tracking-wider">ПРЕМИАЛЬНЫЙ ЯПОНСКИЙ ЧАЙ</span>
          <div className="h-0.5 w-8 bg-[#226D4A]"></div>
        </div>
        
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-[#226D4A] mb-6">
          Matcha Suri
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Погрузитесь в мир японских традиций с нашим премиальным чаем матча.
          Изысканный вкус и непревзойденная польза для вашего здоровья.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={onOrderNow}
            className="bg-[#226D4A] hover:bg-[#184935] text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
          >
            Заказать сейчас
          </Button>
          
          <Button 
            variant="outline" 
            className="border-[#226D4A] text-[#226D4A] hover:bg-[#226D4A] hover:text-white px-8 py-6 text-lg rounded-lg transition-all duration-300"
          >
            Узнать больше
          </Button>
        </div>
      </motion.div>
      
      {/* Product image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16"
      >
        <img 
          src="https://images.unsplash.com/photo-1536256263959-770b48d82b0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="Matcha Suri" 
          className="w-full max-w-2xl h-auto rounded-lg shadow-2xl mx-auto object-cover" 
        />
      </motion.div>
    </div>
  );
};

export default Hero;
