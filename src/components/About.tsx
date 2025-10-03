import { Card } from "@/components/ui/card";
import { Code2, Database, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 gradient-border hover:scale-105 transition-transform">
            <Code2 className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-2xl font-semibold mb-3">Full Stack Development</h3>
            <p className="text-muted-foreground">
              Crafting robust web applications from frontend to backend. 
              Experienced in modern frameworks, APIs, and cloud infrastructure.
            </p>
          </Card>

          <Card className="p-8 gradient-border hover:scale-105 transition-transform">
            <Database className="w-12 h-12 mb-4 text-accent" />
            <h3 className="text-2xl font-semibold mb-3">Data Analysis</h3>
            <p className="text-muted-foreground">
              Transforming raw data into actionable insights. 
              Proficient in statistical analysis, visualization, and predictive modeling.
            </p>
          </Card>
        </div>

        <Card className="p-8 gradient-border">
          <TrendingUp className="w-12 h-12 mb-4 text-primary mx-auto" />
          <p className="text-lg text-center max-w-3xl mx-auto text-muted-foreground">
            With expertise spanning both development and analytics, I bring a unique perspective 
            to problem-solving. I create data-driven applications that not only look great but 
            provide meaningful insights to drive business decisions.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
