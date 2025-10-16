import { Mail, Linkedin } from "lucide-react";
import { Card } from "./ui/card";

interface TeamCardProps {
  name: string;
  designation: string;
  image: string;
  delay?: number;
}

const TeamCard = ({ name, designation, image, delay = 0 }: TeamCardProps) => {
  return (
    <div 
      className="group relative animate-fade-in-up transition-all duration-500"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-primary/5 p-1 border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
        {/* Animated gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        
        <div className="relative bg-card rounded-3xl overflow-hidden p-6">
          {/* Circular Image container with overlay */}
          <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/60 transition-all duration-500 group-hover:scale-105">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Social icons - appear on hover */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/95 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110 hover:rotate-12"
              >
                <Mail className="h-4 w-4 text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/95 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110 hover:rotate-12"
              >
                <Linkedin className="h-4 w-4 text-primary-foreground" />
              </a>
            </div>
          </div>
          
          {/* Content */}
          <div className="text-center relative">
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground font-medium px-4">
              {designation}
            </p>
            
            {/* Decorative line */}
            <div className="mt-4 h-1 w-0 group-hover:w-20 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-700 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
