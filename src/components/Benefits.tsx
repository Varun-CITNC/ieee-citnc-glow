import { BookOpen, Users, GraduationCap, Calendar, ShoppingBag, Heart, Award, Gift } from "lucide-react";
import { Card } from "./ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Access vital technical information and research",
    },
    {
      icon: Users,
      title: "Connect to the profession with valuable networking opportunities",
    },
    {
      icon: GraduationCap,
      title: "Explore education resources and career development tools",
    },
    {
      icon: Calendar,
      title: "Participate in local activities",
    },
    {
      icon: ShoppingBag,
      title: "Receive discounts on IEEE products and other services",
    },
    {
      icon: Heart,
      title: "Find ways to contribute to the community",
    },
    {
      icon: Award,
      title: "Get tailored benefits by joining an IEEE Society",
    },
    {
      icon: Gift,
      title: "Scholarships: Women up to ₹50,000 & Men up to ₹15,000",
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Benefits of Membership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            IEEE members stay current in the technology profession, connect with peers, and invest in career advancement
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-[var(--shadow-hover)] transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up border-2 border-primary/20 hover:border-primary/60"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  {benefit.title}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
