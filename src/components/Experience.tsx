import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "FUZU",
      position: "FUZU Associate",
      period: "2025 - Present",
      location: "Kenya",
      description: "I am part of FUZU global worforce",
      achievements: [
        "Part of a large team that aids in data verification",
        "Improved data accuracy by implementing quality control procedures",
      ],
      type: "Full-time"
    },
    {
      company: "Kenya Power and Lighting Company (KPLC)",
      position: "GIS Data Collector",
      period: "2023 - 2025",
      location: "Kenya",
      description: "Part of a specialized GIS team conducting comprehensive data collection of company infrastructure assets including poles, transformers, and KPLC meters across various regions.",
      achievements: [
        "Collected and verified geospatial data for over 10,000+ infrastructure assets",
        "Improved data accuracy by implementing quality control procedures",
        "Collaborated with field teams to ensure complete asset mapping",
        "Contributed to digital transformation of infrastructure management"
      ],
      type: "Full-time"
    },
    {
      company: "Freelance",
      position: "Data Analyst, Web Developer & AI Automation Engineer",
      period: "2023 - Present",
      location: "Remote",
      description: "Engaging in freelancing projects involving data analysis and web development for clients locally and globally, with special focus on GIS data collection and analysis for agricultural certification.",
      achievements: [
        "Designed and Developed an AI workflow for SEO Content Generation Using Global Trade Item Number (GTIN)",
        "Helped tea farmers achieve Rainforest Alliance certification through data analysis",
        "Completed 15+ successful data analysis projects for international clients",
        "Developed interactive dashboards and visualization tools",
        "Provided GIS consultation services for agricultural companies"
      ],
      type: "Freelance"
    },
    {
      company: "Academic Projects",
      position: "Research & Development",
      period: "2019 - 2022",
      location: "University",
      description: "Extensive research and practical projects in Geospatial Information Systems, focusing on advanced GIS applications, database management, and spatial analysis techniques.",
      achievements: [
        "Completed Bachelor of Science in Geospatial Information Systems",
        "Developed innovative solutions for spatial data management",
        "Conducted research on GIS applications in environmental monitoring",
        "Gained expertise in multiple GIS software platforms and programming languages"
      ],
      type: "Education"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time":
        return "bg-gradient-primary text-primary-foreground";
      case "Freelance":
        return "bg-secondary text-secondary-foreground";
      case "Education":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-primary text-primary-foreground";
    }
  };

  return (
    <section id="experience" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional experience and key milestones in my career
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary opacity-30"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background z-10"></div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className="glass glow-hover animate-scale-in">
                    <CardHeader>
                      <div className="flex flex-col gap-2">
                        <Badge className={getTypeColor(exp.type)} variant="secondary">
                          {exp.type}
                        </Badge>
                        <CardTitle className="text-xl">{exp.position}</CardTitle>
                        <CardDescription className="flex items-center gap-2 text-lg font-medium">
                          <Building className="h-4 w-4" />
                          {exp.company}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-3 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CalendarDays className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                      
                      <p className="text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Progress Over Time */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Growth Over Time</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { year: "2019", skills: "Basic GIS and Remote Sensing, Cartography, Data Science", level: "Beginner" },
              { year: "2021", skills: "Advanced GIS, Python, Data Analysis, Web Development", level: "Intermediate" },
              { year: "2025", skills: "AI Automation, Machine Learning, Full-Stack Development, Team Leadership", level: "Advanced" }
            ].map((milestone, index) => (
              <Card key={index} className="glass glow-hover text-center animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-lg gradient-text">{milestone.year}</CardTitle>
                  <Badge variant="outline" className="mx-auto">
                    {milestone.level}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{milestone.skills}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;