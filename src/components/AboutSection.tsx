import { useEffect, useRef, useState } from "react";
import { CheckCircle, Target, Users, Clock, Award, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { icon: Target, title: "Focused Curriculum", description: "Exam-oriented syllabus designed by banking experts" },
  { icon: Users, title: "Expert Faculty", description: "Learn from experienced bank officers and educators" },
  { icon: Clock, title: "Flexible Timing", description: "Weekend and evening batches available" },
  { icon: Award, title: "Proven Results", description: "Consistent track record of selections" },
  { icon: BookOpen, title: "Study Material", description: "Comprehensive books and online resources" },
  { icon: CheckCircle, title: "Mock Tests", description: "Regular assessments with detailed analysis" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span
              className={cn(
                "inline-block px-4 py-1 rounded-full bg-secondary/5 text-secondary font-semibold text-lg mb-4",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              Why Choose Us
            </span>

           

            <h2
              className={cn(
                "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "100ms" }}
            >
              Make Your <span className="text-primary">Bank Job</span> Come True With <span className="text-primary">Bankers Rankers</span> 
            </h2>
            <p
              className={cn(
                "text-muted-foreground text-lg mb-8 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "200ms" }}
            >
              With over 15 years of experience in banking exam preparation, we have helped thousands
              of students achieve their dream of working in prestigious banks. Our result-oriented
              approach and dedicated mentorship set us apart.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={cn(
                      "flex items-start gap-3 p-4 rounded-xl bg-card shadow-card transition-all duration-500 hover:shadow-elevated hover:-translate-y-1",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Element */}
          <div
            className={cn(
              "relative transition-all duration-1000",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main Circle */}
              <div className="absolute inset-8 rounded-full gradient-primary opacity-10 animate-pulse" />
              <div className="absolute inset-12 rounded-full bg-secondary/20 animate-pulse" style={{ animationDelay: "500ms" }} />
              
              {/* Central Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-display font-bold text-primary mb-2">15+</div>
                  <div className="text-lg font-semibold text-foreground">Years of</div>
                  <div className="text-lg font-semibold text-secondary">Excellence</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 p-4 bg-card rounded-2xl shadow-elevated animate-float">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <div className="absolute bottom-8 left-0 p-4 bg-card rounded-2xl shadow-elevated animate-float" style={{ animationDelay: "1s" }}>
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute bottom-8 right-0 p-4 bg-card rounded-2xl shadow-elevated animate-float" style={{ animationDelay: "2s" }}>
                <Target className="h-8 w-8 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
