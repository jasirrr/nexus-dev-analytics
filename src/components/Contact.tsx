import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>
        
        <Card className="p-8 gradient-border inline-block">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="outline" size="lg" className="gap-2">
              <Mail size={20} />
              Email Me
            </Button>
            <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Download CV
            </Button>
          </div>
          
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Github size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Linkedin size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Twitter size={24} />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
