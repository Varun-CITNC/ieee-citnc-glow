import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import ieeeLogo from "@/assets/ieee-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={ieeeLogo} 
              alt="IEEE Logo" 
              className="h-12 w-auto"
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-foreground">IEEE Student Branch CITNC</h1>
              <p className="text-xs text-muted-foreground">Cambridge Institute of Technology North Campus</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#team" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Team
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Button size="sm" className="bg-primary hover:bg-primary-glow">
              Join Us
            </Button>
          </nav>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
