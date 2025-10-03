import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const devSkills = [
    "React", "TypeScript", "Node.js", "Python", 
    "PostgreSQL", "MongoDB", "REST APIs", "GraphQL",
    "Docker", "AWS", "Git", "CI/CD"
  ];

  const dataSkills = [
    "Python", "Pandas", "NumPy", "SQL",
    "Power BI", "Tableau", "Excel", "R",
    "Machine Learning", "Statistics", "Data Visualization", "ETL"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 gradient-border">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {devSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-8 gradient-border">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accent"></span>
              Data Analysis
            </h3>
            <div className="flex flex-wrap gap-3">
              {dataSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
