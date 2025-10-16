import { Mail, Linkedin } from "lucide-react";
import { Card } from "./ui/card";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface TeamCardProps {
  name: string;
  designation: string;
  image: string;
  delay?: number;
}

const TeamCard = ({ name, designation, image, delay = 0 }: TeamCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className="group relative animate-fade-in-up transition-all duration-500 cursor-pointer"
          style={{ animationDelay: `${delay}s` }}
        >
          <div className="relative overflow-hidden rounded-full bg-gradient-to-br from-card to-primary/5 p-1 border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
            {/* Animated gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            
            <div className="relative bg-card rounded-full overflow-hidden">
              {/* Circular Image container */}
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
          
          {/* Name below image */}
          <div className="text-center mt-4">
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground font-medium">
              {designation}
            </p>
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md bottom-0 top-auto translate-y-0 data-[state=open]:slide-in-from-bottom-full data-[state=closed]:slide-out-to-bottom-full">
        <div className="flex flex-col items-center space-y-4 p-4">
          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/20">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {name}
            </h3>
            <p className="text-muted-foreground font-medium">
              {designation}
            </p>
          </div>
          
          <div className="flex gap-4 pt-4">
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-5 w-5 text-primary-foreground" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-5 w-5 text-primary-foreground" />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamCard;
