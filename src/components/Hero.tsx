import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/samuel-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-float">
            <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden glass glow-hover">
              <img 
                src={heroImage} 
                alt="Samuel Mundia - AI Engineer, Data Analyst & GIS Technologist"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-glow"></div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              I am{" "}
              <span className="gradient-text">Samuel Mundia</span>
            </h1>
            
            <p className="text-2xl lg:text-3xl text-muted-foreground mb-8">
              I'm an{" "}
              <span className="text-primary font-semibold">AI Automation Engineer</span> ,{" "}
              <span className="text-primary font-semibold">Data Analyst</span> &{" "}
              <span className="text-primary font-semibold">GIS Technologist</span>
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Detail-oriented Geographic Information Systems Technologist with exceptional data collection skills. 
              Over 4+ years of experience applying advanced analytics, data science, and statistics to find insights in data.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              <Button size="icon" variant="outline" className="glass glow-hover">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" className="glass glow-hover">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" className="glass glow-hover">
                <Mail className="h-5 w-5" />
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
              </Button>
              <Button size="lg" variant="outline" className="glass glow-hover">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">6+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;