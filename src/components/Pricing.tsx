import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pricingData = [
  {
    title: "1 гость",
    slots: [
      { time: "Утро", hours: "0:00-7:30", price: "400 ₽" },
      { time: "День", hours: "11:30-16:30", price: "350 ₽" },
      { time: "Вечер", hours: "18:00-22:30", price: "350 ₽" },
    ],
  },
  {
    title: "До 3-х гостей",
    slots: [
      { time: "Утро", hours: "0:00-7:30", price: "600 ₽" },
      { time: "День", hours: "11:30-16:30", price: "550 ₽" },
      { time: "Вечер", hours: "18:00-22:30", price: "550 ₽" },
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 uppercase">
            ТАРИФЫ
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            🔒 <span className="font-semibold text-foreground">Эксклюзивный доступ:</span> после оплаты весь зал принадлежит только вам. 
            Никаких других посетителей, администраторов или персонала — только вы и ваша тренировка.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingData.map((column, colIndex) => (
            <Card
              key={colIndex}
              className="overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl"
            >
              <CardHeader className="gradient-primary text-center py-6">
                <CardTitle className="text-3xl font-extrabold text-primary-foreground">
                  {column.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {column.slots.map((slot, slotIndex) => (
                    <div
                      key={slotIndex}
                      className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-xl font-bold text-foreground">
                          {slot.time}
                        </h4>
                        <span className="text-2xl font-extrabold text-primary">
                          {slot.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground font-medium">
                        {slot.hours}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
