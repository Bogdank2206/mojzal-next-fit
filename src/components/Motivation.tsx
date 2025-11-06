import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import motivationImage from "@/assets/motivation-bg.jpg";

const Motivation = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
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

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите ваше имя",
        variant: "destructive",
      });
      return;
    }

    if (!phone || phone.length < 18) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите корректный номер телефона",
        variant: "destructive",
      });
      return;
    }

    if (!agreed) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласие с политикой конфиденциальности",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });

    setName("");
    setPhone("");
    setAgreed(false);
  };

  return (
    <section
      id="signup-form"
      className="relative py-32 bg-hero-bg"
      style={{
        backgroundImage: `url(${motivationImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-hero-bg/80 to-hero-overlay/90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            Спорт — это вызов,
          </h2>
          <p className="text-2xl md:text-4xl text-primary-foreground/90 mb-12">
            который ты можешь принять
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-background text-foreground border-border h-14 text-lg rounded-xl"
            />
            <Input
              type="tel"
              placeholder="Телефон"
              value={phone}
              onChange={handlePhoneChange}
              maxLength={18}
              className="bg-background text-foreground border-border h-14 text-lg rounded-xl"
            />
            <div className="flex items-start gap-3 text-left">
              <Checkbox
                id="agree"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                className="mt-1"
              />
              <label
                htmlFor="agree"
                className="text-sm text-primary-foreground/90 cursor-pointer leading-relaxed"
              >
                Я согласен с{" "}
                <a
                  href="#privacy"
                  className="text-primary-foreground underline hover:text-primary transition-colors"
                >
                  политикой конфиденциальности
                </a>
              </label>
            </div>
            <Button
              type="submit"
              className="w-full gradient-primary text-primary-foreground font-bold text-lg py-6 rounded-full hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              Записаться на тренировку
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Motivation;
