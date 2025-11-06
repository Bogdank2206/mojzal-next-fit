import { Dumbbell, Cpu, Lock, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Lock,
    title: "Полная приватность",
    description: "Эксклюзивный доступ — только вы в зале, никого больше. Ни посетителей, ни персонала",
  },
  {
    icon: Dumbbell,
    title: "Тренажерный зал",
    description: "Полностью оборудованный зал с профессиональными тренажерами для всех групп мышц",
  },
  {
    icon: Cpu,
    title: "Современное оборудование",
    description: "Новейшие тренажеры от ведущих мировых производителей спортивного оборудования",
  },
  {
    icon: TrendingUp,
    title: "Высокий результат",
    description: "Эффективные программы тренировок для достижения максимальных результатов",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 uppercase">
            наш клуб
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
