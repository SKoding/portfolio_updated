export interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "AI Product Video Generation",
    description:
      "Transform your ideas into professional, AI-generated marketing videos instantly. No editing skills required. Perfect for creators, marketers, and businesses.",
    category: "AI",
    technologies: ["AI", "N8N", "Javascript", "SWIFT","PostgreSQL"],
    image: "/vidioai.jpg",
    github: "#",
    demo: "https://vidioai.bolt.host/",
    featured: true,
  },
  {
    title: "SkizaQuid ",
    description:
      "Creating personalized callback tunes and empowering agents through innovative MLM solutions.",
    category: "Web Development",
    technologies: ["AI", "Javascript", "SWIFT","PostgreSQL","Safaricom Daraja"],
    image: "/skizaquid.jpg",
    github: "#",
    demo: "https://skizaquid-web-app.vercel.app/",
    featured: true,
  },
  {
    title: "KPLC Infrastructure Mapping",
    description:
      "Comprehensive GIS data collection and mapping of Kenya Power infrastructure assets including poles, transformers, and meters across multiple regions.",
    category: "GIS",
    technologies: ["ArcGIS", "Python", "SQL", "Field Surveys"],
    image: "/kplc.jpg",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Tea Farmers Certification Analysis",
    description:
      "Data analysis and GIS mapping for tea farmers to achieve Rainforest Alliance certification according to KTDA requirements.",
    category: "Data Analysis",
    technologies: ["R", "QGIS", "Statistical Analysis", "Reporting"],
    image: "/farms.jpg",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Geospatial Data Visualization Dashboard",
    description:
      "Interactive dashboard for visualizing spatial patterns and trends in environmental data using modern web technologies.",
    category: "Web Development",
    technologies: ["JavaScript", "D3.js", "Leaflet", "Node.js"],
    image: "geostatistics_ok.jpg",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Agricultural Yield Prediction Model",
    description:
      "Machine learning model to predict crop yields based on satellite imagery, weather patterns, and soil data.",
    category: "Machine Learning",
    technologies: ["Python", "Scikit-learn", "Remote Sensing", "TensorFlow"],
    image: "/R_data_analysis.jpg",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Baby Knit Wear",
    description:
      "An E-commerce Platform that deals in knitted child clothing.",
    category: "Web Development",
    technologies: ["WordPress", "MPESA Gateway", "PHP", "SWIFT"],
    image: "/baby_knit_wear.jpg",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Real-time Environmental Monitoring",
    description:
      "IoT-based system for real-time environmental data collection and visualization with automated reporting.",
    category: "IoT",
    technologies: ["Python", "React", "PostgreSQL" , "APIs" ,"IoT Sensors", "Tableau", "AWS"],
    image: "/tree_pact.jpg",
    github: "#",
    demo: "#",
    featured: false,
  }
];

export default projects;
