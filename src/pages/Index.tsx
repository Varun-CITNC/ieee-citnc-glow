import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TeamSection />
      <Contact />
      
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 IEEE Student Branch CITNC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
