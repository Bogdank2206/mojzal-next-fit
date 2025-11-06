import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import exclusiveTraining from "@/assets/exclusive-training.jpg";

const contactInfo = [
  {
    icon: Phone,
    title: "Контакты",
    details: [
      { label: "Телефон", value: "+7 (995) 037-41-55", href: "tel:+79950374155" },
      { label: "Email", value: "mojzal@yandex.ru", href: "mailto:mojzal@yandex.ru" },
    ],
  },
  {
    icon: Clock,
    title: "График работы",
    details: [{ label: "", value: "Круглосуточно 24/7" }],
  },
  {
    icon: MapPin,
    title: "Адрес",
    details: [
      {
        label: "",
        value: "Воронежская обл., г. Воронеж, ул. Генерала Лизюкова, 70А, р-н Коминтерновский",
        href: "https://yandex.ru/maps/-/CDdkbPwn",
      },
    ],
  },
];

const Contacts = () => {
  return (
    <section id="contacts" className="py-20 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute left-1/4 top-0 w-1/4 h-full opacity-10">
        <img 
          src={exclusiveTraining} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 uppercase">
            КОНТАКТЫ
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <div className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <div key={detailIndex}>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            target={detail.href.startsWith("http") ? "_blank" : undefined}
                            rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {detail.label && (
                              <span className="font-semibold block">
                                {detail.label}:
                              </span>
                            )}
                            <span className="font-medium">{detail.value}</span>
                          </a>
                        ) : (
                          <p className="text-muted-foreground font-medium">
                            {detail.value}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
