import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {useToast} from "@/hooks/use-toast";
import formatPhoneNumber from "@/lib/formatPhoneNumber.ts";
import sendForm from "@/lib/sendForm.ts";

const MotivationForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [agreed, setAgreed] = useState(false);
    const {toast} = useToast();

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhoneNumber(e.target.value);
        setPhone(formatted);
    };

    const handleSubmit = async (e: React.FormEvent) => {
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
                description:
                    "Необходимо согласие с политикой конфиденциальности",
                variant: "destructive",
            });
            return;
        }

        await sendForm({name, phone});

        toast({
            title: "Заявка отправлена!",
            description: "Мы свяжемся с вами в ближайшее время",
        });

        setName("");
        setPhone("");
        setAgreed(false);
    };

    return (
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
    );
};

export default MotivationForm;
