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
      className="group relative overflow-hidden bg-card hover:shadow-[var(--shadow-hover)] transition-all duration-500 border-2 border-primary/20 hover:border-primary/60 rounded-2xl hover:-translate-y-2"
      style={{ 
        animation: `fade-in-up 0.6s ease-out ${delay}s both`,
      }}
    >
      {/* Decorative corner gradient */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 via-primary-glow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full z-10" />
      
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex gap-3 justify-center">
            <button className="bg-background/90 backdrop-blur-sm p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg">
              <Mail className="h-4 w-4" />
            </button>
            <button className="bg-background/90 backdrop-blur-sm p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg">
              <Linkedin className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-6 text-center relative">
        {/* Animated top border accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-glow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground font-medium leading-relaxed">
          {designation}
        </p>
      </div>
      
      {/* Animated glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none -z-10">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-primary-glow to-primary blur-xl" />
      </div>
    </div>
  );
};

export default TeamCard;
