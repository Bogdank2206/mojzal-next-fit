import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import exclusiveTraining from "@/assets/exclusive-training.jpg";

const contactInfo = [
    {
        icon: Phone,
        title: "Контакты",
        details: [
            {
                label: "Телефон",
                value: "+7 (920) 211-41-55",
                href: "tel:+79202114155",
            },
            {
                label: "Email",
                value: "vostorg-77@mail.ru",
                href: "mailto:vostorg-77@mail.ru",
            },
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
        <section id="contacts" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 uppercase">
                        КОНТАКТЫ
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
                    <div className="lg:col-span-1">
                        <img
                            src={exclusiveTraining}
                            alt="Тренировка в приватной атмосфере"
                            className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
                        />
                    </div>
                    <div className="lg:col-span-2 flex flex-col md:flex-row flex-wrap gap-8">
                        {contactInfo.map((item, index) => {
                            const Icon = item.icon;
                            // Первые две — по ~50% на md+, третья — 100%
                            const widthClass =
                                index < 2
                                    ? "w-full md:w-[calc(50%-1rem)]"
                                    : "w-full";

                            return (
                                <Card
                                    key={index}
                                    className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border ${widthClass}`}
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
                                            {item.details.map(
                                                (detail, detailIndex) => (
                                                    <div key={detailIndex}>
                                                        {detail.href ? (
                                                            <a
                                                                href={
                                                                    detail.href
                                                                }
                                                                target={
                                                                    detail.href.startsWith(
                                                                        "http"
                                                                    )
                                                                        ? "_blank"
                                                                        : undefined
                                                                }
                                                                rel={
                                                                    detail.href.startsWith(
                                                                        "http"
                                                                    )
                                                                        ? "noopener noreferrer"
                                                                        : undefined
                                                                }
                                                                className="text-muted-foreground hover:text-primary transition-colors"
                                                            >
                                                                {detail.label && (
                                                                    <span className="font-semibold block">
                                                                        {
                                                                            detail.label
                                                                        }
                                                                        :
                                                                    </span>
                                                                )}
                                                                <span className="font-medium">
                                                                    {
                                                                        detail.value
                                                                    }
                                                                </span>
                                                            </a>
                                                        ) : (
                                                            <p className="text-muted-foreground font-medium">
                                                                {detail.value}
                                                            </p>
                                                        )}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
