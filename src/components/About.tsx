import { Sparkles, Users, Trophy, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-medium">About IEEE CITNC</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8" />
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The IEEE Student Branch at Cambridge Institute of Technology North Campus is a vibrant community of engineering students dedicated to fostering innovation, learning, and professional growth. We provide a platform for students to engage with cutting-edge technology, collaborate on projects, and develop leadership skills through IEEE activities and initiatives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="group bg-card p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
              <Users className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Community</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Join a network of passionate students and professionals advancing technology together
            </p>
          </div>
          
          <div className="group bg-card p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl text-center" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
              <Lightbulb className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Innovation</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Work on cutting-edge projects and explore emerging technologies with guidance from experts
            </p>
          </div>
          
          <div className="group bg-card p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl text-center" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
              <Trophy className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Leadership</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Develop essential leadership and professional skills through IEEE activities and events
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
