import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "KPLC Infrastructure Mapping",
      description: "Comprehensive GIS data collection and mapping of Kenya Power infrastructure assets including poles, transformers, and meters across multiple regions.",
      category: "GIS",
      technologies: ["ArcGIS", "Python", "SQL", "Field Surveys"],
      image: "/api/placeholder/400/250",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Tea Farmers Certification Analysis",
      description: "Data analysis and GIS mapping for tea farmers to achieve Rainforest Alliance certification according to KTDA requirements.",
      category: "Data Analysis",
      technologies: ["R", "QGIS", "Statistical Analysis", "Reporting"],
      image: "/api/placeholder/400/250",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Geospatial Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing spatial patterns and trends in environmental data using modern web technologies.",
      category: "Web Development",
      technologies: ["JavaScript", "D3.js", "Leaflet", "Node.js"],
      image: "/api/placeholder/400/250",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Agricultural Yield Prediction Model",
      description: "Machine learning model to predict crop yields based on satellite imagery, weather patterns, and soil data.",
      category: "Machine Learning",
      technologies: ["Python", "Scikit-learn", "Remote Sensing", "TensorFlow"],
      image: "/api/placeholder/400/250",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Supply Chain Optimization Analysis",
      description: "Comprehensive analysis of supply chain logistics using geospatial analysis and data science techniques.",
      category: "Data Analysis",
      technologies: ["Python", "Power BI", "SQL", "Optimization"],
      image: "/api/placeholder/400/250",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Real-time Environmental Monitoring",
      description: "IoT-based system for real-time environmental data collection and visualization with automated reporting.",
      category: "IoT",
      technologies: ["Python", "IoT Sensors", "Tableau", "AWS"],
      image: "/api/placeholder/400/250",
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  const categories = ["All", ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in data analysis, GIS, and technology solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="glass glow-hover group overflow-hidden animate-scale-in">
                <div className="aspect-video bg-gradient-secondary relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/30">{project.category}</div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="glass">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="glass glow-hover">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-gradient-primary hover:shadow-glow">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Filter */}
        <div className="flex justify-center mb-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="glass glow-hover">
                <Filter className="mr-2 h-4 w-4" />
                {selectedCategory}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="glass">
              {categories.map((category) => (
                <DropdownMenuItem 
                  key={category} 
                  onClick={() => setSelectedCategory(category)}
                  className="hover:bg-primary/10"
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="glass glow-hover group overflow-hidden animate-fade-in">
              <div className="aspect-video bg-gradient-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary/30">{project.category}</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {project.description.substring(0, 100)}...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="glass text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="glass text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="glass glow-hover flex-1">
                    <Github className="mr-1 h-3 w-3" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-gradient-primary hover:shadow-glow flex-1">
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;