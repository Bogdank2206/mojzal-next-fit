import { Card } from "@/components/ui/card";
import gymEquipment from "@/assets/gym-equipment.jpg";
import gymCardio from "@/assets/gym-cardio.jpg";
import gymWeights from "@/assets/gym-weights.jpg";
import gymFunctional from "@/assets/gym-functional.jpg";

const galleryImages = [
  {
    src: gymEquipment,
    alt: "Современное оборудование фитнес-клуба Мой зал",
    title: "Профессиональное оборудование",
  },
  {
    src: gymCardio,
    alt: "Кардио зона с беговыми дорожками",
    title: "Кардио зона",
  },
  {
    src: gymWeights,
    alt: "Зона свободных весов с гантелями и штангами",
    title: "Зона свободных весов",
  },
  {
    src: gymFunctional,
    alt: "Функциональная тренировочная зона",
    title: "Функциональная зона",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 uppercase">
            ГАЛЕРЕЯ
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Посмотрите на наше пространство — полностью в вашем распоряжении во время вашего визита
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-border"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hero-overlay/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <h3 className="text-2xl font-bold text-primary-foreground p-6">
                    {image.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
