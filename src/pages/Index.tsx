import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Contacts from "@/components/Contacts";
import Motivation from "@/components/Motivation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Pricing />
      <Contacts />
      <Motivation />
      <Footer />
    </div>
  );
};

export default Index;
