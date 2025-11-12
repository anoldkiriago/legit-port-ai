import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import projectWeb from "@/assets/project-web.jpg";
import projectMarketing from "@/assets/project-marketing.jpg";
import projectCommunity from "@/assets/project-community.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Small Business Website Development",
      description:
        "Designed and developed responsive WordPress websites for local businesses, helping them establish a professional online presence and increase customer engagement.",
      image: projectWeb,
      tags: ["WordPress", "Web Design", "SEO", "Responsive"],
      stats: "5+ Websites Delivered",
    },
    {
      title: "Social Media Marketing Campaigns",
      description:
        "Created and executed comprehensive social media campaigns across multiple platforms, resulting in significant engagement growth and brand awareness for clients.",
      image: projectMarketing,
      tags: ["Social Media", "Canva", "Content Strategy", "Analytics"],
      stats: "40% Avg. Engagement Increase",
    },
    {
      title: "Community Engagement Initiatives",
      description:
        "Led and coordinated various humanitarian and community development projects, bringing together volunteers and resources to make a positive impact.",
      image: projectCommunity,
      tags: ["Leadership", "Community Building", "Event Planning", "Volunteering"],
      stats: "15+ Community Events",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-elevated transition-all group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-semibold">{project.stats}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
