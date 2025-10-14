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
    <Card 
      className="group relative overflow-hidden bg-card hover:shadow-[var(--shadow-hover)] transition-all duration-500 border-border"
      style={{ 
        animation: `fade-in-up 0.6s ease-out ${delay}s both`,
      }}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex gap-3 justify-center">
            <button className="bg-background/90 backdrop-blur-sm p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
              <Mail className="h-4 w-4" />
            </button>
            <button className="bg-background/90 backdrop-blur-sm p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
              <Linkedin className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground font-medium">
          {designation}
        </p>
      </div>
    </Card>
  );
};

export default TeamCard;
