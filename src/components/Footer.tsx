import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [subscribeData, setSubscribeData] = useState({
    name: "",
    phone: "",
    agreed: false,
  });

  const [visitData, setVisitData] = useState({
    name: "",
    phone: "",
    agreed: false,
  });

  const { toast } = useToast();

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length === 0) return "";
    if (numbers.length <= 1) return `+7 (${numbers}`;
    if (numbers.length <= 4) return `+7 (${numbers.slice(1)}`;
    if (numbers.length <= 7) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4)}`;
    if (numbers.length <= 9)
      return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7)}`;
    return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}-${numbers.slice(9, 11)}`;
  };

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!subscribeData.name.trim() || subscribeData.phone.length < 18 || !subscribeData.agreed) {
      toast({
        title: "Ошибка",
        description: "Заполните все поля и согласитесь с политикой",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами для оформления абонемента",
    });

    setSubscribeData({ name: "", phone: "", agreed: false });
  };

  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!visitData.name.trim() || visitData.phone.length < 18 || !visitData.agreed) {
      toast({
        title: "Ошибка",
        description: "Заполните все поля и согласитесь с политикой",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Записаны на тренировку!",
      description: "Ждем вас в нашем клубе",
    });

    setVisitData({ name: "", phone: "", agreed: false });
  };

  return (
    <footer className="bg-hero-bg text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Subscribe Form */}
          <div className="bg-background/5 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Желаете приобрести абонемент?
            </h3>
            <form onSubmit={handleSubscribeSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Имя"
                value={subscribeData.name}
                onChange={(e) =>
                  setSubscribeData({ ...subscribeData, name: e.target.value })
                }
                className="bg-background text-foreground border-border h-12 rounded-xl"
              />
              <Input
                type="tel"
                placeholder="Телефон"
                value={subscribeData.phone}
                onChange={(e) =>
                  setSubscribeData({
                    ...subscribeData,
                    phone: formatPhoneNumber(e.target.value),
                  })
                }
                maxLength={18}
                className="bg-background text-foreground border-border h-12 rounded-xl"
              />
              <div className="flex items-start gap-3">
                <Checkbox
                  id="subscribe-agree"
                  checked={subscribeData.agreed}
                  onCheckedChange={(checked) =>
                    setSubscribeData({
                      ...subscribeData,
                      agreed: checked as boolean,
                    })
                  }
                  className="mt-1"
                />
                <label
                  htmlFor="subscribe-agree"
                  className="text-sm text-primary-foreground/90 cursor-pointer"
                >
                  Согласен с политикой конфиденциальности
                </label>
              </div>
              <Button
                type="submit"
                className="w-full gradient-primary text-primary-foreground font-bold py-6 rounded-full hover:scale-105 transition-transform duration-300"
              >
                Отправить
              </Button>
            </form>
          </div>

          {/* Visit Form */}
          <div className="bg-background/5 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Желаете посетить наш клуб?
            </h3>
            <form onSubmit={handleVisitSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Имя"
                value={visitData.name}
                onChange={(e) =>
                  setVisitData({ ...visitData, name: e.target.value })
                }
                className="bg-background text-foreground border-border h-12 rounded-xl"
              />
              <Input
                type="tel"
                placeholder="Телефон"
                value={visitData.phone}
                onChange={(e) =>
                  setVisitData({
                    ...visitData,
                    phone: formatPhoneNumber(e.target.value),
                  })
                }
                maxLength={18}
                className="bg-background text-foreground border-border h-12 rounded-xl"
              />
              <div className="flex items-start gap-3">
                <Checkbox
                  id="visit-agree"
                  checked={visitData.agreed}
                  onCheckedChange={(checked) =>
                    setVisitData({ ...visitData, agreed: checked as boolean })
                  }
                  className="mt-1"
                />
                <label
                  htmlFor="visit-agree"
                  className="text-sm text-primary-foreground/90 cursor-pointer"
                >
                  Согласен с политикой конфиденциальности
                </label>
              </div>
              <Button
                type="submit"
                className="w-full gradient-primary text-primary-foreground font-bold py-6 rounded-full hover:scale-105 transition-transform duration-300"
              >
                Записаться на тренировку
              </Button>
            </form>
          </div>
        </div>

        {/* Privacy and Copyright */}
        <div className="text-center border-t border-primary-foreground/20 pt-8">
          <a
            href="#privacy"
            id="privacy"
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors underline mb-4 inline-block"
          >
            Политика конфиденциальности
          </a>
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Мой зал. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
