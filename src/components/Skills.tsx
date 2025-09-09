import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const Skills = () => {
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});

  const technicalSkills = [
    { name: "Python", level: 90, category: "Programming" },
    { name: "R Programming", level: 85, category: "Programming" },
    { name: "SQL", level: 88, category: "Database" },
    { name: "JavaScript", level: 75, category: "Programming" },
    { name: "ArcGIS", level: 95, category: "GIS" },
    { name: "QGIS", level: 90, category: "GIS" },
    { name: "Power BI", level: 85, category: "Analytics" },
    { name: "Tableau", level: 80, category: "Analytics" },
    { name: "Machine Learning", level: 78, category: "Data Science" },
    { name: "Statistical Analysis", level: 88, category: "Data Science" },
  ];

  const categories = [...new Set(technicalSkills.map(skill => skill.category))];

  useEffect(() => {
    const timer = setTimeout(() => {
      const values: Record<string, number> = {};
      technicalSkills.forEach(skill => {
        values[skill.name] = skill.level;
      });
      setAnimatedValues(values);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getSkillsByCategory = (category: string) => 
    technicalSkills.filter(skill => skill.category === category);

  return (
    <section id="skills" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring data insights to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Card key={category} className="glass glow-hover animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-gradient-primary text-primary-foreground">
                    {category}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {getSkillsByCategory(category).map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {animatedValues[skill.name] || 0}%
                      </span>
                    </div>
                    <Progress 
                      value={animatedValues[skill.name] || 0} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "AI Automation",
              "Data Visualization",
              "Geospatial Analysis",
              "Database Management",
              "Statistical Modeling",
              "Data Mining",
              "Remote Sensing",
              "Cartography",
              "Project Management",
              "Team Leadership",
              "Client Communication"
            ].map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="glass text-base py-2 px-4 glow-hover animate-fade-in"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;