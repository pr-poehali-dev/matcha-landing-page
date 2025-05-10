
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import OrderSuccessModal from "@/components/OrderSuccessModal";

const Index = () => {
  const [isOrderFormVisible, setIsOrderFormVisible] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleOrderNow = () => {
    setIsOrderFormVisible(true);
    // Scroll to order form
    setTimeout(() => {
      document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleOrderSuccess = () => {
    setIsSuccessModalOpen(true);
    setIsOrderFormVisible(false);
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero onOrderNow={handleOrderNow} />
        <Features />
        
        <div id="order-section" className="my-20">
          {isOrderFormVisible ? (
            <div className="animate-fade-in">
              <OrderForm onSuccess={handleOrderSuccess} />
            </div>
          ) : (
            <div className="text-center">
              <Button 
                onClick={handleOrderNow} 
                className="bg-[#226D4A] hover:bg-[#184935] text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              >
                Заказать сейчас
              </Button>
            </div>
          )}
        </div>

        <Footer />
      </div>

      <OrderSuccessModal 
        isOpen={isSuccessModalOpen} 
        onClose={() => setIsSuccessModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
