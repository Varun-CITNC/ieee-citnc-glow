import { Clock, Calendar } from "lucide-react";

const EventSchedule = () => {
  const scheduleItems = [
    { duration: "15 mins", activity: "Welcoming the guests" },
    { duration: "15 mins", activity: "Lighting lamp" },
    { duration: "5 mins", activity: "Singing song" },
    { duration: "5 mins", activity: "Dance program" },
    { duration: "10 mins", activity: "Guest 1 - Addressing" },
    { duration: "10 mins", activity: "Guest 2 - Addressing" },
    { duration: "10 mins", activity: "Guest 3 - Addressing" },
    { duration: "10 mins", activity: "Guest 4 - Addressing" },
    { duration: "10 mins", activity: "Guest 5 - Addressing" },
    { duration: "10 mins", activity: "Gowrish - Giving IEEE, Team Intro" },
    { duration: "3 to 3.5 hrs", activity: "Orientation continues" },
    { duration: "2 mins", activity: "National Anthem" },
    { duration: "1 hr", activity: "Lunch Break" },
    { duration: "45 mins", activity: "Quiz" },
    { duration: "15 mins", activity: "Distribution of Prizes" },
  ];

  return (
    <section id="events" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-medium">17th October</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Event Schedule
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A day filled with knowledge, networking, and celebration
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-primary" />
            
            <div className="space-y-8">
              {scheduleItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex flex-col md:flex-row gap-6 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Content Card */}
                    <div className={`w-full md:w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                    }`}>
                      <div className="bg-card p-6 rounded-2xl border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl group-hover:bg-gradient-to-br group-hover:from-card group-hover:to-primary/5">
                        <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                          <Clock className="h-5 w-5 text-primary" />
                          <span className="text-primary font-bold">{item.duration}</span>
                        </div>
                        <p className="text-foreground font-semibold text-lg">{item.activity}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                      <div className="w-4 h-4 rounded-full bg-primary border-4 border-background group-hover:scale-150 group-hover:bg-primary-glow transition-all duration-500 shadow-lg" />
                    </div>
                    
                    {/* Spacer for alternate layout */}
                    <div className="hidden md:block w-[calc(50%-2rem)]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
