import { Mail, MapPin, Phone } from "lucide-react";
import { Card } from "./ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center hover:shadow-[var(--shadow-hover)] transition-all duration-300 group">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <Mail className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">ieee@citnc.ac.in</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-[var(--shadow-hover)] transition-all duration-300 group">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <Phone className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Chairman</h3>
            <p className="text-sm text-muted-foreground">Gowrish H B</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-[var(--shadow-hover)] transition-all duration-300 group">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <MapPin className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-sm text-muted-foreground">Cambridge Institute of Technology North Campus, Kundana, Bangalore-562110</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
