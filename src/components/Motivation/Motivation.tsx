import motivationImage from "@/assets/motivation-bg.jpg";
import MotivationForm from "@/components/Motivation/MotivationForm.tsx";

const Motivation = () => {
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
            <div className="absolute inset-0 bg-gradient-to-b from-hero-bg/80 to-hero-overlay/90"/>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
                        Спорт — это вызов,
                    </h2>
                    <p className="text-2xl md:text-4xl text-primary-foreground/90 mb-12">
                        который ты можешь принять
                    </p>

                    <MotivationForm/>
                </div>
            </div>
        </section>
    );
};

export default Motivation;
