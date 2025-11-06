import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToForm = () => {
    const element = document.getElementById("signup-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-hero-overlay/70 to-hero-bg/90" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-6 animate-fade-in-up">
          Тренируйся сегодня,
          <br />
          чтобы завтра быть лучше
        </h1>
        <p className="text-xl md:text-3xl lg:text-4xl text-primary-foreground/90 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Ты заслуживаешь здорового и сильного тела
        </p>
        <Button
          onClick={scrollToForm}
          className="gradient-primary text-primary-foreground font-bold text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform duration-300 shadow-xl animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          ЗАПИСАТЬСЯ НА ТРЕНИРОВКУ
        </Button>
      </div>
    </section>
  );
};

export default Hero;
