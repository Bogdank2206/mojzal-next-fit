import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-header shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-extrabold text-foreground">
            Мой зал
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-foreground hover:text-primary transition-colors font-semibold"
            >
              Тарифы
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-semibold"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-foreground hover:text-primary transition-colors font-semibold"
            >
              Контакты
            </button>
          </nav>

          {/* Desktop Phone */}
          <a
            href="tel:+79950374155"
            className="hidden md:flex items-center gap-2 text-foreground hover:text-primary transition-colors font-semibold"
          >
            <Phone className="w-5 h-5" />
            +7 (995) 037-41-55
          </a>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-background/95 backdrop-blur-header rounded-lg mt-2 shadow-lg">
            <nav className="flex flex-col gap-4 px-4">
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left text-foreground hover:text-primary transition-colors font-semibold py-2"
              >
                Тарифы
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors font-semibold py-2"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection("contacts")}
                className="text-left text-foreground hover:text-primary transition-colors font-semibold py-2"
              >
                Контакты
              </button>
              <a
                href="tel:+79950374155"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-semibold py-2"
              >
                <Phone className="w-5 h-5" />
                +7 (995) 037-41-55
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
