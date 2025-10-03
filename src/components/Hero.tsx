import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-pulse" style={{ animationDuration: '4s' }} />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Hi, I'm <span className="gradient-text">Ahamed Jasir</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Full Stack Developer & Data Analyst
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Building elegant solutions with code and extracting insights from data. 
          Passionate about creating impactful digital experiences.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Button onClick={() => scrollToSection('projects')} size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            View My Work
          </Button>
          <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg">
            Get In Touch
          </Button>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto text-muted-foreground" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
