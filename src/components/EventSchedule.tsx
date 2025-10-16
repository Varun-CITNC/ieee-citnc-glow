import { Calendar } from "lucide-react";
import { Card } from "./ui/card";

const EventSchedule = () => {
  const events = [
    "IEEE Inauguration",
    "Technical Workshops",
    "Hackathons",
    "Guest Lectures",
    "Industry Visits",
    "Project Competitions",
    "Networking Sessions",
    "Skill Development Programs",
  ];

  return (
    <section id="events" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upcoming events and activities organized by IEEE Student Branch
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-[var(--shadow-hover)] transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up border-2 border-primary/20 hover:border-primary/60"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-3 py-1 rounded-full mb-4 border border-primary/20">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-primary text-xs font-medium">Upcoming</span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {event}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                Arriving Very Soon
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
