
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface OrderFormProps {
  onSuccess: () => void;
}

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
  email: z.string().email("Введите корректный email"),
  address: z.string().min(5, "Введите полный адрес доставки"),
  amount: z.enum(["50g", "100g", "200g", "500g"])
});

const OrderForm = ({ onSuccess }: OrderFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      amount: "100g"
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Order submitted:", values);
    setIsSubmitting(false);
    onSuccess();
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto animate-fade-in"
    >
      <h2 className="text-3xl font-playfair font-bold text-[#226D4A] mb-8 text-center">
        Заказать Matcha Suri
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ваше имя</FormLabel>
                  <FormControl>
                    <Input placeholder="Иван Иванов" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Телефон</FormLabel>
                  <FormControl>
                    <Input placeholder="+7 (999) 123-45-67" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@mail.ru" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Адрес доставки</FormLabel>
                <FormControl>
                  <Input placeholder="г. Москва, ул. Примерная, д. 1, кв. 1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Количество</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-wrap gap-4"
                  >
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="50g" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        50г - 990₽
                      </FormLabel>
                    </FormItem>
                    
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="100g" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        100г - 1790₽
                      </FormLabel>
                    </FormItem>
                    
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="200g" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        200г - 3290₽
                      </FormLabel>
                    </FormItem>
                    
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="500g" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        500г - 7490₽
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="pt-4">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#226D4A] hover:bg-[#184935] text-white py-6 text-lg rounded-lg transition-all duration-300"
            >
              {isSubmitting ? "Отправка заказа..." : "Оформить заказ"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default OrderForm;
