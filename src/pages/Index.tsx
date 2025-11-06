import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Contacts from "@/components/Contacts";
import Motivation from "@/components/Motivation/Motivation";
import Footer from "@/components/Footer";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <Hero />
            <About />
            <Pricing />
            <Contacts />
            <Motivation />
            <Footer />
        </div>
    );
};

export default Index;
