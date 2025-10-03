import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with payment integration, inventory management, and analytics dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "Development"
    },
    {
      title: "Sales Analytics Dashboard",
      description: "Interactive dashboard for real-time sales analysis with predictive forecasting and trend visualization.",
      tech: ["Python", "Pandas", "Power BI", "SQL"],
      category: "Data Analysis"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team analytics, and reporting features.",
      tech: ["React", "Firebase", "TypeScript", "Charts.js"],
      category: "Full Stack"
    },
    {
      title: "Customer Segmentation Model",
      description: "Machine learning model for customer segmentation using clustering algorithms and behavioral analysis.",
      tech: ["Python", "Scikit-learn", "Tableau", "SQL"],
      category: "Data Science"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 gradient-border hover:scale-105 transition-all duration-300">
              <div className="mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github size={16} />
                  Code
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink size={16} />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
