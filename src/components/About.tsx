import { Sparkles, Users, Trophy, Lightbulb, Rocket, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-medium">About IEEE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            WHO WE ARE
          </h2>
          <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-8">
            Empowering Innovators. Building Leaders. Shaping the Future.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8" />
          
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The IEEE Student Branch at Cambridge Institute of Technology, North Campus is a dynamic and inclusive community of engineering students driven by a passion for technology, innovation, and leadership. We aim to bridge the gap between academics and industry by providing a platform for students to collaborate on cutting-edge projects, participate in global IEEE initiatives, and develop essential professional skills. Our branch nurtures curiosity, creativity, and competence — empowering future engineers to make a lasting impact on society.
          </p>
        </div>
        
        {/* Four Pillars */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Core Pillars
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Collaboration */}
            <div className="group relative animate-fade-in-up">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-primary/5 p-1 border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-card rounded-3xl p-8 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    Collaboration
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Work hand-in-hand with like-minded students, mentors, and professionals across diverse domains. Participate in team-based projects, IEEE hackathons, and interdisciplinary challenges that foster teamwork and innovation.
                  </p>
                  
                  <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-700" />
                </div>
              </div>
            </div>
            
            {/* Innovation */}
            <div className="group relative animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-primary/5 p-1 border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-card rounded-3xl p-8 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <Lightbulb className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    Innovation
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Explore the frontier of technology through workshops, competitions, and research initiatives in areas like AI, IoT, robotics, and data science. Turn your ideas into impactful solutions guided by experts and industry leaders.
                  </p>
                  
                  <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-700" />
                </div>
              </div>
            </div>
            
            {/* Skill Development */}
            <div className="group relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-primary/5 p-1 border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-card rounded-3xl p-8 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <Rocket className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    Skill Development
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Sharpen your technical, analytical, and leadership skills through continuous learning opportunities — including technical sessions, professional training, and mentorship programs designed to prepare you for real-world challenges.
                  </p>
                  
                  <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-700" />
                </div>
              </div>
            </div>
            
            {/* Global Exposure */}
            <div className="group relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-primary/5 p-1 border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-card rounded-3xl p-8 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <Globe className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    Global Exposure
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Connect with IEEE's worldwide community of innovators, attend international conferences, and gain visibility on a global stage. Experience the true spirit of IEEE by engaging in initiatives that span continents and cultures.
                  </p>
                  
                  <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Vision */}
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-10 border-2 border-primary/20">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Our Vision
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              To create a culture of learning, leadership, and innovation where students not only master technology but use it responsibly to build a better and more connected world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
