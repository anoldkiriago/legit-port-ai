import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-12" />

          <Card className="shadow-elevated">
            <CardContent className="p-8">
              <p className="text-center text-lg text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your vision. Feel free to reach out!
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <a
                  href="mailto:kiriagoarnold@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground">kiriagoarnold@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+254715755868"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold text-foreground">0715 755 868</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg border border-border">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button size="lg" asChild>
                  <a href="mailto:kiriagoarnold@gmail.com">Send Message</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
