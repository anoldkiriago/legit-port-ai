import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <span>© {new Date().getFullYear()} Arnold Kiriago. Built with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>and dedication</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
