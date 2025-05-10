
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Изысканный вкус",
    description: "Неповторимый сладковатый вкус с легкими травяными нотками, создающий неповторимый опыт для ваших чувств.",
    icon: "Leaf"
  },
  {
    title: "Высокое качество",
    description: "Собрано вручную в лучших регионах Японии и обработано по традиционным технологиям для сохранения всех полезных свойств.",
    icon: "Award"
  },
  {
    title: "Богатство антиоксидантов",
    description: "Содержит в 137 раз больше антиоксидантов, чем обычный зеленый чай, что делает его мощным средством для поддержания здоровья.",
    icon: "Heart"
  },
  {
    title: "Природная энергия",
    description: "Натуральный кофеин в сочетании с L-теанином обеспечивает длительный прилив энергии без стресса для организма.",
    icon: "Zap"
  }
];

const featureAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5
    }
  })
};

const Features = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#226D4A] mb-4">
            Почему Matcha Suri?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наш премиальный японский чай матча обладает уникальными свойствами,
            которые делают его особенным.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={featureAnimation}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#8FB98D]/20 flex items-center justify-center text-[#226D4A]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-8 bg-[#226D4A]/10 rounded-lg">
            <p className="text-lg text-[#226D4A] font-medium">
              100% органический продукт без добавок и красителей
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
