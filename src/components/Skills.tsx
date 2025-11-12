import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, TrendingUp, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: Code,
      skills: ["WordPress", "HTML/CSS", "JavaScript", "Responsive Design", "CMS Management"],
    },
    {
      title: "Design & Creative",
      icon: Palette,
      skills: ["Canva", "Visual Design", "Brand Identity", "Social Media Graphics", "Presentations"],
    },
    {
      title: "Digital Marketing",
      icon: TrendingUp,
      skills: ["Social Media Campaigns", "Content Strategy", "SEO Basics", "Email Marketing", "Analytics"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Team Collaboration", "Communication", "Adaptability", "Problem Solving", "Attention to Detail"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-elevated transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
