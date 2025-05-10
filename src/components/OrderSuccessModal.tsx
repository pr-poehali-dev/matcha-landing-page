
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderSuccessModal = ({ isOpen, onClose }: OrderSuccessModalProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleGoToThankYouPage = () => {
    navigate("/thank-you");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 animate-fade-in"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-[#226D4A]" />
          </div>
          
          <h3 className="text-2xl font-bold mb-2">Спасибо за заказ!</h3>
          <p className="text-gray-600 mb-6">
            Ваш заказ успешно оформлен. В ближайшее время с вами свяжется наш менеджер для уточнения деталей.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button 
              onClick={handleGoToThankYouPage}
              className="bg-[#226D4A] hover:bg-[#184935] text-white flex-1"
            >
              Перейти к информации о заказе
            </Button>
            
            <Button 
              variant="outline" 
              onClick={onClose}
              className="border-[#226D4A] text-[#226D4A] hover:bg-[#226D4A] hover:text-white"
            >
              Закрыть
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessModal;
