import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-12" />

          <Card className="shadow-elevated">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm Arnold Kiriago, a passionate digital marketing and web development professional
                with a proven track record of helping businesses establish and grow their online
                presence. With expertise spanning from WordPress development to comprehensive digital
                marketing strategies, I bring a unique blend of technical skills and creative
                problem-solving to every project.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Professional</h3>
                  <p className="text-sm text-muted-foreground">
                    Experienced in web development, Canva design, Excel analytics, and digital
                    marketing campaigns
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground">
                    Currently pursuing an online Bachelor's Degree in Community Development
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Active in humanitarian projects and community engagement initiatives
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
