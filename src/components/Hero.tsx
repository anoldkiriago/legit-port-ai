import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Arnold Kiriago
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Digital Marketing & Web Development Professional
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crafting digital experiences and driving growth through innovative marketing strategies
            and web solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" onClick={scrollToContact} className="min-w-[160px]">
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="min-w-[160px]" asChild>
              <a
                href="https://linkedin.com/in/arnoldkiriago"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
